const ugly = require("./isUgly");

test("ugly", () => {
  expect(ugly(6)).toBe(true);
  expect(ugly(8)).toBe(true);
  expect(ugly(14)).toBe(false);
  expect(ugly(1)).toBe(true);
  expect(ugly(-2147483648)).toBe(false);
});
