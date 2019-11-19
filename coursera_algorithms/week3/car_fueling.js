const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const maxDuration = parseInt(line);
  let miles = 0;
  let stopsAmount = 0;
  let stopsVals = [];
  let count = 0;

  rl.on("line", line => {
    if (count === 0) {
      miles = parseInt(line);
    }
    if (count === 1) {
      stopsAmount = parseInt(line);
    }
    if (count === 2) {
      stopsVals = line.split(" ").map(elm => Number(elm));
    }

    if (++count === 3) {
      console.log(carFueling(maxDuration, miles, stopsAmount, stopsVals));
      process.exit();
    }
  });
});

function carFueling(duration, miles, stopsAmount, stopsVals) {
  let sortedStopsVals = stopsVals.sort((a, b) => a - b);
  sortedStopsVals.unshift(0);
  sortedStopsVals.push(duration);
  let refillsAmount = 0;
  let currentRefill = 0;
  let maxDuration = sortedStopsVals.length - 1;
  let lastRefill;
  while (currentRefill <= maxDuration) {
    lastRefill = currentRefill;

    while (
      currentRefill <= maxDuration &&
      stopsVals[currentRefill + 1] - stopsVals[lastRefill] < miles
    ) {
      currentRefill += 1;
    }
    if (currentRefill < maxDuration) {
      refillsAmount += 1;
    } else {
      return refillsAmount;
    }
    if (currentRefill === lastRefill) {
      return -1;
    }
  }
}

module.exports = carFueling;
