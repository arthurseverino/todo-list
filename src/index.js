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

what do you want to store in localstorage? the arrays of inbox tasks, array of projects,
and array of tasks in projects, all arrays basically
localStorage.setItem(key, value);

*/

import handleSubmit from './handleSubmit.js';
import handleEdit from './handleEdit.js';
import handleDelete from './handleDelete.js';
import Task from './Task.js';
import {addTaskBtn, closeTaskModal, myForm, taskModal, editBtn, 
  editModal, myEditForm, closeEditTaskModal, deleteBtn } from './DOMStuff.js';



addTaskBtn.addEventListener('click', () => {
  myForm.reset();
  taskModal.style.display = 'flex';
});

myForm.addEventListener('submit', (event) => {
  taskModal.style.display = 'none';
  event.preventDefault();
  handleSubmit();
});

closeTaskModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

//edit modal, does form reset here
editBtn.addEventListener('click', () => {
  editModal.style.display = 'flex';
});

myEditForm.addEventListener('submit', (event) => {
  editModal.style.display = 'none';
  event.preventDefault();
  handleEdit();
});

closeEditTaskModal.addEventListener('click', () => {
  editModal.style.display = 'none';
});

deleteBtn.addEventListener('click', () => {
  handleDelete();
});
