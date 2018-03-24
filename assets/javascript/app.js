
// Here's the Javascript running the trivia game

// Display the Start Button in the `#start` div of `index.html`.
$(document).ready(function () {

  //displayStart();
  var gamePlaying = false;

  // here is the question/answers object
  var trivia = {
    triv1: {
      item: "What is the tallest mountain on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
      }
    },
    triv2: {
      item: "What is the tallest mountain on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
      }
    },
    triv3: {
      item: "What is the tallest mountain on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
      }
    },
    triv4: {
      item: "What is the tallest mountain on Planet Earth?",
      answers: {
        items: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
              }
    }
  };

  var clockRunning = false;

  var timer = {

    time: 0,
    lap: 1,
  
    reset: function() {
  
      stopwatch.time = 0;
      stopwatch.lap = 1;
  
      // DONE: Change the "display" div to "00:00."
      $("#display").text("00:00");

      //start: function() {
        // DONE: Use setInterval to start the count here and set the clock to running.
        //if (!clockRunning) {
          //intervalId = setInterval(stopwatch.count, 1000);
          //clockRunning = true;
        }
      }

  // loop through questions

  for (var i = 0; i < trivia.length; i++) {

  }

  //window.onload = function() {
  //$().button('toggle')
  //$().button('dispose')
  //$("#start").button('toggle');

  $("#start").click(function () {
    console.log("works");
    console.log(trivia.triv1.item)
    $("#questionDiv").text(trivia.triv1.item);


    console.log(trivia.length)

    $(".question").text(trivia.triv1.item);
      //  Set the button alert's timeout to run three seconds after the function's called.
      delayButtonAlert = setTimeout(function() {
        alert("Alert #2");
      }, 1000*15);
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

