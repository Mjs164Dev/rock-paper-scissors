let computerSelection;
let userSelection;

let playerScore = 0;
let computerScore = 0;

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

function playRound() {

    computerSelection = getComputerChoice();
    userSelection = getUserChoice();

    console.log("COMPUTER: " + computerSelection);
    console.log("PLAYER: " + userSelection);

    if (userSelection === computerSelection) {
        alert("It's a tie! Replay.");
        return playRound();
    }
    else if (userSelection === 'rock' && computerSelection === 'scissors'
    || userSelection === 'paper' && computerSelection === 'rock'
    || userSelection === 'scissors' && computerSelection === 'paper') {
        alert("Player Wins!");
        playerScore = playerScore + 1;
    }
    else {
        alert("Computer Wins!");
        computerScore = computerScore + 1;
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

}

//started to get the score counting. need to make game() function and loop until a player reaches 3 wins