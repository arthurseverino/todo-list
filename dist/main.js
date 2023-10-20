/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMStuff.js":
/*!*************************!*\
  !*** ./src/DOMStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn),
/* harmony export */   closeEditTaskModal: () => (/* binding */ closeEditTaskModal),
/* harmony export */   closeTaskModal: () => (/* binding */ closeTaskModal),
/* harmony export */   deleteBtn: () => (/* binding */ deleteBtn),
/* harmony export */   editBtn: () => (/* binding */ editBtn),
/* harmony export */   editModal: () => (/* binding */ editModal),
/* harmony export */   myEditForm: () => (/* binding */ myEditForm),
/* harmony export */   myForm: () => (/* binding */ myForm),
/* harmony export */   taskModal: () => (/* binding */ taskModal)
/* harmony export */ });
const myForm = document.querySelector('#my-form');
const closeTaskModal = document.querySelector('#close-task-modal-btn');
const addTaskBtn = document.querySelector('#task-button');
const taskModal = document.querySelector('#task-modal');
const editBtn = document.querySelector('.edit-btn');
const editModal = document.querySelector('#edit-modal');
const myEditForm = document.querySelector('#my-edit-form');
const closeEditTaskModal = document.querySelector('#close-edit-modal-btn');
const deleteBtn = document.querySelector('.delete-btn');


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function Task(taskText, taskDueDate, editButton, deleteButton) {
  const taskDescription = taskText;
  const taskDate = taskDueDate;
  const editBtn = editButton;
  const deleteBtn = deleteButton;

  return { taskDescription, taskDate, editBtn, deleteBtn };
}


/***/ }),

/***/ "./src/handleDelete.js":
/*!*****************************!*\
  !*** ./src/handleDelete.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleDelete)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");


function handleDelete() {
  let inboxTasks = [];

  //the container should be populated
  const taskListContainer = document.querySelector('#task-list-container');
  taskListContainer.removeChild(taskdiv);

}


/***/ }),

/***/ "./src/handleEdit.js":
/*!***************************!*\
  !*** ./src/handleEdit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleEdit)
/* harmony export */ });
// you just create a new left div for the left side of the task-div
// with a new date and new task-text
// no, create a whole new text-div
const taskDiv = document.querySelector('.task-div');
const editTask = document.querySelector('#edit-task').value;
const date = document.querySelector('#edit-date-modal');

