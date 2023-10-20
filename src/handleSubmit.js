import updateDisplay from './updateDisplay';
import { editModal, myEditForm } from './DOMStuff.js';
const taskListContainer = document.querySelector('#task-list-container');

export let inboxTasks = [];

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

  console.log('day: ' + day);
  console.log('month: ' + month);
  console.log('year: ' + year);

  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    return `No date`;
  } else {
    return `Task due: ${month}/${day}/${year}`;
  }
}

export default function addTaskToContainer() {
  // inboxTasks is an array of classes
  // so you want to create the class first, then dynamically create DOM Elements based off of those class values
  const newTask = getTaskFromInput();
  inboxTasks.push(newTask);
  updateDisplay();
}

//so here you're creating the new task with the values from form
function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  return new Task(task, formattedDate);
}

// no query selectors in here that's important, you're basing all the info off of a class
// the class should be created first
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
    // does this keep current value
    // document.querySelector('#edit-task').value = taskText.textContent;
    // document.querySelector('#edit-date-modal').value = date;
  });

  myEditForm.addEventListener('submit', (event) => {
    event.preventDefault();
    taskText.textContent = document.querySelector('#edit-task').value;
    const date = document.querySelector('#edit-date-modal').value;
    dateDiv.textContent = formatDate(date);
    editModal.style.display = 'none';
    updateDisplay();
    // myEditForm.reset()
  });

  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    inboxTasks.splice(inboxTasks.indexOf(taskClass), 1);
    updateDisplay();
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

  console.log('taskText.textContent: ' + taskText.textContent);
  console.log('dateDiv.textContent: ' + dateDiv.textContent);
}
