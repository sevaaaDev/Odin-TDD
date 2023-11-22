import { capitalize } from "./capitalize";

test("Capitalize the first char", () => {
  expect(capitalize("string")).toBe("String");
});

test("only capitalize the first char", () => {
  expect(capitalize("string string")).toBe("String string");
});

test("capitalize the first char, but keep everything as it is", () => {
  expect(capitalize("striNg stRIng")).toBe("StriNg stRIng");
});

test("still works even if number is the first char", () => {
  expect(capitalize("1 coco powder")).toBe("1 coco powder");
});

test("throw error for non string input", () => {
  expect(capitalize(1)).toBe("Error, can't capitalize");
});
