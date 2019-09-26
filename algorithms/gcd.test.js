const gcd = require("./gcd");

test("test 1", () => {
  expect(gcd(14159572, 63967072)).toBe(4);
});
test("test 2", () => {
  expect(gcd(18, 35)).toBe(1);
});
