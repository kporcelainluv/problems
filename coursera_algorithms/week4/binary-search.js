const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.once("line", line => {
  const arr = line
    .toString()
    .split(" ")
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  rl.once("line", line => {
    const keys = line
      .toString()
      .split(" ")
      .slice(1)
      .map(Number);
    const result = [];

    for (let key of keys) {
      result.push(binarySearch(arr, key));
    }
    const res = result.join(" ");
    const maxLength = 50000;

    for (let i = 0; i < res.length; i += maxLength) {
      process.stdout.write(res.slice(i, i + maxLength));
    }

    process.stdout.write("\n");
    process.exit();
  });
});

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let midIndex;
  let midElement;

  while (start <= end) {
    midIndex = start + Math.floor((end - start) / 2);
    midElement = arr[midIndex];

    if (midElement < key) {
      start = midIndex + 1;
    } else if (midElement > key) {
      end = midIndex - 1;
    } else if (midElement === key) {
      return midIndex;
    }
  }

  return -1;
}

module.exports = binarySearch;
