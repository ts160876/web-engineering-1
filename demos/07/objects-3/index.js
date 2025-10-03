"use strict";

const animal = {
  name: "Animal",
  color: "any",
  saySomething: function () {
    return `I am ${this.name}.`;
  },
};

const alligator = Object.create(animal);
alligator.name = "Alligator";
alligator.color = "green";
alligator.tailLength = 130;
alligator.swim = function () {
  return `I am swimming.`;
};
console.log(alligator.swim());
console.log(alligator.saySomething());

const monkey = Object.create(animal);
monkey.name = "Monkey";
monkey.color = "brown";
monkey.bodySize = 70;
monkey.climb = function () {
  return `I am climbing`;
};
console.log(monkey.climb());
console.log(monkey.saySomething());
