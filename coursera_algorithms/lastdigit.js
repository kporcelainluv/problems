const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(getSumOfLastFibNum(parseInt(line)));
  process.exit();
}

const getSumOfLastFibNum = num => {
  let first = 1;
  let second = 1;
  let third = 1;
  for (let i = 0; i <= num - 1; i++) {
    third = (first + second) % 10;
    first = second;
    second = third;
  }
  return third - 1;
};
