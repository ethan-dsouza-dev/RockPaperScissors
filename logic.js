const WIN = "You Win! ";
const LOSE = "You Lose! ";
const ROCK_WINS = "Rock beats Scissors";
const PAPER_WINS = "Paper beats Rock";
const SCISSORS_WINS = "Scissors beats Paper";
const body = document.querySelector('body');
const resultDiv = document.querySelector('.result');
const btns = Array.from(document.querySelectorAll('button'));

// EFFECTS: returns a random selection between the 3 options of Rock, Paper, and Scissors.
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

// REQUIRES: two strings that represent the Player's selection, Computer's selection
// EFFECTS: produces true if user wins game, false if computer wins, and null if there's a tie.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        resultDiv.innerHTML = "It's a tie!";
        return null;
    }

    selectionPair = playerSelection + computerSelection;

    switch (selectionPair) {
        case "rockpaper":
            resultDiv.innerHTML = LOSE + PAPER_WINS;
            return false;
        
        case "rockscissors":
            resultDiv.innerHTML = WIN + ROCK_WINS;
            return true;

        case "paperrock":
            resultDiv.innerHTML = WIN + PAPER_WINS;
            return true;
        
        case "paperscissors":
            resultDiv.innerHTML = LOSE + SCISSORS_WINS;
            return false;

        case "scissorsrock":
            resultDiv.innerHTML = LOSE + ROCK_WINS;
            return false;

        default:
            resultDiv.innerHTML = WIN + SCISSORS_WINS;
            return true;
    }

}

function updateScoreboard(player, computer) {
    let scoreBoard = document.querySelector('.score');
    scoreBoard.textContent = `Score (P - C): ${player} - ${computer}`;
}

function displayEndMessage(player, computer) {
    // Positive score means player is winning
    // Negatice score means computer is winning
    const winner = document.createElement('h1');
    body.appendChild(winner);
    btns.forEach(btn => btn.removeEventListener('click', playRound));
    resultDiv.remove();
    if (player > computer) {
        winner.textContent = `Congrats, you are the Winner by ${player - computer} point/s`;
        return `Congrats, you are the Winner by ${player - computer} point/s`;
    } else if (player < computer) {
        winner.textContent = `Oh No! You lost by ${computer - player} point/s`;
        return `Oh No! You lost by ${computer - player} point/s`;
    } else {
        winner.textContent = `It was a tie!`;
        return `It was a tie!`;
    }
}

// EFFECTS: runs the game for 5 rounds, keeps score and reports a winner
function game() {
    let player = 0;
    let computer = 0;
    let round = 1;
    btns.forEach(btn => btn.addEventListener('click', function () {
        let userChoice = btn.getAttribute('id');
        let roundResult = playRound(userChoice, getComputerChoice());

        if (roundResult === true) {
            player++;
        } else if (roundResult === false) {
            computer++;
        } 

        console.log(round);
        updateScoreboard(player, computer);
        round++;
        if (round > 5) {
            displayEndMessage(player, computer);
            return;
        }
    }));

}

game();
