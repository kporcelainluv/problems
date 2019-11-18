const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(
    getSumOfLastFibNum(
      parseInt(line.split(" ")[0]),
      parseInt(line.split(" ")[1])
    )
  );
  process.exit();
}

const getSumOfLastFibNum = (start, finish) => {
  start = start % 60;
  finish = finish % 60;
  [start, finish] = start < finish ? [start, finish] : [finish, start];
  let first = 0;
  let second = 1;
  let third;
  let startingValue = 0;

  for (let i = 2; i <= finish + 2; i++) {
    third = (first + second) % 10;
    if (i === start + 1) {
      startingValue = third;
    }
    first = second;
    second = third;
  }

  let fibStart = 0;
  if (start === 0) {
    fibStart = 0;
  } else {
    fibStart = startingValue - 1;
  }
  const fibEnd = second - 1;

  const res = fibEnd - fibStart;
  const finalRes = res >= 0 ? res : 10 + res;

  return finalRes % 10;
};
