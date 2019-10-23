const getNumbers = (number, res) => {
  if (number === 0) {
    return res.reverse();
  } else {
    const currentNumber = number % 10;
    res = [...res, currentNumber * 10 ** res.length];
    return getNumbers(Math.floor(number / 10), res);
  }
};

const splitNumber = element => {
  if (element > 1000) {
    return [...Array(element / 1000).fill(1000)];
  } else if (element > 500) {
    return [500, ...Array((element - 500) / 100).fill(100)];
  } else if (element > 100) {
    return [...Array(element / 100).fill(100)];
  } else if (element > 50) {
    return [50, ...Array((element - 50) / 10).fill(10)];
  } else if (element > 10) {
    return [...Array(element / 10).fill(10)];
  } else if (element > 5) {
    return [5, ...Array(element - 5).fill(1)];
  } else if (element < 4) {
    return Array(element).fill(1);
  }
};
const romanLiterals = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM"
};

const intToRoman = number => {
  const splitedNum = getNumbers(number, []);

  const romanNumsList = splitedNum.map(elm => {
    if (elm in romanLiterals) {
      return romanLiterals[elm];
    } else {
      return splitNumber(elm)
        .map(elm => romanLiterals[elm])
        .join("");
    }
  });
  return romanNumsList.join("");
};

module.exports = intToRoman;
