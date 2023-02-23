let game = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return game[Math.floor(Math.random()*game.length)]; 
    }

let computerSelection = getComputerChoice()
console.log(computerSelection)
let playerSelection = prompt("Choose Rock, Paper or Scissors")

for (let i = 0; i <= 5; i++) {
    function 
}

function roundOne(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection) {
            return "Draw!";
        }
    
        else if (playerSelection.toLowerCase() === "paper" &&
            computerSelection === "rock") {
            return "You win!";
        }
        else if (playerSelection.toLowerCase() === "rock" &&
            computerSelection === "scissors") {
            return "You win!";
        }
        else if (playerSelection.toLowerCase() === "scissors" &&
            computerSelection === "paper") {
                return "You win!";
            }
        else if (playerSelection.toLowerCase() === "paper" &&
        computerSelection === "scissors") {
            return "You lose!";
        }
        else if (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "paper") {
            return "You lose!";
        }
        else if (playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "rock") {
            return "You lose!";
        }
        else {
            return "You must make a selection";
        }
    }

    
    console.log(roundOne(playerSelection, computerSelection))

