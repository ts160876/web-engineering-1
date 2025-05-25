"use strict";

//Integers and floats
let anInteger = 3;
let aFloat = 3.14;

console.log(anInteger);
console.log(aFloat);

//Be careful of rounding
let a = 0.1;
let b = 0.2;
let c = a + b;
console.log(c);

//Rounding
console.log(Math.round(c));
console.log(c.toFixed(1));
console.log(typeof Math.round(c)); //number
console.log(typeof c.toFixed(1)); //string

//Rounding to a number of decimals
console.log(parseFloat(c.toFixed(1)));
console.log(typeof parseFloat(c.toFixed(1))); //number
