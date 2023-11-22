let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export function cipher(string, factor) {
  let encryptedString = [];
  for (let i = 0; i < string.length; i++) {
    let index = alphabet.indexOf(string[i]) + factor;
    encryptedString.push(checkCapital(index, factor, string[i]));
  }
  return encryptedString.join("");
}

function checkCapital(index, factor, letter, capital) {
  if (index >= factor) {
    index = wrap(index);
    return capital ? alphabet[index].toUpperCase() : alphabet[index];
  }
  if (capital) {
    return letter;
  }
  index = alphabet.indexOf(letter.toLowerCase()) + factor;
  return checkCapital(index, factor, letter, true);
}

function wrap(index) {
  if (index <= 25 && index >= 0) {
    return index;
  }
  if (index >= 26) {
    index = index - 26;
  }
  if (index < 0) {
    index = index + 26;
  }
  return wrap(index);
}
