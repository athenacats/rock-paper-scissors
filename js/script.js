const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

   

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']
        
    


        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Hatua Zilizobaki (Moves Left): ${10-moves}`;
                
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                winner(this.innerText, computerChoice);

                if (moves == 10){
                    gameOver(playerOptions,movesLeft);//
                }
            })
            
        })
    }
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.playerCounter');
        const computerScoreBoard = document.querySelector('.computerCounter');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            result.textContent = 'It is a Draw!';
        }
        
        else if (player == "rock") {
            if (computer == 'scissors'){
                result.textContent = 'You Win!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'You Lose!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        } else if (player == "scissors") {
            if (computer == "paper"){
                result.textContent = 'You Win!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'You Lose!';
                computerScore++;  
                computerScoreBoard.textContent = computerScore;
            }
        }else if (player == 'paper') {
            if (computer == 'rock'){
                result.textContent = 'You Win!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'You Lose!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        
    };
        

    
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.choose');
        const result = document.querySelector('.result');
        const reloadBtn= document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerText = 'Game Over!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '24px';
            result.innerText = "Congratulations, you win you lucky ducky!";
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '24px';
            result.innerText = "Waah, waah, you lose, try again!";
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '24px';
            result.innerText = "This game is a tie";
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })    
    }

    playGame();
    
};
game();