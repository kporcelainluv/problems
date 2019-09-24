const add = require("./all");

test("add works", () => {
  const eq3 = x => x === 3;
  expect(add(eq3)([1, 2, 3])).toBe(false);
  expect(add(eq3)([3, 3, 3])).toBe(true);
});
