function previewHTML(event) {
  htmlEditor = document.getElementById("htmlEditor");
  previewFrame = document.getElementById("previewFrame");
  previewFrame.srcdoc = htmlEditor.value;
}
