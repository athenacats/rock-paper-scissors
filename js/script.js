let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)]; 
    }

let computerSelection = getComputerChoice()
let playerSelection = prompt("Choose Rock, Paper or Scissors")
console.log("You chose " + playerSelection)
console.log("The computer chose " + computerSelection)
alert("You chose " + playerSelection + " and the computer chose " + computerSelection)

let computerScore = 0
let playerScore = 0

function roundOne(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        playerScore++;
        computerScore++;
        alert("Draw!");
        return "Draw!";
    }

    else if (playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock") {
        playerScore++;
        alert("You win!");
        return "You win!";
    }
    else if (playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors") {
        playerScore++;
        alert("You win!");
        return "You win!";
    }
    else if (playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper") {
        playerScore++;
        alert("You win!");
        return "You win!";
    }
    else if (playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors") {
        computerScore++;
        alert("You lose!");
        return "You lose!";
    }
    else if (playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper") {
        computerScore++;
        alert("You lose!");
        return "You lose!";
    }
    else if (playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock") {
        computerScore++;
        alert("You lose!");
        return "You lose!";
    }
    else {
        alert("You must make a selection");
        return "You must make a selection";
    }
}

console.log(roundOne(playerSelection, computerSelection))
console.log("Player Score is " + playerScore + " and Computer Score is " + computerScore + "\n\   ")
alert("Player Score is " + playerScore + " and Computer Score is " + computerScore)

const button = document.createElement('button')
button.innerText= 'Panga'
button.addEventListener('click', ())
document.body.appendChild(button)
   


    
   

