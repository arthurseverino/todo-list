import { projectArray } from './Project';
import { createTaskDivs } from './Task';
const taskListContainer = document.querySelector('#task-list-container');

export default function updateDisplay() {
  // what does setting = "" do
  // have a feeling it clears the display
  taskListContainer.textContent = '';
  for (const project of projectArray) {
    if (project.clicked && project.name !== "Today" && project.name !== "This week") {
      createTaskDivs(project.tasks);
    }
  }
}
