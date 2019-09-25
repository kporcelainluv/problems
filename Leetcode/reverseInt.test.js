// https://leetcode.com/problems/reverse-integer/
const reverseInt = require("./reverseInt");

test("reverse int 1", () => {
  const test1 = 12;
  expect(reverseInt(test1)).toBe(21);
});
test("reverse int", () => {
  const test2 = 123;
  expect(reverseInt(test2)).toBe(321);
});
test("reverse int", () => {
  const test3 = 1000;
  expect(reverseInt(test3)).toBe(1);
});
test("reverse int", () => {
  const test4 = -123;
  expect(reverseInt(test4)).toBe(-321);
});
test("reverse int", () => {
  const test5 = 120;
  expect(reverseInt(test5)).toBe(21);
});
test("reverse int", () => {
  const test5 = 0;
  expect(reverseInt(test5)).toBe(0);
});
test("reverse int", () => {
  const test6 = 901000;
  expect(reverseInt(test6)).toBe(109);
});
