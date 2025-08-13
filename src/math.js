function sum(a, b) {
  // Повертає суму двох чисел
  return a + b;
}

function divide(a, b) {
  // Повертає результат ділення або кидає помилку при діленні на нуль
  if (b === 0) {
    throw new Error("Ділення на нуль неможливе.");
  }
  return a / b;
}

module.exports = { sum, divide };
