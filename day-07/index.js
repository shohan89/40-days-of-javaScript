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
  //   if (randomNumber === 1) {
  //     computerInput = "rock";
  //   } else if (randomNumber === 2) {
  //     computerInput = "paper";
  //   } else {
  //     computerInput = "scissor";
  //   }
  //   console.log("Computer's choice is: " + computerInput);

  switch (randomNumber) {
    case 1:
      computerInput = "rock";
      break;
    case 2:
      computerInput = "paper";
      break;
    case 3:
      computerInput = "scissor";
      break;
  }
  console.log("Computer's choice is: " + computerInput);

  // defining the game logic and determining the winner
  //   if (userInput === computerInput) {
  //     console.log("It's a tie!");
  //   } else if (
  //     (userInput === "rock" && computerInput === "scissor") ||
  //     (userInput === "paper" && computerInput === "rock") ||
  //     (userInput === "scissor" && computerInput === "paper")
  //   ) {
  //     console.log("Congratulations! You win!!");
  //   } else if (
  //     (userInput === "rock" && computerInput === "paper") ||
  //     (userInput === "paper" && computerInput === "scissor") ||
  //     (userInput === "scissor" && computerInput === "rock")
  //   ) {
  //     console.log("Oh No! Computer Wins!");
  //   }
  switch (true) {
    case userInput === computerInput:
      // tie
      console.log("It's a tie!");
      break;
    case (userInput === "rock" && computerInput === "scissor") ||
      (userInput === "paper" && computerInput === "rock") ||
      (userInput === "scissor" && computerInput === "paper"):
      // user wins
      console.log("Congrats! You Win.");
      break;
    case (userInput === "rock" && computerInput === "paper") ||
      (userInput === "paper" && computerInput === "scissor") ||
      (userInput === "scissor" && computerInput === "rock"):
      // computer wins
      console.log("Oh no! Computer wins.");
      break;
  }
}

// initialize the game
rockPaperScissorGame();
