function game() {

    
    let computerScore = 0
    let playerScore = 0
    let moves = 0 

    function playGame() {

        let choice = ["mawe (rock)", "karatasi (paper)", "makasi (scissors)"];

        window.onload=function() {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissor = document.querySelector('.scissor');
        const playerOptions = [rock, paper,scissor]

        
            playerOptions.forEach(option => {
                option.addEventListener('click',function(){

                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    movesLeft.innerText = `Moves Left: ${10-moves}`;

                    function getComputerChoice() {
                        return choice[Math.floor(Math.random()*choice.length)]; 
                        }
                    const computerSelection = getComputerChoice()
                    // Function to check who wins
                    winner(this.innerText,computerSelection)
                    
                    // Calling gameOver function after 10 moves
                    if(moves == 10){
                        gameOver(playerOptions,movesLeft);
                    }
                })
            })
        
        
        

        function winner(playerSelection, computerSelection) {
            const playerScoreBoard = document.querySelector('.playerCounter');
            const computerScoreBoard = document.querySelector('.computerCounter');
            const result = document.querySelector('.result');
            console.log(computerSelection);
            console.log(playerSelection);
            if (playerSelection.toLowerCase() === computerSelection) {
                return result.textContent=  "Draw!";
            }

            else if (playerSelection.toLowerCase() === "karatasi (paper)" &&
            computerSelection === "mawe (rock)") {
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                return result.textContent = "You win!";
                
            }
            else if (playerSelection.toLowerCase() === "mawe (rock)" &&
            computerSelection === "makasi (scissors)") {
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                return result.textContent = "You win!";
            }
            else if (playerSelection.toLowerCase() === "makasi (scissors)" &&
            computerSelection === "karatasi (paper)") {
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                return result.textContent = "You win!";
            }
            else if (playerSelection.toLowerCase() === "karatasi (paper)" &&
            computerSelection === "makasi (scissors)") {
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                return result.textContent = "You lose!";
            }
            else if (playerSelection.toLowerCase() === "mawe (rock)" &&
            computerSelection === "karatasi (paper)") {
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                return result.textContent = "You lose!";
            }
            else if (playerSelection.toLowerCase() === "makasi (scissors)" &&
            computerSelection === "mawe (rock)") {
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                return result.textContent = "You lose!";
            }
            else {
                return result.textContent = "Something went wrong";
            }
            
        }
        return winner;

        


        

        function gameOver () {
            const chooseMove = document.querySelector('.choose');
            const result = document.querySelector('.result');
            const reloadBtn = document.querySelector('.reload');
            const movesLeft = document.querySelector('.movesleft');

            rock.style.display = 'none';
            paper.style.display = 'none';
            scissor.style.display = 'none';

            
                chooseMove.innerText = 'Game Over!!'
                movesLeft.style.display = 'none';
            

                if(playerScore > computerScore){
                    result.style.fontSize = '2rem';
                    result.innerText = 'Umeshinda! You Won The Game!'
                    result.style.color = '#000000';
                }
                else if(playerScore < computerScore){
                    result.style.fontSize = '2rem';
                    result.innerText = 'Umeshindwa:( You Lost The Game!';
                    result.style.color = 'red';
                }
                else{
                    result.style.fontSize = '2rem';
                    result.innerText = "Rudia! It's a Tie :|";
                    result.style.color = 'dark-grey'
                }
                reloadBtn.innerText = 'Restart';
                reloadBtn.style.display = 'flex'
                reloadBtn.addEventListener('click',() => {
                    window.location.reload();

            
        })
        
        return gameOver;
        }
    }
    }
    playGame();
}
game();


/*console.log(roundOne(playerSelection, computerSelection))
console.log("Player Score is " + playerScore + " and Computer Score is " + computerScore + "\n\   ")
alert("Player Score is " + playerScore + " and Computer Score is " + computerScore)

function game() {
    for (i = 0; i < 4; i++) {
        let choice = ["rock", "paper", "scissors"];

        function getComputerChoice() {
            return choice[Math.floor(Math.random()*choice.length)]; 
        }

        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Choose Rock, Paper or Scissors")
        console.log("You chose " + playerSelection)
        console.log("The computer chose " + computerSelection)
        alert("You chose " + playerSelection + " and the computer chose " + computerSelection)
        console.log(roundOne(playerSelection, computerSelection))
        console.log("Player Score is " + playerScore + " and Computer Score is " + computerScore + "\n\   ")
        alert("Player Score is " + playerScore + " and Computer Score is " + computerScore)
        }
        if (playerScore > computerScore) {
            alert("Congratulations, you win you lucky ducky!");
            return "Congratulations, you win you lucky ducky!";
        }
        else if (playerScore < computerScore) {
            alert("Waah, waah, you lose, try again!");
            return "Waah, waah, you lose, try again!";
        }
        else if (playerScore === computerScore) {
            alert("This game is a tie");
            return "This game is a tie";
        }
    }

    console.log(game());*/