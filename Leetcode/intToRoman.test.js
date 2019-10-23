const intToRoman = require("./intToRoman");
const intToRoman2 = require("./intToRoman2");

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
test("2", () => {
  expect(intToRoman2(4)).toBe("IV");
  expect(intToRoman2(20)).toBe("XX");
  expect(intToRoman2(9)).toBe("IX");
  expect(intToRoman2(58)).toBe("LVIII");
  expect(intToRoman2(60)).toBe("LX");
  expect(intToRoman2(1994)).toBe("MCMXCIV");
  expect(intToRoman2(4328)).toBe("MMMMCCCXXVIII");
  expect(intToRoman2(632)).toBe("DCXXXII");
  expect(intToRoman2(521)).toBe("DXXI");
});
