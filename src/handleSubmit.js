// the buttons are not being styled

import Task from './Task.js';

//if you have this inside the function it resets everytime its called
// populate this list with Tasks but do what with it?
let inboxTasks = [];

export default function handleSubmit() {
  //this is literally the task text, the description, the main bulk, big boy, you have to keep it in here or else it will be empty
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal');
  const taskListContainer = document.querySelector('#task-list-container');

  let newDate = new Date(date.value);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  //Create task-div
  const newTask = document.createElement('div');
  newTask.classList.add('task-div');

  // left
  const left = document.createElement('div');
  left.classList.add('left');

  const taskText = document.createElement('div');
  if (task === '') {
    taskText.textContent = `Empty Task`;
  } else {
    taskText.textContent = `${task}`;
  }
  left.appendChild(taskText);

  const dateDiv = document.createElement('div');
  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    dateDiv.textContent = `No date`;
  } else {
    dateDiv.textContent = `Due Date: ${month}/${day}/${year}`;
  }
  left.appendChild(dateDiv);

  // right

  const right = document.createElement('div');
  right.classList.add('right');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  right.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  right.appendChild(deleteBtn);

  newTask.appendChild(left);
  newTask.appendChild(right);
  taskListContainer.appendChild(newTask);

  //I want newTask and newInboxTask to be the same

  //rn you're passing in div and button elements
  const newInboxTask = Task(taskText, dateDiv, editBtn, deleteBtn);

  console.log('task:' + taskText.textContent);
  console.log('dateDiv.textContent:' + dateDiv.textContent);
  inboxTasks.push(newInboxTask);

  localStorage.setItem('task-text', JSON.stringify(inboxTasks));
}
