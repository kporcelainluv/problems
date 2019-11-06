
module.exports = lastStoneWeight;

const sortArr = arr => {
  return arr.sort((a, b) => b - a);
};

const getLastStone = arr => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let firstElm = arr[0];
    let secondElm = arr[1];
    let result;
    let modifiedArr;
    if (firstElm !== secondElm) {
      if (firstElm > secondElm) {
        result = firstElm - secondElm;
      } else {
        result = firstElm - secondElm;
      }
      modifiedArr = arr.slice(2);
      modifiedArr.push(result);
      modifiedArr = sortArr(modifiedArr);
    } else {
      modifiedArr = arr.slice(2);
    }
    return getLastStone(modifiedArr);
  }
};

const lastStoneWeight = arr => {
  return getLastStone(sortArr(arr));
};
