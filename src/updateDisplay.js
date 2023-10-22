import { createTaskDiv } from './Task';
const taskListContainer = document.querySelector('#task-list-container');

export default function updateDisplay(projectTaskArray) {
  // what does setting = "" do
  // have a feeling it clears the display 
  taskListContainer.textContent = '';
  for (const task of projectTaskArray) {
    createTaskDiv(task);
  }
}
