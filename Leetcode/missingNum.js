const missingNum = arr => {
  let flag = 0;
  const sortedArr = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
  for (let i = 0; i < sortedArr.length + 1; i++) {
    if (i != sortedArr[i]) {
      flag = i;
      break;
    }
  }
  return flag;
};

// attempt 2
const missingNum2 = arr => {
  const length = arr.length;
  const sum1 = (length * (length + 1)) / 2;
  sum2 = arr.reduce((a, b) => {
    return a + b;
  });
  return sum1 - sum2;
};
module.exports = missingNum;
