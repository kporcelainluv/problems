const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(getFibMod(line.split(" ")[0], line.split(" ")[1]));
  process.exit();
}

const findPattern = (number, mod) => {
  let fibNumbers = [0, 1];
  let i = 2;
  while (true) {
    let newFibNumberMod = (fibNumbers[i - 1] + fibNumbers[i - 2]) % mod;
    if (newFibNumberMod === 1 && fibNumbers[i - 1] === 0) {
      break;
    }
    fibNumbers.push(newFibNumberMod);
    i += 1;
  }
  fibNumbers.pop();
  return fibNumbers;
};

const getFibMod = (number, mod) => {
  const pattern = findPattern(number, mod);
  const index = number % pattern.length;
  return pattern[index];
};
module.exports = getFibMod;
