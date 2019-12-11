const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const amount = parseInt(line);

  rl.on("line", line => {
    const arr = line.split(" ").map(elm => parseInt(elm));
    console.log(randomized_quick_sort(arr, 0, amount - 1));
    process.exit();
  });
});

const swap = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const partition3 = (arr, l, r) => {
  const x = arr[l];
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < x) {
      j += 1;
      swap(arr, i, j);
    }
  }
  swap(arr, l, j);

  let k = j;
  for (let m = j + 1; m <= r; m++) {
    if (arr[m] === x) {
      k += 1;
      swap(arr, k, m);
    }
  }

  return [j, k];
};

const randomized_quick_sort = (arr, l, r) => {
  if (l >= r) {
    return arr;
  }
  const k = getRandomArbitrary(l, r);
  swap(arr, l, k);
  const [m1, m2] = partition3(arr, l, r);
  randomized_quick_sort(arr, l, m1 - 1);
  randomized_quick_sort(arr, m2 + 1, r);
  return arr.join(" ");
};
