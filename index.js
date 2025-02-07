/** @format */

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "indigo",
  "maroon",
  "olive",
];

const colorOptionsArray = [
  ["red", "maroon", "crimson", "salmon", "firebrick", "darkred", "indianred"],
  [
    "green",
    "forestgreen",
    "limegreen",
    "seagreen",
    "olivedrab",
    "darkgreen",
    "springgreen",
  ],
  [
    "blue",
    "navy",
    "dodgerblue",
    "steelblue",
    "royalblue",
    "midnightblue",
    "skyblue",
  ],
  [
    "yellow",
    "gold",
    "khaki",
    "lemonchiffon",
    "palegoldenrod",
    "darkkhaki",
    "lightyellow",
  ],
  [
    "purple",
    "rebeccapurple",
    "darkorchid",
    "mediumslateblue",
    "blueviolet",
    "indigo",
    "plum",
  ],
  [
    "orange",
    "darkorange",
    "coral",
    "tomato",
    "orangered",
    "sandybrown",
    "peru",
  ],
  [
    "pink",
    "hotpink",
    "deeppink",
    "lightpink",
    "palevioletred",
    "mediumvioletred",
    "thistle",
  ],
  [
    "cyan",
    "aqua",
    "turquoise",
    "aquamarine",
    "paleturquoise",
    "darkcyan",
    "lightseagreen",
  ],
  [
    "magenta",
    "fuchsia",
    "mediumorchid",
    "orchid",
    "violet",
    "darkmagenta",
    "lavenderblush",
  ],
  [
    "lime",
    "chartreuse",
    "lawngreen",
    "limegreen",
    "greenyellow",
    "darkolivegreen",
    "yellowgreen",
  ],
  [
    "teal",
    "darkturquoise",
    "cadetblue",
    "lightcyan",
    "mediumturquoise",
    "darkslategray",
    "powderblue",
  ],
  [
    "indigo",
    "mediumpurple",
    "slateblue",
    "darkslateblue",
    "mediumslateblue",
    "darkviolet",
    "blueviolet",
  ],
  [
    "maroon",
    "brown",
    "sienna",
    "saddlebrown",
    "firebrick",
    "darkred",
    "indianred",
  ],
  [
    "olive",
    "darkolivegreen",
    "olivedrab",
    "yellowgreen",
    "darkkhaki",
    "khaki",
    "palegoldenrod",
  ],
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
      "rgb(0, 255, 255)": "cyan",
      "rgb(255, 0, 255)": "magenta",
      "rgb(0, 255, 0)": "lime",
      "rgb(0, 128, 128)": "teal",
      "rgb(75, 0, 130)": "indigo",
      "rgb(128, 0, 0)": "maroon",
      "rgb(128, 128, 0)": "olive",
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
