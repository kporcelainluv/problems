var removeElement = function(nums, val) {
  counter = 0;
  while (counter < nums.length) {
    if (nums[counter] === val) {
      nums.splice(counter, 1);
      counter -= 1;
    }
    counter += 1;
  }
  return nums;
};

module.exports = removeElement;
