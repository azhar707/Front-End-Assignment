// Select the elements
const items = document.querySelectorAll('.item');
const containerRight = document.querySelector('.container-right');
const resetButton = document.querySelector('#reset-button');

// Add event listeners for drag events
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Container events
containerRight.addEventListener('dragover', dragOver);
containerRight.addEventListener('dragenter', dragEnter);
containerRight.addEventListener('dragleave', dragLeave);
containerRight.addEventListener('drop', drop);

// Reset button event
resetButton.addEventListener('click', reset);

// Drag and drop functions
function dragStart(e) {
  // Store the dragged item and its data
  e.dataTransfer.setData('text/plain', e.target.textContent);
}

function dragEnd() {
  // Reset the appearance of the dragged item
  this.style.opacity = '1';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('highlight');
}

function dragLeave() {
  this.classList.remove('highlight');
}

function drop(e) {
  e.preventDefault();
  this.classList.remove('highlight');

  // Get the dragged item's data and create a new element
  const itemData = e.dataTransfer.getData('text/plain');
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.textContent = itemData;

  // Append the new item to the container
  this.appendChild(newItem);

  // Display success message or update UI
  const successMessage = document.createElement('p');
  successMessage.classList.add('success-message');
  successMessage.textContent = 'Item dropped successfully!';
  this.appendChild(successMessage);
}

function reset() {
  // Clear the second container and reset the first container
  containerRight.innerHTML = '<h2>Container 2</h2>';
}
//
function drop(e) {
    e.preventDefault();
    this.classList.remove('highlight');
  
    // Get the dragged item's data and create a new element
    const itemData = e.dataTransfer.getData('text/plain');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.textContent = itemData;
  
    // Remove the dragged item from Container 1
    const draggedItem = document.querySelector('.dragged');
    if (draggedItem) {
      draggedItem.remove();
    }
  
    // Append the new item to Container 2
    this.appendChild(newItem);
  
    // Display success message or update UI
    const successMessage = document.createElement('p');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Item dropped successfully!';
    this.appendChild(successMessage);
  }