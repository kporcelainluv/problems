const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  // console.log(findPattern(line.split(" ")[0], line.split(" ")[1]));
  console.log(getFibMod(239, 1000));
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
    third = second + first;
    second = first;
    first = third;

    index += 1;
  }
  return first;
}

const findPattern = (number, mod) => {
  let res = [0, 1];
  for (let i = 2; i <= number; i++) {
    let currentMod = fib(i) % mod;
    if (currentMod === 0 && fib(i + 1) % mod === 1) {
      break;
    }
    res.push(currentMod);
  }
  return res;
};

const getFibMod = (number, mod) => {
  const res = findPattern(number, mod);
  console.log({ res: new Set(res) });
  console.log("length", res.length);
  const numberMod = Math.floor(number / res.length);
  console.log({ numberMod });
  const updatedRes = number - numberMod * res.length;
  console.log({ updatedRes });
  const answer = fib(updatedRes) % mod;
  console.log(answer);
};
module.exports = getFibMod;
