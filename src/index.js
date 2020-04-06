const readline = require("readline");

function inputOutput() {
  this.inputOutput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

function Moves(gameMove = 10) {
  this.currentMove = 0;
  this.gameMove = gameMove;
}

Moves.prototype.addMove = function() {
  this.currentMove += 1;
};

Moves.prototype.checkMoves = function() {
  if (this.currentMove < this.gameMove) {
    return true;
  }
  console.log("Unfortunately, the moves in the game are over.");
  return false;
};

const rnd = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function Questions() {
  inputOutput.call(this);
  const userNumbers = [];

  this.askQuestion = function(q) {
    return new Promise(res => {
      this.inputOutput.question(q, userNumber => {
        let newNumber = parseInt(userNumber, 10);
        userNumbers.push(newNumber);
        res(newNumber);
      });
    });
  };
}

function IsCorrectNumber(correctNumber) {
  this.correctNumber = correctNumber;
}

IsCorrectNumber.prototype.checkCorrectNumber = function(userNumber) {
  if (userNumber < this.correctNumber) {
    console.log("Your number is less, than necessary");
    return false;
  }
  if (userNumber > this.correctNumber) {
    console.log("Your number is more, than necessary");
    return false;
  }
  console.log("Congratulations, you won!");
  process.exit();
};

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

const game = new Game(Moves, Questions, IsCorrectNumber);

(function main() {
  game.start();
})();
