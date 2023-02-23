function getComputerChoice(rock, paper, scissors) {
    console.log(getComputerChoice)
}
    let playerSelection = prompt("Choose rock, paper or scissors")
    let computerSelection = getComputerChoice[Math.floor(Math.random()*getComputerChoice.length)]
    function roundOne(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase === computerSelection) {
            return "Draw!"
        }
        else if (playerSelection.toLowerCase == paper &&
            computerSelection == rock) {
            return "You win!"
        }
        else if (playerSelection.toLowerCase == rock &&
            computerSelection == scissors) {
            return "You win!"
        }
        else if (playerSelection == scissors &&
            computerSelection == paper) {
                return "You win!"
            }
        else {
            return "You lose!"
        }
    }

