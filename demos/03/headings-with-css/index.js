function turnAround(event) {
  if (document.getElementById("h1").className == "h1-class") {
    document.getElementById("h1").className = "h1-class-inverse";
    document.getElementById("h2").className = "h2-class-inverse";
    document.getElementById("h3").className = "h3-class-inverse";
  } else {
    document.getElementById("h1").className = "h1-class";
    document.getElementById("h2").className = "h2-class";
    document.getElementById("h3").className = "h3-class";
  }
}
