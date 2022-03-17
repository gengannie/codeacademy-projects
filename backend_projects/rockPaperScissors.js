// get user
// get computer
//compare

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } 
    console.log("invalid input");
  };
  function getComputerChoice () {
    // get whole number between 0 and 2
    // Math.random gives [0, 1)
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  
  }
  
  // rock > scissors
  // scissors > paper 
  // paper > rock
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie!';
    } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You win!';
      } else {
        return 'Computer Wins :(';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You win!';
      } else {
        return 'Computer Wins :(';
      }
    } else {
      // you have rock 
      if (computerChoice === 'scissors') {
        return 'You win!';
      } else {
        return 'Computer Wins :(';
      }
    }
  };
  
  function playGame () {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`computer rolled: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();