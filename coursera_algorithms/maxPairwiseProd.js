const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getVals() {
  const input = [];
  return new Promise(resolve => {
    rl.on("line", function(cmd) {
      input.push(cmd);
      if (input.length === 2) {
        rl.close();
        resolve(input);
      }
    });
  });
}

const getMaxNum = arr => {
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    } else if (arr[i] < max1 && arr[i] > max2) {
      max2 = arr[i];
    }
  }
  console.log(max1 * max2);
};

getVals()
  .then(input => [...input[1].split(" ").map(Number)])
  .then(initialReadline => getMaxNum(initialReadline));
