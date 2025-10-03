"use strict";

function Animal(name, color) {
  this.name = name;
  this.color = color;
  //this.saySomething = function () {
  //  return `I am ${this.name}.`;
  //};
}

Animal.prototype.kingdom = "Animalia";

Animal.prototype.saySomething = function () {
  return `I am ${this.name}.`;
};

const alligator = new Animal("Alligator", "green");
const cheetah = new Animal("Cheetah", "brown");
const giraffe = new Animal("Giraffe", "brown");
const hippo = new Animal("Hippo", "grey");
const monkey = new Animal("Monkey", "black");

console.log(cheetah.saySomething());
console.log(hippo.saySomething());

Animal.prototype.saySomething = function () {
  return `I am happy ${this.name}.`;
};

console.log(cheetah.saySomething());
console.log(hippo.saySomething());

hippo.saySomething = function () {
  return `I am not so happy ${this.name}.`;
};

console.log(cheetah.saySomething());
console.log(hippo.saySomething());
