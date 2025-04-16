let animals = ["Alligator", "Cheetah", "Giraffe", "Hippo", "Monkey"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (const animal of animals) {
  console.log(animal);
}

animals.forEach((animal) => console.log(animal));
