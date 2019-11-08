const sortedSquares = function(initialArr) {
  const arr = initialArr.map(elm => elm ** 2);
  return arr.sort((a, b) => a - b);
};
module.exports = sortedSquares;
