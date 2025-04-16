const animal = {
  print: function () {
    console.log(this.name);
  },
};

const alligator = Object.create(animal);
alligator.name = "Alligator";
alligator.kingdom = "Animalia";
alligator.print();

const cheetah = Object.create(animal);
cheetah.name = "Cheetah";
cheetah.phylum = "Chordata";
cheetah.print();

const monkey = Object.create(animal);
monkey.name = "Monkey";
monkey.class = "Mammalia";
monkey.print = function () {
  console.log(this.name + " " + this.class);
};
monkey.print();
