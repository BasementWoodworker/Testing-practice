function caesarCipher(string, shiftFactor) {
  let result = "";
  for (const char of string) {
    result += shiftChar(char, shiftFactor);
  }
  return result;
}

function shiftChar(char, shiftFactor) {
  let charCode = char.charCodeAt();
  let substraction;
  const modulus = 26;
  if (charCode >= 65 && charCode <= 90) {
    substraction = 65;
  } else if (charCode >= 97 && charCode <= 122) {
    substraction = 97;
  } else {
    return char;
  }
  charCode = charCode - substraction
  charCode = (charCode + shiftFactor) % modulus;
  return (String.fromCharCode(charCode + substraction));
}

module.exports = caesarCipher;