const romanLiterals = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
  ""
];
const ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, 0];

const intToRoman2 = number => {
  let res = [];
  let index = 0;
  while (number != 0) {
    if (number >= ints[index]) {
      res.push(romanLiterals[index]);
      number -= ints[index];
    } else {
      index += 1;
    }
  }
  return res.join("");
};
module.exports = intToRoman2;
