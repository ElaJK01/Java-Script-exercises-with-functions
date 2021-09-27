

function rockPaperScissors(firstPlayer, secondPlayer){
    firstPlayer = firstPlayer.toLowerCase()
    secondPlayer = secondPlayer.toLowerCase()
    moveList = ["paper", "rock", "scissors"]
    if (moveList.includes(firstPlayer) && moveList.includes(secondPlayer)){

           
        if (firstPlayer == "rock" && secondPlayer == "rock" || firstPlayer == "scissors" && secondPlayer == "scissors" || 
        firstPlayer == "paper" && secondPlayer == "paper"){
            return "Draw"

        } else if (firstPlayer == "rock" && secondPlayer == "scissors" || firstPlayer == "scissors" && secondPlayer == "paper" ||
        firstPlayer == "paper" && secondPlayer == "rock"){
            return "First player wins!"

        } else {
            return "Second player wins!"
        }

    } else {
        return "Argument Error"
    }

}


console.log(rockPaperScissors("paper", "scissors")) // 'Second player wins'
console.log(rockPaperScissors("rock", "potatoes"))  // 'Argument error'
console.log(rockPaperScissors("glue", "scissors"))  // 'Argument error'
console.log(rockPaperScissors("rock", "rock"))      // 'Draw'
console.log(rockPaperScissors("ROCK", "rock"))      // 'Draw'
