const sqrtNum = require("./squareNum");

test("romanToInt", () => {
  expect(sqrtNum(8)).toBe(2);
  expect(sqrtNum(4)).toBe(2);
  expect(sqrtNum(1)).toBe(1);
  expect(sqrtNum(0)).toBe(0);
  expect(sqrtNum(15)).toBe(3);
});
