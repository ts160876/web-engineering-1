"use strict";

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

let animals = ["Alligator", "Cheetah", "Giraffe", "Hippo", "Monkey"];
for (const animal of animals) {
  console.log(animal);
}

let alligator = {
  name: "Alligator",
  kingdom: "Animalia",
  phylum: "Chordata",
  class: "Mammalia",
};
for (const key in alligator) {
  console.log(key + ": " + alligator[key]);
}
