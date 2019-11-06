const lastStone = require("./lastStone");

test("1", () => {
  expect(lastStone([2, 7, 4, 1, 8, 1])).toBe(1);
});
