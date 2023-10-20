/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handleEdit.js":
/*!***************************!*\
  !*** ./src/handleEdit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleEdit)
/* harmony export */ });
function handleEdit() {
  // you don't create a whole new task
  // you just create a new element for the left side of the task-div
  const date = document.querySelector('#edit-date-modal');
  let newDate = new Date(date.value);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const taskDiv = document.querySelector('.task-div');
  const editTask = document.querySelector('#edit-task').value;

  const left = document.createElement('div');
  left.classList.add('left');

  const taskText = document.createElement('div');
  taskText.textContent = `Task: ${editTask}`;
  left.appendChild(taskText);

  const dateDiv = document.createElement('div');
  dateDiv.textContent = `Due Date: ${month}/${day}/${year}`;
  left.appendChild(dateDiv);


  // should be this.taskDiv
  // which taskDiv does it append to? 
  taskDiv.appendChild(left);
}


/***/ }),

/***/ "./src/handleSubmit.js":
/*!*****************************!*\
  !*** ./src/handleSubmit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleSubmit)
/* harmony export */ });
// the buttons are not being styled

function handleSubmit() {
  const date = document.querySelector('#date-modal');
  const taskListContainer = document.querySelector('#task-list-container');
  const task = document.querySelector('#task').value;
  let newDate = new Date(date.value);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  // you should populate an array of task nodes
  // an array of task-divs
  let inboxTasks = [];

  //Create task-div

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

  //append to task list container, array, and 
  taskListContainer.appendChild(newTask);
  inboxTasks.push(newTask)
  localStorage.setItem('task-div',JSON.stringify(newTask));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit.js */ "./src/handleSubmit.js");
/* harmony import */ var _handleEdit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleEdit.js */ "./src/handleEdit.js");
/*

add localstorage to make visualization testing easier
the default when opened should show inbox 

A button that says + Add Project / + Add Task placed right before the first task / project.
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

how to make items in background unclickable when showing modal

use dialog for projectmodal display

keep all query selects in DOMStuff file
you have to import that file into every file then 

try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one 

what do you want to store in localstorage? the arrays of tasks and array of projects
and array of tasks in inbox, all arrays basically
//  localStorage.setItem(key, value);
*/




const myForm = document.querySelector('#my-form');
const closeTaskModal = document.querySelector('#close-task-modal-btn');
const addTaskBtn = document.querySelector('#task-button');
const taskModal = document.querySelector('#task-modal');
const editBtn = document.querySelector('.edit-btn');

addTaskBtn.addEventListener('click', () => {
  myForm.reset();
  taskModal.style.display = 'flex';
});

closeTaskModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

