"use strict";

//Function declaration (hoisted!)
function add_v1(a, b) {
  return a + b;
}

//Anonymous function expression
const add_v2 = function (a, b) {
  return a + b;
};

//Named function expression
const add_v3 = function aName(a, b) {
  return a + b;
};

//Arrow function (block body)
const add_v4 = (a, b) => {
  return a + b;
};

//Arrow function (concise body)
const add_v5 = (a, b) => a + b;
