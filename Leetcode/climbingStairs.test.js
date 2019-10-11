const climbingStair = require("./climbingStairs");

test("climbingStair", () => {
  expect(climbingStair(0)).toBe(0);
  expect(climbingStair(1)).toBe(1);
  expect(climbingStair(2)).toBe(2);
  expect(climbingStair(3)).toBe(3);
  expect(climbingStair(4)).toBe(5);
});
