function calculate() {
    const expression = document.getElementById("expression").value;
    const parts = expression.split(" ");
    const num1 = parseInt(parts[0]);
    const operator = parts[1];
    const num2 = parseInt(parts[2]);
  
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Operator tidak valid";
    }
    document.getElementById("result").innerText = `Hasil: ${result}`;  
    
  }