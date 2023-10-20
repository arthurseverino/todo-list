// an array of task-divs
export default function updateDisplay(taskArray) {
  const taskListContainer = document.querySelector('#task-list-container');
  taskListContainer.textContent = '';
  for (const taskDiv of taskArray) {
    //createTaskDiv();
    taskListContainer.appendChild(taskDiv);
  }
}
