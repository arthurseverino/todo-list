/*
use dialog for projectmodal display, try adding an overlay for taskmodal
add real dummy nodes 
localStorage.setItem(key, value);

*/
import { projectArray } from './Project.js';
import { Project } from './Project.js';
import { addProjectToContainer } from './Project.js';
import { getTaskFromInput } from './Task.js';
import {
  addTaskBtn,
  closeTaskModal,
  myForm,
  taskModal,
  editModal,
  closeEditTaskModal,
  addProjectButton,
  projectModal,
  submitProjectBtn,
  closeProjectModal,
  inbox,
  today,
  thisWeek,
} from './DOMStuff.js';
import updateDisplay from './updateDisplay.js';

// init();
export const inboxProject = new Project('Inbox', true);
export const todayProject = new Project('Today', false);
export const thisWeekProject = new Project('This week', false);
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

addTaskBtn.addEventListener('click', () => {
  taskModal.style.display = 'flex';
});

myForm.addEventListener('submit', (event) => {
  const newTask = getTaskFromInput();
  for (const project of projectArray) {
    if (project.clicked) {
      project.tasks.push(newTask);
    }
  }

  todayProject.clicked = false;
  thisWeekProject.clicked = false;
  updateDisplay();
  taskModal.style.display = 'none';
  event.preventDefault();
  myForm.reset();
});

closeTaskModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

closeEditTaskModal.addEventListener('click', () => {
  editModal.style.display = 'none';
});

// no need for prevent default without a form
// but use a form so you can call .reset here
addProjectButton.addEventListener('click', () => {
  projectModal.showModal();
});

submitProjectBtn.addEventListener('click', () => {
  addProjectToContainer();
  document.querySelector('#project-name').value = '';
  projectModal.close();
});

closeProjectModal.addEventListener('click', () => {
  projectModal.close();
  document.querySelector('#project-name').value = '';
});
