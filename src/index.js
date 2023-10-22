/*
the default when opened should show inbox 

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)

// so you want to create the class first, then dynamically create DOM Elements based off of those class values

use dialog for projectmodal display, try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

localStorage.setItem(key, value);

*/

import addTaskToProject from './Task.js';
import { addProjectToContainer } from './Project.js';
import {
  addTaskBtn,
  closeTaskModal,
  myForm,
  taskModal,
  editBtn,
  editModal,
  myEditForm,
  closeEditTaskModal,
  addProjectButton,
  projectModal,
  deleteBtn,
  taskListContainer,
  submitProjectBtn,
  closeProjectModal,
} from './DOMStuff.js';

/* Task event listeners */
addTaskBtn.addEventListener('click', () => {
  taskModal.style.display = 'flex';
});

myForm.addEventListener('submit', (event) => {
  // append the task to the currently open project
  //addTaskToProject();
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

/* Project event listeners */

addProjectButton.addEventListener('click', () => {
  projectModal.showModal();
});

submitProjectBtn.addEventListener('click', () => {
  addProjectToContainer();
  // just make a form so you can call .reset here
});

closeProjectModal.addEventListener('click', () => {
  projectModal.close();
});
