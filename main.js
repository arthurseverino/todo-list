/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMStuff.js":
/*!*************************!*\
  !*** ./src/DOMStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/handleEdit.js":
/*!***************************!*\
  !*** ./src/handleEdit.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/handleSubmit.js":
/*!*****************************!*\
  !*** ./src/handleSubmit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   "default": () => (/* binding */ addTaskToContainer),
/* harmony export */   inboxTasks: () => (/* binding */ inboxTasks)
/* harmony export */ });
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");


const taskListContainer = document.querySelector('#task-list-container');

let inboxTasks = [];

class Task {
  constructor(taskText, taskDueDate) {
    this.taskText = taskText;
    this.taskDate = taskDueDate;
  }
}

function formatDate(date) {
  let newDate = new Date(date);
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  if (isNaN(month) && isNaN(day) && isNaN(year)) {
    return `No date`;
  } else {
    return `Task due: ${month}/${day}/${year}`;
  }
}

function addTaskToContainer() {
  //inboxTasks is an array of classes 
  // so you want to create the class first, then dynamically create DOM Elements based off of those class values
  const newTask = getTaskFromInput();
  inboxTasks.push(newTask);
  (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

//so here you're creating the new task with the values from form 
function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  return new Task(task, formattedDate);
}


// no query selectors in here that's important, you're basing all the info off of a class 
// the class should be created first 
function createTaskDiv(taskClass) {
  const newInboxTask = document.createElement('div');
  const left = document.createElement('div');
  const taskText = document.createElement('div');
  const dateDiv = document.createElement('div');
  const right = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  if (taskClass.taskText === '') {
    taskText.textContent = `Empty Task`;
  } else {
    taskText.textContent = taskClass.taskText;
  }
  if (taskClass.taskDate === `No date`) {
    dateDiv.textContent = `No date`;
  } else {
    dateDiv.textContent = taskClass.taskDate;
  }

  // how to make form not reset? get current value
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.editModal.style.display = 'flex';
    const editTask = document.querySelector('#edit-task').value;
    const date = document.querySelector('#edit-date-modal').value;
    taskText.textContent = editTask;
    dateDiv.textContent = formatDate(date);
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    inboxTasks.splice(inboxTasks.indexOf(taskClass), 1);
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  left.classList.add('left');
  newInboxTask.classList.add('task-div');
  taskText.classList.add('task-text');
  right.classList.add('right');
  editBtn.classList.add('edit-btn');
  deleteBtn.classList.add('delete-btn');

  left.appendChild(taskText);
  left.appendChild(dateDiv);
  right.appendChild(editBtn);
  right.appendChild(deleteBtn);
  newInboxTask.appendChild(left);
  newInboxTask.appendChild(right);
  taskListContainer.appendChild(newInboxTask);

  console.log('task: ' + taskText.textContent);
  console.log('dateDiv.textContent: ' + dateDiv.textContent);
}


/***/ }),

/***/ "./src/updateDisplay.js":
/*!******************************!*\
  !*** ./src/updateDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _handleSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit */ "./src/handleSubmit.js");


function updateDisplay() {
  taskListContainer.textContent = '';
  for (const taskClass of _handleSubmit__WEBPACK_IMPORTED_MODULE_0__.inboxTasks) {
    createTaskDiv(taskClass);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit.js */ "./src/handleSubmit.js");
/* harmony import */ var _handleEdit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleEdit.js */ "./src/handleEdit.js");
/* harmony import */ var _handleEdit_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_handleEdit_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");
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





