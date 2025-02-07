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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
  }, 1500);
}

function getColorOptions() {
  const baseOptions = colorOptionsArray[currentColorIndex];
  const correctColor = baseOptions[0];
  const otherColors = shuffleArray(baseOptions.slice(1)).slice(0, 5);
  const finalOptions = shuffleArray([correctColor, ...otherColors]);

  colorElements.forEach((colorElement, index) => {
    colorElement.style.backgroundColor = finalOptions[index];
    colorElement.setAttribute("data-color", finalOptions[index]); // Store color name
  });
}

colorElements.forEach((colorElement) => {
  colorElement.addEventListener("click", () => {
    const mainColorValue = colors[currentColorIndex];
    const clickedColorName = colorElement.getAttribute("data-color");

    if (mainColorValue === clickedColorName) {
      answerStatus.innerHTML = "Correct🎉";
      score.innerHTML = parseInt(score.innerHTML) + 5;
      colorElement.classList.add("correct");
      setTimeout(() => colorElement.classList.remove("correct"), 300);
    } else {
      answerStatus.innerHTML = "Wrong❌";
      colorElement.classList.add("wrong");
      setTimeout(() => colorElement.classList.remove("wrong"), 300);
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
