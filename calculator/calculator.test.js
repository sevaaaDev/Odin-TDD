import { calc } from "./calculator";

test("add 2 number", () => {
  expect(calc.add(1, 1)).toBe(2);
});

test("works fine with negatives", () => {
  expect(calc.add(1, -1)).toBe(0);
});

test("0 + 0 = 0", () => {
  expect(calc.add(0, 0)).toBe(0);
});

test("(add)error for non number", () => {
  expect(calc.add(0, undefined)).toBe("Error");
});

test("substract", () => {
  expect(calc.substract(2, 1)).toBe(1);
});

test("works fine with negatives", () => {
  expect(calc.substract(2, -1)).toBe(3);
});

test("(substract)error for non number", () => {
  expect(calc.substract(0, undefined)).toBe("Error");
});

test("multiply 2 number", () => {
  expect(calc.multiply(2, 3)).toBe(6);
});

test("multiply by 0", () => {
  expect(calc.multiply(0, 3)).toBe(0);
});

test("multiply negatives", () => {
  expect(calc.multiply(-4, 3)).toBe(-12);
});

test("multiply decimal", () => {
  expect(calc.multiply(4, 0.5)).toBe(2);
});

test("(multiply)error for non number", () => {
  expect(calc.multiply(0, undefined)).toBe("Error");
});

test("divide", () => {
  expect(calc.divide(4, 2)).toBe(2);
});

test("0 / any", () => {
  expect(calc.divide(0, 10)).toBe(0);
});

test("cant divide by zero", () => {
  expect(calc.divide(1, 0)).toBe(undefined);
});

test("divide by decimal", () => {
  expect(calc.divide(1, 0.1)).toBe(10);
});

test("(divide)error for non number", () => {
  expect(calc.divide(0, undefined)).toBe("Error");
});
