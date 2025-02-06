/** @format */

// Main color options
const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

// Colors for options, each option set will include the correct main color.
const colorOptionsArray = [
  ["red", "pink", "orange", "brown", "violet", "green", "yellow"],
  ["green", "lime", "yellowgreen", "forestgreen", "teal", "blue", "pink"],
  ["blue", "skyblue", "dodgerblue", "lightblue", "teal", "green", "purple"],
  ["yellow", "gold", "lemonchiffon", "lightyellow", "orange", "green", "blue"],
  ["purple", "violet", "lavender", "orchid", "indigo", "blue", "pink"],
  ["orange", "salmon", "darkorange", "coral", "peachpuff", "yellow", "red"],
  ["pink", "hotpink", "deeppink", "lightpink", "crimson", "purple", "red"],
];

// Get all classes and HTML Tags
const firstPlate = document.querySelector(".first-plate");
const theInstruction = document.querySelector(".instruction");
const secondPlate = document.querySelector(".second-plate");
const bgMusic = document.querySelector(".bg-music");
const mainColor = document.querySelector(".main-color");
const colorOptions = document.querySelector(".colors");
const colorElements = document.querySelectorAll(".color");
const answerStatus = document.querySelector(".status");
const score = document.querySelector(".score-digit");
const btn = document.querySelector(".btn");

// Entry loading setting
function Loading() {
  setTimeout(() => {
    firstPlate.style.display = "none";
    setTimeout(() => {
      theInstruction.style.display = "block";
    });
  }, 3000);
  setTimeout(() => {
    theInstruction.style.display = "none";
    secondPlate.style.display = "block";
  }, 8000);
}
Loading();

// Background Music
bgMusic.volume = 0.3;

// Get random main colour
function getRandomColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  mainColor.style.backgroundColor = randomColor;
  setTimeout(() => {
    mainColor.style.display = "none";
  }, 4000);
  mainColor.style.display = "block";
}
getRandomColor();

// Get random color options
function getRandomColorOptions() {
  const randomOptions =
    colorOptionsArray[Math.floor(Math.random() * colorOptionsArray.length)];
  colorElements.forEach((colorElement, index) => {
    colorElement.style.backgroundColor = randomOptions[index];
  });
}
getRandomColorOptions();

// Change color when clicked
colorElements.forEach((colorElement) => {
  colorElement.addEventListener("click", () => {
    mainColor.style.backgroundColor === colorElement.style.backgroundColor
      ? ((answerStatus.innerHTML = "Correct🎉"),
        (score.innerHTML = parseInt(score.innerHTML) + 5))
      : (answerStatus.innerHTML = "Wrong❌");
    getRandomColor();
    getRandomColorOptions();
  });
});

function resetGame() {
  score.innerHTML = "0";
  answerStatus.innerHTML = "";
  getRandomColor();
  getRandomColorOptions();
}

// Add event listener to reset button
btn.addEventListener("click", resetGame);
