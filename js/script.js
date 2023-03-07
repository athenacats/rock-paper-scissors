//function to include the entire system that will be called
function game() {

    
    let computerScore = 0
    let playerScore = 0
    let moves = 0 

    function playGame() {

        /*ensure the choices look exactly as what is written in the 
        buttons otherwise playerSelection will not work*/
        let choice = ["mawe (rock)", "karatasi (paper)", "makasi (scissors)"];

        /*had to include this because it kept bringing error that addeventlistener
        under forEach was null*/
        window.onload=function() {
            const rock = document.querySelector('.rock');
            const paper = document.querySelector('.paper');
            const scissor = document.querySelector('.scissor');
            const playerOptions = [rock, paper,scissor]

            /*this calls each of the three buttons that can be called*/   
            playerOptions.forEach(option => {
                option.addEventListener('click',function(){

                    //so for each button clicked, moves increase//
                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    movesLeft.innerText = `Moves Left: ${10-moves}`;

                    function getComputerChoice() {
                        return choice[Math.floor(Math.random()*choice.length)]; 
                        }
                    const computerSelection = getComputerChoice()

                    //this calls to the function above, ie, the click which 
                    //is essentially playerSelection
                    // Function to check who wins
                    winner(this.innerText,computerSelection)
                    
                    // Calling gameOver function after 10 moves
                    if(moves == 10){
                        gameOver(playerOptions,movesLeft);
                    }
                })
            })
        
        
        
            //function to play the loop for all outcomes
            function winner(playerSelection, computerSelection) {
                const playerScoreBoard = document.querySelector('.playerCounter');
                const computerScoreBoard = document.querySelector('.computerCounter');
                const result = document.querySelector('.result');
                
                //not necessary, for me to make sure it works
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
                //this helped in realising what was going wrong
                else {
                    return result.textContent = "Something went wrong";
                }
                
            }
            return winner;

            //function for the game ending
            function gameOver () {
                const chooseMove = document.querySelector('.choose');
                const result = document.querySelector('.result');
                const reloadBtn = document.querySelector('.reload');
                const movesLeft = document.querySelector('.movesleft');

                //hides the buttons
                rock.style.display = 'none';
                paper.style.display = 'none';
                scissor.style.display = 'none';

                //changes choose weapon to game over, hides moves left
                chooseMove.innerText = 'Game Over!!'
                movesLeft.style.display = 'none';
            
                //what to show in the end after moves are over
                if(playerScore > computerScore){
                    result.style.fontSize = '4vw';
                    result.innerText = 'Umeshinda! You Won The Game!'
                    result.style.color = '#000000';
                }
                else if(playerScore < computerScore){
                    result.style.fontSize = '4vw';
                    result.innerText = 'Umeshindwa:( You Lost The Game!';
                    result.style.color = 'red';
                }
                else{
                    result.style.fontSize = '4vw';
                    result.innerText = "Rudia! It's a Tie :|";
                    result.style.color = 'dark-grey'
                }
                //to display the reload button
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