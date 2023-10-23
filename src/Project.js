import updateDisplay from './updateDisplay';
import { getTaskFromInput } from './Task';
const projectListContainer = document.querySelector('#project-list-container');
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#this-week');
export let projectArray = [];

export class Project {
  constructor(projectName, isClicked) {
    this.name = projectName;
    this.clicked = isClicked;
    this.tasks = [];
  }
  display() {
    turnOffProject();
    this.clicked = true;
    updateDisplay();
  }
}

export function turnOffProject() {
  for (const project of projectArray) {
    if (project.clicked) {
      project.clicked = false;
    }
  }
}

export function init() {
  const inboxProject = new Project('Inbox', true);
  const todayProject = new Project('Today', false);
  const thisWeekProject = new Project('This week', false);
  inbox.addEventListener('click', () => {
    turnOffProject();
    inboxProject.clicked = true;
    updateDisplay();
  });
  today.addEventListener('click', () => {
    turnOffProject();
    todayProject.clicked = true;
    updateDisplay();
  });
  thisWeek.addEventListener('click', () => {
    turnOffProject();
    thisWeekProject.clicked = true;
    updateDisplay();
  });
  
  projectArray.push(inboxProject, todayProject, thisWeekProject);
}

export function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name').value;
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName, false);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    turnOffProject();
    newProject.clicked = true;
    updateDisplay();
  });
  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
}
