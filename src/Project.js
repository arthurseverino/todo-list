import updateDisplay from './updateDisplay';
import { getTaskFromInput } from './Task';
const projectListContainer = document.querySelector('#project-list-container');
const sidebar = document.querySelector('#sidebar');
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#this-week');
export let projectArray = [];

export class Project {
  constructor(projectName, isClicked = false) {
    this.name = projectName;
    this.clicked = isClicked;
    this.tasks = [];
  }
}

const inboxProject = new Project('Inbox', true);
const todayProject = new Project('Today', false);
const thisWeekProject = new Project('This week', false);
projectArray.push(inboxProject, todayProject, thisWeekProject);
inbox.addEventListener('click', () => {
  inbox.clicked = true;
  updateDisplay();
});

export function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name');
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName, false);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    for (const project of projectArray) {
      if (project.clicked) {
        project.clicked = false;
      }
    }
    newProject.clicked = true;
    updateDisplay();
  });
  //const newTask = getTaskFromInput();
  //newProject.tasks.push(newTask);
  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
}
