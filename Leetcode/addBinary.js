const countBinary = (num1, num2) => {
  const res = [];
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i > -1 || j > -1;
    i--, j--
  ) {
    res.push(Number(num1[i] || 0) + Number(num2[j] || 0));
  }
  let addOne = false;
  for (let i = 0; i < res.length; i++) {
    if (res[i] + Number(addOne) == 2) {
      res[i] = 0;
      addOne = true;
    } else if (res[i] + Number(addOne) == 3) {
      res[i] = 1;
      addOne = true;
    } else if (res[i] + Number(addOne) == 0) {
      addOne = false;
      res[i] = 0;
    } else if (res[i] + Number(addOne) == 1) {
      addOne = false;
      res[i] = 1;
    }
  }
  if (addOne) {
    res.push(1);
  }
  return res.reverse().join("");
};

module.exports = countBinary;
