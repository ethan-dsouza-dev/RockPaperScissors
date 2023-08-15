const WIN = "You Win! ";
const LOSE = "You Lose! ";
const ROCK_WINS = "Rock beats Scissors";
const PAPER_WINS = "Paper beats Rock";
const SCISSORS_WINS = "Scissors beats Paper";
const resultDiv = document.querySelector('.result');

// EFFECTS: returns a random selection between the 3 options of Rock, Paper, and Scissors.
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length);
    console.log(options[choice]);
    return options[choice];
}

// REQUIRES: two strings that represent the Player's selection, Computer's selection
// EFFECTS: produces the result of a round of the game with the given selections
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        resultDiv.innerHTML = "It's a tie!";
    }

    selectionPair = playerSelection + computerSelection;
    console.log(selectionPair);

    switch (selectionPair) {
        case "rockpaper":
            resultDiv.innerHTML = LOSE + PAPER_WINS;
            return LOSE + PAPER_WINS;
        
        case "rockscissors":
            resultDiv.innerHTML = WIN + ROCK_WINS;
            return WIN + ROCK_WINS;

        case "paperrock":
            resultDiv.innerHTML = WIN + PAPER_WINS;
            return WIN + PAPER_WINS;
        
        case "paperscissors":
            resultDiv.innerHTML = LOSE + SCISSORS_WINS;
            return LOSE + SCISSORS_WINS;

        case "scissorsrock":
            resultDiv.innerHTML = LOSE + ROCK_WINS;
            return LOSE + ROCK_WINS;

        default:
            resultDiv.innerHTML = WIN + SCISSORS_WINS;
            return WIN + SCISSORS_WINS;
    }

}

// EFFECTS: runs the game for 5 rounds, keeps score and reports a winner
function game() {
    let userChoice;
    let score = 0;

    // Positive score means player is winning
    // Negatice score means computer is winning
    if (score > 0) {
        return `Congrats, you are the Winner by ${score} point/s`
    } else if (score < 0) {
        return `Oh No! You lost by ${score * -1} point/s`
    } else {
        return `It was a tie!`
    }
}

const btns = Array.from(document.querySelectorAll('button'));
    console.log(btns);
    btns.forEach(btn => btn.addEventListener('click', function () {
        userChoice = btn.getAttribute('id');
        console.log(userChoice);
        playRound(userChoice, getComputerChoice());
    }));

