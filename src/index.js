const { Moves } = require("./Moves");
const { Questions } = require("./Questions");
const { Game } = require("./Game");
const { IsCorrectNumber } = require("./IsCorrectNumber");

const game = new Game(Moves, Questions, IsCorrectNumber);

(function main() {
  game.start();
})();
