var containsDuplicate = function(nums) {
  const obj = {};
  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([1]));
