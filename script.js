let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(computerSelection, playerSelection) {
    playerSelection = prompt("Rock Paper Scissor:");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        alert(`YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\nIt's a tie`);
    }
    else if (computerSelection == "rock" && playerSelection == "scissor") {
        computerScore += 1;
        alert(`YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\nYou lost ${computerSelection} beats ${playerSelection}`);
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore += 1;
        alert( `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\nYou won ${playerSelection} beats ${computerSelection}`);
    }
    else if (computerSelection == "paper" && playerSelection == "scissor") {
        playerScore += 1;
        alert(`YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\nYou won ${playerSelection} beats ${computerSelection}`);
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore += 1;
        alert(`YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\nYou lost ${computerSelection} beats ${playerSelection}`);
    }
    else if (computerSelection == "scissor" && playerSelection == "rock") {
        playerScore += 1;
        alert(`YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\nYou won ${playerSelection} beats ${computerSelection}`);
    }
    else if (computerSelection == "scissor" && playerSelection == "paper") {
        computerScore += 1;
        alert(`YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\nYou lost ${computerSelection} beats ${playerSelection}`);
    };
};

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        alert(`You have defeated the computer\nYOU: ${playerScore}\nCOMPUTER: ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        alert(`The computer has gotten the better of you\nYOU: ${playerScore}\nCOMPUTER: ${computerScore}`);
    }
    else {
        alert(`You and the computer are an equal match\nYOU: ${playerScore}\nCOMPUTER: ${computerScore}`);
    }
};

game();