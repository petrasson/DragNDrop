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
  this.classList.add("dragging");
  setTimeout(() => this.classList.add("invisible"), 0);
}

function dragEnd() {
  this.classList.remove("hold", "invisible", "dragging");
}

//event delegation

function dragOver(e) {
  if (e.target.classList.contains("empty")) {
    e.preventDefault();
  }
}

function dragEnter(e) {
  e.preventDefault();
  if (e.target.classList.contains("empty")) {
    e.target.classList.add("hovered");
  } else {
  }
}

function dragLeave(e) {
  if (e.target.classList.contains("empty")) {
    e.target.classList.remove("hovered");
  }
}

function dragDrop(e) {
  e.preventDefault();
  if (e.target.classList.contains("empty")) {
    e.target.classList.remove("hovered");
    e.target.appendChild(fill);
  }
}
