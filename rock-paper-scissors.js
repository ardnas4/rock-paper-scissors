let computerScore = 0, playerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', event => {
        if (computerScore == 5 || playerScore == 5) {
            return;
        }

        let computerSelection = getComputerChoice();
        let playerSelection = event.target.id;

        playRound(playerSelection, computerSelection);
        determineWinner();
    });
});

function getComputerChoice() {
    // list of possible choices
    const choices = ['Rock', 'Paper', 'Scissors'];

    // random choice
    let result = Math.floor(Math.random() * choices.length);

    // display the computer's choice 
    document.getElementById("computer-choice").innerHTML = "The computer chose: " + choices[result];

    // returning the actual string chocie
    return choices[result];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        document.getElementById("result").innerHTML = 'Tied game!';
    }

    else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'paper') {
            document.getElementById("result").innerHTML = 'You lose! Rock loses to Paper.';
            computerScore++;
        }

        else if (computerSelection.toLowerCase() == 'scissors') {
            document.getElementById("result").innerHTML = 'You Win! Rock beats Scissors.';
            playerScore++;
        }
    }

    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            document.getElementById("result").innerHTML = 'You win! Paper beats Rock.';
            playerScore++;
        }

        else if (computerSelection.toLowerCase() == 'scissors') {
            document.getElementById("result").innerHTML = 'You lose! Paper loses to Scissors.';
            computerScore++;
        }
    }

    else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            document.getElementById("result").innerHTML = 'You lose! Scissors loses to Rock.';
            computerScore++;
        }

        else if (computerSelection.toLowerCase() == 'paper') {
            document.getElementById("result").innerHTML = 'You win! Scissors beat Paper.';
            playerScore++;
        }
    }

    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById("scoreboard").innerHTML = playerScore + "     -     " + computerScore;
}

function determineWinner() {
    const element = document.getElementById("weapon-choice");

    const winner = document.createElement('div');
    winner.id = 'winner';

    if (playerScore == 5) {
        winner.textContent = 'Congratulations! You win!';
    }

    else if (computerScore == 5) {
        winner.textContent = 'Boooo! The computer wins!';
    }

    element.after(winner);
}