myForm.addEventListener('submit', (event) => {
  taskModal.style.display = 'none';
  event.preventDefault();
  (0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

//when you click on edit it opens a new form 
//but it doesn't append
closeTaskModal.addEventListener('click', () => {
  editModal.style.display = 'flex';
  (0,_handleEdit_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7O0FBRUE7QUFDQSxxQ0FBcUMsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxLQUFLO0FBQ3ZDOztBQUVBO0FBQ0EscUNBQXFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7QUFDSjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQVk7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVFZGl0KCkge1xuICAvLyB5b3UgZG9uJ3QgY3JlYXRlIGEgd2hvbGUgbmV3IHRhc2tcbiAgLy8geW91IGp1c3QgY3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHRhc2stZGl2XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlLW1vZGFsJyk7XG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZS52YWx1ZSk7XG4gIGxldCBkYXkgPSBuZXdEYXRlLmdldERheSgpO1xuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGl2Jyk7XG4gIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzaycpLnZhbHVlO1xuXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza1RleHQudGV4dENvbnRlbnQgPSBgVGFzazogJHtlZGl0VGFza31gO1xuICBsZWZ0LmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcblxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgbGVmdC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuXG4gIC8vIHNob3VsZCBiZSB0aGlzLnRhc2tEaXZcbiAgLy8gd2hpY2ggdGFza0RpdiBkb2VzIGl0IGFwcGVuZCB0bz8gXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQobGVmdCk7XG59XG4iLCIvLyB0aGUgYnV0dG9ucyBhcmUgbm90IGJlaW5nIHN0eWxlZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1tb2RhbCcpO1xuICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUudmFsdWUpO1xuICBsZXQgZGF5ID0gbmV3RGF0ZS5nZXREYXkoKTtcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgLy8geW91IHNob3VsZCBwb3B1bGF0ZSBhbiBhcnJheSBvZiB0YXNrIG5vZGVzXG4gIC8vIGFuIGFycmF5IG9mIHRhc2stZGl2c1xuICBsZXQgaW5ib3hUYXNrcyA9IFtdO1xuXG4gIC8vQ3JlYXRlIHRhc2stZGl2XG5cbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cbiAgLy8gbGVmdFxuXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza1RleHQudGV4dENvbnRlbnQgPSBgVGFzazogJHt0YXNrfWA7XG4gIGxlZnQuYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICBsZWZ0LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIG5ld1Rhc2suYXBwZW5kQ2hpbGQobGVmdCk7XG5cbiAgLy8gcmlnaHRcblxuICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICByaWdodC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gIHJpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgbmV3VGFzay5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgLy9hcHBlbmQgdG8gdGFzayBsaXN0IGNvbnRhaW5lciwgYXJyYXksIGFuZCBcbiAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gIGluYm94VGFza3MucHVzaChuZXdUYXNrKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzay1kaXYnLEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcblxuYWRkIGxvY2Fsc3RvcmFnZSB0byBtYWtlIHZpc3VhbGl6YXRpb24gdGVzdGluZyBlYXNpZXJcbnRoZSBkZWZhdWx0IHdoZW4gb3BlbmVkIHNob3VsZCBzaG93IGluYm94IFxuXG5BIGJ1dHRvbiB0aGF0IHNheXMgKyBBZGQgUHJvamVjdCAvICsgQWRkIFRhc2sgcGxhY2VkIHJpZ2h0IGJlZm9yZSB0aGUgZmlyc3QgdGFzayAvIHByb2plY3QuXG5XaGVuIGNsaWNrZWQsIGEgbW9kYWwgcG9wcyB1cCB3aXRoIGFuIHggb24gdGhlIHRvcC1yaWdodCBhbmQgYW4gYWRkIGJ1dHRvbiBvbiB0aGUgYm90dG9tIGp1c3QgbGlrZSBsaWJyYXJ5LlxuXG53aGVuIHlvdSBhZGQgYSB0YXNrLCB5b3UgYWRkIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzayBhbmQgZGF0ZSBpdHMgZHVlXG50aGVuIHlvdSBhZGQgaXQgdG8gaW5ib3ggYW5kIGNoZWNrIHRoZSBkYXRlIHRvIGFsc28gcHV0IGl0IGluIHRoaXMgd2VlayBvciBUb2RheSBcblxud2hlbiB5b3UgYWRkIGEgcHJvamVjdCwgeW91IG9ubHkgYXNrIGZvciBwcm9qZWN0IG5hbWVcbnRoZW4geW91IGFwcGVuZCBhIGRpdiB0byB0aGUgbGVmdCBzaWRlIG9mIHRoZSBzY3JlZW4gd2l0aCB0aGUgdGl0bGUgb2YgcHJvamVjdCBuYW1lIHRoYXQgd2FzIGVudGVyZWRcblRoZW4sIG1ha2UgdGhhdCBkaXYgY2xpY2thYmxlKGJ1dHRvbiksIGFuZCBpdCB3aWxsIHNob3cgYW4gYXJyYXkgb2YgdGFza3Mgd2hlbiBjbGlja2VkIC0gXG50aGVzZSB0YXNrcyBnZXQgYXBwZW5kZWQganVzdCBsaWtlIGlmIHRoZXkgd2VyZSBiZWluZyBhcHBlbmRlZCB0byBpbmJveCwgd2l0aCBhIG1vZGFsIGZvcm0gXG5cbnRvIGFkZCB0YXNrIHRvIHByb2plY3QgcHV0IGEgYnV0dG9uIGNhbGxlZCArIEFkZCBQcm9qZWN0IFRhc2tcblxudGhlc2UgdGFza3MgYXJlIG5vdCBhZGRlZCB0byBpbmJveCB0aG8gc28ga2VlcCB0d28gZGlmZiBhcnJheXM6XG5hcnJheSBvZiB0YXNrcyBpbiBpbmJveCwgYXJyYXkgb2YgcHJvamVjdHMsIGFycmF5IG9mIHRhc2tzIGluIHByb2plY3RzXG5cbnlvdSBjYW4gYWxzbyBkZWxldGUgdGFza3MgYW5kIHByb2plY3RzLCBzaW1wbGUgYXMgZGVsZXRpbmcgZnJvbSBhcnJheSAoY2hlY2sgbGlicmFyeSBmb3IgaG93IHRvIGRlbGV0ZSlcblxubWFrZSBzdXJlIGFsbCBidXR0b25zIHN0YXkgYWN0aXZlIHdoZW4gY2xpY2tlZCBhbmQgaG92ZXJlZCB0byBzaG93IHdoZXJlIHlvdSBhcmUgXG5cbnlvdSBjYW4gZWRpdCB0YXNrIGJ5IHJlb3BlbmluZyBmb3JtIHdpdGggdGhlIHNhbWUgZGF0YSBpbiBpdCB0aGF0IGl0IGhhcyBcbmN1cnJlbnRseSBhbmQgY2hhbmdlIHRoZSBncmVlbiBhZGQgYnV0dG9uIHRvIGEgeWVsbG93IFwiZWRpdFwiXG5cbmV2ZXJ5dGhpbmcgaW4gc2lkZWJhciBpcyBhIGJ1dHRvblxuXG5ob3cgdG8gbWFrZSBpdGVtcyBpbiBiYWNrZ3JvdW5kIHVuY2xpY2thYmxlIHdoZW4gc2hvd2luZyBtb2RhbFxuXG51c2UgZGlhbG9nIGZvciBwcm9qZWN0bW9kYWwgZGlzcGxheVxuXG5rZWVwIGFsbCBxdWVyeSBzZWxlY3RzIGluIERPTVN0dWZmIGZpbGVcbnlvdSBoYXZlIHRvIGltcG9ydCB0aGF0IGZpbGUgaW50byBldmVyeSBmaWxlIHRoZW4gXG5cbnRyeSBhZGRpbmcgYW4gb3ZlcmxheVxuXG5ob3cgdG8gcmVtb3ZlIHByb2plY3RzPyBpZGVhbGx5IGEgYnV0dG9uIHRoYXQgc2hvd3MgdXAgb24gaG92ZXIsIHlvdSBjYW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBvbmUgXG5cbndoYXQgZG8geW91IHdhbnQgdG8gc3RvcmUgaW4gbG9jYWxzdG9yYWdlPyB0aGUgYXJyYXlzIG9mIHRhc2tzIGFuZCBhcnJheSBvZiBwcm9qZWN0c1xuYW5kIGFycmF5IG9mIHRhc2tzIGluIGluYm94LCBhbGwgYXJyYXlzIGJhc2ljYWxseVxuLy8gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuKi9cblxuaW1wb3J0IGhhbmRsZVN1Ym1pdCBmcm9tICcuL2hhbmRsZVN1Ym1pdC5qcyc7XG5pbXBvcnQgaGFuZGxlRWRpdCBmcm9tICcuL2hhbmRsZUVkaXQuanMnO1xuXG5jb25zdCBteUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybScpO1xuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtdGFzay1tb2RhbC1idG4nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG5jb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG15Rm9ybS5yZXNldCgpO1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxubXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaGFuZGxlU3VibWl0KCk7XG59KTtcblxuLy93aGVuIHlvdSBjbGljayBvbiBlZGl0IGl0IG9wZW5zIGEgbmV3IGZvcm0gXG4vL2J1dCBpdCBkb2Vzbid0IGFwcGVuZFxuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBoYW5kbGVFZGl0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==