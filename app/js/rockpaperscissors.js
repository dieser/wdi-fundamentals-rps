////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}
var winner;

function getWinner(playerMove,computerMove) {

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "scissors") {
        if (computerMove === "scissors") {
            winner = "tie";
            console.log("It's a tie!");
        } else if (computerMove === "rock") {
            winner = "computer";
            console.log("You lose!");
        } else {
            winner = "player";
            console.log("You win!");
        }
    } else if (playerMove === "paper") {
        if (computerMove === "paper") {
            winner = "tie";
            console.log("It's a tie!");
        } else if (computerMove === "scissors") {
            winner = "computer";
            console.log("You lose!");
        } else {
            winner = "player";
            console.log("You win!");
        }
    } else if (playerMove === "rock") {
        if (computerMove === "rock") {
            winner = "tie";
            console.log("It's a tie!");
        } else if (computerMove === "paper") {
            winner = "computer";
            console.log("You lose!");
        } else {
            winner = "player";
            console.log("You win!");
        }
    }
    return winner;
}
var playerMove = "";
var computerMove = "";
var winner = "";

function playToFive() {
   console.log("Let's play Rock, Paper, Scissors");
   var playerWins = 0;
   var computerWins = 0;
    while (playerWins < 5 && computerWins <5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);

        if (winner === "player") {
            console.log("You chose " + playerMove + " and the Computer has chosen " + computerMove + ". You have won this round!");
            playerWins += 1;
        }
        else if (winner === "computer") {
            console.log("You chose " + playerMove + " and the Computer has chosen " + computerMove + ". The computer has won this round");
            computerWins += 1;
        } else { (winner === "tie");
            console.log("Mate, it seems to be a tie this round!")
        }
        console.log("The score is " + playerWins + " to " + computerWins +"\n");
    }   
   return [playerWins, computerWins];
}

playToFive();


