export function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not an array");
  }
  let obj = {};
  obj["average"] = average(arr);
  obj["min"] = min(arr);
  obj["max"] = max(arr);
  obj["length"] = arr.length;
  return obj;
}

function average(arr) {
  return (
    arr.reduce((total, current) => {
      return total + current;
    }, 0) / arr.length
  );
}

function min(arr) {
  return arr.reduce((min, cur) => {
    return cur < min ? cur : min;
  });
}

function max(arr) {
  return arr.reduce((min, cur) => {
    return cur > min ? cur : min;
  });
}
