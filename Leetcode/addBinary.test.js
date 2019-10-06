const countBinary = require("./addBinary");

test("convertationToBinary", () => {
  // expect(convertationToBinary("11", "1")).toBe("100");
  // expect(convertationToBinary("1010", "1011")).toBe("10101");
  // expect(convertationToBinary("0", "0")).toBe("0");
  expect(countBinary("0", "0")).toBe("0");
  expect(countBinary("0", "1")).toBe("1");
  expect(countBinary("1", "1")).toBe("10");
  expect(countBinary("111", "1")).toBe("1000");
  expect(countBinary("101101", "1011100")).toBe("10001001");
  expect(
    countBinary(
      "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
      "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
    )
  ).toBe(
    "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
  );
});
