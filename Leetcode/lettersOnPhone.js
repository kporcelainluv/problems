var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const nums1 = [...new Set(nums)];

  const res = [];

  let i = 0;
  let x = 1;

  while (i < n && x <= n) {
    if (nums1[i] !== x) {
      res.push(x);
    } else {
      i += 1;
    }

    x += 1;
  }

  return res;
};

module.exports = findDisappearedNumbers;
