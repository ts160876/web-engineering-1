"use strict";

//sumWithLoop
function sumWithLoop(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//sumWithoutLoop
function sumWithoutLoop(n) {
  if (n == 0) {
    return 0;
  } else {
    return n + sumWithoutLoop(n - 1);
  }
}

//Expected results
//n=0 => 0
//n=1 => 1
//n=5 => 15
//n=10 => 55
console.log(sumWithLoop(0));
console.log(sumWithLoop(1));
console.log(sumWithLoop(5));
console.log(sumWithLoop(10));
console.log("---");
console.log(sumWithoutLoop(0));
console.log(sumWithoutLoop(1));
console.log(sumWithoutLoop(5));
console.log(sumWithoutLoop(10));
