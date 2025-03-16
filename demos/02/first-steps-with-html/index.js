function doSomething(event) {
  //Send an alert
  alert("Welcome to this web page!");
  //Add some text
  const p1 = document.createElement("p");
  p1.innerText = "And it is really cool.";
  document.body.appendChild(p1);
  //Do mathematics
  const p2 = document.createElement("p");
  p2.innerText = `It can for example calculate: 2 + 2 = ${2 + 2}`;
  document.body.appendChild(p2);
  //Call an API
  const p3 = document.createElement("p");
  p3.innerText = `Running on: ${navigator.userAgent}`;
  document.body.appendChild(p3);
}

document.addEventListener("DOMContentLoaded", doSomething);
