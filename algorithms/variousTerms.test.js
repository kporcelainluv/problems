const variousTerms = require("./variousTerms");

test("test 1", () => {
  expect(variousTerms(6).toBe([3, 1, 2, 3]));
  expect(variousTerms(4).toBe([2, 1, 3]));
  expect(variousTerms(461531907).toBe([2, 1, 3]));
});
