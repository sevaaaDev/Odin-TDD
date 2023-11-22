import { reverseString } from "./reverseString";

test("reverse the string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse long string", () => {
  expect(reverseString("hello halo")).toBe("olah olleh");
});

test("works with non letters", () => {
  expect(reverseString("12 coco")).toBe("ococ 21");
});

test("error for non string", () => {
  expect(reverseString(null)).toBe("Error");
});
