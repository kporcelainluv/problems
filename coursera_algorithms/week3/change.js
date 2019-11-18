const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(getMoneyChange(parseInt(line)));
  process.exit();
}
const getMoneyChange = num => {
  const moneyChange = [10, 5, 1];
  let coinsAmount = 0;
  let index = 0;
  while (num > 0) {
    const currentChangeAmount = moneyChange[index];

    if (num >= currentChangeAmount) {
      num -= currentChangeAmount;
      coinsAmount += 1;
    }
    if (currentChangeAmount > num) {
      index += 1;
    }
  }
  return coinsAmount;
};
