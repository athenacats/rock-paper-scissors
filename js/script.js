let getComputerChoice = ["rock", "paper", "scissors"]
let computerSelection = getComputerChoice[Math.floor(Math.random()*getComputerChoice.length)] 
let playerSelection = prompt("Choose Rock, Paper or Scissors")
function roundOne(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection) {
            return "Draw!"
        }
    
        else if (playerSelection.toLowerCase() === "paper" &&
            computerSelection == "rock") {
            return "You win!"
        }
        else if (playerSelection.toLowerCase() === "rock" &&
            computerSelection == "scissors") {
            return "You win!"
        }
        else if (playerSelection.toLowerCase() === "scissors" &&
            computerSelection == "paper") {
                return "You win!"
            }
        else {
            return "You lose!"
        }
    }

