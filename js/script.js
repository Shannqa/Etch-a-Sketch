const sketchpad = document.querySelector('.sketchpad');
const buttonErase = document.querySelector('.button-erase');
const buttonColor = document.querySelector('.button-color');
const buttonGrid = document.querySelector('.button-grid');


let mouseDown;
let penColor = 'black';
let erase = false;
let grid = true;

/* Create the squares */
function createSquares(number) {
  let sketchpadSize = '600';
  for (let j = 0; j < number; j++) {
    let row = document.createElement('div');
    row.classList.add('square-row');
    for (let i = 0; i < number; i++) {
      let square = document.createElement('div')
      square.classList.add('square');
      square.setAttribute('draggable', 'false');
      square.style.width = sketchpadSize / number + 'px';
      square.style.height = sketchpadSize / number + 'px';
      row.appendChild(square);
    }
    sketchpad.appendChild(row);
  }
}

createSquares(16); // 16 - default number of squares per row/column

const allSquares = document.querySelectorAll('.square');

/* Painting */
for (let i = 0; i < allSquares.length; i++) {
  allSquares[i].addEventListener('mousedown', () => {
  mouseDown = true;
});
allSquares[i].addEventListener('mouseup', () => {
  mouseDown = false;
});
allSquares[i].addEventListener('click', () => {
  allSquares[i].style.backgroundColor = penColor;
  allSquares[i].style.borderColor = 'black';
});
allSquares[i].addEventListener('mousemove', () => {
  if (mouseDown === true) {
    allSquares[i].style.backgroundColor = penColor;
  } else if (mouseDown === false ) {
    return;
  }
});
}

/* Eraser */
buttonErase.addEventListener('click', () => {
  if (erase === false) {
    buttonErase.classList.add('button-active');
    penColor = 'white';
    erase = true;
  } else {
    buttonErase.classList.remove('button-active');
    penColor = 'black';
    erase = false;
  }
});

/* Toggle grid */
buttonGrid.addEventListener('click', () => {
    if (grid === true) {
    buttonGrid.classList.remove('button-active');
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].style.borderStyle = 'none';
    }
    grid = false;
  } else {
    buttonGrid.classList.add('button-active');
    for (let j = 0; j < allSquares.length; j++) {
      allSquares[j].style.borderStyle = 'solid';
    }
    grid = true;
  }
});

/* Canvas size slider */
const canvasSlider = document.querySelector('#canvas-slider');
let output = document.querySelector('#canvas-info');
output.textContent = canvasSlider.value + 'x' + canvasSlider.value;
canvasSlider.oninput = function() {
  output.textContent = this.value + 'x' + this.value;
}

/* Color picker */
buttonColor.addEventListener('click', () => {
  let color = false;
  if (color === false) {
    buttonColor.classList.add('button-active');
    penColor = 'red';
    color = true;
  } else {
    buttonColor.classList.remove('button-active');
    penColor = 'black';
    color = false;
  }
  });