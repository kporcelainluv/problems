const duplicateZeros = arr => {
  let index = 0;
  let length = arr.length;
  while (index < length) {
    if (arr[index] === 0) {
      arr.splice(index, 0, 0);
      arr.pop();
      index += 1;
    }
    index += 1;
  }
};
module.exports = duplicateZeros;
// [1, 0, 0, 2, 3, 0, 0, 4];
