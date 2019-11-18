const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    const a = parseInt(line.toString().split(" ")[0], 10);
    const b = parseInt(line.toString().split(" ")[1], 10);

    console.log(lcm(a, b));
    process.exit();
  }
}

function lcm(a, b) {
  const maxNum = a > b ? a : b;
  const smallNum = a < b ? a : b;

  for (let i = 1; i <= maxNum; i++) {
    let currentRes = smallNum * i;
    if (currentRes % maxNum === 0) {
      return currentRes;
    }
  }
}

module.exports = lcm;
