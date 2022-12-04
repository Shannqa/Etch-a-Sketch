const sketchpad = document.querySelector('.sketchpad');


function createBoxes(number) {
  for (let j = 0; j < number; j++) {
    let line = document.createElement('div');
    line.classList.add('line');
    for (let i = 0; i < number; i++) {
      let box = document.createElement('div')
      box.classList.add('box');
      line.appendChild(box);
    }
    sketchpad.appendChild(line);

  }
}

createBoxes(16);