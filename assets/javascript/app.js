
// Here's the Javascript running the trivia game

// Display the Start Button in the `#start` div of `index.html`.
$(document).ready(function () {

  //displayStart();
  var gamePlaying = false;

  // here is the question/answers object
  var trivia = {
   
    triv1: {
      q: "What is the tallest mountain on Planet Earth?",
      a: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"],
      correct: "Mauna Kea, Hawaii"
    },
    triv2: {
      q: "What is the tallest mountain on Planet Earth?",
      a: "nope",
        wrong: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"],
    },
    triv3: {
      q: "What is the tallest mountain on Planet Earth?",
      a: {
        wrong: ["Mt. Everest", "Mauna Kea, Hawaii", "Pico Cristóbal Colón, Colómbia", "Mt. Whitney"]
      }
    }
  };

  var clockRunning = false;

  var timer = {

    time: 0,
    lap: 1,

    reset: function () {

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


  $("#start").click(function () {

    // defines the question number
    var questionNum = 1;

    // sends the question to the question DIV
    console.log(trivia.triv1.q);
    $("#questionDiv").text(trivia.triv1.q);
    

    var ansCt = "trivia.triv" + questionNum + ".answers.items";
    console.log(ansCt);
    

    // counts the number of question/answer combos in the object // console.log(trivLength)
    var trivLength = Object.keys(trivia).length;

    // loop through questions
    for (var i = 0; i < trivLength; i++) {

      // populates the answers to the answer DIV
      for (var j = 0; j < 4; j++) {

      //console.log(trivia.triv1.a[j]);
      //$(".answer-option").append(trivia.triv1.a[j]);

      var a = $("<button><p>");
      // Adding a class
      a.addClass("correct");
      // Provided the initial button text
      a.text(trivia.triv1.a[j]);
      // Added the button to the HTML
      $(".answer-option").append(a);


    }
    console.log(trivia.triv1.correct);
  }


    //  Set the button alert's timeout to run three seconds after the function's called.

    timer = setTimeout(function () {
      alert("Alert #2");
    }, 1000 * 15);
  });


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
