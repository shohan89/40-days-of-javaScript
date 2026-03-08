function rockPaperScissorGame() {
  console.log("Let's Start Rock, Paper, Scissor Game!");
  let userInput = prompt(
    "Enter your choice (rock, paper, scissor):",
  ).toLocaleLowerCase();
  console.log("Your choice is: " + userInput);
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  //   console.log(randomNumber);
  let computerInput;

  // defining computer input
  if (randomNumber === 1) {
    computerInput = "rock";
  } else if (randomNumber === 2) {
    computerInput = "paper";
  } else {
    computerInput = "scissor";
  }
  console.log("Computer's choice is: " + computerInput);

  // defining the game logic and determining the winner
  if (userInput === computerInput) {
    console.log("It's a tie!");
  } else if (
    (userInput === "rock" && computerInput === "scissor") ||
    (userInput === "paper" && computerInput === "rock") ||
    (userInput === "scissor" && computerInput === "paper")
  ) {
    console.log("Congratulations! You win!!");
  } else if (
    (userInput === "rock" && computerInput === "paper") ||
    (userInput === "paper" && computerInput === "scissor") ||
    (userInput === "scissor" && computerInput === "rock")
  ) {
    console.log("Oh No! Computer Wins!");
  }
}

// initialize the game
rockPaperScissorGame();
