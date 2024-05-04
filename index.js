// randomly generates rock, paper, scissors for the computer. 
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    let compChoice = choices[randIndex];
    return compChoice.toLowerCase();
}

// takes the human player's choice and returns it back in lower case.
function getHumanChoice() {
    const choice = prompt("enter your choice: rock, paper, scissors");
    return choice.toLowerCase();
}

console.log(getComputerChoice());
console.log(getHumanChoice())
module.exports = getComputerChoice