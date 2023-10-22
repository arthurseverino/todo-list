import updateDisplay from './updateDisplay';
import { editModal, myEditForm, taskListContainer } from './DOMStuff.js';
import { projectArray } from './Project';

export let inboxTasks = [];

export class Task {
  constructor(taskText, taskDueDate, apartOfProject = false) {
    this.taskText = taskText;
    this.taskDate = taskDueDate;
  }
}

function formatDate(date) {
  let newDate = new Date(date);
  let day = newDate.getDate() + 1;
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    return `No date`;
  } else {
    return `Task due: ${month}/${day}/${year}`;
  }
}

// this is the first thing that is called when the form is submitted
// you want to check if a project is currently active, append it to that projects tasks
// else, append to inboxTasks

export default function addTaskToContainer() {
  // so you want to create the class first, then dynamically create DOM Elements based off of those class values
  const newTask = getTaskFromInput();

  for (const proj of projectArray)
    if (proj.active === true && newTask.apartOfProject) {
      proj.projectTasks.push(newTask);
      updateDisplay(proj.projectTasks);
    } else {
      inboxTasks.push(newTask);
      updateDisplay(inboxTasks);
    }
}

// so here you're creating the new Task with the values from the form
// the class should be created first
function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  for (const proj of projectArray) {
    if (proj.active) {
      return new Task(task, formattedDate, true);
    }
  }
  return new Task(task, formattedDate);
}

// limit query selectors in here that's important,
// you should get all the info you need off of taskClass, projectClass which has the info query selected already
// now you just want to create the HTML elements with that CLASS info
export function createTaskDiv(taskClass) {
  const newInboxTask = document.createElement('div');
  const left = document.createElement('div');
  const taskText = document.createElement('div');
  const dateDiv = document.createElement('div');
  const right = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  if (taskClass.taskText === '') {
    taskText.textContent = `Empty Task`;
  } else {
    taskText.textContent = taskClass.taskText;
  }
  if (taskClass.taskDate === `No date`) {
    dateDiv.textContent = `No date`;
  } else {
    dateDiv.textContent = taskClass.taskDate;
  }

  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    editModal.style.display = 'flex';
    // this keeps current value in form, needed for edit
    document.querySelector('#edit-task').value = taskText.textContent;
  });

  myEditForm.addEventListener('submit', (event) => {
    console.log('edit form submitted');
    event.preventDefault();
    taskClass.taskText = document.querySelector('#edit-task').value;
    const date = document.querySelector('#edit-date-modal').value;
    taskClass.taskDate = formatDate(date);
    editModal.style.display = 'none';
    //is this ok
    updateDisplay(inboxTasks);
  });

  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    inboxTasks.splice(inboxTasks.indexOf(taskClass), 1);
    // is this ok
    updateDisplay(inboxTasks);
  });

  left.classList.add('left');
  newInboxTask.classList.add('task-div');
  taskText.classList.add('task-text');
  right.classList.add('right');
  editBtn.classList.add('edit-btn');
  deleteBtn.classList.add('delete-btn');

  left.appendChild(taskText);
  left.appendChild(dateDiv);
  right.appendChild(editBtn);
  right.appendChild(deleteBtn);
  newInboxTask.appendChild(left);
  newInboxTask.appendChild(right);
  taskListContainer.appendChild(newInboxTask);
}
