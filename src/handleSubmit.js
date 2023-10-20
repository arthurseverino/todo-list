import updateDisplay from './updateDisplay';
import { editModal } from './DOMStuff.js';

//if you have this list inside the function it resets everytime its called, populate it with task-div elements
let inboxTasks = [];
let inboxClasses = [];

class Task {
  constructor(taskText, taskDueDate) {
    this.taskText = taskText;
    this.taskDate = taskDueDate;
    this.edit = false;
    this.delete = false;
  }
}

export default function handleSubmit() {
  //this is literally the task text, the description, the main bulk, big boy, you have to keep it in here or else it will be empty
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

  left.classList.add('left');
  newInboxTask.classList.add('task-div');
  taskText.classList.add('task-text');
  right.classList.add('right');
  editBtn.classList.add('edit-btn');
  deleteBtn.classList.add('delete-btn');

  // the container should be populated by now, so find the one you want to delete and remove it from whatever array it's apart of (inboxArray, projectsarray)
  deleteBtn.addEventListener('click', () => {
    inboxTasks.splice(inboxTasks.indexOf(task), 1);
    updateDisplay(inboxTasks);
  });

  right.appendChild(editBtn);
  right.appendChild(deleteBtn);
  newInboxTask.appendChild(left);
  newInboxTask.appendChild(right);

  const newClass = new Task(taskText.textContent, dateDiv.textContent);
  inboxClasses.push(newClass);

  // you're pushing task-div HTML elements
  inboxTasks.push(newInboxTask);
  updateDisplay(inboxTasks);

  console.log('task: ' + taskText.textContent);
  console.log('dateDiv.textContent: ' + dateDiv.textContent);
  console.log('inboxTasks: ' + inboxTasks);
  localStorage.setItem('newInboxTask', JSON.stringify(newInboxTask));
  localStorage.getItem('newInboxTask');
}
