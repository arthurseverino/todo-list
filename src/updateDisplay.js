// taskArray is a list of task-div
export default function updateDisplay(taskArray) {
  const taskListContainer = document.querySelector('#task-list-container');
  taskListContainer.textContent = "";
  for (const task of taskArray) {
    taskListContainer.appendChild(task);
  }
}
