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

    console.log(gcd(a, b));
    process.exit();
  }
}

function gcd(a, b) {
  let first = a > b ? a : b;
  let second = a < b ? a : b;
  let third;
  while (true) {
    third = second;
    second = first % second;
    first = third;
    if (second === 0) {
      break;
    }
  }

  return first;
}

module.exports = gcd;
