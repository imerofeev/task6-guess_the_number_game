function Game(Moves, Questions, IsCorrectNumber) {
  this.start = async function() {
    console.log("Let's play a game.");
    console.log("I made a number from 0 to 50.");
    console.log("Guess it in 10 moves.");
    let { userNumber } = this;
    while (Moves.checkMoves()) {
      userNumber = await Questions.askQuestion("Enter your variant of number: ");
      if (IsCorrectNumber.checkCorrectNumber(Number(userNumber))) {
        Questions.close();
      }
      Moves.addMove();
    }
    Questions.close();
  };
}

module.exports = { Game };
