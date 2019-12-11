const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const amount = parseInt(line);
  let arr = [];
  rl.once("line", line => {
    arr = line.split(" ").map(elm => parseInt(elm));
    const res = randomized_quick_sort(arr, 0, amount - 1).join(" ");
    const maxLength = 50000;

    for (let i = 0; i < res.length; i += maxLength) {
      process.stdout.write(res.slice(i, i + maxLength));
    }
    process.stdout.write("\n");
    process.exit();
  });
});

const swap = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};

// function getRandomArbitrary(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

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
  while (l < r) {
    const [m1, m2] = partition3(arr, l, r);
    if (m1 - l < r - m2) {
      randomized_quick_sort(arr, l, m1 - 1);
      l = m2 + 1;
    } else {
      randomized_quick_sort(arr, m2 + 1, r);
      r = m1 - 1;
    }
  }
  return arr;
};

// const mySort = arr => {
//   return randomized_quick_sort(arr, 0, arr.length - 1);
// };
//
// test("1", () => {
//   expect(mySort([2, 3, 9, 2, 2])).toStrictEqual([2, 2, 2, 3, 9]);
//   expect(mySort([2, 3, 9, 2, 9])).toStrictEqual([2, 2, 3, 9, 9]);
// });
