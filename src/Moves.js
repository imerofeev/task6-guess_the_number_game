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

module.exports = { Moves };