_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.taskModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.myForm.addEventListener('submit', (event) => {
  (0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.taskModal.style.display = 'none';
  event.preventDefault();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.myForm.reset();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.closeTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.taskModal.style.display = 'none';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.myEditForm.addEventListener('submit', (event) => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.editModal.style.display = 'none';
  event.preventDefault();
  _handleEdit_js__WEBPACK_IMPORTED_MODULE_1___default()();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.closeEditTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.editModal.style.display = 'none';
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVUcUM7QUFDRjtBQUMxQzs7QUFFTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHdCQUF3QixNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDN0M7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBYTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25HNEM7O0FBRTdCO0FBQ2Y7QUFDQSwwQkFBMEIscURBQVU7QUFDcEM7QUFDQTtBQUNBOzs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVtRDtBQUNWO0FBRXdEOztBQUVqRyxvREFBVTtBQUNWLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVELGdEQUFNO0FBQ04sRUFBRSw0REFBa0I7QUFDcEIsRUFBRSxtREFBUztBQUNYO0FBQ0EsRUFBRSxnREFBTTtBQUNSLENBQUM7O0FBRUQsd0RBQWM7QUFDZCxFQUFFLG1EQUFTO0FBQ1gsQ0FBQzs7QUFFRCxvREFBVTtBQUNWLEVBQUUsbURBQVM7QUFDWDtBQUNBLEVBQUUscURBQVU7QUFDWixDQUFDOztBQUVELDREQUFrQjtBQUNsQixFQUFFLG1EQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01TdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91cGRhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1mb3JtJyk7XG5leHBvcnQgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtdGFzay1tb2RhbC1idG4nKTtcbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbW9kYWwnKTtcbmV4cG9ydCBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk7XG5leHBvcnQgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtbW9kYWwnKTtcbmV4cG9ydCBjb25zdCBteUVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWVkaXQtZm9ybScpO1xuZXhwb3J0IGNvbnN0IGNsb3NlRWRpdFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1lZGl0LW1vZGFsLWJ0bicpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnRuJyk7XG5leHBvcnQgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0LWNvbnRhaW5lcicpO1xuIiwiIiwiaW1wb3J0IHVwZGF0ZURpc3BsYXkgZnJvbSAnLi91cGRhdGVEaXNwbGF5JztcbmltcG9ydCB7IGVkaXRNb2RhbCB9IGZyb20gJy4vRE9NU3R1ZmYuanMnO1xuY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0LWNvbnRhaW5lcicpO1xuXG5leHBvcnQgbGV0IGluYm94VGFza3MgPSBbXTtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrVGV4dCwgdGFza0R1ZURhdGUpIHtcbiAgICB0aGlzLnRhc2tUZXh0ID0gdGFza1RleHQ7XG4gICAgdGhpcy50YXNrRGF0ZSA9IHRhc2tEdWVEYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBsZXQgZGF5ID0gbmV3RGF0ZS5nZXREYXkoKTtcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgaWYgKGlzTmFOKG1vbnRoKSAmJiBpc05hTihkYXkpICYmIGlzTmFOKHllYXIpKSB7XG4gICAgcmV0dXJuIGBObyBkYXRlYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYFRhc2sgZHVlOiAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza1RvQ29udGFpbmVyKCkge1xuICAvL2luYm94VGFza3MgaXMgYW4gYXJyYXkgb2YgY2xhc3NlcyBcbiAgLy8gc28geW91IHdhbnQgdG8gY3JlYXRlIHRoZSBjbGFzcyBmaXJzdCwgdGhlbiBkeW5hbWljYWxseSBjcmVhdGUgRE9NIEVsZW1lbnRzIGJhc2VkIG9mZiBvZiB0aG9zZSBjbGFzcyB2YWx1ZXNcbiAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tGcm9tSW5wdXQoKTtcbiAgaW5ib3hUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICB1cGRhdGVEaXNwbGF5KCk7XG59XG5cbi8vc28gaGVyZSB5b3UncmUgY3JlYXRpbmcgdGhlIG5ldyB0YXNrIHdpdGggdGhlIHZhbHVlcyBmcm9tIGZvcm0gXG5mdW5jdGlvbiBnZXRUYXNrRnJvbUlucHV0KCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLW1vZGFsJykudmFsdWU7XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICByZXR1cm4gbmV3IFRhc2sodGFzaywgZm9ybWF0dGVkRGF0ZSk7XG59XG5cblxuLy8gbm8gcXVlcnkgc2VsZWN0b3JzIGluIGhlcmUgdGhhdCdzIGltcG9ydGFudCwgeW91J3JlIGJhc2luZyBhbGwgdGhlIGluZm8gb2ZmIG9mIGEgY2xhc3MgXG4vLyB0aGUgY2xhc3Mgc2hvdWxkIGJlIGNyZWF0ZWQgZmlyc3QgXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2tDbGFzcykge1xuICBjb25zdCBuZXdJbmJveFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgaWYgKHRhc2tDbGFzcy50YXNrVGV4dCA9PT0gJycpIHtcbiAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IGBFbXB0eSBUYXNrYDtcbiAgfSBlbHNlIHtcbiAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2tDbGFzcy50YXNrVGV4dDtcbiAgfVxuICBpZiAodGFza0NsYXNzLnRhc2tEYXRlID09PSBgTm8gZGF0ZWApIHtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gYE5vIGRhdGVgO1xuICB9IGVsc2Uge1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSB0YXNrQ2xhc3MudGFza0RhdGU7XG4gIH1cblxuICAvLyBob3cgdG8gbWFrZSBmb3JtIG5vdCByZXNldD8gZ2V0IGN1cnJlbnQgdmFsdWVcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZS1tb2RhbCcpLnZhbHVlO1xuICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gZWRpdFRhc2s7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xuICB9KTtcblxuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGluYm94VGFza3Muc3BsaWNlKGluYm94VGFza3MuaW5kZXhPZih0YXNrQ2xhc3MpLCAxKTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xuXG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICBuZXdJbmJveFRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgdGFza1RleHQuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcblxuICBsZWZ0LmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgbGVmdC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIHJpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIG5ld0luYm94VGFzay5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgbmV3SW5ib3hUYXNrLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW5ib3hUYXNrKTtcblxuICBjb25zb2xlLmxvZygndGFzazogJyArIHRhc2tUZXh0LnRleHRDb250ZW50KTtcbiAgY29uc29sZS5sb2coJ2RhdGVEaXYudGV4dENvbnRlbnQ6ICcgKyBkYXRlRGl2LnRleHRDb250ZW50KTtcbn1cbiIsImltcG9ydCB7IGluYm94VGFza3MgfSBmcm9tICcuL2hhbmRsZVN1Ym1pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIHRhc2tMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGZvciAoY29uc3QgdGFza0NsYXNzIG9mIGluYm94VGFza3MpIHtcbiAgICBjcmVhdGVUYXNrRGl2KHRhc2tDbGFzcyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuXG50aGUgZGVmYXVsdCB3aGVuIG9wZW5lZCBzaG91bGQgc2hvdyBpbmJveCBcblxud2hlbiB5b3UgYWRkIGEgdGFzaywgeW91IGFsd2F5cyBhZGQgaXQgdG8gaW5ib3ggXG5hbmQgY2hlY2sgdGhlIGRhdGUgdG8gYWxzbyBwdXQgaXQgaW4gdGhpcyB3ZWVrIG9yIFRvZGF5IFxuXG53aGVuIHlvdSBhZGQgYSBwcm9qZWN0LCB5b3Ugb25seSBhc2sgZm9yIHByb2plY3QgbmFtZVxudGhlbiB5b3UgYXBwZW5kIGEgYnV0dG9uIHRvIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHNjcmVlbiB3aXRoIHRoZSB0aXRsZSBvZiBwcm9qZWN0IG5hbWUgdGhhdCB3YXMgZW50ZXJlZFxuVGhhdCBidXR0b24gd2lsbCBzaG93IGFuIGFycmF5IG9mIHRhc2tzIHdoZW4gY2xpY2tlZCAtIFxuXG50aGVzZSB0YXNrcyBhcmUgbm90IGFkZGVkIHRvIGluYm94IHRobyBzbyBrZWVwIHR3byBkaWZmIGFycmF5czpcbmFycmF5IG9mIHRhc2tzIGluIGluYm94LCBhcnJheSBvZiBwcm9qZWN0cywgYXJyYXkgb2YgdGFza3MgaW4gcHJvamVjdHNcblxueW91IGNhbiBhbHNvIGRlbGV0ZSB0YXNrcyBhbmQgcHJvamVjdHMsIHNpbXBsZSBhcyBkZWxldGluZyBmcm9tIGFycmF5IChjaGVjayBsaWJyYXJ5IGZvciBob3cgdG8gZGVsZXRlKVxueW91IGNhbiBlZGl0IHRhc2sgYnkgcmVvcGVuaW5nIGEgbmV3IGZvcm0gYnV0IHdpdGggdGhlIHNhdmVkIHRleHQgaW4gaXQgZnJvbSBpdHMgY3VycmVudCB0ZXh0Q29udGVudFxuXG5ldmVyeXRoaW5nIGluIHNpZGViYXIgaXMgYSBidXR0b25cblxudXNlIGRpYWxvZyBmb3IgcHJvamVjdG1vZGFsIGRpc3BsYXlcblxudHJ5IGFkZGluZyBhbiBvdmVybGF5XG5cbmhvdyB0byByZW1vdmUgcHJvamVjdHM/IGlkZWFsbHkgYSBidXR0b24gdGhhdCBzaG93cyB1cCBvbiBob3ZlciwgeW91IGNhbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IG9uZSAgXG5cbndoYXQgZG8geW91IHdhbnQgdG8gc3RvcmUgaW4gbG9jYWxzdG9yYWdlPyB0aGUgYXJyYXlzIG9mIGluYm94IHRhc2tzLCBhcnJheSBvZiBwcm9qZWN0cyxcbmFuZCBhcnJheSBvZiB0YXNrcyBpbiBwcm9qZWN0cywgYWxsIGFycmF5cyBiYXNpY2FsbHlcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXG4qL1xuXG5pbXBvcnQgYWRkVGFza1RvQ29udGFpbmVyIGZyb20gJy4vaGFuZGxlU3VibWl0LmpzJztcbmltcG9ydCBoYW5kbGVFZGl0IGZyb20gJy4vaGFuZGxlRWRpdC5qcyc7XG5pbXBvcnQge2FkZFRhc2tCdG4sIGNsb3NlVGFza01vZGFsLCBteUZvcm0sIHRhc2tNb2RhbCwgZWRpdEJ0biwgXG4gIGVkaXRNb2RhbCwgbXlFZGl0Rm9ybSwgY2xvc2VFZGl0VGFza01vZGFsLCBkZWxldGVCdG4sIHRhc2tMaXN0Q29udGFpbmVyIH0gZnJvbSAnLi9ET01TdHVmZi5qcyc7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufSk7XG5cbm15Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgYWRkVGFza1RvQ29udGFpbmVyKCk7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBteUZvcm0ucmVzZXQoKTtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxubXlFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGhhbmRsZUVkaXQoKTtcbn0pO1xuXG5jbG9zZUVkaXRUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==