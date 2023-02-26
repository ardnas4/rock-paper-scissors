function getComputerChoice() {
    // list of possible choices
    const choices = ['Rock', 'Paper', 'Scissors'];

    // random choice
    let result = Math.floor(Math.random() * choices.length);

    // returning the actual string chocie
    return choices[result];
}

function playRound(playerSelection, computerSelection) {
    let result = 0;

    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    console.log("Tied game!");
                    break;
                case "Paper":
                    console.log("You lose! Paper beats Rock");
                    break;
                case "Scissors":
                    console.log("You win! Rock beats Scissors");
                    result = 1;
                    break;
            }

            break;

        case ("Paper"):
            switch (computerSelection) {
                case "Rock":
                    console.log("You win! Paper beats Roco");
                    result = 1;
                    break;
                case "Paper":
                    console.log("Tied game!");
                    break;
                case "Scissors":
                    console.log("You lose! Scissors beat Paper");
                    break;
            }

            break;

        case ("Scissors"):
            switch (computerSelection) {
                case "Rock":
                    console.log("You lose! Rock beats Scissors");
                    break;
                case "Paper":
                    console.log("You win! Scissors beat Paper");
                    result = 1;
                    break;
                case "Scissors":
                    console.log("Tied game!");
                    break;
            }

            break;
    }

    return result;
}

function game() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice");
        let computerSelection = getComputerChoice();

        if (choices.includes(playerSelection)) {
            if (playRound(playerSelection, computerSelection) == 1) {
                score++;
            }
        }
    }

    if (score >= 3) {
        console.log("Congratulations! You win");
    }

    else {
        console.log("Sorry! You lose");
    }
}

game();