const lengthOfLastWord = require("./lengthOfLastWord");
test("divisions under 10", () => {
  expect(lengthOfLastWord("Hello World")).toBe(5);
  expect(lengthOfLastWord("a  b  ")).toBe(1);
  expect(lengthOfLastWord("")).toBe(0);
  expect(lengthOfLastWord("a  ")).toBe(1);
});
