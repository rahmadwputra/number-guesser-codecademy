let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return randomNumber = Math.floor(Math.random() * 10);
}

const compareGuesses = (userInput, compInput, secretNumber)=> {
  let userAbs = Math.abs(userInput - secretNumber);
  let compAbs = Math.abs(compInput - secretNumber);
  return userAbs <= compAbs;
}

const updateScore = (detWin) => {
  switch(detWin){
    case 'human':
      humanScore = humanScore + 1;
      break;
    case 'computer':
      computerScore = computerScore + 1;
      break;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}