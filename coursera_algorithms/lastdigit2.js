const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(getSumOfLastFibNum(line.split(" ")[0], line.split(" ")[1]));
  process.exit();
}

const getSumOfLastFibNum = (start, finish) => {
  let first = 0;
  let second = 1;
  let sum;
  let fibsum = 0;
  for (let i = 1; i <= finish; i++) {
    sum = (first + second) % 10;
    second = first;
    first = sum;
    if (i >= start) {
      fibsum += sum;
      fibsum = fibsum % 10;
    }
  }
  return fibsum;
};
