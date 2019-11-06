const sortArr = arr => {
  return arr.sort((a, b) => b - a);
};

const lastStoneWeight = arr => {
  let modifiedArr = sortArr(arr);
  let res = 0;
  while (modifiedArr.length > 1) {
    if (modifiedArr.length === 0) {
      res = 0;
      break;
    }
    if (modifiedArr.length === 1) {
      res = modifiedArr[0];
      break;
    }
    let first = modifiedArr[0];
    let second = modifiedArr[1];
    let third = 0;
    if (first > second) {
      third = first - second;
    } else if (first < second) {
      third = second - first;
    }
    if (third > 0) {
      modifiedArr = modifiedArr.slice(2);
      modifiedArr.push(third);
      modifiedArr = sortArr(modifiedArr);
    } else {
      modifiedArr = modifiedArr.slice(2);
    }
  }
  return res;
};

module.exports = lastStoneWeight;
