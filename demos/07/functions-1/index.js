"use strict";

//Function expression assigned to a constant
const addTwoNumbers = function (a, b) {
  return a + b;
};

//Another function expression assigned to another constant
const callAFunction = function (f) {
  return f(5, 7);
};

//Function invocation via the constant
console.log(addTwoNumbers(5, 7));

//Function invocation via the constant passing the other constant (function)
console.log(callAFunction(addTwoNumbers));

//Function invocation via the constant passing a function expression
console.log(
  callAFunction(function (a, b) {
    return a + b;
  })
);
