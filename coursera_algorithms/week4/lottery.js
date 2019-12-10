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
    gaps = [...gaps, line.split(" ", 2).map(elm => parseInt(elm))];
  });
});

const getGapNum = (gaps, nums) => {
  let res = [];
  for (let i of nums) {
    res.push([i, "p"]);
  }
  for (let i of gaps) {
    res.push([i[0], "l"]);
    res.push([i[1], "r"]);
  }
  res = res.sort((a, b) => {
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
  // console.log({ res });
  let index = 0;
  let left = false;
  let right = false;
  let onHold = [];
  let finalRes = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i][1] === "p" && left === false) {
      finalRes = [...finalRes, [res[i][0], 0]];
    }
    if (res[i][1] === "l") {
      left = true;
      right = false;
      index += 1;
    }
    if (res[i][1] === "p" && left === true) {
      //num, index
      onHold = [...onHold, [res[i][0], index]];
    }
    if (res[i][1] === "r") {
      right = true;
      left = false;
      finalRes = [...finalRes, ...onHold];
      onHold = [];
    }
    // console.log({ finalRes });
  }

  let f = finalRes.sort(function(a, b) {
    return nums.indexOf(a[0]) - nums.indexOf(b[0]);
  });

  return f.map(elm => elm[1]).join(" ");
  // console.log({ f: f.map(elm => elm[1]) });
};

// getGapNum([[-10, 10]], [-100, 100, 0]);
// getGapNum([[0, 5], [7, 10]], [1, 6, 11]);
// getGapNum([[0, 5], [-3, 2], [7, 10]], [1, 6]);
