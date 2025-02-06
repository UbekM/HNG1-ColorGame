/** @format */

const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

const colorOptionsArray = [
  ["red", "pink", "orange", "brown", "violet", "green", "yellow"],
  ["green", "lime", "yellowgreen", "forestgreen", "teal", "blue", "pink"],
  ["blue", "skyblue", "dodgerblue", "lightblue", "teal", "green", "purple"],
  ["yellow", "gold", "lemonchiffon", "lightyellow", "orange", "green", "blue"],
  ["purple", "violet", "lavender", "orchid", "indigo", "blue", "pink"],
  ["orange", "salmon", "darkorange", "coral", "peachpuff", "yellow", "red"],
  ["pink", "hotpink", "deeppink", "lightpink", "crimson", "purple", "red"],
];

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

let currentColorIndex;
let mainColorTimeout;

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
    getRandomColor();
    getColorOptions();
  }, 8000);
}
Loading();

bgMusic.volume = 0.3;

function getRandomColor() {
  currentColorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[currentColorIndex];
  mainColor.style.backgroundColor = randomColor;
  mainColor.style.display = "block";

  if (mainColorTimeout) {
    clearTimeout(mainColorTimeout);
  }

  mainColorTimeout = setTimeout(() => {
    mainColor.style.display = "none";
  }, 4000);
}

function getColorOptions() {
  const options = colorOptionsArray[currentColorIndex];
  colorElements.forEach((colorElement, index) => {
    colorElement.style.backgroundColor = options[index];
  });
}

colorElements.forEach((colorElement) => {
  colorElement.addEventListener("click", () => {
    const mainColorValue = colors[currentColorIndex];
    const clickedColor = colorElement.style.backgroundColor;

    const colorMap = {
      "rgb(255, 0, 0)": "red",
      "rgb(0, 128, 0)": "green",
      "rgb(0, 0, 255)": "blue",
      "rgb(255, 255, 0)": "yellow",
      "rgb(128, 0, 128)": "purple",
      "rgb(255, 165, 0)": "orange",
      "rgb(255, 192, 203)": "pink",
    };

    const clickedColorName =
      colorMap[clickedColor] || clickedColor.toLowerCase();

    if (mainColorValue === clickedColorName) {
      answerStatus.innerHTML = "Correct🎉";
      score.innerHTML = parseInt(score.innerHTML) + 5;
    } else {
      answerStatus.innerHTML = "Wrong❌";
    }

    getRandomColor();
    getColorOptions();
  });
});

function resetGame() {
  score.innerHTML = "0";
  answerStatus.innerHTML = "";
  getRandomColor();
  getColorOptions();
}

btn.addEventListener("click", resetGame);
