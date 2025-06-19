const resultEl = document.getElementById('result');
const historyEl = document.getElementById('history');
const sciButtons = document.getElementById('sci-buttons');

function insert(value) {
  if (resultEl.value === "0") {
    resultEl.value = value;
  } else {
    resultEl.value += value;
  }
}

function clearScreen() {
  resultEl.value = "0";
}

function backspace() {
  resultEl.value = resultEl.value.length <= 1 ? "0" : resultEl.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = resultEl.value;
    // Replace ^ with ** for exponentiation
    expression = expression.replace(/\^/g, '**');
    // Evaluate safely, with math functions replaced
    const evalResult = eval(expression);
    historyEl.innerHTML += `<div>${resultEl.value} = <b>${evalResult}</b></div>`;
    resultEl.value = evalResult;
  } catch (e) {
    alert("Invalid Expression");
  }
}

function toggleHistory() {
  historyEl.classList.toggle('hidden');
}

function toggleScientific() {
  sciButtons.classList.toggle('hidden');
}

// Keyboard support
document.addEventListener("keydown", function(e) {
  const allowedKeys = "0123456789/*-+.()^";
  if (allowedKeys.includes(e.key)) {
    insert(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key.toLowerCase() === "c") {
    clearScreen();
  }
});
