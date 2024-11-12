var timeline = {
  "timeline": [
    {
      "type": ["instructions"],
      "pages": [""],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Next"],
      "post_trial_gap": [1000]
    },
    {
      "timeline": [
        {
          "type": ["survey-text"],
          "questions": [
            {
              "prompt": ["Participant ID"],
              "placeholder": ["#"],
              "rows": [1],
              "columns": [40],
              "required": [true],
              "name": ["Participant ID"]
            }
          ],
          "randomize_question_order": false,
          "preamble": [""],
          "button_label": ["Next"],
          "post_trial_gap": [0]
        }
      ]
    },
    {
      "type": ["instructions"],
      "pages": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">\n<p>Here are some of my friends. They are going to say some things about themselves.\n  Let's listen to the first one.<\/p>"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Next"],
      "post_trial_gap": [1000]
    },
    {
      "timeline": [
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Dog_speaker3US.mp3"],
          "choices": ["Asian Woman", "Black Woman", "Middle Eastern Woman", "White Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Black Woman", "Middle Eastern Woman", "White Woman", "Latina Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Next️"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Orange_speaker4US.mp3"],
          "choices": ["White Woman", "Black Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["White Woman", "Black Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Next️️"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Volleyball_speaker3HU.mp3"],
          "choices": ["Black Woman", "Middle Eastern Woman", "White Woman", "Asian Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Black Woman", "Middle Eastern Woman", "White Woman", "Asian Woman", "Latina Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["️Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Sibling_speaker3HU.mp3"],
          "choices": ["Middle Eastern Woman", "Latina Woman", "Asian Woman", "Black Woman", "White Woman"],
          "button_html": ["<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Middle Eastern Woman", "Latina Woman", "Asian Woman", "Black Woman", "White Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["️Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Park_speaker1US.mp3"],
          "choices": ["Asian Woman", "Middle Eastern Woman", "White Woman", "Black Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Middle Eastern Woman", "White Woman", "Black Woman", "Latina Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["️Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Icecream_speaker2US.mp3"],
          "choices": ["Middle Eastern Woman", "White Woman", "Latina Woman", "Asian Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Middle Eastern Woman", "White Woman", "Latina Woman", "Asian Woman", "Black Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["️Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Cat_speaker4US.mp3"],
          "choices": ["Asian Woman", "White Woman", "Latina Woman", "Black Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "White Woman", "Latina Woman", "Black Woman", "Middle Eastern Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["️Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Movies_speaker2US.mp3"],
          "choices": ["Asian Woman", "Middle Eastern Woman", "White Woman", "Latina Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Middle Eastern Woman", "White Woman", "Latina Woman", "Black Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["️Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [500]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Tiger_speaker5HU.mp3"],
          "choices": ["White Woman", "Black Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["White Woman", "Black Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/Music_speaker4HU.mp3"],
          "choices": ["Black Woman", "Asian Woman", "White Woman", "Middle Eastern Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Black Woman", "Asian Woman", "White Woman", "Middle Eastern Woman", "Latina Woman"]
          }
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["instructions"],
      "pages": ["Part 2"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Next"],
      "post_trial_gap": [1000]
    },
    {
      "timeline": [
        {
          "type": ["html-button-response"],
          "stimulus": ["Who do you like the most?"],
          "choices": ["White Woman", "Black Woman", "Middle Eastern Woman", "Asian Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000]
        },
        {
          "type": ["html-button-response"],
          "stimulus": ["Who is the friendliest?"],
          "choices": ["White Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000]
        },
        {
          "type": ["html-button-response"],
          "stimulus": ["Who is the smartest?"],
          "choices": ["Asian Woman", "White Woman", "Middle Eastern Woman", "Black Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000]
        },
        {
          "type": ["html-button-response"],
          "stimulus": ["Who do you trust the most?"],
          "choices": ["Asian Woman", "Black Woman", "Middle Eastern Woman", "Latina Woman", "White Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000]
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["All done! Press any key to finish"],
      "choices": jsPsych.ANY_KEY,
      "response_ends_trial": true,
      "post_trial_gap": [0]
    }
  ]
};

jsPsych.init(
{
  "timeline": [timeline],
  "use_webaudio": [true],
  "on_finish": function() {
    var data = jsPsych.data.get().csv();
    var file = 'xprmntr_local_name';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: file, filedata: data}));
  }
}
);
