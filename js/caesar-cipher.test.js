const caesarCipher = require("./caesar-cipher");

test("Caesar Cipher", () => {
  expect(caesarCipher("abcz", 1)).toBe("bcda");
  expect(caesarCipher("ABCZ", 1)).toBe("BCDA");
  expect(caesarCipher("Hello, World14!", 8)).toBe("Pmttw, Ewztl14!");
  expect(caesarCipher("", 8)).toBe("");
})