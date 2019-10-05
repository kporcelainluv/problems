const fizzBuzz = require("./fizzbuzz");

test("division of 20", () => {
  expect(fizzBuzz(20)).toBe("Buzz");
});
test("division of 18", () => {
  expect(fizzBuzz(18)).toBe("Fizz");
});
test("division of 30", () => {
  expect(fizzBuzz(30)).toBe("FizzBuzz");
});

test("divisions under 10", () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(4)).toBe(4);
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(6)).toBe("Fizz");
  expect(fizzBuzz(7)).toBe(7);
  expect(fizzBuzz(8)).toBe(8);
  expect(fizzBuzz(9)).toBe("Fizz");
  expect(fizzBuzz(10)).toBe("Buzz");
});
