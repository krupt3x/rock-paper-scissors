const getComputerChoice = require('../index');
const getHumanChoice = require('../index');

test('returns rock paper or scissors randomly', () => {
    const choie = getComputerChoice();
    expect(choie).toMatch(/rock|paper|scissors/)
});

test('takes users choice and returns it back', () => {
    const humanChoice = getHumanChoice();
    expect(humanChoice).toMatch(/rock|paper|scissors/);
});