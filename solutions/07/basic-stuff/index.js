"use strict";

//Calculate the result (if the operator is not valid, the result will be undefined;)
function calculate(calculation) {
  switch (calculation.operator) {
    case "+":
      calculation.result = calculation.number1 + calculation.number2;
      break;
    case "-":
      calculation.result = calculation.number1 - calculation.number2;
      break;
    case "*":
      calculation.result = calculation.number1 * calculation.number2;
      break;
    case "/":
      calculation.result = calculation.number1 / calculation.number2;
      break;
  }
  return calculation.result;
}

//Global variables
let continueTheCalculation = true;
let calculations = [];

//Continue the calculation until the use does not want anymore
while (continueTheCalculation) {
  let number1 = parseInt(prompt("Enter number 1:"));
  let operator = prompt("Enter the operator:");
  let number2 = parseInt(prompt("Enter number 2:"));
  if (number1 != undefined && operator != undefined && number2 != undefined) {
    let calculation = {
      number1: number1,
      operator: operator,
      number2: number2,
    };

    if (
      calculate(calculation) === undefined ||
      Number.isNaN(calculate(calculation)) === true
    ) {
      alert(`Something went wrong!`);
    } else {
      calculations.push(calculation);
      alert(`Result: ${calculation.result}`);
    }
  }
  continueTheCalculation = confirm("Do you want continue the calculation?");
}

//Print all calculations on the console
for (let calculation of calculations) {
  console.log(
    `${calculation.number1} ${calculation.operator} ${calculation.number2} = ${calculation.result}`
  );
}
