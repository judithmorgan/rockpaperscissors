const game = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return game[Math.floor(Math.random() * game.length)];
}

console.log(getComputerChoice());


 