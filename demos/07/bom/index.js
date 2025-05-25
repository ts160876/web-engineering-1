"use strict";

let windowProxy = null;

document.getElementById("openWindow").addEventListener("click", openWindow);
document.getElementById("closeWindow").addEventListener("click", closeWindow);

function openWindow() {
  windowProxy = window.open(
    "p1.html",
    "popupWindow",
    "width=600,height=400,scrollbars=yes,resizable=yes,top=100,left=100"
  );
}

function closeWindow() {
  if (windowProxy != null) {
    windowProxy.close();
    windowProxy = null;
  }
}
