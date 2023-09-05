const OUTCOMES = ["Rock", "Paper", "Scissors"];
let gameRounds = 0,
  playerScore = 0,
  computerScore = 0;

function getComputerChoice() {
  const computerSelection =
    OUTCOMES[Math.floor(Math.random() * OUTCOMES.length)];
  //Math.floor rounds the number to the closest(Smaller) integer
  //Math.random returns a value from 0-1 (1 not included)

  return computerSelection;
}

function getPlayerChoice() {
  const playerSelection = prompt("Rock, Paper or Scissors?");

  const firtsLetterCap = playerSelection.charAt(0).toUpperCase();
  const stringRemainder = playerSelection.slice(1).toLowerCase().trim();
  const playerChoiceNoCase = firtsLetterCap.concat("", stringRemainder);

  return playerChoiceNoCase;
}

function whoWinsAgainst(input) {
  switch (input) {
    case "Rock":
      return "Paper";
    case "Paper":
      return "Scissors";
    case "Scissors":
      return "Rock";
  }
}

function playRound(playerInput, computerInput) {
  const playerLoseChoice = whoWinsAgainst(playerInput);

  if (computerInput == playerInput) {
    alert("It's a tie!");
  } else if (computerInput === playerLoseChoice) {
    alert(`You lost! Computer choose ${computerInput}`);
    computerScore++;
  } else {
    alert(`You win! Computer choose ${computerInput}`);
    playerScore++;
  }
}

function game() {
  gameRounds = parseInt(prompt("How many rounds do you want to play?"));

  for (let i = 1; i <= gameRounds; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }

  checkResults();
}

function checkResults() {
  if (playerScore > computerScore) {
    alert(
      `You won the game! You got ${playerScore} point(s) while the computer got ${computerScore}.`
    );
  } else if (playerScore === computerScore) {
    alert(`The game tied! You and the computer got ${playerScore} point(s).`);
  } else {
    alert(
      `You lost the game! The computer got ${computerScore} point(s) while you got ${playerScore}.`
    );
  }
}

game();
