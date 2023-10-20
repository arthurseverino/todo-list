// Task just holds 4 HTML elements\\  
export let inboxTasks = [];

export default function Task(taskText, taskDueDate, editButton, deleteButton) {
  const taskDescription = taskText;
  const taskDate = taskDueDate;
  const editBtn = editButton;
  const deleteBtn = deleteButton;

  const createTaskDiv = () => {
    const newInboxTask = Task(taskText, dateDiv, editBtn, deleteBtn);
    inboxTasks.push(newInboxTask);
  };

  return { taskDescription, taskDate, editBtn, deleteBtn };
}
