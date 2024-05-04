function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    let compChoice = choices[randIndex];
    return compChoice;
}

console.log(getComputerChoice());

module.exports = getComputerChoice