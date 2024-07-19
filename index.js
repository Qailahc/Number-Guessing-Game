document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessInput = document.getElementById('guessInput');
    let guessButton = document.getElementById('guessButton');
    let message = document.getElementById('message');
    let restartButton = document.getElementById('restartButton');

    guessButton.addEventListener('click', () => {
        let userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a number between 1 and 100.';
            message.style.color = '#ff5722';
            return;
        }
        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
            message.style.color = '#4CAF50';
            guessButton.style.display = 'none';
            restartButton.style.display = 'block';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = '#ff5722';
        } else {
            message.textContent = 'Too high! Try again.';
            message.style.color = '#ff5722';
        }
        guessInput.value = '';
    });

    restartButton.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        message.textContent = '';
        guessButton.style.display = 'block';
        restartButton.style.display = 'none';
        guessInput.value = '';
    });
});
