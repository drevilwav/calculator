let currentInput = "";
let previousInput = "";

function pressNumber(num) {
  if (num == "." && currentInput.includes(".")) return;
  currentInput += num;
  updateDisplay();
}

function updateDisplay() {
  document.querySelector(".display").textContent = currentInput;
}

function backspace() {
  let display = document.querySelector(".display");
  if (display.textContent.length > 0) {
    currentInput = display.textContent.substring(0, display.textContent.length - 1);
    updateDisplay();
  }
}

function pressOperator (op) {
  if (currentInput === "" && op === "-") {
    currentInput = "-";
    updateDisplay();
    return;
  }
  previousInput = currentInput;
  currentInput = "";
  operation = op;
}

function percent () {
  if (currentInput === "") return;
  let percent = parseFloat(currentInput) / 100;
  currentInput = percent.toString();
  updateDisplay();
  }

function calculate() {
  if (!operation || previousInput === "" || currentInput === "") return;
  let result = 0;
  const prev = parseFloat(previousInput);
  const cur = parseFloat(currentInput);

  switch(operation) {
    case "+":
      result = prev + cur;
      break;
    case "-":
      result = prev - cur;
      break;
    case "*":
      result = prev * cur;
      break;
    case "/":
      if (cur !== 0) {
      result = prev / cur;
      break;
      } else {
        alert("Деление на ноль!");
        return;
      }
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = "";
  updateDisplay()
}

function cleanDisplay() {
  currentInput = "";
  previousInput = "";
  operation = null;
  updateDisplay();
}

function minus() {
  if (currentInput.substring(0, 1) == "-") {
    currentInput = currentInput.substring(1, currentInput.length)
    updateDisplay();
  } else {
    currentInput = "-" + currentInput;
    updateDisplay();
  }
}
