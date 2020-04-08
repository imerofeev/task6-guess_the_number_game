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

module.exports = { IsCorrectNumber };
