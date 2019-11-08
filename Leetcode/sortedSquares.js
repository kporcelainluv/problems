const swapArr = arr => {
  let index = 0;
  while (true) {
    if (index === arr.length) {
      break;
    }
    if (arr[index] > arr[index + 1]) {
      let elm1 = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = elm1;
      index = 0;
    } else {
      index += 1;
    }
  }
  return arr;
};

const sortedSquares = function(initialArr) {
  const arr = initialArr.map(elm => elm ** 2);
  return swapArr(arr);
};
module.exports = sortedSquares;
