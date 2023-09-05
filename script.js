const OUTCOMES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const computerSelection =
    OUTCOMES[Math.floor(Math.random() * OUTCOMES.length)];
  //Math.floor rounds the number to the closest(Smaller) integer
  //Math.random returns a value from 0-1 (1 not included)

  return computerSelection;
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
  } else {
    alert(`You win! Computer choose ${computerInput}`);
  }
}
