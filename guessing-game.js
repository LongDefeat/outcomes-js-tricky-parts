function guessingGame() {
  let answer = Math.floor(Math.random() * 100) + 1;
  let gameOver = false;
  let guesses = 0;

  return function (guess) {
    while (gameOver === false) {
      if (guess === answer) {
        guesses++;
        console.log(`You won the game in ${guesses}!`);
        gameOver = true;
        return console.log("You got it!");
      } else if (guess > answer) {
        guesses++;
        return console.log(`${guess} is too high!`);
      } else if (guess < answer) {
        guesses++;
        return console.log(`${guess} is too low!`);
      }
    }
  };
}
let game = guessingGame(3);

console.log(game(3));
console.log(game(2));
console.log(game(50));
module.exports = { guessingGame };
