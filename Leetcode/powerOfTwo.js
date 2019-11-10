const isPowerOfTwo = function(n) {
  while (n > 2) {
    let currentN = n / 2;
    console.log({ currentN });
    if (currentN % 2 != 0) {
      return false;
    }
  }
  return true;
};
module.exports = isPowerOfTwo;
