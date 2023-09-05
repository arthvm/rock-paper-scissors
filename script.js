const OUTCOMES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const computerSelection =
    OUTCOMES[Math.floor(Math.random() * OUTCOMES.length)];
  //Math.floor rounds the number to the closest(Smaller) integer
  //Math.random returns a value from 0-1 (1 not included)

  return computerSelection;
}
