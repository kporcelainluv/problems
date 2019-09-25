const fib = (f1, f2) => {
  let fib1 = 0;
  let fib2 = 1;
  let fib3 = 0;
  for (let i = 2; i <= f1; i++) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }
  return fib2 % f2;
};
module.exports = fib;
