const sortArr = arr => {
  return arr.sort((a, b) => b - a);
};

const lastStoneWeight = arr => {
  let modifiedArr = sortArr(arr);
  while (modifiedArr.length > 1) {
    let first = modifiedArr[0];
    let second = modifiedArr[1];
    let third;
    if (first === second) {
      modifiedArr = modifiedArr.slice(2);
    } else {
      if (first > second) {
        third = first - second;
      } else {
        third = second - first;
      }
      modifiedArr.push(third);
      modifiedArr = modifiedArr.slice(2);
      modifiedArr = sortArr(modifiedArr);
    }
  }
  return modifiedArr[0] || 0;
};

module.exports = lastStoneWeight;
