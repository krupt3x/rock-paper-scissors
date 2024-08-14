const rock = document.querySelector('#rock-btn');
const paper = document.querySelector('#paper-btn');
const scissors = document.querySelector('#scissors-btn')

const scoreboard = document.querySelector('scoreboard')
const userScore = document.querySelector('#user-score')


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

    if (humanChoice === computerChoice) {
        return;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
    } else {
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

