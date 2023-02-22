function getComputerChoice(rock, paper, scissors) {
    function roundOne (playerSelection = prompt("Choose rock, paper or scissors"),computerSelection = paper)
    if (playerSelection.toLowerCase == rock) {
        return "You lose! Paper trumps Rock"
    }
    if (playerSelection.toLowerCase == paper) {
        return "Draw! Go again!"
    }
    if (playerSelection.toLowerCase == scissors) {
        return "You win! Scissors trump Paper!"
    }
}