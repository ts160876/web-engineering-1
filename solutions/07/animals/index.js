"use strict";
//Animals of the zoo
const animals = [
  "Alligator",
  "Bear",
  "Camel",
  "Cheetah",
  "Elephant",
  "Flamingo",
  "Giraffe",
  "Hippo",
  "Hyena",
  "Iguana",
  "Kangaroo",
  "Koala",
  "Lion",
  "Monkey",
  "Snake",
];

//Habitats of the zoo
const habitats = ["Mountain", "Reptile House", "Savanna"];

//Assignment of animals to habitats. The array stores the index of an habitat at the index of the animal.
//Examples:
//If the Bear is in the Savanna, then animalsToHabitats[1] = 2.
//If the Hippo is in the Mountain, then animalsToHabitats[7] = 0;
const animalsToHabitats = [];

// Assign animals to habitats
animals.forEach((animal) => {
  //Generate a random number between 0 and 2
  const indexOfHabitat = Math.floor(Math.random() * 3);
  animalsToHabitats.push(indexOfHabitat);
  console.log(`${animal} is in the ${habitats[indexOfHabitat]}.`);
});

//List the animals of the habitats
habitats.forEach((habitat, indexOfHabitat) => {
  let animalsInTheHabitat = 0;
  console.log(`The following animals are in the ${habitat}:`);
  animalsToHabitats.forEach((animalsToHabitat, indexOfAnimalsToHabitat) => {
    if (animalsToHabitat == indexOfHabitat) {
      console.log(`- ${animals[indexOfAnimalsToHabitat]}`);
      animalsInTheHabitat++;
    }
  });
  console.log(
    `Altogether ${animalsInTheHabitat} animals are in the ${habitat}.`
  );
});
