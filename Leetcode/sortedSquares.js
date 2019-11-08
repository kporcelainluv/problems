const sortedSquares = function(initialArr) {
  const arr = initialArr.map(elm => Math.abs(elm));
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.map(elm => elm ** 2);
};
module.exports = sortedSquares;
