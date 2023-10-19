/*

add localstorage to make visualization testing easier
the default when opened should show inbox 

A button that says + Add Project / + Add Task placed right before the first task / project.
When clicked, a modal pops up with an x on the top-right and an add button on the bottom just like library.

when you add a task, you add the description of the task and date its due
then you add it to inbox and check the date to also put it in this week or Today 

when you add a project, you only ask for project name
then you append a div to the left side of the screen with the title of project name that was entered
Then, make that div clickable(button), and it will show an array of tasks when clicked - 
these tasks get appended just like if they were being appended to inbox, with a modal form 

to add task to project put a button called + Add Project Task

these tasks are not added to inbox tho so keep two diff arrays:
array of tasks in inbox, array of projects, array of tasks in projects

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)

make sure all buttons stay active when clicked and hovered to show where you are 

you can edit task by reopening form with the same data in it that it has 
currently and change the green add button to a yellow "edit"

everything in sidebar is a button

how to make items in background unclickable when showing modal

use dialog for projectmodal display

keep all query selects in DOMStuff file
you have to import that file into every file then 

how to remove projects? ideally a button that shows up on
// hover, you can document.createElement one 

what do you want to store in localstorage? the arrays of tasks and array of projects
and array of tasks in inbox, all arrays basically
//  localStorage.setItem(key, value);
*/

import handleSubmit from './handleSubmit.js';
import handleEdit from './handleEdit.js';
import { format } from 'date-fns';

const myForm = document.querySelector('#my-form');
const closeTaskModal = document.querySelector('#close-task-modal-btn');
const addTaskBtn = document.querySelector('#task-button');
const taskModal = document.querySelector('#task-modal');
const editBtn = document.querySelector('.edit-btn');

addTaskBtn.addEventListener('click', () => {
  myForm.reset();
  taskModal.style.display = 'flex';
});

closeTaskModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

myForm.addEventListener('submit', (event) => {
  taskModal.style.display = 'none';
  event.preventDefault();
  handleSubmit();
});

//when you click on edit it opens form but shouldn't
//but it doesn't append,

closeTaskModal.addEventListener('click', () => {
  editModal.style.display = 'flex';
  handleEdit();
});
