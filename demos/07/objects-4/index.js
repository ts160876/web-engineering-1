"use strict";

function Animal(name, color) {
  this.name = name;
  this.color = color;
}

Animal.prototype.saySomething = function () {
  return `I am ${this.name}.`;
};

function Alligator(tailLength) {
  Animal.call(this, "Alligator", "green");
  this.tailLength = tailLength;
}

Alligator.prototype = Object.create(Animal.prototype);
Alligator.prototype.constructor = Alligator;
Alligator.prototype.swim = function () {
  return `I am swimming.`;
};

function Monkey(bodySize) {
  Animal.call(this, "Monkey", "brown");
  this.bodySize = bodySize;
}

Monkey.prototype = Object.create(Animal.prototype);
Monkey.prototype.constructor = Monkey;
Monkey.prototype.climb = function () {
  return `I am climbing`;
};

const alligator = new Alligator(130);
console.log(alligator.swim());
console.log(alligator.saySomething());

const monkey = new Monkey(70);
console.log(monkey.climb());
console.log(monkey.saySomething());
