/*

the default when opened should show inbox 

when you add a task, you always add it to inbox 
and check the date to also put it in this week or Today 

when you add a project, you only ask for project name
then you append a button to the left side of the screen with the title of project name that was entered
That button will show an array of tasks when clicked - 

these tasks are not added to inbox tho so keep two diff arrays:
array of tasks in inbox, array of projects, array of tasks in projects

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)
you can edit task by reopening a new form but with the saved text in it from its current textContent

everything in sidebar is a button

use dialog for projectmodal display
try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

what do you want to store in localstorage? the arrays of inbox tasks, array of projects, and array of tasks in projects, all arrays basically
localStorage.setItem(key, value);

*/

import addTaskToContainer from './handleSubmit.js';
import {addTaskBtn, closeTaskModal, myForm, taskModal, editBtn, 
  editModal, myEditForm, closeEditTaskModal, deleteBtn, taskListContainer } from './DOMStuff.js';

addTaskBtn.addEventListener('click', () => {
  taskModal.style.display = 'flex';
});

myForm.addEventListener('submit', (event) => {
  addTaskToContainer();
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

