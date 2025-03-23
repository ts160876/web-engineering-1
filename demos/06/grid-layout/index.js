function adjustLayout() {
  display = document.getElementById("display").value;
  containerMargin = document.getElementById("container-margin").value;
  gridTemplateColumns = document.getElementById("grid-template-columns").value;
  columnGap = document.getElementById("column-gap").value;
  rowGap = document.getElementById("row-gap").value;

  itemMargin = document.getElementById("item-margin").value;

  placement = document.getElementById("placement").checked;

  gridcontainers = document.getElementsByClassName("gridcontainer");
  for (let i = 0; i < gridcontainers.length; i++) {
    gridcontainers.item(i).style.display = display;
    gridcontainers.item(i).style.margin = containerMargin + "px";
    gridcontainers.item(i).style.gridTemplateColumns = gridTemplateColumns;
    gridcontainers.item(i).style.columnGap = columnGap + "px";
    gridcontainers.item(i).style.rowGap = rowGap + "px";
  }

  griditems = document.getElementsByClassName("griditem");
  for (let i = 0; i < griditems.length; i++) {
    griditems.item(i).style.margin = itemMargin + "px";

    //Alligator
    if (griditems.item(i).id == "alligator") {
      if (placement == true) {
        griditems.item(i).style.gridColumn = document.getElementById(
          "alligator-grid-column"
        ).value;
        griditems.item(i).style.gridRow =
          document.getElementById("alligator-grid-row").value;
      } else {
        griditems.item(i).style.gridColumn = griditems.item(i).style.gridRow =
          "";
      }
    }

    //Cheetah
    if (griditems.item(i).id == "cheetah") {
      if (placement == true) {
        griditems.item(i).style.gridColumn = document.getElementById(
          "cheetah-grid-column"
        ).value;
        griditems.item(i).style.gridRow =
          document.getElementById("cheetah-grid-row").value;
      } else {
        griditems.item(i).style.gridColumn = griditems.item(i).style.gridRow =
          "";
      }
    }

    //Elephant
    if (griditems.item(i).id == "elephant") {
      if (placement == true) {
        griditems.item(i).style.gridColumn = document.getElementById(
          "elephant-grid-column"
        ).value;
        griditems.item(i).style.gridRow =
          document.getElementById("elephant-grid-row").value;
      } else {
        griditems.item(i).style.gridColumn = griditems.item(i).style.gridRow =
          "";
      }
    }

    //Hippo
    if (griditems.item(i).id == "hippo") {
      if (placement == true) {
        griditems.item(i).style.gridColumn =
          document.getElementById("hippo-grid-column").value;
        griditems.item(i).style.gridRow =
          document.getElementById("hippo-grid-row").value;
      } else {
        griditems.item(i).style.gridColumn = griditems.item(i).style.gridRow =
          "";
      }
    }

    //Iguana
    if (griditems.item(i).id == "iguana") {
      if (placement == true) {
        griditems.item(i).style.gridColumn =
          document.getElementById("iguana-grid-column").value;
        griditems.item(i).style.gridRow =
          document.getElementById("iguana-grid-row").value;
      } else {
        griditems.item(i).style.gridColumn = griditems.item(i).style.gridRow =
          "";
      }
    }

    //Monkey
    if (griditems.item(i).id == "monkey") {
      if (placement == true) {
        griditems.item(i).style.gridColumn =
          document.getElementById("monkey-grid-column").value;
        griditems.item(i).style.gridRow =
          document.getElementById("monkey-grid-row").value;
      } else {
        griditems.item(i).style.gridColumn = griditems.item(i).style.gridRow =
          "";
      }
    }
  }
}
