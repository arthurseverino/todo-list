// you just create a new left div for the left side of the task-div
// with a new date and new task-text
// no, create a whole new text-div
const taskDiv = document.querySelector('.task-div');
const editTask = document.querySelector('#edit-task').value;
const date = document.querySelector('#edit-date-modal');

export default function handleEdit() {
  let newDate = new Date(date.value);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const left = document.createElement('div');
  left.classList.add('left');

  const taskText = document.createElement('div');
  taskText.textContent = `${editTask}`;
  left.appendChild(taskText);

  const dateDiv = document.createElement('div');
  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    dateDiv.textContent = `No date`;
  } else {
    dateDiv.textContent = `Due Date: ${month}/${day}/${year}`;
  }

  left.appendChild(dateDiv);

  // should be this.taskDiv
  // which taskDiv does it append to?
  taskDiv.appendChild(left);
}
