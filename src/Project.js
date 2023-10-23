import updateDisplay from './updateDisplay';
import { Task, getTaskFromInput } from './Task';
const projectListContainer = document.querySelector('#project-list-container');
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#this-week');
let taskContainerHeading = document.querySelector('#task-container-heading')
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
    taskContainerHeading.textContent = this.name;
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
    inboxProject.display();
  });
  today.addEventListener('click', () => {
    todayProject.display();
  });
  thisWeek.addEventListener('click', () => {
    thisWeekProject.display();
  });

  projectArray.push(inboxProject, todayProject, thisWeekProject);
}

export function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name').value;
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName, false);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    newProject.display();
  });
  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
}
