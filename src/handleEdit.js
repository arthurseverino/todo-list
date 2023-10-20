import inboxTasks from './handleSubmit';
import updateDisplay from './updateDisplay';

// no, create a whole new text-div
// or directly edit the text-content from edit-form values
// how to make form not reset? get current value

export default function handleEdit() {
  const taskDiv = document.querySelector('.task-div');
  const editTask = document.querySelector('#edit-task').value;
  const date = document.querySelector('#edit-date-modal');
  let newDate = new Date(date.value);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const left = document.createElement('div');
  left.classList.add('left');

  const taskText = document.createElement('div');

  taskText.textContent = `${editTask}`;

  const dateDiv = document.createElement('div');
  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    dateDiv.textContent = `No date`;
  } else {
    dateDiv.textContent = `Due Date: ${month}/${day}/${year}`;
  }

  left.appendChild(taskText);
  left.appendChild(dateDiv);

  taskDiv.appendChild(left);

  updateDisplay(inboxTasks);
}
