const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn")

// randomly generates rock, paper, scissors for the computer. 
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    let compChoice = choices[randIndex];
    return compChoice.toLowerCase();
}

let round = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }

} round++;
if (round === 5) {
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
    // Reset scores and round counter for a new game
    humanScore = 0;
    computerScore = 0;
    round = 0;
}


rock.addEventListener('click', function () {
    playRound('rock');
});

paper.addEventListener('click', function () {
    playRound('paper');
});

scissors.addEventListener('click', function () {
    playRound('scissors');
});