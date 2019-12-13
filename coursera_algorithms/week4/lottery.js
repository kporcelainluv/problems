const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");
rl.once("line", line => {
  const [gapsAmount, numsAmount] = line.split(" ").map(elm => parseInt(elm));
  let gaps = [];
  let nums = [];

  rl.on("line", line => {
    if (gaps.length === gapsAmount) {
      nums = line.split(" ", numsAmount).map(elm => parseInt(elm));

      const res = getGapNum(gaps, nums);
      const maxLength = 50000;
      for (let i = 0; i < res.length; i += maxLength) {
        process.stdout.write(res.slice(i, i + maxLength));
      }
      process.exit();
    }
    gaps.push(line.split(" ", 2).map(elm => parseInt(elm)));
  });
});

const getJointArray = (gaps, nums) => {
  let sortedGaps = [];
  for (let i of nums) {
    sortedGaps.push([i, "p"]);
  }
  for (let i = 0; i < gaps.length; i++) {
    sortedGaps.push([gaps[i][0], "l"]);
    sortedGaps.push([gaps[i][1], "r"]);
  }

  sortedGaps = sortedGaps.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      if (a[1].charCodeAt() > b[1].charCodeAt()) {
        return 1;
      } else if (a[1].charCodeAt() < b[1].charCodeAt()) {
        return -1;
      } else if (a[1].charCodeAt() === b[1].charCodeAt()) {
        return 0;
      }
    }
  });
  return sortedGaps;
};

const getPresence = (sortedGaps, nums) => {
  let nesting = 0;

  let res = {};
  for (let i = 0; i < nums.length; i++) {
    res[nums[i]] = 0;
  }
  for (let i = 0; i < sortedGaps.length; i++) {
    if (sortedGaps[i][1] === "l") {
      nesting += 1;
    } else if (sortedGaps[i][1] === "p" && nesting > 0) {
      res[sortedGaps[i][0]] = nesting;
    } else if (sortedGaps[i][1] === "r") {
      if (nesting === 0) {
        nesting = 0;
      } else {
        nesting -= 1;
      }
    }
  }
  return res;
};

const getGapNum = (gaps, nums) => {
  const sortedGaps = getJointArray(gaps, nums);

  const presence = getPresence(sortedGaps, nums);

  let vals = ``;
  for (let i of nums) {
    vals += `${presence[i]} `;
  }
  return vals;
};

// test("1", () => {
//   expect(getGapNum([[0, 5], [7, 10]], [1, 6, 11])).toStrictEqual([1, 0, 0]);
//   expect(getGapNum([[-10, 10]], [-100, 100, 0])).toStrictEqual([0, 0, 1]);
//   expect(getGapNum([[0, 5], [-3, 2], [7, 10]], [1, 6])).toStrictEqual([2, 0]);
// });
//
// let k = `
// 6 21
// 6 12
// 8 10
// 0 2
// 0 4
// -6 -2
// -4 -2
// -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10 11 12 13
// `;
//
// let p = `
// 3 11
// 0 2
// -6 -4
// -4 -2
// -7 -6 -5 -4 -3 -2 -1 0 1 2 3
// `;
