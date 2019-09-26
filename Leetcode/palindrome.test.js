const palindrome = require("./palindrome");

test("palindrome1", () => {
  expect(palindrome(10)).toBe(false);
  expect(palindrome(15)).toBe(false);
  expect(palindrome(121)).toBe(true);
  expect(palindrome(-121)).toBe(false);
  expect(palindrome(55)).toBe(true);
  expect(palindrome(1001)).toBe(true);
  expect(palindrome(15)).toBe(false);
  expect(palindrome(0)).toBe(true);
  expect(palindrome(1)).toBe(true);
  expect(palindrome(2)).toBe(true);
});
