const balancedStringSplit = require("./balancedStr");

test("1", () => {
  expect(balancedStringSplit("RLRRLLRLRL")).toBe(4);
  expect(balancedStringSplit("RLLLLRRRLR")).toBe(3);
  expect(balancedStringSplit("LLLLRRRR")).toBe(1);
});
