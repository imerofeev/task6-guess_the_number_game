function Game(Moves, Questions, IsCorrectNumber) {
  this.Moves = new Moves();
  this.Questions = new Questions();
  this.IsCorrectNumber = new IsCorrectNumber(rnd(1, 50));

  this.userNumber = "";

  this.start = async function() {
    console.log("Let's play a game.");
    console.log("I made a number from 0 to 50.");
    console.log("Guess it in 10 moves.");
    let { userNumber } = this;
    while (this.Moves.checkMoves()) {
      userNumber = await this.Questions.askQuestion("Enter your variant of number: ");
      if (this.IsCorrectNumber.checkCorrectNumber(Number(userNumber))) {
        this.Questions.inputOutput.close();
      }
      this.Moves.addMove();
    }
    this.Questions.inputOutput.close();
  };
}

const rnd = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

module.exports = { Game };
