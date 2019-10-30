const balancedStringSplit = str => {
  let varL = 0;
  let varR = 0;
  let res = 0;
  str.split("").forEach(elm => {
    if (elm === "L") {
      varL += 1;
    } else if (elm === "R") {
      varR += 1;
    }
    if (varL === varR) {
      res += 1;
      varR = 0;
      varL = 0;
    }
  });
  return res;
};
module.exports = balancedStringSplit;
