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

/***/ "./src/handleSubmit.js":
/*!*****************************!*\
  !*** ./src/handleSubmit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   createTaskDiv: () => (/* binding */ createTaskDiv),
/* harmony export */   "default": () => (/* binding */ addTaskToContainer),
/* harmony export */   inboxTasks: () => (/* binding */ inboxTasks)
/* harmony export */ });
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");



let inboxTasks = [];

class Task {
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

function addTaskToContainer() {
  // inboxTasks is an array of classes
  // so you want to create the class first, then dynamically create DOM Elements based off of those class values
  // this is to keep track of them 
  const newTask = getTaskFromInput();
  inboxTasks.push(newTask);
  (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

//so here you're creating the new Task with the values from the form
// the class should be created first
function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  return new Task(task, formattedDate);
}

// limit query selectors in here that's important, 
// you should get all the info you need off of taskClass, which has the info query selected already 
// now you just want to create the HTML elements with that CLASS info 
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

  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.editModal.style.display = 'flex';
    // this keeps current value in form, needed for edit 
    document.querySelector('#edit-task').value = taskText.textContent;
  });

  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.myEditForm.addEventListener('submit', (event) => {
    console.log('edit form submitted');
    event.preventDefault();
    taskClass.taskText = document.querySelector('#edit-task').value;
    const date = document.querySelector('#edit-date-modal').value;
    taskClass.taskDate = formatDate(date);
    _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.editModal.style.display = 'none';
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
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.taskListContainer.appendChild(newInboxTask);
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
/* harmony import */ var _handleSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSubmit */ "./src/handleSubmit.js");


const taskListContainer = document.querySelector('#task-list-container');

function updateDisplay() {
  //what does setting = "" do 
  taskListContainer.textContent = '';
  for (const taskClass of _handleSubmit__WEBPACK_IMPORTED_MODULE_0__.inboxTasks) {
    (0,_handleSubmit__WEBPACK_IMPORTED_MODULE_0__.createTaskDiv)(taskClass);
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
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");
/*

the default when opened should show inbox 

when you add a task, you always add it to inbox and check the date to also put it in this week or Today 

when you add a project, you only ask for project name
then you append a button to the left side of the screen with the title of project name that was entered
That button will show an array of tasks when clicked - 

these tasks are not added to inbox tho so keep three diff arrays:
class of tasks in inboxTasks array, 
class of projects in projectsArray (each project has an array of Task Class) which is the:  
class of tasks in projectsTasks array (appending to same HTML element, different array)

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)
you can edit task by reopening a new form but with the saved text in it from its current textContent

everything in sidebar is a button

use dialog for projectmodal display
try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

what do you want to store in localstorage? 
the arrays of inbox tasks, array of projects, and array of tasks in projects, all arrays basically 
localStorage.setItem(key, value);

*/




_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.addTaskBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.taskModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.myForm.addEventListener('submit', (event) => {
  (0,_handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.taskModal.style.display = 'none';
  event.preventDefault();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.myForm.reset();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.closeTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.taskModal.style.display = 'none';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.closeEditTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.editModal.style.display = 'none';
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RxQztBQUM2Qjs7QUFFbEU7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSix3QkFBd0IsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzdDO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBYTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVM7QUFDYjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLG9EQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVM7QUFDYixJQUFJLDBEQUFhO0FBQ2pCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFpQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHNEM7QUFDRztBQUMvQzs7QUFFZTtBQUNmO0FBQ0E7QUFDQSwwQkFBMEIscURBQVU7QUFDcEMsSUFBSSw0REFBYTtBQUNqQjtBQUNBOzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFbUQ7QUFFOEM7O0FBRWpHLG9EQUFVO0FBQ1YsRUFBRSxtREFBUztBQUNYLENBQUM7O0FBRUQsZ0RBQU07QUFDTixFQUFFLDREQUFrQjtBQUNwQixFQUFFLG1EQUFTO0FBQ1g7QUFDQSxFQUFFLGdEQUFNO0FBQ1IsQ0FBQzs7QUFFRCx3REFBYztBQUNkLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVELDREQUFrQjtBQUNsQixFQUFFLG1EQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01TdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91cGRhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWZvcm0nKTtcbmV4cG9ydCBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLW1vZGFsLWJ0bicpO1xuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcbmV4cG9ydCBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4nKTtcbmV4cG9ydCBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IG15RWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZWRpdC1mb3JtJyk7XG5leHBvcnQgY29uc3QgY2xvc2VFZGl0VGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWVkaXQtbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG4iLCJpbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXknO1xuaW1wb3J0IHsgZWRpdE1vZGFsLCBteUVkaXRGb3JtLCB0YXNrTGlzdENvbnRhaW5lciB9IGZyb20gJy4vRE9NU3R1ZmYuanMnO1xuXG5leHBvcnQgbGV0IGluYm94VGFza3MgPSBbXTtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrVGV4dCwgdGFza0R1ZURhdGUpIHtcbiAgICB0aGlzLnRhc2tUZXh0ID0gdGFza1RleHQ7XG4gICAgdGhpcy50YXNrRGF0ZSA9IHRhc2tEdWVEYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBsZXQgZGF5ID0gbmV3RGF0ZS5nZXREYXRlKCkgKyAxO1xuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBpZiAoaXNOYU4obW9udGgpICYmIGlzTmFOKGRheSkgJiYgaXNOYU4oeWVhcikpIHtcbiAgICByZXR1cm4gYE5vIGRhdGVgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgVGFzayBkdWU6ICR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrVG9Db250YWluZXIoKSB7XG4gIC8vIGluYm94VGFza3MgaXMgYW4gYXJyYXkgb2YgY2xhc3Nlc1xuICAvLyBzbyB5b3Ugd2FudCB0byBjcmVhdGUgdGhlIGNsYXNzIGZpcnN0LCB0aGVuIGR5bmFtaWNhbGx5IGNyZWF0ZSBET00gRWxlbWVudHMgYmFzZWQgb2ZmIG9mIHRob3NlIGNsYXNzIHZhbHVlc1xuICAvLyB0aGlzIGlzIHRvIGtlZXAgdHJhY2sgb2YgdGhlbSBcbiAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tGcm9tSW5wdXQoKTtcbiAgaW5ib3hUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICB1cGRhdGVEaXNwbGF5KCk7XG59XG5cbi8vc28gaGVyZSB5b3UncmUgY3JlYXRpbmcgdGhlIG5ldyBUYXNrIHdpdGggdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtXG4vLyB0aGUgY2xhc3Mgc2hvdWxkIGJlIGNyZWF0ZWQgZmlyc3RcbmZ1bmN0aW9uIGdldFRhc2tGcm9tSW5wdXQoKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtbW9kYWwnKS52YWx1ZTtcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gIHJldHVybiBuZXcgVGFzayh0YXNrLCBmb3JtYXR0ZWREYXRlKTtcbn1cblxuLy8gbGltaXQgcXVlcnkgc2VsZWN0b3JzIGluIGhlcmUgdGhhdCdzIGltcG9ydGFudCwgXG4vLyB5b3Ugc2hvdWxkIGdldCBhbGwgdGhlIGluZm8geW91IG5lZWQgb2ZmIG9mIHRhc2tDbGFzcywgd2hpY2ggaGFzIHRoZSBpbmZvIHF1ZXJ5IHNlbGVjdGVkIGFscmVhZHkgXG4vLyBub3cgeW91IGp1c3Qgd2FudCB0byBjcmVhdGUgdGhlIEhUTUwgZWxlbWVudHMgd2l0aCB0aGF0IENMQVNTIGluZm8gXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0Rpdih0YXNrQ2xhc3MpIHtcbiAgY29uc3QgbmV3SW5ib3hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGlmICh0YXNrQ2xhc3MudGFza1RleHQgPT09ICcnKSB7XG4gICAgdGFza1RleHQudGV4dENvbnRlbnQgPSBgRW1wdHkgVGFza2A7XG4gIH0gZWxzZSB7XG4gICAgdGFza1RleHQudGV4dENvbnRlbnQgPSB0YXNrQ2xhc3MudGFza1RleHQ7XG4gIH1cbiAgaWYgKHRhc2tDbGFzcy50YXNrRGF0ZSA9PT0gYE5vIGRhdGVgKSB7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGBObyBkYXRlYDtcbiAgfSBlbHNlIHtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gdGFza0NsYXNzLnRhc2tEYXRlO1xuICB9XG5cbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAvLyB0aGlzIGtlZXBzIGN1cnJlbnQgdmFsdWUgaW4gZm9ybSwgbmVlZGVkIGZvciBlZGl0IFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS52YWx1ZSA9IHRhc2tUZXh0LnRleHRDb250ZW50O1xuICB9KTtcblxuICBteUVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlZGl0IGZvcm0gc3VibWl0dGVkJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrQ2xhc3MudGFza1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRhdGUtbW9kYWwnKS52YWx1ZTtcbiAgICB0YXNrQ2xhc3MudGFza0RhdGUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgfSk7XG5cbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbmJveFRhc2tzLnNwbGljZShpbmJveFRhc2tzLmluZGV4T2YodGFza0NsYXNzKSwgMSk7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xuICB9KTtcblxuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgbmV3SW5ib3hUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG4gIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dCcpO1xuICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG5cbiAgbGVmdC5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gIGxlZnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gIHJpZ2h0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICByaWdodC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICBuZXdJbmJveFRhc2suYXBwZW5kQ2hpbGQobGVmdCk7XG4gIG5ld0luYm94VGFzay5hcHBlbmRDaGlsZChyaWdodCk7XG4gIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0luYm94VGFzayk7XG59XG4iLCJpbXBvcnQgeyBpbmJveFRhc2tzIH0gZnJvbSAnLi9oYW5kbGVTdWJtaXQnO1xuaW1wb3J0IHsgY3JlYXRlVGFza0RpdiB9IGZyb20gJy4vaGFuZGxlU3VibWl0JztcbmNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdC1jb250YWluZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgLy93aGF0IGRvZXMgc2V0dGluZyA9IFwiXCIgZG8gXG4gIHRhc2tMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGZvciAoY29uc3QgdGFza0NsYXNzIG9mIGluYm94VGFza3MpIHtcbiAgICBjcmVhdGVUYXNrRGl2KHRhc2tDbGFzcyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcblxudGhlIGRlZmF1bHQgd2hlbiBvcGVuZWQgc2hvdWxkIHNob3cgaW5ib3ggXG5cbndoZW4geW91IGFkZCBhIHRhc2ssIHlvdSBhbHdheXMgYWRkIGl0IHRvIGluYm94IGFuZCBjaGVjayB0aGUgZGF0ZSB0byBhbHNvIHB1dCBpdCBpbiB0aGlzIHdlZWsgb3IgVG9kYXkgXG5cbndoZW4geW91IGFkZCBhIHByb2plY3QsIHlvdSBvbmx5IGFzayBmb3IgcHJvamVjdCBuYW1lXG50aGVuIHlvdSBhcHBlbmQgYSBidXR0b24gdG8gdGhlIGxlZnQgc2lkZSBvZiB0aGUgc2NyZWVuIHdpdGggdGhlIHRpdGxlIG9mIHByb2plY3QgbmFtZSB0aGF0IHdhcyBlbnRlcmVkXG5UaGF0IGJ1dHRvbiB3aWxsIHNob3cgYW4gYXJyYXkgb2YgdGFza3Mgd2hlbiBjbGlja2VkIC0gXG5cbnRoZXNlIHRhc2tzIGFyZSBub3QgYWRkZWQgdG8gaW5ib3ggdGhvIHNvIGtlZXAgdGhyZWUgZGlmZiBhcnJheXM6XG5jbGFzcyBvZiB0YXNrcyBpbiBpbmJveFRhc2tzIGFycmF5LCBcbmNsYXNzIG9mIHByb2plY3RzIGluIHByb2plY3RzQXJyYXkgKGVhY2ggcHJvamVjdCBoYXMgYW4gYXJyYXkgb2YgVGFzayBDbGFzcykgd2hpY2ggaXMgdGhlOiAgXG5jbGFzcyBvZiB0YXNrcyBpbiBwcm9qZWN0c1Rhc2tzIGFycmF5IChhcHBlbmRpbmcgdG8gc2FtZSBIVE1MIGVsZW1lbnQsIGRpZmZlcmVudCBhcnJheSlcblxueW91IGNhbiBhbHNvIGRlbGV0ZSB0YXNrcyBhbmQgcHJvamVjdHMsIHNpbXBsZSBhcyBkZWxldGluZyBmcm9tIGFycmF5IChjaGVjayBsaWJyYXJ5IGZvciBob3cgdG8gZGVsZXRlKVxueW91IGNhbiBlZGl0IHRhc2sgYnkgcmVvcGVuaW5nIGEgbmV3IGZvcm0gYnV0IHdpdGggdGhlIHNhdmVkIHRleHQgaW4gaXQgZnJvbSBpdHMgY3VycmVudCB0ZXh0Q29udGVudFxuXG5ldmVyeXRoaW5nIGluIHNpZGViYXIgaXMgYSBidXR0b25cblxudXNlIGRpYWxvZyBmb3IgcHJvamVjdG1vZGFsIGRpc3BsYXlcbnRyeSBhZGRpbmcgYW4gb3ZlcmxheVxuXG5ob3cgdG8gcmVtb3ZlIHByb2plY3RzPyBpZGVhbGx5IGEgYnV0dG9uIHRoYXQgc2hvd3MgdXAgb24gaG92ZXIsIHlvdSBjYW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBvbmUgIFxuXG53aGF0IGRvIHlvdSB3YW50IHRvIHN0b3JlIGluIGxvY2Fsc3RvcmFnZT8gXG50aGUgYXJyYXlzIG9mIGluYm94IHRhc2tzLCBhcnJheSBvZiBwcm9qZWN0cywgYW5kIGFycmF5IG9mIHRhc2tzIGluIHByb2plY3RzLCBhbGwgYXJyYXlzIGJhc2ljYWxseSBcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXG4qL1xuXG5pbXBvcnQgYWRkVGFza1RvQ29udGFpbmVyIGZyb20gJy4vaGFuZGxlU3VibWl0LmpzJztcbmltcG9ydCB7YWRkVGFza0J0biwgY2xvc2VUYXNrTW9kYWwsIG15Rm9ybSwgdGFza01vZGFsLCBlZGl0QnRuLCBcbiAgZWRpdE1vZGFsLCBteUVkaXRGb3JtLCBjbG9zZUVkaXRUYXNrTW9kYWwsIGRlbGV0ZUJ0biwgdGFza0xpc3RDb250YWluZXIgfSBmcm9tICcuL0RPTVN0dWZmLmpzJztcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59KTtcblxubXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBhZGRUYXNrVG9Db250YWluZXIoKTtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIG15Rm9ybS5yZXNldCgpO1xufSk7XG5cbmNsb3NlVGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5jbG9zZUVkaXRUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==