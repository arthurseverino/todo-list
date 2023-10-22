import updateDisplay from './updateDisplay';
import { getTaskFromInput } from './Task';
const projectListContainer = document.querySelector('#project-list-container');
export let projectArray = [];

// wait... every section is a project, even Inbox
// just this.tasks and projectArray

export class Project {
  constructor(projectName) {
    this.name = projectName;
    this.tasks = [];
  }
}

export function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name');
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    updateDisplay(newProject.tasks);
  });
  const newTask = getTaskFromInput();
  newProject.tasks.push(newTask);
  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
}
