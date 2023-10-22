import updateDisplay from './updateDisplay';
import { editModal, myEditForm, taskListContainer } from './DOMStuff.js';
  // so you want to create the class first, then dynamically create DOM Elements based off of those class values

export class Task {
  constructor(taskText, taskDueDate) {
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
export default function addTaskToProject() {

  const newTask = getTaskFromInput();
  tasks.push(newTask);
  updateDisplay(tasks);
}

// so here you're creating the new Task with the values from the form
// the class should be created first
export function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  return new Task(task, formattedDate);
}

// limit query selectors in here that's important
// you should get all the info you need off of your class which has the info query selected already
// now you just want to create the HTML elements with that CLASS info
export function createTaskDiv(task) {
  const newTaskDiv = document.createElement('div');
  const left = document.createElement('div');
  const newTaskText = document.createElement('div');
  const newDateDiv = document.createElement('div');
  const right = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  if (task.taskText === '') {
    newTaskText.textContent = `Empty Task`;
  } else {
    newTaskText.textContent = task.taskText;
  }
  if (task.taskDate === `No date`) {
    newDateDiv.textContent = `No date`;
  } else {
    newDateDiv.textContent = task.taskDate;
  }

  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    editModal.style.display = 'flex';
    // this keeps current value in form, needed for edit
    document.querySelector('#edit-task').value = newTaskText.textContent;
  });

  myEditForm.addEventListener('submit', (event) => {
    console.log('edit form submitted');
    event.preventDefault();
    task.taskText = document.querySelector('#edit-task').value;
    const date = document.querySelector('#edit-date-modal').value;
    task.taskDate = formatDate(date);
    editModal.style.display = 'none';
    updateDisplay(task);
  });

  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    task.splice(task.indexOf(task), 1);
    updateDisplay(task);
  });

  left.classList.add('left');
  newTaskDiv.classList.add('task-div');
  newTaskText.classList.add('task-text');
  right.classList.add('right');
  editBtn.classList.add('edit-btn');
  deleteBtn.classList.add('delete-btn');

  left.appendChild(newTaskText);
  left.appendChild(newDateDiv);
  right.appendChild(editBtn);
  right.appendChild(deleteBtn);
  newTaskDiv.appendChild(left);
  newTaskDiv.appendChild(right);
  taskListContainer.appendChild(newTaskDiv);
}
