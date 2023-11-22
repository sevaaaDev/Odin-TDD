export function capitalize(string) {
  if (typeof string !== "string") {
    return "Error, can't capitalize";
  }
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}
