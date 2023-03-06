const capitalize = require("./capitalize");

test("Capitalize", () => {
  expect(capitalize("hello World")).toBe("Hello World");
  expect(capitalize("")).toBe("");
  expect(capitalize("1")).toBe("1");
})