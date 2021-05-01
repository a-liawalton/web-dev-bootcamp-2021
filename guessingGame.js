let max = parseInt(prompt("Welcome! Enter your max number:"));
// max must be a number, making it truthy, bc of parseInt. If max is not truthy/is falsy, continue to prompt user with correct entry for max.
while (!max) {
    max = parseInt(prompt("Please enter a valid number."));
}

// Set correctGuess to a random number
// Make sure to use () after a function (like random function on the Math object)
let correctGuess = Math.floor(Math.random() * max) + 1;
console.log(correctGuess);

let guess = parseInt(prompt("Enter your first guess:"));
// Track number of attempts
let attempts = 1;

// Run a loop that requests a prompt and uses if statements if the guess is too low or high

// While the guess is not correct
// The while condition is not changing guess to an integer until it loads itself. If guess was parsed to Int within the below if statements, it could never equal q?
while (guess !== correctGuess) {
    // if (guess === 'q') break;
    attempts++; // Add one more to attempt variable per attempt
    if (guess > correctGuess) { // This code/loop will only run if your guess is incorrect. If incorrect, there are only two logical options, either your answer is too low or it's too high.
        guess = parseInt(prompt("Too High. Guess again:"));
    } else {
        guess = parseInt(prompt("Too Low. Guess again:"));
    }
}

// This code will run if your guess is correct.
document.write(`<h1>Correct - you have won the game! It took you ${attempts} guesses.</h1>`);