library(jaysire)
library(comprehenr)

# a temporary path to hold experiment & data 
# TODO: Specify actual path
exp_path <- temporary_folder()

# specify num of trials
num_trial <- 10

# get images and audio from resource folder
resource_folder <- "resources"
resources <- list.files(resource_folder)

# extract jpg files
images <- resources[grepl(".jpg$", resources)]
# wrap each image as html image to create image buttons
# TODO: Make feature (the ability to treat images as options for audio stim)
html_images <- to_vec(
  for(image in images) 
    paste('<img src="resource/image/', image, '">', sep="", collapse=NULL)
  ) 

# extract mp3 files
audios <- resources[grepl(".mp3$", resources)]

# (1) Intro : Instructions to experimentee (1000 msec delay)
instructions <- trial_instructions(
  pages = c(
    "Welcome! Use the arrow buttons to browse these instructions. \
    Your task is to decide which voice belongs to whom.", 
    "You will respond by clicking a button that corresponds to a face. \
    Press the 'Next' button to begin!"
  ),
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# Audio trial with image response buttons

# trial 1
# TODO: Figure out a way to do this with looping
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)

audio_trial1 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  margin_horizontal = 150,
  prompt = "Who said this sentence?",
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 2
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)

audio_trial2 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  margin_horizontal = 150,
  prompt = "Who said this sentence?",
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 3
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)

audio_trial3 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  margin_horizontal = 150,
  prompt = "Who said this sentence?",
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 4
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)

audio_trial4 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  margin_horizontal = 150,
  prompt = "Who said this sentence?",
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 5
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)

audio_trial5 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  margin_horizontal = 150,
  prompt = "Who said this sentence?",
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# (2) Experiment: Begin all questions and randomize, repeat 10x
trials <- build_timeline(audio_trial1, audio_trial2, audio_trial3, audio_trial4, audio_trial5) %>%
  set_parameters(randomize_order = TRUE)

# (3) Finish screen
finish <- trial_html_keyboard_response(
  stimulus = "All done! Press any key to finish",
  choices = respond_any_key()
)

# build final experiment
build_experiment(
  timeline = build_timeline(instructions, trials, finish),
  path = exp_path,
  resources = build_resources(resource_folder),
  use_webaudio = TRUE,
  on_finish = save_locally()
)

# and run...
run_locally(exp_path)

