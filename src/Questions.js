function Questions() {
  inputOutput.call(this);

  this.askQuestion = function(q) {
    const userNumbers = [];
    return new Promise(res => {
      this.inputOutput.question(q, userNumber => {
        let newNumber = parseInt(userNumber, 10);
        userNumbers.push(newNumber);
        res(newNumber);
      });
    });
  };
}

const readline = require("readline");

function inputOutput() {
  this.inputOutput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

module.exports = { Questions };
