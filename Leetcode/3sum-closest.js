const closestSum = (nums, target) => {
  const res = nums[0] + nums[1] + nums[2] - target;

  const update = (x, y, z) => {
    const candidate = x + y + z - target;
    if (candidate < res) {
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
module.export = closestSum;
