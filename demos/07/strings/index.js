"use strict";

let myString = "My first string";
console.log(myString.length);

let person1 = "Tim";
let age1 = 16;
let person2 = "Struppi";
let age2 = 7;

console.log(
  person1 +
    " und " +
    person2 +
    " sind zusammen " +
    (age1 + age2) +
    " Jahre alt."
);

console.log(
  `${person1} und ${person2} sind zusammen ${age1 + age2} Jahre alt.`
);
