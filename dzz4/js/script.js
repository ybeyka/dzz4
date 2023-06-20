"use strict";
function calc() {
    let num1 = prompt("Введіть перше число:");
    let num2 = prompt("Введіть друге число:");
    

    while (isNaN(num1) || isNaN(num2)) {
      alert("Введено некоректне число. Спробуйте ще раз.");
      num1 = prompt("Введіть перше число:");
      num2 = prompt("Введіть друге число:");
    }
  
    let operac = prompt("Введіть математичну операцію (+, -, *, /):");
  
    let result;
    switch (operac) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        alert("Введено некоректну операцію.");
        return;
    }
  
    console.log("Результат: " + result);
  }
  
  
  calc();
  
