let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessInput = document.getElementById("guess");
let feedback = document.getElementById("feedback");
let attemptsText = document.getElementById("attempts");
let restartButton = document.getElementById("restart");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  let userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    feedback.style.color = "red";
    return;
  }

  attempts++;
  if (userGuess === targetNumber) {
    feedback.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
    feedback.style.color = "green";
    attemptsText.textContent = "";
    restartButton.style.display = "block";
    submitButton.disabled = true;
  } else if (userGuess > targetNumber) {
    feedback.textContent = "Too high! Try again.";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Too low! Try again.";
    feedback.style.color = "orange";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
});

restartButton.addEventListener("click", () => {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  feedback.textContent = "";
  attemptsText.textContent = "";
  restartButton.style.display = "none";
  submitButton.disabled = false;
});
