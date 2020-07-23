var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy-btn");
var hardBtn = document.querySelector("#hard-btn");


function changeColors (color) {
  // Loop throught all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor () {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors (num) {
  // make an array
  var arr =[];

  // add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor () {
  var red =  Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  
  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    // grab color of picked square
    var clickedColor = this.style.backgroundColor;

    // compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again?"
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

resetButton.addEventListener ("click", function () {
  // generate new colors
  colors = generateRandomColors(numOfSquares);

  // pick a new color
  pickedColor = pickColor();

  // change color display
  colorDisplay.textContent = pickedColor;

  messageDisplay.textContent = "";

  this.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }

  h1.style.backgroundColor = "steelblue";
});

easyBtn.addEventListener("click", function () {
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});