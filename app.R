library(jaysire)

# a temporary path to hold experiment & data 
# TODO: Determine actual path
exp_path <- temporary_folder()

# get images and audio from resource folder
resource_folder <- "resources"
resources <- list.files(resource_folder)

# extract faces
images <- resources[grepl(".jpg$", resources)]

# (1) Intro : Instructions to experimentee (1000 msec delay)
instructions <- trial_instructions(
  pages = c(
    "Welcome! Use the arrow buttons to browse these instructions",
    "Your task is to decide which voice belongs to whom",
    "You will respond by clicking a button that corresponds to a face",
    "Press the 'Next' button to begin!"
  ),
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# template vars for randomization
trial_template <- trial_image_button_response(
  stimulus = insert_variable(name = "my_stimulus"),
  choices = c("yes", "no"),
  post_trial_gap = 1000
)


# (2) Experiment: Begin all questions and randomize, repeat twice
trials <- build_timeline(trial_template) %>%
  set_variables(my_stimulus = insert_resource(images)) %>%
  set_parameters(randomize_order = TRUE, repetitions = 10)

# (3) Finish screen
finish <- trial_html_keyboard_response(
  stimulus = "All done! Press any key to finish",
  choices = respond_any_key()
)

build_experiment(
  timeline = build_timeline(instructions, trials, finish),
  path = exp_path,
  resources = build_resources(resource_folder),
  on_finish = save_locally()
)

run_locally(exp_path)

