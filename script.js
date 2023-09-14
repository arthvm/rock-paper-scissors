/**************************************************GENERAL VARIABLES**************************************************/

const INITGAMEROUNDS = 1,
  INITCURRENTROUND = 1,
  INITPLAYERSCORE = 0,
  INITCOMPUTERSCORE = 0;

let gameRounds = 1,
  currentRound = 1,
  playerScore = 0,
  computerScore = 0;

/**************************************************GAME MENU VARIABELS**************************************************/

const roundButtons = document.querySelectorAll(".round-btn");
const downRoundButton = document.querySelector("#round-down");
const roundsNumber = document.querySelector(".rounds-number");

/**************************************************GAME VARIABLES**************************************************/

const OUTCOMES = ["rock", "paper", "scissors"];
const roundDisplay = document.querySelector(".round-display");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const resultDisplay = document.querySelector(".result-display");

/************************************************** RESULT VARIABLES **************************************************/

const finalResultDisplay = document.querySelector(".final-result-text");

/**************************************************GENERAL FUNCTIONS**************************************************/

//PAGE SWITCHING********************************************************
window.onload = () => {
  const tabSwitchers = document.querySelectorAll("[data-switcher]");

  for (let i = 0; i < tabSwitchers.length; i++) {
    const tabSwitcher = tabSwitchers[i];
    const pageId = tabSwitcher.dataset.tab;

    tabSwitcher.addEventListener("click", () => {
      SwitchPage(pageId);
    });
  }
};

function SwitchPage(page_id) {
  const currentPage = document.querySelector(".pages .page.is-active");
  currentPage.classList.remove("is-active");

  const nextPage = document.querySelector(
    `.pages .page[data-page="${page_id}"]`
  );
  nextPage.classList.add("is-active");
}

//PLAYER INPUT********************************************************

const choiceSelectors = document.querySelectorAll("[data-choice_selector]");

for (let i = 0; i < choiceSelectors.length; i++) {
  const choiceSelector = choiceSelectors[i];
  const choiceType = choiceSelector.dataset.type;

  choiceSelector.addEventListener("click", () => {
    playRound(choiceType, getComputerChoice());
  });
}

/**************************************************GAME MENU SECTION**************************************************/
roundButtons.forEach((button) => {
  button.addEventListener("click", getRoundButtonsAction);
});

function getRoundButtonsAction(e) {
  let buttonId = e.target.id;
  if (buttonId == "round-up") {
    gameRounds++;
  } else if (buttonId == "round-down" && gameRounds != 1) {
    gameRounds--;
  }

  //Not best practice, I know. Need to study more thought to know how to check this every time
  if (gameRounds == 1) {
    downRoundButton.classList.add("deactivate");
  } else {
    downRoundButton.classList.remove("deactivate");
  }

  roundsNumber.textContent = gameRounds;
}

/**************************************************GAME SECTION**************************************************/
function whoWinsAgainst(input) {
  switch (input) {
    case "rock":
      return "paper";
    case "paper":
      return "scissors";
    case "scissors":
      return "rock";
  }
}

function getComputerChoice() {
  const computerSelection =
    OUTCOMES[Math.floor(Math.random() * OUTCOMES.length)];
  //Math.floor rounds the number to the closest(Smaller) integer
  //Math.random returns a value from 0-1 (1 not included)

  return computerSelection;
}

function setDisplay(round) {
  roundDisplay.textContent = `Round ${round}`;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function playRound(playerInput, computerInput) {
  const playerLoseChoice = whoWinsAgainst(playerInput);

  if (computerInput === playerInput) {
    resultDisplay.dataset.result = "tie";
    resultDisplay.textContent = "It's a tie!";
  } else if (computerInput === playerLoseChoice) {
    resultDisplay.dataset.result = "lose";
    resultDisplay.textContent = `You lost! Computer choose ${computerInput}`;
    ++computerScore;
  } else if (playerInput == null) {
    return;
  } else {
    resultDisplay.dataset.result = "win";
    resultDisplay.textContent = `You win! Computer choose ${computerInput}`;
    ++playerScore;
  }

  currentRound++;
  if (currentRound > gameRounds) {
    checkResults();
    resetValues();
    SwitchPage(3);
  } else {
    setDisplay(currentRound);
  }
}

/**************************************************RESULT SECTION**************************************************/

function checkResults() {
  if (playerScore > computerScore) {
    finalResultDisplay.dataset.final_result = "win";
    finalResultDisplay.textContent = `You won the game! You got ${playerScore} point(s) while the computer got ${computerScore}.`;
  } else if (playerScore === computerScore) {
    finalResultDisplay.textContent = `The game tied! You and the computer got ${playerScore} point(s).`;
  } else {
    finalResultDisplay.dataset.final_result = "lose";
    finalResultDisplay.textContent = `You lost the game! The computer got ${computerScore} point(s) while you got ${playerScore}.`;
  }
}

function resetValues() {
  gameRounds = INITGAMEROUNDS;
  currentRound = INITCURRENTROUND;
  playerScore = INITPLAYERSCORE;
  computerScore = INITCOMPUTERSCORE;
  roundsNumber.textContent = gameRounds;
  downRoundButton.classList.add("deactivate");
}
