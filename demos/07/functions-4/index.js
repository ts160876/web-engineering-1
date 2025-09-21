"use strict";

//Higher-order functions
const doSomething = (a, b, f) => {
  return f(a, b);
};

const getSomething = (w) => {
  switch (w) {
    case "add":
      return (a, b) => a + b;
      break;
    case "subtract":
      return (a, b) => a - b;
      break;
    case "multiply":
      return (a, b) => a * b;
      break;
    case "divide":
      return (a, b) => a / b;
  }
};

//Calling the higher order function
console.log("2 + 5 = " + doSomething(2, 5, getSomething("add")));
console.log("3 * 4 = " + doSomething(3, 4, getSomething("multiply")));
