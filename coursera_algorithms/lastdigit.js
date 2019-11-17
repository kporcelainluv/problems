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
  let first = 0;
  let second = 1;
  let sum;
  let fibsum = 0;
  for (let i = 1; i <= num; i++) {
    sum = (first + second) % 10;
    second = first;
    first = sum;
    fibsum += sum;
    fibsum = fibsum % 10;
  }
  return fibsum;
};
