const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const slots = parseInt(line);

  let prices = [];
  let clicks = [];
  let count = 1;

  rl.on("line", line => {
    if (count === 1) {
      prices = [...line.split(" ").map(elm => parseInt(elm))];
    }
    if (count === 2) {
      clicks = [...line.split(" ").map(elm => parseInt(elm))];
    }

    if (++count === 3) {
      console.log(dotProduct(slots, prices, clicks));
      process.exit();
    }
  });
});

const dotProduct = (slots, clickPrices, clicksAmounts) => {
  const sortedClickPrices = clickPrices.sort((a, b) => b - a);
  const sortedClicksAmounts = clicksAmounts.sort((a, b) => b - a);

  let index = 0;
  let dotSum = 0;
  while (index < clickPrices.length) {
    dotSum += sortedClickPrices[index] * sortedClicksAmounts[index];
    index++;
  }
  return dotSum;
};

// dotProduct(1, [23], [39]);
// dotProduct(3, [1, 3, -5], [-2, 4, 1]);
