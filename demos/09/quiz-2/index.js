"use strict";

function add(a, b) {
  setTimeout(() => {
    return a + b;
  }, 3000);
}

console.log(`Start of program`);
console.log(add(2, 3));
console.log(add(5, 5));
console.log(`End of program`);
