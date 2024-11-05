library(jaysire)
library(comprehenr)

# a temporary path to hold experiment & data 
# TODO: Specify actual path
exp_path <- temporary_folder()

# get images and audio from resource folder
resource_folder <- "resources"
resources <- list.files(resource_folder)

# extract jpg files
images <- resources[grepl(".jpg$", resources)]
# wrap each image as html image to create image buttons
# TODO: Make feature (the ability to treat images as options for audio stim)
html_images <- to_vec(
  for(image in images) 
    paste('<img src="resource/image/', image, '" style="margin: 5px;"">', sep="", collapse=NULL)
  ) 

# extract mp3 files, remove blank
audios <- resources[grepl(".mp3$", resources)]
audios <- audios[audios != "blank.mp3"]

# (1) Intro : Instructions to experimentee
# Credit to ChatGPT for this workaround
blank_page <- trial_instructions(
  pages = c(""),
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

instruction_text <- c(
  "<p>Here are some of my friends. They are going to say some things about themselves.\
  Let's listen to the first one.</p>"
)
instructions_with_images <- paste(paste(html_images, collapse = ""), instruction_text, 
                                  sep = "\n")
instructions1 <- trial_instructions(
  pages = instructions_with_images,
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# Audio trial with image response buttons
# trial 1
random_html_images <- sample(html_images)
# iterate through each speaker, removing speakers and phrases from list
random_audio <- sample(audios, 1)
# extract phrase
phrase <- strsplit(random_audio, split="_")[[1]][1]
# extract speaker
speaker <- strsplit(random_audio, split="_")[[1]][2]

# filter out these phrases and speakers
non_audios <- audios[grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios)]
audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

# TODO: combine both trial and response (stimulus delay)
audio_response1 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 2
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]


audio_trial2 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Next️"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response2 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 3
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial3 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Next️️"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response3 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 4
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial4 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response4 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 5
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial5 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response5 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 6
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial6 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response6 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 7
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial7 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response7 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 8
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial8 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response8 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 9
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial9 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response9 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# trial 10
random_html_images <- sample(html_images)
random_audio <- sample(audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(random_audio, split="_")[[1]][2]

audios <- audios[!(grepl(paste0("^", phrase, "_"), audios) | grepl(paste0("_", speaker, "_"), audios))]

audio_trial10 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)
audio_response10 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)

# Experiment: Begin all questions and randomize, repeat 10x
part1 <- build_timeline(audio_response1, audio_trial2, audio_response2,
                        audio_trial3, audio_response3, audio_trial4, audio_response4,
                        audio_trial5, audio_response5, audio_trial6, audio_response6,
                        audio_trial7, audio_response7, audio_trial8, audio_response8,
                        audio_trial9, audio_response9, audio_trial10, audio_response10) %>%
  set_parameters(randomize_order = TRUE)

# (2) Social preferences, images + 4 questions
instructions2 <- trial_instructions(
  pages = c("Part 2"),
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# Question 1
random_html_images <- sample(html_images)
question1 <- trial_html_button_response(
  stimulus = "Who do you like the most?",
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  post_trial_gap = 1000
)

# Question 2
random_html_images <- sample(html_images)
question2 <- trial_html_button_response(
  stimulus = "Who is the friendliest?",
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  post_trial_gap = 1000
)

# Question 3
random_html_images <- sample(html_images)
question3 <- trial_html_button_response(
  stimulus = "Who is the smartest?",
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  post_trial_gap = 1000
)

# Question 4
random_html_images <- sample(html_images)
question4 <- trial_html_button_response(
  stimulus = "Who do you trust the most?",
  choices = c("1", "2", "3", "4", "5"),
  button_html = random_html_images,
  post_trial_gap = 1000
)

part2 <- build_timeline(question1, question2, question3, question4) %>%
  set_parameters(randomize_order = TRUE)

# (3) Yes/no questions, audio + question w/branching



# (4) Finish screen
finish <- trial_html_keyboard_response(
  stimulus = "All done! Press any key to finish",
  choices = respond_any_key()
)

# build final experiment
build_experiment(
  timeline = build_timeline(blank_page, instructions1, part1, instructions2, part2, finish),
  path = exp_path,
  resources = build_resources(resource_folder),
  use_webaudio = TRUE,
  on_finish = save_locally()
)

# and run...
run_locally(exp_path)

