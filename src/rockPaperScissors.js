

function rockPaperScissors(firstPlayer, secondPlayer){
    firstPlayer = firstPlayer.toLowerCase()
    secondPlayer = secondPlayer.toLowerCase()
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
rockPaperScissors("PAPER", "scissors") // Second player wins
