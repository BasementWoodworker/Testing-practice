const analyzeArray = require("./analyze-array");

test("Analyze Array", () => {
  expect(analyzeArray([1,2,3]).min).toBe(1);
  expect(analyzeArray([1,2,3]).max).toBe(3);
  expect(analyzeArray([1,2,3]).average).toBe(2);
  expect(analyzeArray([1,2,3]).length).toBe(3);
})