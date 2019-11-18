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
  num = num % 60;
  let first = 0;
  let second = 1;
  let third = 1;
  for (let i = 0; i <= num; i++) {
    third = first + second;
    if (third > 10) {
      third = third % 10;
    }
    first = second;
    second = third;
  }
  return third - 1;
};
