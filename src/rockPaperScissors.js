

function rockPaperScissors(firstPlayer, secondPlayer){
    if (firstPlayer == "rock" && secondPlayer == "rock" || firstPlayer == "scissors" && secondPlayer == "scissors" || 
    firstPlayer == "paper" && secondPlayer == "paper"){
        console.log("Draw")
    } else if (firstPlayer == "rock" && secondPlayer == "scissors" || firstPlayer == "scissors" && secondPlayer == "paper" ||
    firstPlayer == "paper" && secondPlayer == "rock"){
        console.log('First player wins!')
    } else {
        console.log('Second player wins!')
    }

}

rockPaperScissors("rock", "rock")      // Draw
rockPaperScissors("rock", "paper")     // Second player wins
rockPaperScissors("rock", "scissors")  // First player wins
rockPaperScissors("paper", "scissors") // Second player wins
