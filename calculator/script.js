const display = document.querySelector(".display #display");

function clearDisplay() {
  display.value = "";
}

function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

function append(value) {
  display.value += value;
}

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Infinity"),
};

function calculate() {
  try {
    let expression = display.value;

    if (!expression) return;
    let tokens = expression.split(/([+\-*/])/).filter((token) => token.trim());
    if (tokens.length < 3) return;
    let result;

    // Handle division and multiplication first
    for (let i = 1; i < tokens.length; i += 2) {
      let operator = tokens[i];
      if (operator === "*" || operator === "/") {
        let prev = parseFloat(tokens[i - 1]);
        let next = parseFloat(tokens[i + 1]);
        if (operator === "*") {
          result = operations.multiply(prev, next);
        } else {
          result = operations.divide(prev, next);
        }
        tokens.splice(i - 1, 3, result.toString());
        i -= 2; // Adjust index to account for removed tokens
      }
    }

    // handle add and sub
    for (let i = 1; i < tokens.length; i += 2) {
      let operator = tokens[i];
      if (operator === "+" || operator === "-") {
        let prev = parseFloat(tokens[i - 1]);
        let next = parseFloat(tokens[i + 1]);
        if (operator === "+") {
          result = operations.add(prev, next);
        } else {
          result = operations.subtract(prev, next);
        }
      }
    }

    display.value = Number.isFinite(result) ? result.toString() : "Infinite";
  } catch (error) {
    display.value = "Error";
    console.log(error);
  }
}

// Key event handler for keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[\d+\-*/]/.test(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteDigit();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
