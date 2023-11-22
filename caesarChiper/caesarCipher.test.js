import { cipher } from "./caesarCipher";

test("encrypt 1 letter", () => {
  expect(cipher("a", 1)).toBe("b");
});

test("encrypt 1 letter with more shift factor", () => {
  expect(cipher("a", 25)).toBe("z");
});

test("26 shift factor = 0 shift", () => {
  expect(cipher("a", 26)).toBe("a");
});

test("z shifted by 1 = a", () => {
  expect(cipher("z", 1)).toBe("a");
});

test("negative shifting", () => {
  expect(cipher("z", -1)).toBe("y");
});

test("works with space", () => {
  expect(cipher("a b", 1)).toBe("b c");
});

test("works with number", () => {
  expect(cipher("1a", -1)).toBe("1z");
});

test("works with punctuation", () => {
  expect(cipher("a,b", 1)).toBe("b,c");
});

test("keep the case", () => {
  expect(cipher("aA", 1)).toBe("bB");
});

test("really big factor", () => {
  expect(cipher("aA", 53)).toBe("bB");
});

test("negative shifting wrap", () => {
  expect(cipher("a", -1)).toBe("z");
});

test("real sentence", () => {
  expect(cipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", -3)).toBe(
    "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD",
  );
});
