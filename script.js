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

// each button calls playRound when clicked
// each button can call endGame when scoreToReach = 5
rockBtn.addEventListener("click", function () {
    if (!isGameOver) {
        playRound("rock", getComputerChoice());
        endGame();
    }
});

paperBtn.addEventListener("click", function () {
    if (!isGameOver) {
        playRound("paper", getComputerChoice());
        endGame();
    }
});

scissorsBtn.addEventListener("click", function () {
    if (!isGameOver) {
        playRound("scissors", getComputerChoice());
        endGame();
    }
});



function playRound(playerSelection, computerSelection) {
    const newLi = document.createElement("li");
    newLi.classList.add("newLi");
    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
      roundScore.appendChild(newLi);
      computerScore++;
      computer.innerText = computerScore;
    } else if (
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
      roundScore.appendChild(newLi);
      playerScore++;
      player.innerText = playerScore;
    } else if (playerSelection === computerSelection) {
      newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`;
      roundScore.appendChild(newLi);
    }
  }