let getComputerChoice = ["rock", "paper", "scissors"]
let computerSelection = getComputerChoice[Math.floor(Math.random()*getComputerChoice.length)] 
let playerSelection = prompt("Choose Rock, Paper or Scissors")
function roundOne(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection) {
            return "Draw! " + playerSelection + " is the same as " + computerSelection
        }
    
        else if (playerSelection.toLowerCase() === "paper" &&
            computerSelection === "rock") {
            return "You win! " + playerSelection + " trumps " + computerSelection
        }
        else if (playerSelection.toLowerCase() === "rock" &&
            computerSelection === "scissors") {
            return "You win! " + playerSelection + " trumps " + computerSelection
        }
        else if (playerSelection.toLowerCase() === "scissors" &&
            computerSelection === "paper") {
                return "You win! " + playerSelection + " trumps " + computerSelection
            }
        else if (playerSelection.toLowerCase() === "paper" &&
        computerSelection === "scissors") {
            return "You lose! " + computerSelection + " trumps " + playerSelection
        }
        else if (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "paper") {
            return "You lose! " + computerSelection + " trumps " + playerSelection
        }
        else if (playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "rock") {
            return "You lose! " + computerSelection + " trumps " + playerSelection
        }
        else {
            return "You must make a selection"
        }

    }

