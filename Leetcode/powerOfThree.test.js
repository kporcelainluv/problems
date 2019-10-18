const isPowerOfThree = require("./powerOfThree");

test("ugly", () => {
  expect(isPowerOfThree(27)).toBe(true);
  expect(isPowerOfThree(0)).toBe(false);
  expect(isPowerOfThree(1)).toBe(true);
  expect(isPowerOfThree(9)).toBe(true);
  expect(isPowerOfThree(45)).toBe(false);
  expect(isPowerOfThree(1000000000)).toBe(false);
});
