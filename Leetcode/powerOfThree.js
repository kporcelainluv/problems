const isDevisibleBy3 = n => {
  if (n === 1) {
    return true;
  } else if (n % 3 > 0 || n === 0) {
    return false;
  } else if (n / 3 === 1) {
    return true;
  } else {
    const newN = n / 3;
    return isDevisibleBy3(newN);
  }
};

const isPowerOfThree = function(n) {
  return isDevisibleBy3(n);
};
module.exports = isPowerOfThree;
