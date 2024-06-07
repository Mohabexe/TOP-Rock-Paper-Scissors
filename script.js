const choices = ["rock", "paper", "scissors"]
const playerScore = document.querySelector("#player")
const computerScore = document.querySelector("#computer")
const result = document.querySelector("#result")

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(computerChoice)
  if (playerChoice === computerChoice) {
    result.textContent = "It's a draw!"
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent = "You win!"
    playerScore.textContent = parseInt(playerScore.textContent) + 1
  } else {
    result.textContent = "You lose!"
    computerScore.textContent = parseInt(computerScore.textContent) + 1
  }
}
