// make global variables that keep track of the computer and player's score
let computerScore = 0, playerScore = 0;

// select the buttons (either rock, paper, or scissors)
const buttons = document.querySelectorAll('button');

// for each button, add an event listener that checks if the user clicked any of them
buttons.forEach((button) => {
    button.addEventListener('click', event => {
        // when button is clicked, we have to create an event response

        // first, check if anybody reached 5 points. If this is the case, that means the game has already ended
        // you should do NOTHING if the user clicks any buttons after the game ends
        if (computerScore == 5 || playerScore == 5) {
            return;
        }

        // otherwise, get the button id to determine the user's choice
        let playerSelection = button.getAttribute("id");
        // get the computer's choice 
        let computerSelection = getComputerChoice();

        // play the round to determine who won
        playRound(playerSelection, computerSelection);

        // checks if we have reached the end of the game. If we did, we will determine a winner!
        determineWinner();
    });
});

// function to get the computer's choice
function getComputerChoice() {
    // list of possible choices
    const choices = ['Rock', 'Paper', 'Scissors'];

    // randomly choose one of the options
    let result = Math.floor(Math.random() * choices.length);

    // display the computer's choice in the HTML
    document.getElementById("computer-choice").innerHTML = "The computer chose: " + choices[result];

    // return the computer's choice
    return choices[result];
}

// function to play the round and determine who won it
function playRound(playerSelection, computerSelection) {
    // if the player's choice is the same as the computer's, we have a tie!
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        // display the round's result as "tied game!" in HTML
        document.getElementById("result").innerHTML = 'Tied game!';
    }

    // if the player chose rock...
    else if (playerSelection.toLowerCase() == 'rock') {
        // they LOSE against paper!
        if (computerSelection.toLowerCase() == 'paper') {
            // display round's result in HTML
            document.getElementById("result").innerHTML = 'You lose! Rock loses to Paper.';
            // give a point to computer
            computerScore++;
        }

        // they WIN against scissors!
        else if (computerSelection.toLowerCase() == 'scissors') {
            document.getElementById("result").innerHTML = 'You win! Rock beats Scissors.';
            // give a point to player
            playerScore++;
        }
    }

    // if the player chose paper...
    else if (playerSelection.toLowerCase() == 'paper') {
        // they WIN against rock!
        if (computerSelection.toLowerCase() == 'rock') {
            document.getElementById("result").innerHTML = 'You win! Paper beats Rock.';
            playerScore++;
        }

        // they LOSE against scissors!
        else if (computerSelection.toLowerCase() == 'scissors') {
            document.getElementById("result").innerHTML = 'You lose! Paper loses to Scissors.';
            computerScore++;
        }
    }

    // if the player choice scissors...
    else if (playerSelection.toLowerCase() == 'scissors') {
        // they LOSE against rock!
        if (computerSelection.toLowerCase() == 'rock') {
            document.getElementById("result").innerHTML = 'You lose! Scissors loses to Rock.';
            computerScore++;
        }

        // they WIN against paper!
        else if (computerSelection.toLowerCase() == 'paper') {
            document.getElementById("result").innerHTML = 'You win! Scissors beat Paper.';
            playerScore++;
        }
    }

    // now update the scoreboard on the HTML so that we can physically keep track of results
    updateScoreboard();
}

// function that updates the scoreboard in HTML
function updateScoreboard() {
    // concatenate the player's score and the computer's score to the scoreboard
    document.getElementById("scoreboard").innerHTML = playerScore + "     -     " + computerScore;
}

// function that determines the winner 
function determineWinner() {
    let result;

    if (playerScore < 5 && computerScore < 5) {
        return;
    }

    // if the player won, set the proper winnerDiv text
    else if (playerScore == 5) {
        result = 'CONGRATULATIONS! YOU WIN! :)';
        document.getElementById("weapon-choice-text").style.color = result;
    }

    // if the computer won, set the proper winnerDiv text
    else if (computerScore == 5) {
        result = 'BOOOO! THE COMPUTER WINS! :(';
    }

    document.getElementById("weapon-choice-text").innerHTML = result;
    document.getElementById("weapon-choice-text").style.fontSize = "50px"
}