const getComputerChoice = require('../index');

test('returns rock paper or scissors randomly', () => {
    const choie = getComputerChoice();
    expect(choie).toMatch(/rock|paper|scissors/)
});