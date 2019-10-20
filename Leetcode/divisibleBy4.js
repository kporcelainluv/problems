const isDevisibleBy4 = n => {
  if (n === 1) {
    return true;
  } else if (n % 4 > 0 || n === 0) {
    return false;
  } else if (n / 4 === 1) {
    return true;
  } else {
    const newN = n / 4;
    return isDevisibleBy4(newN);
  }
};

const isPowerOfFour = function(n) {
  return isDevisibleBy4(n);
};
