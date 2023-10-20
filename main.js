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
/* harmony export */   taskListContainer: () => (/* binding */ taskListContainer),
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
const taskListContainer = document.querySelector('#task-list-container');


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

function handleDelete() {


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
/* harmony import */ var _handleSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit */ "./src/handleSubmit.js");
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");




// no, create a whole new text-div
// or directly edit the text-content from edit-form values

function handleEdit() {
  
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

  (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])(_handleSubmit__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");



//if you have this list inside the function it resets everytime its called, populate it with task-div elements
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

  const newInboxTask = document.createElement('div');

  // left
  const left = document.createElement('div');

  const taskText = document.createElement('div');
  if (task === '') {
    taskText.textContent = `Empty Task`;
  } else {
    taskText.textContent = `${task}`;
  }

  const dateDiv = document.createElement('div');
  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    dateDiv.textContent = `No date`;
  } else {
    dateDiv.textContent = `Due Date: ${month}/${day}/${year}`;
  }
  left.appendChild(taskText);
  left.appendChild(dateDiv);

  newInboxTask.appendChild(left);

  // right
  const right = document.createElement('div');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  //edit modal, does form reset here
  editBtn.addEventListener('click', () => {
    _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.editModal.style.display = 'flex';
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  left.classList.add('left');
  newInboxTask.classList.add('task-div');
  taskText.classList.add('task-text');
  right.classList.add('right');
  editBtn.classList.add('edit-btn');
  deleteBtn.classList.add('delete-btn');

  // the container should be populated by now, so find the one you want to delete and remove it from whatever array it's apart of (inboxArray, projectsarray)
  deleteBtn.addEventListener('click', () => {
    inboxTasks.splice(inboxTasks.indexOf(task), 1);
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(inboxTasks);
  });

  right.appendChild(editBtn);
  right.appendChild(deleteBtn);

  newInboxTask.appendChild(right);

  //you're pushing task-divs
  inboxTasks.push(newInboxTask);
  (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(inboxTasks);

  console.log('task: ' + taskText.textContent);
  console.log('dateDiv.textContent: ' + dateDiv.textContent);
  console.log('inboxTasks: ' + inboxTasks);
  localStorage.setItem('newInboxTask', JSON.stringify(newInboxTask));
  localStorage.getItem('newInboxTask');
}


/***/ }),

/***/ "./src/updateDisplay.js":
/*!******************************!*\
  !*** ./src/updateDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDisplay)
/* harmony export */ });

