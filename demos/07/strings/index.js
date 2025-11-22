"use strict";

let myString = "My first string";
console.log(myString.length);

let person1 = "Tim";
let age1 = 16;
let person2 = "Struppi";
let age2 = 7;

//String concatenation
console.log(
  person1 +
    " und " +
    person2 +
    " sind zusammen " +
    (age1 + age2) +
    " Jahre alt."
);

//Template strings
console.log(
  `${person1} und ${person2} sind zusammen ${age1 + age2} Jahre alt.`
);

//Repeat a string (obvious way)
let repeated = "";
for (let i = 1; i <= 3; i++) {
  repeated += person1;
}
console.log(repeated);

//Repeat a string (better way)
console.log(person1.repeat(3));
