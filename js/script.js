const sketchpad = document.querySelector('.sketchpad');
const buttonErase = document.querySelector('.button-erase');
const buttonDraw = document.querySelector('.button-draw');
const buttonGrid = document.querySelector('.button-grid');
const buttonClear = document.querySelector('.button-clear');

let mouseDown;
let penColor = 'black';
let erase = false;
let grid = true;
const defaultCanvasSize = 16;

const defaultColor = '#000000';

/* Color picker */
let colorChoice;

window.addEventListener('load', colorStartup, false);
function colorStartup() {
  colorChoice = document.querySelector('#color-choice');
  colorChoice.value = defaultColor;
  colorChoice.addEventListener('change', () => {penColor = colorChoice.value;}, false);
  colorChoice.select();
}

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

      square.addEventListener('mousedown', () => {mouseDown = true;})
      square.addEventListener('mouseup', () => {mouseDown = false;});
      square.addEventListener('click', () => {
        square.style.backgroundColor = penColor;
        square.style.borderColor = 'black';
      });
      square.addEventListener('mousemove', () => {
        if (mouseDown === true) {
          square.style.backgroundColor = penColor;
        }
      });


      row.appendChild(square);
    }
    sketchpad.appendChild(row);
  }
}

createSquares(defaultCanvasSize); 

/* Canvas size slider */
const canvasSlider = document.querySelector('#canvas-slider');
let output = document.querySelector('#canvas-info');
output.textContent = canvasSlider.value + 'x' + canvasSlider.value;
canvasSlider.oninput = function() {
  output.textContent = this.value + 'x' + this.value;
}

canvasSlider.addEventListener('input', () => {
  while (sketchpad.hasChildNodes()) {
  sketchpad.removeChild(sketchpad.firstChild); 
  }
  createSquares(canvasSlider.value);
  grid = true;
  buttonGrid.classList.add('button-active');
});

/* Draw button */
buttonDraw.addEventListener('click', () => {
  if (erase === true) {
    buttonErase.classList.remove('button-active');
    buttonDraw.classList.add('button-active');
    penColor = colorChoice.value;
    erase = false;
  } else {
    buttonErase.classList.add('button-active');
    buttonDraw.classList.remove('button-active');
    penColor = 'white';
    erase = true;
  }
});

/* Eraser */
buttonErase.addEventListener('click', () => {
  if (erase === false) {
    buttonErase.classList.add('button-active');
    buttonDraw.classList.remove('button-active');
    penColor = 'white';
    erase = true;
  } else {
    buttonErase.classList.remove('button-active');
    buttonDraw.classList.add('button-active');
    penColor = colorChoice.value;
    erase = false;
  }
});

/* Toggle grid */
buttonGrid.addEventListener('click', () => {
  const allSquares = document.querySelectorAll('.square');
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

/* Clear canvas */
buttonClear.addEventListener('click', () => {
  while (sketchpad.hasChildNodes()) {
    sketchpad.removeChild(sketchpad.firstChild); 
  }
  createSquares(canvasSlider.value);
  if (grid === false) {
    const allSquares = document.querySelectorAll('.square');
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].style.borderStyle = 'none';
    }
  }  
});

