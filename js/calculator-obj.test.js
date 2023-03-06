const calculator = require("./calculator-obj")

test("Calculator", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(calculator.substract(2, 5)).toBe(-3);
  expect(calculator.multiply(4, 5)).toBe(20);
  expect(calculator.divide(1, 3)).toBeCloseTo(0.33);
})