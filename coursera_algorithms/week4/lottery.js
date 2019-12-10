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
  let ind = 0;
  let res = 0;
  let res2 = [];
  while (ind < nums.length) {
    gaps.forEach((elm, index) => {
      if (nums[ind] >= elm[0] && nums[ind] <= elm[1]) {
        res = index + 1;
      }
    });

    res2.push(res);
    res = 0;
    ind += 1;
  }
  return res2.join(" ");
};