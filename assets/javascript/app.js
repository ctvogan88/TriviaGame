
// Here's the Javascript running the trivia game

// Display the Start Button in the `#start` div of `index.html`.
$(document).ready(function () {

  //displayStart();
  var gamePlaying = false;

  // here is the question/answers object
  var trivia = {
    triv1: {
      item: "What is the tallest mountian on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
      }
    },
    triv2: {
      item: "What is the tallest mountian on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
      }
    },
    triv3: {
      item: "What is the tallest mountian on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
      }
    },
    triv4: {
      item: "What is the tallest mountian on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
              }
    }
  };

  var delayButtonAlert;

  // loop through questions

  for (var i = 0; i < trivia.length; i++) {

  }


  //window.onload = function() {
  //$().button('toggle')
  //$().button('dispose')
  //$("#start").button('toggle');

  $("#start").click(function () {
    console.log("works");
    $(".answer-option").text(trivia.triv1.item);
    console.log(trivia.length)
  });


  //game());
  //$("#stop-time").button('toggle');
  //$("#stop-time").button('dispose');

  //function game() {

  // DONE: Change the "display" div to "00:00."
  //console.log("works");
  //$(".answer-option").text("this is an answer!");

  //}
  //$("#start").click(game.lap);

  //$("#stop").on("click", game.works());
  //$("#reset").on("click", game.works());
  //$("#start").on("click", stopwatch.start());
  //};

  // When the user clicks the `button` in index.html,
  // the sorted result should be displayed in the `#result` div.

  // DO NOT USE JQUERY TO SELECT ELEMENTS. ONLY USE VANILLA JS.

  var newArray = [];

  var unsortedArr = [
    1, 326, 251
  ]

  var game = {

    works: function () {
      console.log("works");
    },

    time: 0,
    lap: 1,
  }


});

