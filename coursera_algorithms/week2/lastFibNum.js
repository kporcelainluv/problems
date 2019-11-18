const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(fib(parseInt(line, 10)));
  process.exit();
}

function fib(num) {
  if (num < 2) {
    return num;
  }
  let first = 1;
  let second = 1;
  let index = 2;
  let third;
  while (index < num) {
    third = (second + first) % 10;
    second = first;
    first = third;

    index += 1;
  }
  let sibString = first.toString();
  return sibString[sibString.length - 1];
}

module.exports = fib;
