function changeCSS() {
  var selector = document.getElementById("selector");
  var stylesheet = document.getElementById("stylesheet");
  var hyperlink = document.getElementById("hyperlink");
  stylesheet.setAttribute("href", selector.value);
  hyperlink.setAttribute("href", selector.value);
  hyperlink.innerText = selector.value;
}
