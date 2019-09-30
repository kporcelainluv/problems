const backpack = require("./backpack");

test("test 1", () => {
  expect(backpack([[3, 50], [60, 20], [100, 50], [120, 30]])).toBe(180.0);
  expect(backpack([[3, 7], [20, 4], [18, 3], [14, 2]])).toBe(42.0);
  expect(backpack([[3, 15], [14, 7], [25, 5], [36, 6]])).toBe(69.0);
});
