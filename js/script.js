let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)]; 
    }

let computerSelection = getComputerChoice()
console.log(computerSelection)
let playerSelection = prompt("Choose Rock, Paper or Scissors")
let computerScore = 0
let playerScore = 0

function roundOne(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        playerScore++;
        computerScore++;
        return "Draw!";
    }

    else if (playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock") {
        playerScore++;
        return "You win!";
    }
    else if (playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors") {
        playerScore++;
        return "You win!";
    }
    else if (playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper") {
        playerScore++;
        return "You win!";
    }
    else if (playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors") {
        computerScore++;
        return "You lose!";
    }
    else if (playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper") {
        computerScore++;
        return "You lose!";
    }
    else if (playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock") {
        computerScore++;
        return "You lose!";
    }
    else {
        return "You must make a selection";
    }
}
console.log(roundOne(playerSelection, computerSelection))
console.log("Player Score is " + playerScore + " and Computer Score is " + computerScore)


function game() {
    for (i = 0; i <= 5; i++) {
        roundOne();
        }
        if (i === 5 &&
            playerScore > computerScore) {
            return "Congratulations you lucky ducky!";
        }
        else if (i === 5 &&
            playerScore < computerScore) {
            return "Waah, waah, try again!";
        }
    }


    
   

