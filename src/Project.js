import updateDisplay from './updateDisplay';
import { inboxProject } from '.';
const projectListContainer = document.querySelector('#project-list-container');
let taskContainerHeading = document.querySelector('#task-container-heading');
export let projectArray = [];

export class Project {
  constructor(projectName, isClicked) {
    this.name = projectName;
    this.clicked = isClicked;
    this.tasks = [];
    this.deleted = false;
  }
  display() {
    turnOffProject();
    this.clicked = true;
    updateDisplay();
    taskContainerHeading.textContent = this.name;
  }
}

export function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name').value;
  const newProjectDiv = document.createElement('div');
  const newProjectNameDiv = document.createElement('div');
  const deleteProjectBtn = document.createElement('button');

  const newProject = new Project(newProjectName, false);
  newProjectNameDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    newProject.display();
  });

  deleteProjectBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    newProject.deleted = true;
    newProject.clicked = false;
    for (const project of projectArray) {
      if (project.deleted) {
        projectArray.splice(projectArray.indexOf(project), 1);
        projectListContainer.removeChild(newProjectDiv);
        inboxProject.display();
      }
    }
  });

  deleteProjectBtn.textContent = 'Delete';
  newProjectDiv.classList.add('new-project-div');
  newProjectNameDiv.classList.add('new-project-name-div');
  deleteProjectBtn.classList.add('delete-project-btn');

  newProjectDiv.appendChild(newProjectNameDiv);
  newProjectDiv.appendChild(deleteProjectBtn);
  projectListContainer.appendChild(newProjectDiv);
  projectArray.push(newProject);
}

export function turnOffProject() {
  for (const project of projectArray) {
    if (project.clicked) {
      project.clicked = false;
    }
  }
}
