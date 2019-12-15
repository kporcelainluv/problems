const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  let inputL = line.split(" ")[0];
  console.log(getMaxValue(inputL));
  process.exit();
});

const getEvaluation = (a, b, operation) => {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else {
    return false;
  }
};
const getMinMax = (M, m, operations, i, j) => {
  let minimum = 1000000000;
  let maximum = -100000000;
  for (let k = i; k < j; k++) {
    let a = getEvaluation(M[i][k], M[k + 1][j], operations[k]);
    let b = getEvaluation(M[i][k], m[k + 1][j], operations[k]);
    let c = getEvaluation(m[i][k], M[k + 1][j], operations[k]);
    let d = getEvaluation(m[i][k], m[k + 1][j], operations[k]);
    minimum = Math.min(...[minimum, a, b, c, d]);
    maximum = Math.max(...[maximum, a, b, c, d]);
  }
  return [minimum, maximum];
};

const getMaxValue = dataset => {
  let numbers = dataset.match(/\d+/g).map(elm => parseInt(elm));
  let operations = dataset.match(/[+-/*]+/g);
  let m = [];
  let M = [];
  let mLength = numbers.length;

  for (let i = 0; i < mLength; i++) {
    m.push(Array(numbers.length).fill(0));
    M.push(Array(numbers.length).fill(0));
  }
  for (let i = 0; i < m.length; i++) {
    m[i][i] = numbers[i];
    M[i][i] = numbers[i];
  }

  for (let s = 1; s < mLength; s++) {
    for (let i = 0; i < mLength - s; i++) {
      let j = i + s;
      [m[i][j], M[i][j]] = getMinMax(M, m, operations, i, j);
    }
  }
  return M[0][numbers.length - 1];
};
