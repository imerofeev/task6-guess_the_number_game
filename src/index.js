const { Moves } = require("./Moves");
const { Questions } = require("./Questions");
const { Game } = require("./Game");
const { IsCorrectNumber } = require("./IsCorrectNumber");
const { rnd } = require("./Randomizer");

this.userNumber = "";

const game = new Game(
  (this.Moves = new Moves()),
  (this.Questions = new Questions()),
  (this.IsCorrectNumber = new IsCorrectNumber(rnd(1, 50)))
);

(function main() {
  game.start();
})();
