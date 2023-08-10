
// EFFECTS: returns a random selection between the 3 options of Rock, Paper, and Scissors.
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length);

    return options[choice];
}

// REQUIRES: two strings that represent the Player's selection, Computer's selection
// EFFECTS: produces the result of a round of the game with the given selections
function playRound(playerSelection, computerSelection) {
    const ROCK_WINS = "Rock beats Scissors";
    const PAPER_WINS = "Paper beats Rock";
    const SCISSORS_WINS = "Scissors beats Paper";
    const WIN = "You Win! "
    const LOSE = "You Lose! "

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    selectionPair = playerSelection + computerSelection;

    switch (selectionPair) {
        case "rockpaper":
            return LOSE + PAPER_WINS;
        
        case "rockscissors":
            return WIN + ROCK_WINS;

        case "paperrock":
            return WIN + PAPER_WINS;
        
        case "paperscissors":
            return LOSE + SCISSORS_WINS;

        case "scissorsrock":
            return LOSE + ROCK_WINS;

        case "scissorspaper":
            return WIN + SCISSORS_WINS;
    }


}