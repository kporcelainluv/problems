const convertToBinary = num => {
  if (num === 0) {
    return "0";
  }
  let res = [];
  let divRes = parseInt(num);
  while (divRes >= 1) {
    if (divRes % 2 > 0) {
      res.push("1");
    } else {
      res.push("0");
    }
    divRes = Math.floor(divRes / 2);
  }

  return res.reverse().join("");
};

const convertToDecimal = num => {
  let res = 0;
  num = num.split("").reverse();
  for (let i = 0; i < num.length; i++) {
    res += num[i] * 2 ** i;
  }
  return res;
};

const countBinary = (num1, num2) => {
  let a = Math.max(num1, num2)
    .toString()
    .split("")
    .reverse();
  let b = Math.min(num1, num2)
    .toString()
    .split("")
    .reverse();
  const difference = a.length - b.length;
  for (let i = 0; i < difference; i++) {
    b.push("0");
  }
  let i = 0;
  const res = [];
  let prevRemembering = 0;
  while (i <= a.length) {
    let count = 0;
    if (prevRemembering > 0) {
      count = prevRemembering + parseFloat(a[i]) + parseFloat(b[i]);
      prevRemembering = 0;
    } else {
      count = parseFloat(a[i]) + parseFloat(b[i]);
    }
    if (count === 2) {
      res.push("0");
      prevRemembering = 1;
      if (i + 1 === a.length) {
        res.push(prevRemembering.toString());
        break;
      }
    } else if (count === 3) {
      res.push("1");
      prevRemembering = 1;
      if (i + 1 === a.length) {
        res.push(prevRemembering.toString());
        break;
      }
    } else {
      res.push(count.toString());
    }
    i += 1;
  }
  return res.reverse().join("");
};

const convertationToBinary = (num1, num2) => {
  if (num1 == 0 && num2 == 0) {
    return "0";
  }
  return countBinary(num1, num2);
};
module.exports = convertationToBinary;
