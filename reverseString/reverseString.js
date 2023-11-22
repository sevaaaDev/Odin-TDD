export function reverseString(string) {
  if (typeof string !== "string") return "Error";
  return string.split("").reverse().join("");
}
