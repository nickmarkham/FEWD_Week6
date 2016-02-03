//store the human player score and the computer (bot)
//score in variables
var humanScore = 0;
var computerScore = 0;

//write a 'play' function that handles the different conditions of gameplay
//depending on being passed an argument string for "rock", "paper",
//or "scissors" - the human user choice
function play(humanPlay) {
  //call the return function to get a random 'bot' choice
  var computerPlay = getComputerPlay();

  //update the #status to display who played what
  //use jQuery .html()

  $("status").html("You Selected"+humanPlay+". The bot selected "+computerPlay);

  //write a conditional block for a human "rock" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append() to update the #status

  if (humanPlay === "rock") {
    if (computerPlay === "rock") {

    } alert ("Tie!");
    else if (computerPlay === "paper")
    } alert ("Lose!");
    else if (computerPlay === "scissors")
    } alert ("Win!");

  } else if (humanPlay === "paper") {
    if (computerPlay === "paper") {
    } alert ("Tie!");
    else if (computerPlay === "rock")
    } alert ("Win!");
    else if (computerPlay === "scissors")
    } alert ("Lose!")

  } else if (humanPlay === "scissors") {
    if (computerPlay === "scissors") {
    } alert ("Tie!");
    else if (computerPlay === "rock")
    } alert ("Lose!");
    else if (computerPlay === "paper")
    } alert ("Win!")

  }


  //write a conditional block for a human "paper" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()

  //write a conditional block for a human "scissors" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()

  //update the #humanScore and #computerScore elements
  //use jQuery .html()



//write a function that randomly picks a 'bot' choice from
//an array of options and returns it
function getComputerPlay() {
  var plays = ["rock", "paper", "scissors"];

  var randomNumber = Math.random(); /*value between 0-1*/
  var l = plays.length;

  var randomPlayNumber = Math.floor(randomNumber * l);

  var play = plays[randomPlayNumber];

  return play;
}

//define three click handler functions for the
//#rock, #paper and #scissors buttons. They should all call a
//generic 'play' function, passing in "rock", "paper", or "scissors"
//as a string argument.
function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

//bind the #rock, #paper and #scissors buttons to their
//relevant click handler functions
$('#rock').click(playRock);
$('#paper').click(playPaper);
$('#scissors').click(playScissors);
