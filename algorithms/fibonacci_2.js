const fib = num => {
  let f1 = 0;
  let f2 = 1;
  let f3 = 0;
  for (let i = 2; i <= num; i++) {
    f3 = (f1 + f2) % 10;
    f1 = f2;
    f2 = f3;
  }
  return f3;
};
module.exports = fib;
