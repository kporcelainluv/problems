var twoSum = function(numbers, target) {
  let start = 0;
  let finish = numbers.length;
  while (start < finish) {
    if (numbers[start] + numbers[finish] === target) {
      return [start + 1, finish + 1];
    } else if (numbers[start] + numbers[finish] < target) {
      start += 1;
    } else {
      finish -= 1;
    }
  }
};
module.exports = twoSum;
