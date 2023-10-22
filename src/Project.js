import updateDisplay from './updateDisplay';
import addTaskToContainer, { inboxTasks } from './Task';
const projectListContainer = document.querySelector('#project-list-container');
export let projectArray = [];

// if a project is clicked while one is already active,
// turn off the one that is active, turn on the one that was clicked

// wait... every section is a project, even Inbox

// Inbox is a project!!

export class Project {
  constructor(projectName) {
    this.name = projectName;
    this.projectTasks = [];
    this.active = false;
  }
  toggleActive() {
    this.active = !this.active;
  }
}

export function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name');
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    if (projectArray.length() !== 0) {
      for (const proj of projectArray) {
        if (proj.active == true) {
          proj.active = false;
          newProject.active = true;
        }
      }
    }
    updateDisplay(newProject.projectTasks);
  });

  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
}

console.log(
  'Project Input (checking if i need a form to receive input, form might just be for form validation and submitting data to server): ' +
    newProjectName
);
