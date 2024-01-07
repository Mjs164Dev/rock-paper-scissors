let playerScore = 0;
let computerScore = 0;
let gameStatus = '';

function getComputerChoice() {
    let computerSelection = Math.ceil(Math.random() * 3);
    if (computerSelection === 1) {
        return computerSelection = "rock";
    }
    else if (computerSelection === 2) {
        return computerSelection = "paper";
    }
    else {
        return computerSelection = "scissors";
    }
}

const scoreContainer = document.querySelector('#scoreContainer');
scoreContainer.textContent = `Player: ${playerScore}:${computerScore} :Computer`;


function playRound() {

    if(gameStatus === '') {   

        computerSelection = getComputerChoice();
        if (userSelection === computerSelection) {
            alert("It's a tie! Replay.");
        }
        else if (userSelection === 'rock' && computerSelection === 'scissors'
            || userSelection === 'paper' && computerSelection === 'rock'
            || userSelection === 'scissors' && computerSelection === 'paper') {
            alert(`Player Wins! ${userSelection} beats ${computerSelection}.`);
            playerScore++;
        }
        else {
            alert(`Computer Wins! ${computerSelection} beats ${userSelection}.`);
            computerScore++;
        }

        scoreContainer.textContent = `Player: ${playerScore}:${computerScore} :Computer`;

        if(playerScore === 5 || computerScore === 5) {
            const winnerContainer = document.querySelector('#winnerContainer');
            gameStatus = 'over';
            playerScore > computerScore ?
                winnerContainer.textContent = 'Player Wins!' :
                winnerContainer.textContent = 'Computer Wins...' 
        }
    }
    else {
        const gameStatusContainer = document.querySelector('#gameStatusContainer');
        gameStatusContainer.textContent = 'Refresh page to play again!';
    }
}

document.querySelectorAll('#rock, #paper, #scissors').forEach(button => {
  button.addEventListener('click', () => {
    userSelection = button.id;
    playRound();
  });
});