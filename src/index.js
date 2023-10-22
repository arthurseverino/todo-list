/*
the default when opened should show inbox 

when you add a task, you always add it to inbox and check the date to also put it in this week or Today 

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)
you can edit task by reopening a new form but with the saved text in it from its current textContent

use dialog for projectmodal display, try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

localStorage.setItem(key, value);

*/

import addTaskToProject from './Task.js';
import { addProjectToContainer } from './Project.js';
import {addTaskBtn, closeTaskModal, myForm, taskModal, editBtn, editModal, myEditForm, closeEditTaskModal, addProjectButton, projectModal, deleteBtn, taskListContainer, submitProjectBtn, closeProjectModal } from './DOMStuff.js';


/* Task event listeners */ 
addTaskBtn.addEventListener('click', () => {
  taskModal.style.display = 'flex';
});

myForm.addEventListener('submit', (event) => {
  addTaskToProject();
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
})

submitProjectBtn.addEventListener('click', () => {
  addProjectToContainer();
})

closeProjectModal.addEventListener('click', () => {
  projectModal.close();
})
