"use strict";

//Animals (in singular)
const animals = ["Alligator", "Cheetah", "Giraffe", "Hippo", "Monkey"];

//Text about animals (in plural)
const textAboutAnimals =
  "Alligators are large reptiles native to the southeastern United States and China. Cheetahs are fast-running big cats found primarily in Africa and parts of Asia. Giraffes are the tallest land mammals, native to Africa. Hippos are large, semi-mammalian mammals native to sub-Saharan Africa. Monkeys are intelligent, agile primates found in various regions around the world, especially in tropical forests.";
console.log(textAboutAnimals);

//Capitalize all animals in the text.
//Before: Alligators are large reptiles native to the southeastern United States and China
//After: ALLIGATORS are large reptiles native to the southeastern United States and China
let textWithCapitalizedAnimals = textAboutAnimals;
animals.forEach((animal) => {
  const animalInPlural = animal + "s";
  textWithCapitalizedAnimals = textWithCapitalizedAnimals.replace(
    animalInPlural,
    animalInPlural.toUpperCase()
  );
});
console.log(textWithCapitalizedAnimals);

//Split the (original) string into separate strings for each sentence. Store these sentences in an array.
//The strings stored in the array, must not have whitespace at the beginning.
//The strings stored in the array must not be empty.
//The strings stored in the array shall end with a full stop.
let sentences = textAboutAnimals.split(".");
sentences.pop();
sentences.forEach((sentence, index) => {
  sentence = sentence.trim();
  sentences[index] = sentence + ".";
});
console.log(sentences);
