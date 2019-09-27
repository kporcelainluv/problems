const romanToInt = str => {
  const letters = str.split("");
  let res = 0;
  const translator = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const translator1 = { V: 4, X: 9, L: 40, C: 90, D: 400, M: 900 };
  let use1 = false;
  for (let i = 0; i < letters.length; i++) {
    if (
      i + 1 < letters.length &&
      translator[letters[i]] < translator[letters[i + 1]]
    ) {
      use1 = true;
      continue;
    }
    if (use1) {
      res += translator1[letters[i]];
      use1 = false;
    } else {
      res += translator[letters[i]];
    }
  }
  return res;
};

// easier solving

// const romanToInt = str => {
//     const letters = str.split("");
//     let res = 0;
//     const translator = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === "V" && letters[i - 1] === "I") {
//       res -= 1;
//       res += 4;
//     } else if (letters[i] === "X" && letters[i - 1] === "I") {
//       res -= 1;
//       res += 9;
//     } else if (letters[i] === "L" && letters[i - 1] === "X") {
//       res -= 10;
//       res += 40;
//     } else if (letters[i] === "C" && letters[i - 1] === "X") {
//       res -= 10;
//       res += 90;
//     } else if (letters[i] === "D" && letters[i - 1] === "C") {
//       res -= 100;
//       res += 400;
//     } else if (letters[i] === "M" && letters[i - 1] === "C") {
//       res -= 100;
//       res += 900;
//     } else {
//       res += translator[letters[i]];
//     }
//   }
//   return res;
// };

module.exports = romanToInt;
