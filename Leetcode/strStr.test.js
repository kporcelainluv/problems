const strStr = require("./strStr");
test("strStr", () => {
  expect(strStr("hello", "ll")).toBe(2);
  expect(strStr("aaaaaaaaaa", "bba")).toBe(-1);
  expect(strStr("aaa", "aaaa")).toBe(-1);
  expect(strStr("mississippi", "issip")).toBe(4);
});
