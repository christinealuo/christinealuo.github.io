var loadPage;
function loadPage() {
  console.log("hello");
  loadPage = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader-container").style.display = "none";
  document.getElementById("body-div").style.display = "inline";
}

let cs61aButton = document.getElementById("cs61a");
let cs88Button = document.getElementById("cs88");

function show61ANotes() {
  // Show 61A notes
  document.getElementById("scheme").style.display = "flex";
  document.getElementById("macros").style.display = "flex";
  // Hide CS 88 notes
  document.getElementById("mutability").style.display = "none";
  document.getElementById("linkedLists").style.display = "none";
  document.getElementById("oop").style.display = "none";

  console.log((document.getElementById("cs61a").style.color = "white"));
  document.getElementById("cs88").style.color = "black";
}

function show88Notes() {
  // Show CS 88 notes
  document.getElementById("mutability").style.display = "flex";
  document.getElementById("linkedLists").style.display = "flex";
  document.getElementById("oop").style.display = "flex";
  // Hide CS 61A notes
  document.getElementById("scheme").style.display = "none";
  document.getElementById("macros").style.display = "none";

  document.getElementById("cs88").style.color = "white";
  document.getElementById("cs61a").style.color = "black";
}

// let prevButton = document.getElementById("prev-button");
// let nextButton = document.getElementById("next-button");
// let imageRow = document.getElementById("carousel-image-row");
// let imageNum = 0;
// let carouselWidth = 480;

// function showNextImage() {
//   console.log("show next image");
//   imageNum += 1;
//   let leftPixels = -1 * imageNum * caourselWidth;
//   imageRow.style.left = leftPixels + "px";
// }
