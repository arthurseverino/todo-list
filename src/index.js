/*

the default when opened should show inbox 

when you add a task, you always add it to inbox and check the date to also put it in this week or Today 

when you add a project, you only ask for project name
then you append a button to the left side of the screen with the title of project name that was entered
That button will show an array of tasks when clicked - 

these tasks are not added to inbox tho so keep three diff arrays:
class of tasks in inboxTasks array, 
class of projects in projectsArray (each project has an array of Task Class) which is the:  
class of tasks in projectsTasks array (appending to same HTML element, different array)

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)
you can edit task by reopening a new form but with the saved text in it from its current textContent

everything in sidebar is a button

use dialog for projectmodal display
try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

what do you want to store in localstorage? 
the arrays of inbox tasks, array of projects, and array of tasks in projects, all arrays basically 
localStorage.setItem(key, value);

*/

import addTaskToContainer from './Task.js';
import { addProjectToContainer } from './Project.js';
import {addTaskBtn, closeTaskModal, myForm, taskModal, editBtn, editModal, myEditForm, closeEditTaskModal, addProjectButton, projectModal, deleteBtn, taskListContainer, submitProjectBtn, closeProjectModal } from './DOMStuff.js';


/* Task event listeners */ 
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
