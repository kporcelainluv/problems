const checkLetters = (str, res) => {
  if (str.length < 2) {
    return res;
  }
  if (str[0] === "L") {
    if (str[1] === "R") {
      return checkLetters(str.slice(2), res + 1);
    } else {
      return checkLetters(str.slice(1), res);
    }
  }
  if (str[0] === "R") {
    if (str[1] === "L") {
      return checkLetters(str.slice(2), res + 1);
    } else {
      return checkLetters(str.slice(1), res);
    }
  }
};

const balancedStringSplit = str => {
  return checkLetters(str, 0);
};
module.exports = balancedStringSplit;
