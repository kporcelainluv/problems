const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const money = parseInt(line);
  const res = getMoneyChange1(money, [1, 3, 4]);
  console.log(res);
  process.exit();
});

const getMoneyChange = (money, coins) => {
  if (money === 0) {
    return 0;
  }
  let minNumCoins = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= coins.length; i++) {
    if (coins[i] <= money) {
      let numsCoins = getMoneyChange(money - coins[i], coins);
      if (numsCoins + 1 < minNumCoins) {
        minNumCoins = numsCoins + 1;
      }
    }
  }
  return minNumCoins;
};

const getMoneyChange2 = (money, coins, mem) => {
  if (money in mem) {
    return mem[money];
  }
  mem[money] = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= coins.length; i++) {
    if (coins[i] <= money) {
      let numsCoins = getMoneyChange2(money - coins[i], coins, mem) + 1;
      if (numsCoins < mem[money]) {
        mem[money] = numsCoins;
      }
    }
  }
  return mem[money];
};

const getMoneyChange1 = (money, coins) => {
  const mem = {
    0: 0
};
  return getMoneyChange2(money, coins, mem);
};
