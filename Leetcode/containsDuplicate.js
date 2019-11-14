// var containsDuplicate = function(nums) {
//   const obj = {};
//   for (let i of nums) {
//     if (!obj[i]) {
//       obj[i] = 1;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function(nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
};
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
