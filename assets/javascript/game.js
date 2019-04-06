// GLOBAL VARIABLES
// ===================================================================
var compGuess = 0;
var userScore = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var wins = 0;
var losses = 0;

var isDone = false;
$("alert").html = message;
var message = "";

// FUNCTIONS
// =====================================================================
function reset() {
  isDone = false;
  compGuess = Math.floor(Math.random() * 102) + 19;
  console.log(compGuess);
  userScore = 0;
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;
  $("#randomNumber").html(compGuess);
  $("#scoreDisplay").html(userScore);
  $("#wins").html(wins);
  $("#losses").html(losses);
  

}

function scoreCheck() {
  if (userScore === compGuess) {
     $("#scoreDisplay").html("You Win!");
     crystal1 = 0;
     crystal2 = 0;
     crystal3 = 0;
     crystal4 = 0;
     wins++;
     isDone = true;
    
     $("#wins").html(wins);
     reset();
  }
  if (userScore > compGuess) {
     $("#scoreDisplay").html("You suuuuuck!");
     crystal1 = 0;
     crystal2 = 0;
     crystal3 = 0;
     crystal4 = 0;
     losses++;
     
     isDone = true;
     
     $("#losses").html(losses);
     reset();
  }
}

//
// =========================================================





$("#crystal1").on("click", function gemAdd() {
  userScore = userScore + crystal1;
  $("#scoreDisplay").html(userScore);
 
  if (isDone === false) {
     scoreCheck();
  }
 
  
});

$("#crystal2").on("click", function gemAdd() {
  userScore = userScore + crystal2;
  $("#scoreDisplay").html(userScore);
 
  if (isDone === false) {
     scoreCheck();
  }
});

$("#crystal3").on("click", function gemAdd() {
  userScore = userScore + crystal3;
  $("#scoreDisplay").html(userScore);
 
  if (isDone === false) {
     scoreCheck();
  }
});

$("#crystal4").on("click", function gemAdd() {
  userScore = userScore + crystal4;
  $("#scoreDisplay").html(userScore);
 
  if (isDone === false) {
     scoreCheck();
  }
});










