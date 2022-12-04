const sketchpad = document.querySelector('.sketchpad');

let mouseDown;

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
      box.addEventListener('mousemove', () => {
        if (mouseDown === true) {
          box.style.backgroundColor = "green";
        } else if (mouseDown === false ) {
          return;
        }
      })
      line.appendChild(box);
    }
    sketchpad.appendChild(line);

  }
}


createBoxes(16);
