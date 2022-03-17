let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 8 + 1); // [0, 8) -> [1, 9)
}

function compareGuesses (humanGuess, computerGuess, target) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('bad guess!');
    } 
    let human = Math.abs(humanGuess - target);
    let comp = Math.abs(computerGuess - target);
    if (human <= comp) { // human should win if tied
        return true;
    }
    return false;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}