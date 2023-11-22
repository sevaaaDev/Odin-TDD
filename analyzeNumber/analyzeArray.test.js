import { analyzeArray } from "./analyzeArray";

test("throw error if not an array", () => {
  expect(() => analyzeArray()).toThrow("Not an array");
});

test("average must be 2", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("average", 2);
});

test("average must be 0", () => {
  expect(analyzeArray([1, 2, -3])).toHaveProperty("average", 0);
});

test("min must be -3", () => {
  expect(analyzeArray([1, 2, -3])).toHaveProperty("min", -3);
});

test("min must be 1", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("min", 1);
});

test("max must be 3", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("max", 3);
});

test("max must be -1", () => {
  expect(analyzeArray([-1, -2, -3])).toHaveProperty("max", -1);
});

test("length must be 3", () => {
  expect(analyzeArray([-1, -2, -3])).toHaveProperty("length", 3);
});

test("real test", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
