let computerScore = 0, playerScore = 0;

function getComputerChoice() {
    // list of possible choices
    const choices = ['rock', 'paper', 'scissors'];

    // random choice
    let result = Math.floor(Math.random() * choices.length);

    // returning the actual string chocie
    return choices[result];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        document.getElementById("result").innerHTML = 'Tied game!';
    }

    else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'paper') {
            document.getElementById("result").innerHTML = 'You lose! Rock loses to paper.';
            computerScore++;
        }

        else if (computerSelection.toLowerCase() == 'scissors') {
            document.getElementById("result").innerHTML = 'You Win! Rock beats scissors.';
            playerScore++;
        }
    }

    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            document.getElementById("result").innerHTML = 'You win! Paper beats rock.';
            playerScore++;
        }

        else if (computerSelection.toLowerCase() == 'scissors') {
            document.getElementById("result").innerHTML = 'You lose! Paper loses to scissors.';
            computerScore++;
        }
    }

    else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            document.getElementById("result").innerHTML = 'You lose! Scissors loses to rock.';
            computerScore++;
        }

        else if (computerSelection.toLowerCase() == 'paper') {
            document.getElementById("result").innerHTML = 'You win! Scissors beat paper.';
            playerScore++;
        }
    }
}

function determineWinner() {
    const container = document.querySelector('body');
    const winner = document.createElement('div');
    winner.id = 'winner';

    if (playerScore == 5) {
        winner.textContent = 'The player has won 5 games first!';
    }

    else if (computerScore == 5) {
        winner.textContent = 'The computer has won 5 games first!';
    }

    container.appendChild(winner);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', event => {
        let computerSelection = getComputerChoice();
        let playerSelection = event.target.id;

        playRound(playerSelection, computerSelection);
        determineWinner();
    });
});