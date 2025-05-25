window.addEventListener("load", onLoad);

function onLoad() {
  document
    .getElementById("font-family")
    .addEventListener("change", changeFontFamily);
  document
    .getElementById("font-size")
    .addEventListener("change", changeFontSize);
  document
    .getElementById("font-weight")
    .addEventListener("change", changeFontWeight);
  document
    .getElementById("font-style")
    .addEventListener("change", changeFontStyle);
  document
    .getElementById("line-height")
    .addEventListener("change", changeLineHeight);
  document
    .getElementById("text-decoration")
    .addEventListener("change", changeTextDecoration);
  document
    .getElementById("text-transform")
    .addEventListener("change", changeTextTransform);
  document
    .getElementById("text-align")
    .addEventListener("change", changeTextAlign);
}

function changeFontFamily(event) {
  document.getElementById("paragraph").style.fontFamily = event.target.value;
}

function changeFontSize(event) {
  document.getElementById("paragraph").style.fontSize = event.target.value;
}

function changeFontWeight(event) {
  document.getElementById("paragraph").style.fontWeight = event.target.value;
}

function changeFontStyle(event) {
  document.getElementById("paragraph").style.fontStyle = event.target.value;
}

function changeLineHeight(event) {
  document.getElementById("paragraph").style.lineHeight = event.target.value;
}

function changeTextDecoration(event) {
  document.getElementById("paragraph").style.textDecoration =
    event.target.value + " black";
}

function changeTextTransform(event) {
  document.getElementById("paragraph").style.textTransform = event.target.value;
}

function changeTextAlign(event) {
  document.getElementById("paragraph").style.textAlign = event.target.value;
}
