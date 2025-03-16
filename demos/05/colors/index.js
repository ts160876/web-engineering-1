window.addEventListener("load", onLoad);

function onLoad() {
  textColorSelector = document.getElementById("text-color");
  textColorSelector.addEventListener("input", changeColor);
  textColorSelector.addEventListener("change", changeColor);

  backgroundColorSelector = document.getElementById("background-color");
  backgroundColorSelector.addEventListener("input", changeColor);
  backgroundColorSelector.addEventListener("change", changeColor);

  borderColorSelector = document.getElementById("border-color");
  borderColorSelector.addEventListener("input", changeColor);
  borderColorSelector.addEventListener("change", changeColor);

  textShadowSelector = document.getElementById("text-shadow");
  textShadowSelector.addEventListener("input", changeColor);
  textShadowSelector.addEventListener("change", changeColor);

  boxShadowSelector = document.getElementById("box-shadow");
  boxShadowSelector.addEventListener("input", changeColor);
  boxShadowSelector.addEventListener("change", changeColor);
}

function changeColor() {
  textColorSelector = document.getElementById("text-color");
  backgroundColorSelector = document.getElementById("background-color");
  borderColorSelector = document.getElementById("border-color");
  textShadowSelector = document.getElementById("text-shadow");
  boxShadowSelector = document.getElementById("box-shadow");

  paragraph = document.getElementById("paragraph");
  paragraph.style.color = textColorSelector.value;
  paragraph.style.backgroundColor = backgroundColorSelector.value;
  paragraph.style.borderColor = borderColorSelector.value;
  paragraph.style.textShadow = "2px 1px 1px" + textShadowSelector.value;
  paragraph.style.boxShadow = "10px 5px 5px " + boxShadowSelector.value;
}
