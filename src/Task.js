// Task just holds 4 HTML elements\\  

export default function Task(taskText, taskDueDate, editButton, deleteButton) {
  const taskDescription = taskText;
  const taskDate = taskDueDate;
  const editBtn = editButton;
  const deleteBtn = deleteButton;

  return {taskDescription, taskDate, editBtn, deleteBtn };
}
