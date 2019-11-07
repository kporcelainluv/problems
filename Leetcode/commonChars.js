var twoSum = function(numbers, target) {
  let res;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        res = [i + 1, j + 1];
      }
    }
  }
  return res;
};
module.exports = twoSum;
