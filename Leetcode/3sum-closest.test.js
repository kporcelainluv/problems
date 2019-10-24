const closestSum = (nums, target) => {
  let res = nums[0] + nums[1] + nums[2];

  const update = (x, y, z) => {
    const candidate = x + y + z;
    if (Math.abs(candidate - target) < Math.abs(res - target)) {
      res = candidate;
    }
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i !== j && i !== k && j !== k) {
          update(nums[i], nums[j], nums[k]);
        }
      }
    }
  }

  return res;
};

test("ugly", () => {
  expect(closestSum([-1, 2, 1, -4], 1)).toBe(2);
});
