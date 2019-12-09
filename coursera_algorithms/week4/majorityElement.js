const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const amount = parseInt(line);

  rl.on("line", line => {
    const arr = line.split(" ").map(elm => Number(elm));
    console.log(majorityElm(amount, arr));
    process.exit();
  });
});

const majorityElm = (n, arr) => {
  const amountOfElms = n / 2;
  const sortedArr = arr.sort((a, b) => a - b);
  let currentAmount = 0;
  let currentNum = sortedArr[0];
  let maxAmount = 0;
  for (let i = 0; i < n; i++) {
    if (sortedArr[i] === currentNum) {
      currentAmount += 1;
    } else {
      if (currentAmount > maxAmount) {
        maxAmount = currentAmount;
      }
      currentAmount = 0;
      currentNum = sortedArr[i];
    }
  }
  if (maxAmount > amountOfElms) {
    return 1;
  } else {
    return 0;
  }
};
