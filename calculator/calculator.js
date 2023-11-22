class calculator {
  constructor() {}
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "Error";
    return a + b;
  }
  substract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "Error";
    return a - b;
  }
  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "Error";
    return a * b;
  }
  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "Error";
    if (b === 0) return;
    return a / b;
  }
}

export const calc = new calculator();
