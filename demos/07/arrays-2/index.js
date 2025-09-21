"use strict";

//Array methods
let animals = ["Alligator", "Cheetah", "Giraffe"];
console.log(animals.toString());
animals.push("Hippo");
animals.push("Monkey");
console.log(animals.toString());
animals.pop();
console.log(animals.toString());
animals.shift();
console.log(animals.toString());
animals.unshift("Albatross");
console.log(animals.toString());
animals[3] = "Happy Hippo";
console.log(animals.toString());

//Array iterations
animals = ["Alligator", "Cheetah", "Giraffe"];
//"Classic" for-loop
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//For..of-loop
for (const animal of animals) {
  console.log(animal);
}

//Array method
animals.forEach((animal) => console.log(animal));
