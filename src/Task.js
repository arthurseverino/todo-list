export default function Task(taskText, taskDueDate) {
  const taskDescription = taskText;
  const taskDate = taskDueDate;

  // Each Task should be responsible for displaying itself what does that even mean lol
  const display = () => {
    return `${taskDescription}, ${taskDate}`;
  };

  return { taskDescription, taskDate, display };
}
