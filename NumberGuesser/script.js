let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return (Math.floor(Math.random() * 10));
}
// Determine absolute value distance between user or computer guess and the target number
const getAbsoluteDistance = (userGuess, autoGeneratedGuess) => {
  return Math.abs(userGuess - autoGeneratedGuess);
}
// Compares humans guess with computers guess, returns true if human wins or in the event of a tie. Winner is closest to target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  let computerDifference = (getAbsoluteDistance(computerGuess, targetGuess));
  let humanDifference = (getAbsoluteDistance(humanGuess, targetGuess));
  if ((humanDifference < computerDifference) || (humanDifference === computerDifference)) {
    return true;
  } else {
    return false;
  }
}
// Adds one to the winners score after each round
const updateScore = (roundWinner) => {
  switch(roundWinner) {
    case 'human':
    return humanScore += 1;
    break;
    case 'computer':
    return computerScore += 1;
  }
}
// Adds one to the round count after each round
const advanceRound = () => {
  return currentRoundNumber += 1;
}