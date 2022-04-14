let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

const score = document.querySelector('.score');

const result = document.querySelector('.result');

function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

const button = document.querySelectorAll('.btn');

button.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerSelection = btn.getAttribute('data-value');
        computerSelection = computerPlay();
        if (playerSelection === computerSelection) {
            result.textContent = `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\nIt's a tie`;
        }
        else if (computerSelection == "rock" && playerSelection == "scissor") {
            computerScore += 1;
            result.textContent = `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\nYou lost, ${computerSelection} beats ${playerSelection}`;
        }
        else if (computerSelection == "rock" && playerSelection == "paper") {
            playerScore += 1;
            result.textContent = `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\nYou won, ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection == "paper" && playerSelection == "scissor") {
            playerScore += 1;
            result.textContent = `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\nYou won, ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection == "paper" && playerSelection == "rock") {
            computerScore += 1;
            result.textContent = `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\nYou lost, ${computerSelection} beats ${playerSelection}`;
        }
        else if (computerSelection == "scissor" && playerSelection == "rock") {
            playerScore += 1;
            result.textContent = `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\nYou won, ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection == "scissor" && playerSelection == "paper") {
            computerScore += 1;
            result.textContent = `YOU: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\nYou lost, ${computerSelection} beats ${playerSelection}`;
        };
        score.textContent = `COMPUTER: ${computerScore} PLAYER: ${playerScore}`;
        if (computerScore == 5) {
            alert("The COMPUTER has gotten the best of you");
            computerScore = 0;
            playerScore = 0;
            result.textContent = "";
            score.textContent = "";
        }
        else if (playerScore == 5) {
            alert("YOU have deafeated the COMPUTER");
            computerScore = 0;
            playerScore = 0;
            result.textContent = "";
            score.textContent = "";
        }
    });
});

