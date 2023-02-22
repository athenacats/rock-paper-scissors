function getComputerChoice(rock, paper, scissors) {
    let playerSelection = prompt("Choose rock, paper or scissors");
    let computerSelection = paper;
    if (playerSelection.toLowerCase == rock) {
        return "You lose! Paper trumps Rock"
    }
    if (playerSelection.toLowerCase == paper) {
        return "Draw! Go again!"
    }
    if (playerSelection.toLowerCase == scissors) {
        return "You win! Scissors trump Paper!"
    }
    console.log(getComputerChoice)
}