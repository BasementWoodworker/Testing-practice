const stringReverse = require("./reverse-string");

test("Reverse string", () => {
  expect(stringReverse("asd")).toBe("dsa");
  expect(stringReverse("")).toBe("");
  expect(stringReverse("watermelon")).toBe("nolemretaw");
})