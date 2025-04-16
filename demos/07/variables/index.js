//Variables do not need a declaration except with "use strict".
aVariable = 4;
console.log(aVariable);
//Variables can change their data type.
aVariable = "Formerly this was the number 4.";
console.log(aVariable);

//Even with a proper declaration...
let bVariable = 6;
console.log(bVariable);
//... variables can change their data type.
bVariable = "Formaly this was the number 6.";
console.log(bVariable);

function aFunction() {
  let aVariable = "aVariable was redeclared inside function a.";
  let cVariable = "This is the value of variable c.";
  let dVariable = "This is the value of variable d.";
  console.log(aVariable);
  console.log(bVariable);
  console.log(cVariable);
  console.log(dVariable);
}

function bFunction() {
  {
    var eVariable = "eVariable was declared in block in function b.";
  }
  {
    let fVariable = "fVariable was declared in block in function b.";
  }
  console.log(eVariable);
  //console.log(fVariable);
}

function cFunction() {
  console.log(gVariable);
  //console.log(hVariable);
  var gVariable = "Value of gVariable";
  let hVariable = "Value of hVariable";
}

function dFunction() {
  let s1 = Symbol();
  let s2 = Symbol("foo");
  let s3 = Symbol("foo");
  console.log(s1);
  console.log(s2);
  console.log(s3);
}

aFunction();
bFunction();
cFunction();
dFunction();
