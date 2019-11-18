const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const [itemsCount, knapsackCapacity] = line
    .toString()
    .split(" ")
    .map(Number);
  const itemsVals = [];
  let count = 0;

  rl.on("line", line => {
    const [v, w] = readLine(line);
    itemsVals.push([v, w]);

    if (++count >= itemsCount) {
      console.log(max(itemsCount, knapsackCapacity, itemsVals));
      process.exit();
    }
  });
});

function readLine(line) {
  const v = parseInt(line.toString().split(" ")[0], 10);
  const w = parseInt(line.toString().split(" ")[1], 10);

  return [v, w];
}

function max(count, capacity, itemsVals) {
  const sorteditemsVals = itemsVals.sort((a, b) => {
    if (a[0] / b[0] > a[1] / b[1]) {
      return -1;
    } else if (a[0] / b[0] < a[1] / b[1]) {
      return 1;
    }
    return 0;
  });
  let index = 0;
  let moneyValue = 0;
  while (index < sorteditemsVals.length) {
    let [value, weight] = sorteditemsVals[index];

    value = parseFloat(value);
    if (capacity >= weight) {
      moneyValue += value;
      capacity -= weight;
    } else {
      const valuePerKg = value / weight;
      while (weight > 0 && capacity > 0) {
        weight -= 1;
        capacity -= 1;
        moneyValue += valuePerKg;
      }
    }
    index += 1;
  }
  return moneyValue.toFixed(4);
}

module.exports = max;
