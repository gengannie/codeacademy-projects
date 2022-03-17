// rock > scissors
// scissors > paper 
// paper > rock

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