let displayValue = "";

document.querySelectorAll(".numeroBtn").forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.value;
    document.getElementById("display").textContent = displayValue;
  });
});

document.querySelectorAll(".operacoesBtn").forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += ` ${button.value} `;
    document.getElementById("display").textContent = displayValue;
  });
});

document.getElementById("igualBtn").addEventListener("click", () => {
  try {
    let result = eval(displayValue);
    result = parseFloat(result.toFixed(3));
    displayValue = result.toString();
    document.getElementById("display").textContent = displayValue;
  } catch (error) {
    document.getElementById("display").textContent = "Erro na expressão";
  }
});

document.getElementById("limpaBtn").addEventListener("click", () => {
  displayValue = "";
  document.getElementById("display").textContent = "0";
});
