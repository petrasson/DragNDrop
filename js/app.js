const fill = document.querySelector(".fill");
const container = document.querySelector(".container");

//fill Listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

container.addEventListener("dragover", dragOver);
container.addEventListener("dragenter", dragEnter);
container.addEventListener("dragleave", dragLeave);
container.addEventListener("drop", dragDrop);

//Drag FUnctions
function dragStart() {
  this.classList.add("hold");
  //console.log("start");
  setTimeout(() => this.classList.add("invisible"), 0);
}

function dragEnd() {
  //console.log("end");
  this.classList.remove("hold", "invisible");
}

//event delegation

function dragOver(e) {
  if (e.target.classList.contains("empty")) {
    e.preventDefault();
  }
  //console.log("over");
}

function dragEnter(e) {
  if (e.target.classList.contains("empty")) {
    e.preventDefault();
    e.target.classList.add("hovered");
  }
  //console.log("enter and hover");
}

function dragLeave(e) {
  if (e.target.classList.contains("empty")) {
    e.target.classList.remove("hovered");
  }
}

function dragDrop(e) {
  if (e.target.classList.contains("empty")) {
    e.target.classList.remove("hovered");
    // Append fill to the target if it is empty
    e.target.append(fill);
  }
}