function handleEdit() {
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
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
// the buttons are not being styled



//if you have this inside the function it resets everytime its called
// populate this list with Tasks but do what with it?
let inboxTasks = [];

function handleSubmit() {
  //this is literally the task text, the description, the main bulk, big boy, you have to keep it in here or else it will be empty
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal');
  const taskListContainer = document.querySelector('#task-list-container');

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
  if (task === '') {
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

  newTask.appendChild(left);
  newTask.appendChild(right);
  //taskListContainer.appendChild(newTask);

  //I want newTask and newInboxTask to be the same

  //rn you're passing in div and button elements
  //idk what to do about left and right though
  const newInboxTask = (0,_Task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskText, dateDiv, editBtn, deleteBtn);

  console.log('task:' + taskText.textContent);
  console.log('dateDiv.textContent:' + dateDiv.textContent);

  inboxTasks.push(newInboxTask);

  inboxTasks.forEach((task) => {
    newTask.appendChild(left);
    taskListContainer.appendChild(newInboxTask);
  });

  localStorage.setItem('task-text', JSON.stringify(inboxTasks));
  console.log('inboxTasks:' + inboxTasks);
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
/* harmony import */ var _handleDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleDelete.js */ "./src/handleDelete.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");
/*

the default when opened should show inbox 

when you add a task, you always add it to inbox 
and check the date to also put it in this week or Today 

when you add a project, you only ask for project name
then you append a button to the left side of the screen with the title of project name that was entered
That button will show an array of tasks when clicked - 

these tasks are not added to inbox tho so keep two diff arrays:
array of tasks in inbox, array of projects, array of tasks in projects

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)
you can edit task by reopening a new form but with the saved text in it from its current textContent

everything in sidebar is a button

use dialog for projectmodal display

try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

what do you want to store in localstorage? the arrays of inbox tasks, array of projects,
and array of tasks in projects, all arrays basically
localStorage.setItem(key, value);

*/









_DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.addTaskBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.myForm.reset();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.taskModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.myForm.addEventListener('submit', (event) => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.taskModal.style.display = 'none';
  event.preventDefault();
  (0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.closeTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.taskModal.style.display = 'none';
});

//edit modal, does form reset here
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.editBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.editModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.myEditForm.addEventListener('submit', (event) => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.editModal.style.display = 'none';
  event.preventDefault();
  (0,_handleEdit_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.closeEditTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.editModal.style.display = 'none';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_4__.deleteBtn.addEventListener('click', () => {
  (0,_handleDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSUTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7OztBQ1A0Qjs7QUFFYjtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix1Q0FBdUMsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBOztBQUU2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osOEJBQThCLEtBQUs7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osdUNBQXVDLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSztBQUM1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQUk7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7Ozs7Ozs7VUNoRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUU2QztBQUNKO0FBQ0k7QUFDaEI7QUFFaUQ7Ozs7QUFJOUUsb0RBQVU7QUFDVixFQUFFLGdEQUFNO0FBQ1IsRUFBRSxtREFBUztBQUNYLENBQUM7O0FBRUQsZ0RBQU07QUFDTixFQUFFLG1EQUFTO0FBQ1g7QUFDQSxFQUFFLDREQUFZO0FBQ2QsQ0FBQzs7QUFFRCx3REFBYztBQUNkLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0EsaURBQU87QUFDUCxFQUFFLG1EQUFTO0FBQ1gsQ0FBQzs7QUFFRCxvREFBVTtBQUNWLEVBQUUsbURBQVM7QUFDWDtBQUNBLEVBQUUsMERBQVU7QUFDWixDQUFDOztBQUVELDREQUFrQjtBQUNsQixFQUFFLG1EQUFTO0FBQ1gsQ0FBQzs7QUFFRCxtREFBUztBQUNULEVBQUUsNERBQVk7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTVN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZUVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1mb3JtJyk7XG5leHBvcnQgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtdGFzay1tb2RhbC1idG4nKTtcbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbW9kYWwnKTtcbmV4cG9ydCBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk7XG5leHBvcnQgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbW9kYWwnKTtcbmV4cG9ydCBjb25zdCBteUVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWVkaXQtZm9ybScpO1xuZXhwb3J0IGNvbnN0IGNsb3NlRWRpdFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1lZGl0LW1vZGFsLWJ0bicpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnRuJyk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHRhc2tUZXh0LCB0YXNrRHVlRGF0ZSwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKSB7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tUZXh0O1xuICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tEdWVEYXRlO1xuICBjb25zdCBlZGl0QnRuID0gZWRpdEJ1dHRvbjtcbiAgY29uc3QgZGVsZXRlQnRuID0gZGVsZXRlQnV0dG9uO1xuXG4gIHJldHVybiB7IHRhc2tEZXNjcmlwdGlvbiwgdGFza0RhdGUsIGVkaXRCdG4sIGRlbGV0ZUJ0biB9O1xufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVEZWxldGUoKSB7XG4gIGxldCBpbmJveFRhc2tzID0gW107XG5cbiAgLy90aGUgY29udGFpbmVyIHNob3VsZCBiZSBwb3B1bGF0ZWRcbiAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0LWNvbnRhaW5lcicpO1xuICB0YXNrTGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrZGl2KTtcblxufVxuIiwiLy8geW91IGp1c3QgY3JlYXRlIGEgbmV3IGxlZnQgZGl2IGZvciB0aGUgbGVmdCBzaWRlIG9mIHRoZSB0YXNrLWRpdlxuLy8gd2l0aCBhIG5ldyBkYXRlIGFuZCBuZXcgdGFzay10ZXh0XG4vLyBubywgY3JlYXRlIGEgd2hvbGUgbmV3IHRleHQtZGl2XG5jb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGl2Jyk7XG5jb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS52YWx1ZTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlLW1vZGFsJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUVkaXQoKSB7XG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZS52YWx1ZSk7XG4gIGxldCBkYXkgPSBuZXdEYXRlLmdldERheSgpO1xuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tUZXh0LnRleHRDb250ZW50ID0gYCR7ZWRpdFRhc2t9YDtcbiAgbGVmdC5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG5cbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZiAoaXNOYU4obW9udGgpICYmIGlzTmFOKGRheSkgJiYgaXNOYU4oeWVhcikpIHtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gYE5vIGRhdGVgO1xuICB9IGVsc2Uge1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgfVxuXG4gIGxlZnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cbiAgLy8gc2hvdWxkIGJlIHRoaXMudGFza0RpdlxuICAvLyB3aGljaCB0YXNrRGl2IGRvZXMgaXQgYXBwZW5kIHRvP1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGxlZnQpO1xufVxuIiwiLy8gdGhlIGJ1dHRvbnMgYXJlIG5vdCBiZWluZyBzdHlsZWRcblxuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJztcblxuLy9pZiB5b3UgaGF2ZSB0aGlzIGluc2lkZSB0aGUgZnVuY3Rpb24gaXQgcmVzZXRzIGV2ZXJ5dGltZSBpdHMgY2FsbGVkXG4vLyBwb3B1bGF0ZSB0aGlzIGxpc3Qgd2l0aCBUYXNrcyBidXQgZG8gd2hhdCB3aXRoIGl0P1xubGV0IGluYm94VGFza3MgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAvL3RoaXMgaXMgbGl0ZXJhbGx5IHRoZSB0YXNrIHRleHQsIHRoZSBkZXNjcmlwdGlvbiwgdGhlIG1haW4gYnVsaywgYmlnIGJveSwgeW91IGhhdmUgdG8ga2VlcCBpdCBpbiBoZXJlIG9yIGVsc2UgaXQgd2lsbCBiZSBlbXB0eVxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLW1vZGFsJyk7XG4gIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdC1jb250YWluZXInKTtcblxuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUudmFsdWUpO1xuICBsZXQgZGF5ID0gbmV3RGF0ZS5nZXREYXkoKTtcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgLy9DcmVhdGUgdGFzay1kaXZcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cbiAgLy8gbGVmdFxuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlmICh0YXNrID09PSAnJykge1xuICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gYEVtcHR5IFRhc2tgO1xuICB9IGVsc2Uge1xuICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gYCR7dGFza31gO1xuICB9XG4gIGxlZnQuYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWYgKGlzTmFOKG1vbnRoKSAmJiBpc05hTihkYXkpICYmIGlzTmFOKHllYXIpKSB7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGBObyBkYXRlYDtcbiAgfSBlbHNlIHtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gIH1cbiAgbGVmdC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuICAvLyByaWdodFxuXG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG5cbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gIHJpZ2h0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICBuZXdUYXNrLmFwcGVuZENoaWxkKGxlZnQpO1xuICBuZXdUYXNrLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgLy90YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAvL0kgd2FudCBuZXdUYXNrIGFuZCBuZXdJbmJveFRhc2sgdG8gYmUgdGhlIHNhbWVcblxuICAvL3JuIHlvdSdyZSBwYXNzaW5nIGluIGRpdiBhbmQgYnV0dG9uIGVsZW1lbnRzXG4gIC8vaWRrIHdoYXQgdG8gZG8gYWJvdXQgbGVmdCBhbmQgcmlnaHQgdGhvdWdoXG4gIGNvbnN0IG5ld0luYm94VGFzayA9IFRhc2sodGFza1RleHQsIGRhdGVEaXYsIGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG5cbiAgY29uc29sZS5sb2coJ3Rhc2s6JyArIHRhc2tUZXh0LnRleHRDb250ZW50KTtcbiAgY29uc29sZS5sb2coJ2RhdGVEaXYudGV4dENvbnRlbnQ6JyArIGRhdGVEaXYudGV4dENvbnRlbnQpO1xuXG4gIGluYm94VGFza3MucHVzaChuZXdJbmJveFRhc2spO1xuXG4gIGluYm94VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW5ib3hUYXNrKTtcbiAgfSk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2stdGV4dCcsIEpTT04uc3RyaW5naWZ5KGluYm94VGFza3MpKTtcbiAgY29uc29sZS5sb2coJ2luYm94VGFza3M6JyArIGluYm94VGFza3MpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuXG50aGUgZGVmYXVsdCB3aGVuIG9wZW5lZCBzaG91bGQgc2hvdyBpbmJveCBcblxud2hlbiB5b3UgYWRkIGEgdGFzaywgeW91IGFsd2F5cyBhZGQgaXQgdG8gaW5ib3ggXG5hbmQgY2hlY2sgdGhlIGRhdGUgdG8gYWxzbyBwdXQgaXQgaW4gdGhpcyB3ZWVrIG9yIFRvZGF5IFxuXG53aGVuIHlvdSBhZGQgYSBwcm9qZWN0LCB5b3Ugb25seSBhc2sgZm9yIHByb2plY3QgbmFtZVxudGhlbiB5b3UgYXBwZW5kIGEgYnV0dG9uIHRvIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHNjcmVlbiB3aXRoIHRoZSB0aXRsZSBvZiBwcm9qZWN0IG5hbWUgdGhhdCB3YXMgZW50ZXJlZFxuVGhhdCBidXR0b24gd2lsbCBzaG93IGFuIGFycmF5IG9mIHRhc2tzIHdoZW4gY2xpY2tlZCAtIFxuXG50aGVzZSB0YXNrcyBhcmUgbm90IGFkZGVkIHRvIGluYm94IHRobyBzbyBrZWVwIHR3byBkaWZmIGFycmF5czpcbmFycmF5IG9mIHRhc2tzIGluIGluYm94LCBhcnJheSBvZiBwcm9qZWN0cywgYXJyYXkgb2YgdGFza3MgaW4gcHJvamVjdHNcblxueW91IGNhbiBhbHNvIGRlbGV0ZSB0YXNrcyBhbmQgcHJvamVjdHMsIHNpbXBsZSBhcyBkZWxldGluZyBmcm9tIGFycmF5IChjaGVjayBsaWJyYXJ5IGZvciBob3cgdG8gZGVsZXRlKVxueW91IGNhbiBlZGl0IHRhc2sgYnkgcmVvcGVuaW5nIGEgbmV3IGZvcm0gYnV0IHdpdGggdGhlIHNhdmVkIHRleHQgaW4gaXQgZnJvbSBpdHMgY3VycmVudCB0ZXh0Q29udGVudFxuXG5ldmVyeXRoaW5nIGluIHNpZGViYXIgaXMgYSBidXR0b25cblxudXNlIGRpYWxvZyBmb3IgcHJvamVjdG1vZGFsIGRpc3BsYXlcblxudHJ5IGFkZGluZyBhbiBvdmVybGF5XG5cbmhvdyB0byByZW1vdmUgcHJvamVjdHM/IGlkZWFsbHkgYSBidXR0b24gdGhhdCBzaG93cyB1cCBvbiBob3ZlciwgeW91IGNhbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IG9uZSAgXG5cbndoYXQgZG8geW91IHdhbnQgdG8gc3RvcmUgaW4gbG9jYWxzdG9yYWdlPyB0aGUgYXJyYXlzIG9mIGluYm94IHRhc2tzLCBhcnJheSBvZiBwcm9qZWN0cyxcbmFuZCBhcnJheSBvZiB0YXNrcyBpbiBwcm9qZWN0cywgYWxsIGFycmF5cyBiYXNpY2FsbHlcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXG4qL1xuXG5pbXBvcnQgaGFuZGxlU3VibWl0IGZyb20gJy4vaGFuZGxlU3VibWl0LmpzJztcbmltcG9ydCBoYW5kbGVFZGl0IGZyb20gJy4vaGFuZGxlRWRpdC5qcyc7XG5pbXBvcnQgaGFuZGxlRGVsZXRlIGZyb20gJy4vaGFuZGxlRGVsZXRlLmpzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQge2FkZFRhc2tCdG4sIGNsb3NlVGFza01vZGFsLCBteUZvcm0sIHRhc2tNb2RhbCwgZWRpdEJ0biwgXG4gIGVkaXRNb2RhbCwgbXlFZGl0Rm9ybSwgY2xvc2VFZGl0VGFza01vZGFsLCBkZWxldGVCdG4gfSBmcm9tICcuL0RPTVN0dWZmLmpzJztcblxuXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG15Rm9ybS5yZXNldCgpO1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5teUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBoYW5kbGVTdWJtaXQoKTtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuLy9lZGl0IG1vZGFsLCBkb2VzIGZvcm0gcmVzZXQgaGVyZVxuZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59KTtcblxubXlFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGhhbmRsZUVkaXQoKTtcbn0pO1xuXG5jbG9zZUVkaXRUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaGFuZGxlRGVsZXRlKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==