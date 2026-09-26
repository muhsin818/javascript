// main.js

import { add, subtract, multiply, divide } from "./math.js";

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operation = document.getElementById("operation");
let result = document.getElementById("result");
let calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function () {
  let a = Number(num1.value);
  let b = Number(num2.value);

  let answer;

  if (operation.value === "add") {
    answer = add(a, b);
  } else if (operation.value === "subtract") {
    answer = subtract(a, b);
  } else if (operation.value === "multiply") {
    answer = multiply(a, b);
  } else if (operation.value === "divide") {
    answer = divide(a, b);
  }

  result.textContent = answer;
});
