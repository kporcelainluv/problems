const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  const summands = differentSummands(parseInt(line));
  const length = summands.length;
  console.log(length);
  console.log(summands.join(" "));
  process.exit();
}

const differentSummands = n => {
  const summands = [];
  let index = 1;
  let candiesAmount = n;
  let lastCandiesAmount = 0;
  let lastAddedIndex = 0;
  while (candiesAmount > 0) {
    lastCandiesAmount = candiesAmount;
    if (candiesAmount - index >= 0) {
      summands.push(index);
      lastAddedIndex = index;
      candiesAmount -= index;
    }
    if (lastCandiesAmount === candiesAmount) {
      summands.pop();
      candiesAmount += lastAddedIndex;
      index -= 1;
    }
    index++;
  }
  return summands;
};
differentSummands(2);
