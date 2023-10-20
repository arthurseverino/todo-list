// the buttons are not being styled

import Task from './Task.js';
const date = document.querySelector('#date-modal');
const taskListContainer = document.querySelector('#task-list-container');
const task = document.querySelector('#task').value;

//if you have this inside the function it resets everytime its called 
// populate this list with Tasks but do what with it? 
let inboxTasks = [];

export default function handleSubmit() {
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
  if (taskText.textContent === '') {
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
  newTask.appendChild(left);

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

  newTask.appendChild(right);
  taskListContainer.appendChild(newTask);

  const newInboxTask = new Task(task, dateDiv.textContent);
  inboxTasks.push(newInboxTask);



  localStorage.setItem('task-text', JSON.stringify(inboxTasks));
  console.log('inboxTasks:' + inboxTasks);
  console.log('newInboxTask' + newInboxTask);
}
