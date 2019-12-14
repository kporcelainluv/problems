const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const [weight, length] = line.split(" ").map(elm => parseInt(elm));
  rl.once("line", line => {
    const values = line.split(" ").map(elm => parseInt(elm));

    const res = optimalWeight(weight, values);
    console.log(res);
    process.exit();
  });
});

const optimalWeight = (weight, values) => {
  let value = [];
  for (let i = 0; i <= weight + 1; i++) {
    value.push(Array(values.length + 1).fill(0));
  }
  for (let i = 1; i <= values.length + 1; i++) {
    for (let w = 1; w <= weight + 1; w++) {
      value[w][i] = value[w][i - 1];
      if (w >= values[i - 1]) {
        let item_weight = values[i - 1];
        let item_value = values[i - 1];
        let val = value[w - item_weight][i - 1] + item_value;
        if (value[w][i] < val) {
          value[w][i] = val;
        }
      }
    }
  }
  return value[weight][values.length];
};
