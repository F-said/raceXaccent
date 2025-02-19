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
      "pages": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\"><img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">\n<p><\/p>"],
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
          "stimulus": ["resource/audio/Park_speaker1HU.mp3"],
          "choices": ["White Woman", "Latina Woman", "Middle Eastern Woman", "Asian Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["White Woman", "Latina Woman", "Middle Eastern Woman", "Asian Woman", "Black Woman"],
            "speaker": ["speaker1HU"],
            "subject": ["Park"],
            "accent": ["HU"]
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
          "stimulus": ["resource/audio/Music_speaker5US.mp3"],
          "choices": ["Middle Eastern Woman", "Latina Woman", "Asian Woman", "White Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Middle Eastern Woman", "Latina Woman", "Asian Woman", "White Woman", "Black Woman"],
            "speaker": ["speaker5US"],
            "subject": ["Music"],
            "accent": ["US"]
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
          "stimulus": ["resource/audio/Orange_speaker5HU.mp3"],
          "choices": ["Latina Woman", "White Woman", "Asian Woman", "Black Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Latina Woman", "White Woman", "Asian Woman", "Black Woman", "Middle Eastern Woman"],
            "speaker": ["speaker5HU"],
            "subject": ["Orange"],
            "accent": ["HU"]
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
          "stimulus": ["resource/audio/Dog_speaker3US.mp3"],
          "choices": ["Asian Woman", "Black Woman", "Latina Woman", "Middle Eastern Woman", "White Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Black Woman", "Latina Woman", "Middle Eastern Woman", "White Woman"],
            "speaker": ["speaker3US"],
            "subject": ["Dog"],
            "accent": ["US"]
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
          "stimulus": ["resource/audio/Movies_speaker4HU.mp3"],
          "choices": ["White Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["White Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman", "Black Woman"],
            "speaker": ["speaker4HU"],
            "subject": ["Movies"],
            "accent": ["HU"]
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
          "stimulus": ["resource/audio/Cat_speaker1US.mp3"],
          "choices": ["Asian Woman", "Middle Eastern Woman", "Black Woman", "White Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Middle Eastern Woman", "Black Woman", "White Woman", "Latina Woman"],
            "speaker": ["speaker1US"],
            "subject": ["Cat"],
            "accent": ["US"]
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
          "choices": ["Asian Woman", "Black Woman", "Middle Eastern Woman", "Latina Woman", "White Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Black Woman", "Middle Eastern Woman", "Latina Woman", "White Woman"],
            "speaker": ["speaker3HU"],
            "subject": ["Sibling"],
            "accent": ["HU"]
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
          "stimulus": ["resource/audio/Icecream_speaker2HU.mp3"],
          "choices": ["Asian Woman", "White Woman", "Latina Woman", "Black Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "White Woman", "Latina Woman", "Black Woman", "Middle Eastern Woman"],
            "speaker": ["speaker2HU"],
            "subject": ["Icecream"],
            "accent": ["HU"]
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
          "stimulus": ["resource/audio/Tiger_speaker4US.mp3"],
          "choices": ["White Woman", "Middle Eastern Woman", "Latina Woman", "Asian Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["White Woman", "Middle Eastern Woman", "Latina Woman", "Asian Woman", "Black Woman"],
            "speaker": ["speaker4US"],
            "subject": ["Tiger"],
            "accent": ["US"]
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
          "stimulus": ["resource/audio/Volleyball_speaker2US.mp3"],
          "choices": ["Black Woman", "Latina Woman", "Asian Woman", "White Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Black Woman", "Latina Woman", "Asian Woman", "White Woman", "Middle Eastern Woman"],
            "speaker": ["speaker2US"],
            "subject": ["Volleyball"],
            "accent": ["US"]
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
          "stimulus": [""],
          "choices": ["Asian Woman", "Black Woman", "White Woman", "Latina Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Black Woman", "White Woman", "Latina Woman", "Middle Eastern Woman"]
          }
        },
        {
          "type": ["html-button-response"],
          "stimulus": [""],
          "choices": ["White Woman", "Black Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["White Woman", "Black Woman", "Latina Woman", "Asian Woman", "Middle Eastern Woman"]
          }
        },
        {
          "type": ["html-button-response"],
          "stimulus": [""],
          "choices": ["Black Woman", "Middle Eastern Woman", "White Woman", "Asian Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Black Woman", "Middle Eastern Woman", "White Woman", "Asian Woman", "Latina Woman"]
          }
        },
        {
          "type": ["html-button-response"],
          "stimulus": [""],
          "choices": ["Asian Woman", "Black Woman", "Middle Eastern Woman", "White Woman", "Latina Woman"],
          "button_html": ["<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["Asian Woman", "Black Woman", "Middle Eastern Woman", "White Woman", "Latina Woman"]
          }
        },
        {
          "type": ["html-button-response"],
          "stimulus": [""],
          "choices": ["White Woman", "Asian Woman", "Middle Eastern Woman", "Latina Woman", "Black Woman"],
          "button_html": ["<img src=\"resource/image/White Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Asian Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Middle Eastern Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Latina Woman.jpg\" style=\"margin: 5px;\"\">", "<img src=\"resource/image/Black Woman.jpg\" style=\"margin: 5px;\"\">"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "image": ["White Woman", "Asian Woman", "Middle Eastern Woman", "Latina Woman", "Black Woman"]
          }
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["instructions"],
      "pages": ["Part 3"],
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
          "stimulus": ["resource/audio/SeaTurtleEggs_speaker1HU.mp3"],
          "choices": ["Next️"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "speaker": ["speaker1HU"],
            "subject": ["SeaTurtleEggs"],
            "accent": ["HU"]
          }
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/SeaTurtles_speaker1US.mp3"],
          "choices": ["Next️"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [1000],
          "data": {
            "speaker": ["speaker1US"],
            "subject": ["SeaTurtles"],
            "accent": ["US"]
          }
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["All done! Press the space button before exiting this window!"],
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
