/* eslint-disable no-console */
function rockPaperScissors(firstPlayerChoice, secondPlayerChoice) {
  const firstPlayer = firstPlayerChoice.toLowerCase();
  const secondPlayer = secondPlayerChoice.toLowerCase();
  const moveList = ['paper', 'rock', 'scissors'];
  if (moveList.includes(firstPlayer) && moveList.includes(secondPlayer)) {
    if ((firstPlayer === 'rock' && secondPlayer === 'rock') || (firstPlayer === 'scissors' && secondPlayer === 'scissors')
            || (firstPlayer === 'paper' && secondPlayer === 'paper')) {
      return 'Draw';
    } if ((firstPlayer === 'rock' && secondPlayer === 'scissors') || (firstPlayer === 'scissors' && secondPlayer === 'paper')
            || (firstPlayer === 'paper' && secondPlayer === 'rock')) {
      return 'First player wins!';
    }
    return 'Second player wins!';
  }
  return 'Argument Error';
}

console.log(rockPaperScissors('paper', 'scissors')); // 'Second player wins'
console.log(rockPaperScissors('rock', 'potatoes')); // 'Argument error'
console.log(rockPaperScissors('glue', 'scissors')); // 'Argument error'
console.log(rockPaperScissors('rock', 'rock')); // 'Draw'
console.log(rockPaperScissors('ROCK', 'rock')); // 'Draw'
