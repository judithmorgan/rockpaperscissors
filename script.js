const rockBtn = document.querySelector("#rock");
rockBtn.classList.add("playButtons");

// paper button
const paperBtn = document.querySelector("#paper");
paperBtn.classList.add("playButtons");

// scissors button
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.classList.add("playButtons");

// new game button
const newGameBtn = document.querySelector("#newGame");
newGameBtn.classList.add("newGameButton");

const roundScore = document.querySelector("#roundScore");
const finalScore = document.querySelector("#finalScore");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

//const and function returns computer Choice randomly 
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

/* function above can be written like this too below
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
*/

// set initial values for the game
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let scoreToReach = 5;


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return 'Player'

    }
    else {
        return 'Computer'
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie') {
        return "It's a Tie!"
    }
    else if (result === 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


// each button calls playRound when clicked
// each button can call endGame when scoreToReach = 5
rockBtn.addEventListener("click", function () {
    if (!isGameOver) {
      playRound("rock", computerPlay());
      endGame();
    }
  });
  
  paperBtn.addEventListener("click", function () {
    if (!isGameOver) {
      playRound("paper", computerPlay());
      endGame();
    }
  });
  
  scissorsBtn.addEventListener("click", function () {
    if (!isGameOver) {
      playRound("scissors", computerPlay());
      endGame();
    }
  });


  // restart the game by reseting score, clearing score log, and removing classes

newGameBtn.addEventListener("click", function () {
    isGameOver = false;
    playerScore = 0;
    computerScore = 0;
    roundScore.innerText = "";
    player.innerText = "0";
    computer.innerText = "0";
    finalScore.innerText = "";
    player.classList.remove("winner", "loser");
    computer.classList.remove("winner", "loser");
  });

