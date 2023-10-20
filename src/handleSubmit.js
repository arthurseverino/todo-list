import updateDisplay from './updateDisplay';
import { editModal } from './DOMStuff.js';

//if you have this list inside the function it resets everytime its called, populate it with task-div elements

//can i build the DOM elements with a class
let inboxTasks = [];

//shhould be a class of HTML elements, you can access the text content and everything from outside
//try to build dom elements with the class
class Task {
  constructor(taskText, taskDueDate, editBtn, deleteBtn) {
    this.taskText = taskText;
    this.taskDate = taskDueDate;
    this.editBtn = editBtn;
    this.deleteBtn = deleteBtn;
  }
}

export default function handleSubmit() {
  let newInboxTask = createTaskDiv();
  inboxTasks.push(newInboxTask);
  console.log('inboxTasks: ' + inboxTasks);
  updateDisplay(inboxTasks);
}

function createTaskDiv() {
  //you have to keep task in here or else it will be empty
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal');
  const taskListContainer = document.querySelector('#task-list-container');
  let newDate = new Date(date.value);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const newInboxTask = document.createElement('div');

  // left
  const left = document.createElement('div');
  const taskText = document.createElement('div');
  if (task === '') {
    taskText.textContent = `Empty Task`;
  } else {
    taskText.textContent = `${task}`;
  }
  const dateDiv = document.createElement('div');
  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    dateDiv.textContent = `No date`;
  } else {
    dateDiv.textContent = `Due Date: ${month}/${day}/${year}`;
  }
  left.appendChild(taskText);
  left.appendChild(dateDiv);

  // right
  const right = document.createElement('div');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    editModal.style.display = 'flex';
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    inboxTasks.splice(inboxTasks.indexOf(task), 1);
    updateDisplay(inboxTasks);
  });

  left.classList.add('left');
  newInboxTask.classList.add('task-div');
  taskText.classList.add('task-text');
  right.classList.add('right');
  editBtn.classList.add('edit-btn');
  deleteBtn.classList.add('delete-btn');

  right.appendChild(editBtn);
  right.appendChild(deleteBtn);
  newInboxTask.appendChild(left);
  newInboxTask.appendChild(right);

  console.log('task: ' + taskText.textContent);
  console.log('dateDiv.textContent: ' + dateDiv.textContent);

  return newInboxTask;
}
