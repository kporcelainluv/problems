const fib = require("./fibonacci_1");

test("test 1", () => {
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(5)).toBe(5);
  expect(fib(6)).toBe(8);
  expect(fib(7)).toBe(13);
  expect(fib(8)).toBe(21);
  expect(fib(9)).toBe(34);
});
