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

function getUserChoice() {
    let userSelection = prompt("Guess ROCK, PAPER, or SCISSORS", "ROCK")
    userSelection = userSelection.toLowerCase();

    if (userSelection != "rock" && userSelection != "paper" && userSelection != "scissors") {
        alert("That's not an option.");
        return getUserChoice();
    }
    else {
        return userSelection;
    }
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        
        function playRound() {

            computerSelection = getComputerChoice();
            userSelection = getUserChoice();
        
            console.log("PLAYER: " + userSelection);
            console.log("COMPUTER: " + computerSelection);
        
            if (userSelection === computerSelection) {
                alert("It's a tie! Replay.");
                return playRound();
            }
            else if (userSelection === 'rock' && computerSelection === 'scissors'
            || userSelection === 'paper' && computerSelection === 'rock'
            || userSelection === 'scissors' && computerSelection === 'paper') {
                alert("Player Wins! " + userSelection + " beats " + computerSelection + ".");
                playerScore++;
            }
            else {
                alert("Computer Wins! " + computerSelection + " beats " + userSelection + ".");
                computerScore++;
            }
        
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        }
        
        playRound();
    }

   playerScore > computerScore ?
   alert("Player wins the match " + playerScore + " - " + computerScore + "!") :
   alert("Computer wins the match " + computerScore + " - " + playerScore + "!");

}