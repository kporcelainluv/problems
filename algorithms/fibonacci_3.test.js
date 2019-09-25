const fib = require("./fibonacci_3");

test("test 1", () => {
  expect(fib(10, 2)).toBe(1);
});
