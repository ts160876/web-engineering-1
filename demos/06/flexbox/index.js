function adjustLayout() {
  display = document.getElementById("display").value;
  overflow = document.getElementById("overflow").value;
  height = document.getElementById("height").value;
  flexDirection = document.getElementById("flex-direction").value;
  flexWrap = document.getElementById("flex-wrap").value;
  alignItems = document.getElementById("align-items").value;
  justifyContent = document.getElementById("justify-content").value;
  alignContent = document.getElementById("align-content").value;

  flexGrow = document.getElementById("flex-grow").value;
  flexShrink = document.getElementById("flex-shrink").value;

  flexboxes = document.getElementsByClassName("flexbox");
  for (let i = 0; i < flexboxes.length; i++) {
    flexboxes.item(i).style.display = display;
    flexboxes.item(i).style.overflow = overflow;
    flexboxes.item(i).style.height = height + "px";
    flexboxes.item(i).style.flexDirection = flexDirection;
    flexboxes.item(i).style.flexWrap = flexWrap;
    flexboxes.item(i).style.alignItems = alignItems;
    flexboxes.item(i).style.justifyContent = justifyContent;
    flexboxes.item(i).style.alignContent = alignContent;
  }

  flexitems = document.getElementsByClassName("flexitem");
  for (let i = 0; i < flexitems.length; i++) {
    flexitems.item(i).style.flexGrow = flexGrow;
    flexitems.item(i).style.flexShrink = flexShrink;
  }
}
