const { sum, divide } = require("../src/math");

describe("sum", () => {
  test("повертає правильну суму двох чисел", () => {
    expect(sum(5, 3)).toBe(8);
    expect(sum(-2, 7)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });
});

describe("divide", () => {
  test("повертає правильний результат ділення", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-9, 3)).toBe(-3);
  });

  test("кидає помилку при діленні на нуль", () => {
    expect(() => divide(10, 0)).toThrow("Ділення на нуль неможливе.");
  });
});
