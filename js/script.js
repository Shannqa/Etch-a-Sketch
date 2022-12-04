const sketchpad = document.querySelector('.sketchpad');
const buttonErase = document.querySelector('.button-erase');
const buttonColor = document.querySelector('.button-color');

let mouseDown;
let boxColor = 'black';
let erase = false;

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
  for (let j = 0; j < number; j++) {
    let line = document.createElement('div');
    line.classList.add('line');
    for (let i = 0; i < number; i++) {
      let box = document.createElement('div')
      box.classList.add('box');
      box.addEventListener('mousedown', () => {
        mouseDown = true;
      });
      box.addEventListener('mouseup', () => {
        mouseDown = false;
      });
      box.addEventListener('click', () => {
        box.style.backgroundColor = boxColor;
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
