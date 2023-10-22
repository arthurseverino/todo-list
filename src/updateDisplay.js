import { createTaskDiv } from './Task';
const taskListContainer = document.querySelector('#task-list-container');

export default function updateDisplay(taskArray) {
  //what does setting = "" do
  taskListContainer.textContent = '';
  for (const task of taskArray) {
    createTaskDiv(task);
  }
}
