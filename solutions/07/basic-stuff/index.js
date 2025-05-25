"use strict";

class Calculation {
  //Constructor
  constructor(number1, operator, number2) {
    this.number1 = number1;
    this.operator = operator;
    this.number2 = number2;
  }

  //Calculate the result (if the operator is not valid, the result will be undefined;)
  calculate() {
    switch (this.operator) {
      case "+":
        this.result = this.number1 + this.number2;
        break;
      case "-":
        this.result = this.number1 - this.number2;
        break;
      case "*":
        this.result = this.number1 * this.number2;
        break;
      case "/":
        this.result = this.number1 / this.number2;
        break;
    }
    return this.result;
  }
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
    let calculation = new Calculation(number1, operator, number2);
    if (
      calculation.calculate() === undefined ||
      Number.isNaN(calculation.calculate()) === true
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
