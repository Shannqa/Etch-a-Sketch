const sketchpad = document.querySelector('.sketchpad');
const buttonErase = document.querySelector('.button-erase');
const buttonColor = document.querySelector('.button-color');
const buttonGrid = document.querySelector('.button-grid');


let mouseDown;
let penColor = 'black';
let erase = false;
let grid = true;
const defaultCanvasSize = 16;

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