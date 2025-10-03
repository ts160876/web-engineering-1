"use strict";

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  saySomething() {
    return `I am ${this.name}.`;
  }
}

class Alligator extends Animal {
  constructor(tailLength) {
    super("Alligator", "green");
    this.tailLength = tailLength;
  }

  swim() {
    return `I am swimming.`;
  }
}

class Monkey extends Animal {
  constructor(bodySize) {
    super("Monkey", "brown");
    this.bodySize = bodySize;
  }
  climb() {
    return `I am climbing`;
  }
}

const alligator = new Alligator(130);
console.log(alligator.swim());
console.log(alligator.saySomething());

const monkey = new Monkey(70);
console.log(monkey.climb());
console.log(monkey.saySomething());
