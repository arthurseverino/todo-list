// the buttons are not being styled

export default function handleSubmit() {
  const date = document.querySelector('#date-modal');
  const taskListContainer = document.querySelector('#task-list-container');
  const task = document.querySelector('#task').value;
  let newDate = new Date(date.value);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  // you should populate an array of task nodes
  let inboxTasks = [];

  const newTask = document.createElement('div');
  newTask.classList.add('task-div');

  // left

  const left = document.createElement('div');
  left.classList.add('left');

  const taskText = document.createElement('div');
  taskText.textContent = `Task: ${task}`;
  left.appendChild(taskText);

  const dateDiv = document.createElement('div');
  dateDiv.textContent = `Due Date: ${month}/${day}/${year}`;
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
}