function updateDisplay(taskArray) {
  const taskListContainer = document.querySelector('#task-list-container');
  taskListContainer.textContent = "";
  for (const task of taskArray) {
    taskListContainer.appendChild(task);
  }
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
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");
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







_DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.addTaskBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.myForm.reset();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.taskModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.myForm.addEventListener('submit', (event) => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.taskModal.style.display = 'none';
  event.preventDefault();
  (0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.closeTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.taskModal.style.display = 'none';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.myEditForm.addEventListener('submit', (event) => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.editModal.style.display = 'none';
  event.preventDefault();
  (0,_handleEdit_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.closeEditTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_3__.editModal.style.display = 'none';
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUlE7OztBQUdmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNId0M7QUFDSTs7QUFFNUM7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsU0FBUzs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHVDQUF1QyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDNUQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLDBEQUFhLENBQUMscURBQVU7QUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckM0QztBQUNGOztBQUUxQztBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osOEJBQThCLEtBQUs7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHVDQUF1QyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDNUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBUztBQUNiLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMERBQWE7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRTZDO0FBQ0o7QUFDSTtBQUVvRDs7O0FBR2pHLG9EQUFVO0FBQ1YsRUFBRSxnREFBTTtBQUNSLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVELGdEQUFNO0FBQ04sRUFBRSxtREFBUztBQUNYO0FBQ0EsRUFBRSw0REFBWTtBQUNkLENBQUM7O0FBRUQsd0RBQWM7QUFDZCxFQUFFLG1EQUFTO0FBQ1gsQ0FBQzs7QUFFRCxvREFBVTtBQUNWLEVBQUUsbURBQVM7QUFDWDtBQUNBLEVBQUUsMERBQVU7QUFDWixDQUFDOztBQUVELDREQUFrQjtBQUNsQixFQUFFLG1EQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01TdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVFZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VwZGF0ZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybScpO1xuZXhwb3J0IGNvbnN0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXRhc2stbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG5leHBvcnQgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuZXhwb3J0IGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW1vZGFsJyk7XG5leHBvcnQgY29uc3QgbXlFZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1lZGl0LWZvcm0nKTtcbmV4cG9ydCBjb25zdCBjbG9zZUVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZWRpdC1tb2RhbC1idG4nKTtcbmV4cG9ydCBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ0bicpO1xuZXhwb3J0IGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdC1jb250YWluZXInKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKCkge1xuXG5cbn1cbiIsIlxuaW1wb3J0IGluYm94VGFza3MgZnJvbSAnLi9oYW5kbGVTdWJtaXQnO1xuaW1wb3J0IHVwZGF0ZURpc3BsYXkgZnJvbSAnLi91cGRhdGVEaXNwbGF5JztcblxuLy8gbm8sIGNyZWF0ZSBhIHdob2xlIG5ldyB0ZXh0LWRpdlxuLy8gb3IgZGlyZWN0bHkgZWRpdCB0aGUgdGV4dC1jb250ZW50IGZyb20gZWRpdC1mb3JtIHZhbHVlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVFZGl0KCkge1xuICBcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpdicpO1xuICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRhdGUtbW9kYWwnKTtcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlLnZhbHVlKTtcbiAgbGV0IGRheSA9IG5ld0RhdGUuZ2V0RGF5KCk7XG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IGAke2VkaXRUYXNrfWA7XG5cbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZiAoaXNOYU4obW9udGgpICYmIGlzTmFOKGRheSkgJiYgaXNOYU4oeWVhcikpIHtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gYE5vIGRhdGVgO1xuICB9IGVsc2Uge1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgfVxuXG4gIGxlZnQuYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICBsZWZ0LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQobGVmdCk7XG5cbiAgdXBkYXRlRGlzcGxheShpbmJveFRhc2tzKTtcbn1cbiIsImltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheSc7XG5pbXBvcnQgeyBlZGl0TW9kYWwgfSBmcm9tICcuL0RPTVN0dWZmLmpzJztcblxuLy9pZiB5b3UgaGF2ZSB0aGlzIGxpc3QgaW5zaWRlIHRoZSBmdW5jdGlvbiBpdCByZXNldHMgZXZlcnl0aW1lIGl0cyBjYWxsZWQsIHBvcHVsYXRlIGl0IHdpdGggdGFzay1kaXYgZWxlbWVudHNcbmxldCBpbmJveFRhc2tzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgLy90aGlzIGlzIGxpdGVyYWxseSB0aGUgdGFzayB0ZXh0LCB0aGUgZGVzY3JpcHRpb24sIHRoZSBtYWluIGJ1bGssIGJpZyBib3ksIHlvdSBoYXZlIHRvIGtlZXAgaXQgaW4gaGVyZSBvciBlbHNlIGl0IHdpbGwgYmUgZW1wdHlcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1tb2RhbCcpO1xuICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG5cbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlLnZhbHVlKTtcbiAgbGV0IGRheSA9IG5ld0RhdGUuZ2V0RGF5KCk7XG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IG5ld0luYm94VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8vIGxlZnRcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlmICh0YXNrID09PSAnJykge1xuICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gYEVtcHR5IFRhc2tgO1xuICB9IGVsc2Uge1xuICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gYCR7dGFza31gO1xuICB9XG5cbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZiAoaXNOYU4obW9udGgpICYmIGlzTmFOKGRheSkgJiYgaXNOYU4oeWVhcikpIHtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gYE5vIGRhdGVgO1xuICB9IGVsc2Uge1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgfVxuICBsZWZ0LmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgbGVmdC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuICBuZXdJbmJveFRhc2suYXBwZW5kQ2hpbGQobGVmdCk7XG5cbiAgLy8gcmlnaHRcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgLy9lZGl0IG1vZGFsLCBkb2VzIGZvcm0gcmVzZXQgaGVyZVxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gIG5ld0luYm94VGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICB0YXNrVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRleHQnKTtcbiAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXG4gIC8vIHRoZSBjb250YWluZXIgc2hvdWxkIGJlIHBvcHVsYXRlZCBieSBub3csIHNvIGZpbmQgdGhlIG9uZSB5b3Ugd2FudCB0byBkZWxldGUgYW5kIHJlbW92ZSBpdCBmcm9tIHdoYXRldmVyIGFycmF5IGl0J3MgYXBhcnQgb2YgKGluYm94QXJyYXksIHByb2plY3RzYXJyYXkpXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbmJveFRhc2tzLnNwbGljZShpbmJveFRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuICAgIHVwZGF0ZURpc3BsYXkoaW5ib3hUYXNrcyk7XG4gIH0pO1xuXG4gIHJpZ2h0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICByaWdodC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIG5ld0luYm94VGFzay5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgLy95b3UncmUgcHVzaGluZyB0YXNrLWRpdnNcbiAgaW5ib3hUYXNrcy5wdXNoKG5ld0luYm94VGFzayk7XG4gIHVwZGF0ZURpc3BsYXkoaW5ib3hUYXNrcyk7XG5cbiAgY29uc29sZS5sb2coJ3Rhc2s6ICcgKyB0YXNrVGV4dC50ZXh0Q29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdkYXRlRGl2LnRleHRDb250ZW50OiAnICsgZGF0ZURpdi50ZXh0Q29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdpbmJveFRhc2tzOiAnICsgaW5ib3hUYXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduZXdJbmJveFRhc2snLCBKU09OLnN0cmluZ2lmeShuZXdJbmJveFRhc2spKTtcbiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ld0luYm94VGFzaycpO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KHRhc2tBcnJheSkge1xuICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG4gIHRhc2tMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tBcnJheSkge1xuICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG5cbnRoZSBkZWZhdWx0IHdoZW4gb3BlbmVkIHNob3VsZCBzaG93IGluYm94IFxuXG53aGVuIHlvdSBhZGQgYSB0YXNrLCB5b3UgYWx3YXlzIGFkZCBpdCB0byBpbmJveCBcbmFuZCBjaGVjayB0aGUgZGF0ZSB0byBhbHNvIHB1dCBpdCBpbiB0aGlzIHdlZWsgb3IgVG9kYXkgXG5cbndoZW4geW91IGFkZCBhIHByb2plY3QsIHlvdSBvbmx5IGFzayBmb3IgcHJvamVjdCBuYW1lXG50aGVuIHlvdSBhcHBlbmQgYSBidXR0b24gdG8gdGhlIGxlZnQgc2lkZSBvZiB0aGUgc2NyZWVuIHdpdGggdGhlIHRpdGxlIG9mIHByb2plY3QgbmFtZSB0aGF0IHdhcyBlbnRlcmVkXG5UaGF0IGJ1dHRvbiB3aWxsIHNob3cgYW4gYXJyYXkgb2YgdGFza3Mgd2hlbiBjbGlja2VkIC0gXG5cbnRoZXNlIHRhc2tzIGFyZSBub3QgYWRkZWQgdG8gaW5ib3ggdGhvIHNvIGtlZXAgdHdvIGRpZmYgYXJyYXlzOlxuYXJyYXkgb2YgdGFza3MgaW4gaW5ib3gsIGFycmF5IG9mIHByb2plY3RzLCBhcnJheSBvZiB0YXNrcyBpbiBwcm9qZWN0c1xuXG55b3UgY2FuIGFsc28gZGVsZXRlIHRhc2tzIGFuZCBwcm9qZWN0cywgc2ltcGxlIGFzIGRlbGV0aW5nIGZyb20gYXJyYXkgKGNoZWNrIGxpYnJhcnkgZm9yIGhvdyB0byBkZWxldGUpXG55b3UgY2FuIGVkaXQgdGFzayBieSByZW9wZW5pbmcgYSBuZXcgZm9ybSBidXQgd2l0aCB0aGUgc2F2ZWQgdGV4dCBpbiBpdCBmcm9tIGl0cyBjdXJyZW50IHRleHRDb250ZW50XG5cbmV2ZXJ5dGhpbmcgaW4gc2lkZWJhciBpcyBhIGJ1dHRvblxuXG51c2UgZGlhbG9nIGZvciBwcm9qZWN0bW9kYWwgZGlzcGxheVxuXG50cnkgYWRkaW5nIGFuIG92ZXJsYXlcblxuaG93IHRvIHJlbW92ZSBwcm9qZWN0cz8gaWRlYWxseSBhIGJ1dHRvbiB0aGF0IHNob3dzIHVwIG9uIGhvdmVyLCB5b3UgY2FuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgb25lICBcblxud2hhdCBkbyB5b3Ugd2FudCB0byBzdG9yZSBpbiBsb2NhbHN0b3JhZ2U/IHRoZSBhcnJheXMgb2YgaW5ib3ggdGFza3MsIGFycmF5IG9mIHByb2plY3RzLFxuYW5kIGFycmF5IG9mIHRhc2tzIGluIHByb2plY3RzLCBhbGwgYXJyYXlzIGJhc2ljYWxseVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG5cbiovXG5cbmltcG9ydCBoYW5kbGVTdWJtaXQgZnJvbSAnLi9oYW5kbGVTdWJtaXQuanMnO1xuaW1wb3J0IGhhbmRsZUVkaXQgZnJvbSAnLi9oYW5kbGVFZGl0LmpzJztcbmltcG9ydCBoYW5kbGVEZWxldGUgZnJvbSAnLi9oYW5kbGVEZWxldGUuanMnO1xuaW1wb3J0IHthZGRUYXNrQnRuLCBjbG9zZVRhc2tNb2RhbCwgbXlGb3JtLCB0YXNrTW9kYWwsIGVkaXRCdG4sIFxuICBlZGl0TW9kYWwsIG15RWRpdEZvcm0sIGNsb3NlRWRpdFRhc2tNb2RhbCwgZGVsZXRlQnRuLCB0YXNrTGlzdENvbnRhaW5lciB9IGZyb20gJy4vRE9NU3R1ZmYuanMnO1xuXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG15Rm9ybS5yZXNldCgpO1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5teUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBoYW5kbGVTdWJtaXQoKTtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxubXlFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGhhbmRsZUVkaXQoKTtcbn0pO1xuXG5jbG9zZUVkaXRUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==