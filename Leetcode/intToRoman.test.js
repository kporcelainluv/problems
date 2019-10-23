const intToRoman = require("./intToRoman");

test("1", () => {
  expect(intToRoman(4)).toBe("IV");
  expect(intToRoman(20)).toBe("XX");
  expect(intToRoman(9)).toBe("IX");
  expect(intToRoman(58)).toBe("LVIII");
  expect(intToRoman(60)).toBe("LX");
  expect(intToRoman(1994)).toBe("MCMXCIV");
  expect(intToRoman(4328)).toBe("MMMMCCCXXVIII");
  expect(intToRoman(632)).toBe("DCXXXII");
  expect(intToRoman(521)).toBe("DXXI");
});
