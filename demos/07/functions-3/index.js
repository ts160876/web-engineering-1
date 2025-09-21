"use strict";
let i = 5;

//Pure function
function iAmPure(a, b) {
  return a + b;
}

//Impure function
function iAmNotPure(a) {
  return a + i;
}

//Impure function
function meNeither(a) {
  i = i + a;
}
