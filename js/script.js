const sketchpad = document.querySelector('.sketchpad');
const buttonErase = document.querySelector('.button-erase');
const buttonColor = document.querySelector('.button-color');
const buttonGrid = document.querySelector('.button-grid');


let mouseDown;
let boxColor = 'black';
let erase = false;
let grid = true;

buttonErase.addEventListener('click', () => {
  if (erase === false) {
    buttonErase.classList.add('button-active');
    boxColor = 'white';
    erase = true;
  } else {
    buttonErase.classList.remove('button-active');
    boxColor = 'black';
    erase = false;
  }
  
});



function createBoxes(number) {
  let sketchpadSize = '600';
  for (let j = 0; j < number; j++) {
    let line = document.createElement('div');
    line.classList.add('line');
    for (let i = 0; i < number; i++) {
      let box = document.createElement('div')
      box.classList.add('box');
      box.style.width = sketchpadSize / number + 'px';
      box.style.height = sketchpadSize / number + 'px';
      box.addEventListener('mousedown', () => {
        mouseDown = true;
      });
      box.addEventListener('mouseup', () => {
        mouseDown = false;
      });
      box.addEventListener('click', () => {
        box.style.backgroundColor = boxColor;
        box.style.borderColor = 'black';
      });
      box.addEventListener('mousemove', () => {
        if (mouseDown === true) {
          box.style.backgroundColor = boxColor;
        } else if (mouseDown === false ) {
          return;
        }
      });
      line.appendChild(box);
    }
    sketchpad.appendChild(line);

  }
}



createBoxes(16);
const allBoxes = document.querySelectorAll('.box');

buttonGrid.addEventListener('click', () => {
  
  if (grid === true) {
    buttonGrid.classList.remove('button-active');
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].style.borderStyle = 'none';
    }
    grid = false;
  } else {
    buttonGrid.classList.add('button-active');
    for (let j = 0; j < allBoxes.length; j++) {
      allBoxes[j].style.borderStyle = 'solid';
    }
    grid = true;
  }
}
)

buttonColor.addEventListener('click', () => {
  let color = false;
  if (color === false) {
    buttonColor.classList.add('button-active');
    boxColor = 'red';
    color = true;
  } else {
    buttonColor.classList.remove('button-active');
    boxColor = 'black';
    color = false;
  }
  });