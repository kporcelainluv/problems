const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const numsAmount = parseInt(line);

  rl.on("line", line => {
    const numbers = line.split(" ");

    console.log(getMaxSalary(numbers));
    process.exit();
  });
});

const getMaxSalary = numbers => {
  const sortedNumbers = numbers.sort((a, b) => {
    if (Number(a[0]) < Number(b[0])) {
      return 1;
    } else if (Number(a[0]) > Number(b[0])) {
      return -1;
    } else {
      let LetterA = a + b;
      let LetterB = b + a;
      if (LetterA > LetterB) {
        return -1;
      } else if (LetterA < LetterB) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return sortedNumbers.join("");
};
