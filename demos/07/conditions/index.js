let myNumber = 0;

if (myNumber == 1) {
  console.log("My number is greater than zero.");
} else if (myNumber == -1) {
  console.log("My number is lower than zero.");
} else {
  console.log("My number is zero.");
}

switch (myNumber) {
  case 1:
    console.log("My number is greater than zero.");
    break;
  case -1:
    console.log("My number is lower than zero.");
    break;
  default:
    console.log("My number is zero.");
}

myNumber == 1
  ? console.log("My number is greater than zero.")
  : myNumber == -1
  ? console.log("My number is lower than zero.")
  : console.log("My number is zero.");
