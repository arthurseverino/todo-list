import updateDisplay from './updateDisplay';
import { editModal, myEditForm, taskListContainer } from './DOMStuff.js';

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

export function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  return new Task(task, formattedDate);
}

// limit query selectors in here that's important
// you should get all the info you need off of your class which has the info query selected from the form already
// now you just want to dynamically create the HTML elements with that CLASS info
//you want to create a task array not just one task

//what if taskList is empty? 

export function createTaskDivs(taskList) {
  for (const task of taskList) {
    const newTaskDiv = document.createElement('div');
    const left = document.createElement('div');
    const newTaskText = document.createElement('div');
    const newDateDiv = document.createElement('div');
    const right = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    console.log(task.taskText);
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
      updateDisplay();
    });

    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.splice(taskList.indexOf(task), 1);
      updateDisplay();
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
}
