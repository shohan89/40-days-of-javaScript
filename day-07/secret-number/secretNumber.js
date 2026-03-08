/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to reach to this right guess.
 */
function secretNumber() {
  console.log("Let's play a number guessing game!");

  // generate a random number between 1 - 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // initialize attempts
  let attempts = 0;

  // loop until user guesses the right number
  while (true) {
    let userGuess = parseInt(prompt("Enter a number between 1 - 10:"));

    // check if user input is valid or not
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      console.log("Invalid input! Please enter a number between 1 - 10.");
      continue;
    }

    // increment attempts
    attempts++;

    // check if user guess is correct
    if (userGuess === randomNumber) {
      console.log(
        `Congratulations! You guessed the right number ${randomNumber} in ${attempts} attempts!`,
      );

      const playAgain = prompt("Do you want to play again? (yes/no)");
      if (playAgain.toLocaleLowerCase() === "yes") {
        secretNumber();
      } else {
        console.log("Thank you for playing! Goodbye!");
      }
      break;
    }

    // check if user guess is lower or higher
    else if (userGuess < randomNumber) {
      console.log("Your guess is too low. Try again!");
    } else {
      console.log("Your guess is too high. Try again!");
    }
  }
}

// initialize the game
secretNumber();
