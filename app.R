library(jaysire)
library(comprehenr)

# a temporary path to hold experiment & data 
# TODO: Specify actual path
exp_path <- "results"

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

# get part 1 audios
part1_audios <- audios[grepl("^Tiger_", audios) |
                     grepl("^Orange_", audios) |
                     grepl("^Volleyball_", audios) |
                     grepl("^Sibling_", audios) |
                     grepl("^Dog_", audios) |
                     grepl("^Cat_", audios) |
                     grepl("^Icecream_", audios) |
                     grepl("^Music_", audios) |
                     grepl("^Movies_", audios) |
                     grepl("^Park_", audios)
                    ]

# (0) Intro : Instructions to experimentee
# Credit to ChatGPT for this workaround
blank_page <- trial_instructions(
  pages = c(""),
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# ask for ID number
id_quest <- trial_survey_text(
  questions = question_text(
    prompt = "Participant ID",
    placeholder = "#",
    required = TRUE,
    name = "Participant ID"
  ),
  button_label = "Next"
)

id_part <- build_timeline(id_quest)

instruction_text <- c(
  "<p></p>"
)
instructions_with_images <- paste(paste(html_images, collapse = ""), instruction_text, 
                                  sep = "\n")
instructions1 <- trial_instructions(
  pages = instructions_with_images,
  show_clickable_nav = TRUE,
  post_trial_gap = 1000
)

# (1) Part 1: Questions & Images
# Audio trial with image response buttons
# trial 1
random_html_images <- sample(html_images)
# encode choices by image name
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

# iterate through each speaker, removing speakers and phrases from list
random_audio <- sample(part1_audios, 1)
# extract phrase
phrase <- strsplit(random_audio, split="_")[[1]][1]
# extract speaker
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

# filter out these phrases and speakers
part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_response1 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 2
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]


audio_trial2 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Next️"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response2 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 3
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial3 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Next️️"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response3 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 4
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial4 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response4 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 5
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial5 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response5 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 6
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial6 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response6 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 7
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial7 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response7 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 8
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial8 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response8 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 9
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial9 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("️Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 500
)
audio_response9 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
)

# trial 10
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

random_audio <- sample(part1_audios, 1)
phrase <- strsplit(random_audio, split="_")[[1]][1]
speaker <- strsplit(strsplit(random_audio, split="_")[[1]][2], split="\\.")[[1]][1]

part1_audios <- part1_audios[!(grepl(paste0("^", phrase, "_"), part1_audios) | grepl(paste0("_", speaker, ".mp3"), part1_audios))]

audio_trial10 <- trial_audio_button_response(
  stimulus = insert_resource('blank.mp3'),
  choices = c("Next"),
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000
)
audio_response10 <- trial_audio_button_response(
  stimulus = insert_resource(random_audio),
  choices = pictures,
  button_html = random_html_images,
  trial_ends_after_audio = FALSE,
  response_ends_trial = TRUE,
  post_trial_gap = 1000,
  data = insert_property(image = pictures, speaker = speaker, subject = phrase, accent = stringr::str_sub(speaker, start= -2))
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
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

question1 <- trial_html_button_response(
  stimulus = "",
  choices = pictures,
  button_html = random_html_images,
  post_trial_gap = 1000,
  data = insert_property(image = pictures)
)

# Question 2
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

question2 <- trial_html_button_response(
  stimulus = "",
  choices = pictures,
  button_html = random_html_images,
  post_trial_gap = 1000,
  data = insert_property(image = pictures)
)

# Question 3
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

question3 <- trial_html_button_response(
  stimulus = "",
  choices = pictures,
  button_html = random_html_images,
  post_trial_gap = 1000,
  data = insert_property(image = pictures)
)

# Question 4
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

question4 <- trial_html_button_response(
  stimulus = "",
  choices = pictures,
  button_html = random_html_images,
  post_trial_gap = 1000,
  data = insert_property(image = pictures)
)

# Question 5
random_html_images <- sample(html_images)
pictures <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]

question5 <- trial_html_button_response(
  stimulus = "",
  choices = pictures,
  button_html = random_html_images,
  post_trial_gap = 1000,
  data = insert_property(image = pictures)
)

part2 <- build_timeline(question1, question2, question3, question4, question5) %>%
  set_parameters(randomize_order = TRUE)

# (3) Yes/no questions, audio + question w/branching



# (4) Finish screen
finish <- trial_html_keyboard_response(
  stimulus = "All done! Press the space button before exiting this window!",
  choices = respond_any_key()
)

# build final experiment
build_experiment(
  timeline = build_timeline(blank_page, id_part, instructions1, part1, instructions2, part2, finish),
  path = exp_path,
  resources = build_resources(resource_folder),
  use_webaudio = TRUE,
  on_finish = save_locally()
)

# and run...
run_locally(exp_path)


