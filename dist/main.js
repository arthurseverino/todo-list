/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*

add localstorage to make visualization testing easier
the default when opened should show inbox 

A button that says + Add Project / + Add Task placed right after the last task / project.
When clicked, a modal pops up with an x on the top-right and an add button on the bottom just like library.

when you add a task, you add the description of the task and date its due
then you add it to inbox and check the date to also put it in this week or Today 

when you add a project, you only ask for project name
then you append a div to the left side of the screen with the title of project name that was entered
Then, make that div clickable(button), and it will show an array of tasks when clicked - 
these tasks get appended just like if they were being appended to inbox, with a modal form 

to add task to project put a button called + Add Project Task

these tasks are not added to inbox tho so keep two diff arrays:
array of tasks in inbox, array of projects, array of tasks in projects

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)

make sure all buttons stay active when clicked and hovered to show where you are 

you can edit task by reopening form with the same data in it that it has 
currently and change the green add button to a yellow "edit"

everything in sidebar is a button

*/

const taskModal = document.querySelector('#task-modal');
const closeTaskModal = document.querySelector('#close-task-modal-btn');
const addTaskBtn = document.querySelector('#task-button');

addTaskBtn.addEventListener('click', () => {
  taskModal.showModal();
  console.log('clicked big green add Task btn');
});

closeTaskModal.addEventListener('click', () => {
  taskModal.close();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5hZGQgbG9jYWxzdG9yYWdlIHRvIG1ha2UgdmlzdWFsaXphdGlvbiB0ZXN0aW5nIGVhc2llclxudGhlIGRlZmF1bHQgd2hlbiBvcGVuZWQgc2hvdWxkIHNob3cgaW5ib3ggXG5cbkEgYnV0dG9uIHRoYXQgc2F5cyArIEFkZCBQcm9qZWN0IC8gKyBBZGQgVGFzayBwbGFjZWQgcmlnaHQgYWZ0ZXIgdGhlIGxhc3QgdGFzayAvIHByb2plY3QuXG5XaGVuIGNsaWNrZWQsIGEgbW9kYWwgcG9wcyB1cCB3aXRoIGFuIHggb24gdGhlIHRvcC1yaWdodCBhbmQgYW4gYWRkIGJ1dHRvbiBvbiB0aGUgYm90dG9tIGp1c3QgbGlrZSBsaWJyYXJ5LlxuXG53aGVuIHlvdSBhZGQgYSB0YXNrLCB5b3UgYWRkIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzayBhbmQgZGF0ZSBpdHMgZHVlXG50aGVuIHlvdSBhZGQgaXQgdG8gaW5ib3ggYW5kIGNoZWNrIHRoZSBkYXRlIHRvIGFsc28gcHV0IGl0IGluIHRoaXMgd2VlayBvciBUb2RheSBcblxud2hlbiB5b3UgYWRkIGEgcHJvamVjdCwgeW91IG9ubHkgYXNrIGZvciBwcm9qZWN0IG5hbWVcbnRoZW4geW91IGFwcGVuZCBhIGRpdiB0byB0aGUgbGVmdCBzaWRlIG9mIHRoZSBzY3JlZW4gd2l0aCB0aGUgdGl0bGUgb2YgcHJvamVjdCBuYW1lIHRoYXQgd2FzIGVudGVyZWRcblRoZW4sIG1ha2UgdGhhdCBkaXYgY2xpY2thYmxlKGJ1dHRvbiksIGFuZCBpdCB3aWxsIHNob3cgYW4gYXJyYXkgb2YgdGFza3Mgd2hlbiBjbGlja2VkIC0gXG50aGVzZSB0YXNrcyBnZXQgYXBwZW5kZWQganVzdCBsaWtlIGlmIHRoZXkgd2VyZSBiZWluZyBhcHBlbmRlZCB0byBpbmJveCwgd2l0aCBhIG1vZGFsIGZvcm0gXG5cbnRvIGFkZCB0YXNrIHRvIHByb2plY3QgcHV0IGEgYnV0dG9uIGNhbGxlZCArIEFkZCBQcm9qZWN0IFRhc2tcblxudGhlc2UgdGFza3MgYXJlIG5vdCBhZGRlZCB0byBpbmJveCB0aG8gc28ga2VlcCB0d28gZGlmZiBhcnJheXM6XG5hcnJheSBvZiB0YXNrcyBpbiBpbmJveCwgYXJyYXkgb2YgcHJvamVjdHMsIGFycmF5IG9mIHRhc2tzIGluIHByb2plY3RzXG5cbnlvdSBjYW4gYWxzbyBkZWxldGUgdGFza3MgYW5kIHByb2plY3RzLCBzaW1wbGUgYXMgZGVsZXRpbmcgZnJvbSBhcnJheSAoY2hlY2sgbGlicmFyeSBmb3IgaG93IHRvIGRlbGV0ZSlcblxubWFrZSBzdXJlIGFsbCBidXR0b25zIHN0YXkgYWN0aXZlIHdoZW4gY2xpY2tlZCBhbmQgaG92ZXJlZCB0byBzaG93IHdoZXJlIHlvdSBhcmUgXG5cbnlvdSBjYW4gZWRpdCB0YXNrIGJ5IHJlb3BlbmluZyBmb3JtIHdpdGggdGhlIHNhbWUgZGF0YSBpbiBpdCB0aGF0IGl0IGhhcyBcbmN1cnJlbnRseSBhbmQgY2hhbmdlIHRoZSBncmVlbiBhZGQgYnV0dG9uIHRvIGEgeWVsbG93IFwiZWRpdFwiXG5cbmV2ZXJ5dGhpbmcgaW4gc2lkZWJhciBpcyBhIGJ1dHRvblxuXG4qL1xuXG5jb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1tb2RhbCcpO1xuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtdGFzay1tb2RhbC1idG4nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza01vZGFsLnNob3dNb2RhbCgpO1xuICBjb25zb2xlLmxvZygnY2xpY2tlZCBiaWcgZ3JlZW4gYWRkIFRhc2sgYnRuJyk7XG59KTtcblxuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tNb2RhbC5jbG9zZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=