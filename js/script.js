const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

   

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];
    


        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Hatua Zilizobaki (Moves Left): ${10 - moves}`;

                const computerChoice = computerOptions[Math.floor(Math.random()*3)];
 
                winner(this.innerText.toLowerCase(), computerChoice.toLowerCase());

                if (moves == 10){
                    gameOver(playerOptions,movesLeft);//
                }
            });
        
        });


        const winner = (player, computer) => {
            const result = document.querySelector('.result');
            const playerScoreBoard = document.querySelector('.playerCounter');
            const computerScoreBoard = document.querySelector('.computerCounter');
            //player = player.toLowerCase();
            //computer = computerChoice.toLowerCase();
            console.log();

            if (player == computer) {
                result.textContent = 'It is a Draw!';
            }
            
            else if (player == "paper" &&
            computer == "rock") {
                playerScore++;
                result.textContent = 'You Win!';
                playerScoreBoard.textContent = playerScore;
            
            }
            else if (player == "rock" &&
            computer == "scissors") {
                playerScore++;
                result.textContent = 'You Win!';
                playerScoreBoard.textContent = playerScore;
            }
            else if (player == "scissors" &&
            computer == "paper") {
                playerScore++;
                result.textContent = 'You Win!';
                playerScoreBoard.textContent = playerScore;
            }
            else if (player == "paper" &&
            computer == "scissors") {
                computerScore++;
                result.textContent = 'You Lose!';
                computerScoreBoard.textContent = computerScore;
            }
            else if (player == "rock" &&
            computer == "paper") {
                computerScore++;
                result.textContent = 'You Lose!';
                computerScoreBoard.textContent = computerScore;
            }
            else if (player == "scissors" &&
            computer== "rock") {
                computerScore++;
                result.textContent = 'You Lose!';
                computerScoreBoard.textContent = computerScore;
            }
            return result;
        };
    };
    
    const gameOver =(playerOptions,movesLeft) => {
        const chooseMove = document.querySelector('.choose');
        const result = document.querySelector('.result');
        const reloadBtn= document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.textContent = 'Game Over!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '24px';
            result.textContent = "Congratulations, you win you lucky ducky!";
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '24px';
            result.textContent = "Waah, waah, you lose, try again!";
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '24px';
            result.textContent = "This game is a tie";
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        }) ;       
    };

    playGame();
    
};
game();