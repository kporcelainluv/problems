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

      const res = getGapNum(gaps, nums).join(" ");
      const maxLength = 50000;
      for (let i = 0; i < res.length; i += maxLength) {
        process.stdout.write(res.slice(i, i + maxLength));
      }
      process.exit();
    }
    gaps = [...gaps, line.split(" ", 2).map(elm => parseInt(elm))];
  });
});

const getGapNum = (gaps, nums) => {
  let sortedGaps = [];
  for (let i of nums) {
    sortedGaps.push([i, "p"]);
  }
  for (let i of gaps) {
    sortedGaps.push([i[0], "l"]);
    sortedGaps.push([i[1], "r"]);
  }

  sortedGaps = sortedGaps.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      if (a[1] === "p") {
        return 1;
      } else {
        return -1;
      }
    }
  });
  let index = 0;
  let left = false;
  let right = false;
  let onHold = [];

  let res = {};
  for (let i = 0; i < sortedGaps.length; i++) {
    if (sortedGaps[i][1] === "p" && left === false) {
      res[sortedGaps[i][0]] = 0;
    } else if (sortedGaps[i][1] === "l") {
      left = true;
      right = false;
      index += 1;
    } else if (sortedGaps[i][1] === "p" && left === true) {
      onHold.push([sortedGaps[i][0], index]);
    } else if (sortedGaps[i][1] === "r") {
      right = true;
      left = false;
      for (let i of onHold) {
        res[i[0]] = i[1];
      }
      onHold = [];
    }
  }
  let vals = [];

  for (let i of nums) {
    vals.push(res[i]);
  }
  return vals;
};

// test("1", () => {
// expect(getGapNum([[0, 5], [7, 10]], [1, 6, 11])).toStrictEqual([1, 0, 0]);
// expect(getGapNum([[-10, 10]], [-100, 100, 0])).toStrictEqual( 0, 0,1]);
// expect(getGapNum([[0, 5], [-3, 2], [7, 10]], [1, 6])).toStrictEqual(2, 0]);
// });
