const game = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return game[Math.floor(Math.random() * game.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return "You Win and Computer Lose!! YAYYYY"

    }
    else {
        return "You Lose and Computer Wins! BOOO"
    }
}

console.log(getComputerChoice());


