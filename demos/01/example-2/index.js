function generateText(event) {
  const brElement = document.createElement("br");
  document.body.appendChild(brElement);
  const pElement = document.createElement("p");
  pElement.innerText = "Added by JavaScript";
  document.body.appendChild(pElement);
}

document.addEventListener("DOMContentLoaded", generateText);
