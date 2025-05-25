"use strict";

//Create an object
const alligator = {
  name: "Alligator",
  kingdom: "Animalia",
  phylum: "Chordata",
  class: "Reptilia",
  order: "Crocodilia",
  saySomething: function () {
    return `I am ${this.name}.`;
  },
};

//Call the function
console.log(alligator.saySomething());

//Extend the object
alligator.color = "green";
alligator.sayMore = function () {
  return `I am ${this.name} and ${this.color}.`;
};

//Call the new function
console.log(alligator.sayMore());

//Functions can also have parameters
alligator.saySomethingSpecific = function (what) {
  return `My ${what}: ${this[what]}`;
};

//Call the function with a parameter
console.log(alligator.saySomethingSpecific("class"));

//Iterate over all properties
for (const key in alligator) {
  if (typeof alligator[key] !== "function") {
    console.log(alligator.saySomethingSpecific(key));
  }
}

//Create a class
class Animal {
  //Constructor
  constructor(aName, aKingdom, aPhylum, aClass, aOrder) {
    this.name = aName;
    this.kingdom = aKingdom;
    this.phylum = aPhylum;
    this.class = aClass;
    this.order = aOrder;
  }

  //Function to say something
  saySomething() {
    return `I am ${this.name}.`;
  }
}

//Instantiate the class (i.e., create an object)
const cheetah = new Animal(
  "Cheetah",
  "Animalia",
  "Chordata",
  "Mammalia",
  "Carnivora"
);

//Call the function
console.log(cheetah.saySomething());
