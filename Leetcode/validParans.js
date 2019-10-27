const parans = {
  "{": 1,
  "}": -1,
  "[": 2,
  "]": -2,
  "(": 3,
  ")": -3
};

const isValid = str => {
  const stack = [];
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    const bracket = parans[str[i]];
    if (bracket > 0) {
      stack.push(bracket);
    } else {
      const type = stack.pop();
      if (type !== Math.abs(bracket)) {
        flag = false;
        break;
      }
    }
  }
  if (flag && stack.length === 0) {
    return true;
  }
  return false;
};
module.exports = isValid;
