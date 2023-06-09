let item = document.querySelectorAll('.item');

item.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});

// Handle

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
}, 0);
}

function handleDragEnd(e) {
  e.target.classList.remove('hide');
  e.target.classList.remove('dragged');

}







// Container Functions

let container = document.querySelectorAll('.box');
let Popup = document.getElementsByClassName('popup');


container.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);

});

// Functions

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function drop(e) {
  e.target.classList.remove('drag-over');

  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove('hide');

  // Toogle Popup
  Popup[0].classList.remove('hide');

  setTimeout(() => {
    Popup[0].classList.add('hide');
  }, 1000);




}



// Reset Button

let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', reset);

function reset() {
  location.reload();
}
