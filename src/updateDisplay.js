import { inboxTasks } from './handleSubmit';
import { createTaskDiv } from './handleSubmit';
const taskListContainer = document.querySelector('#task-list-container');

export default function updateDisplay() {
  taskListContainer.textContent = '';
  for (const taskClass of inboxTasks) {
    createTaskDiv(taskClass);
  }
}
