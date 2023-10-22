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
/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton),
/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn),
/* harmony export */   closeEditTaskModal: () => (/* binding */ closeEditTaskModal),
/* harmony export */   closeProjectModal: () => (/* binding */ closeProjectModal),
/* harmony export */   closeTaskModal: () => (/* binding */ closeTaskModal),
/* harmony export */   deleteBtn: () => (/* binding */ deleteBtn),
/* harmony export */   editBtn: () => (/* binding */ editBtn),
/* harmony export */   editModal: () => (/* binding */ editModal),
/* harmony export */   myEditForm: () => (/* binding */ myEditForm),
/* harmony export */   myForm: () => (/* binding */ myForm),
/* harmony export */   projectModal: () => (/* binding */ projectModal),
/* harmony export */   submitProjectBtn: () => (/* binding */ submitProjectBtn),
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
const addProjectButton = document.querySelector('#project-button')
const projectModal = document.querySelector('#project-modal')
const closeProjectModal = document.querySelector('#close-project-modal-btn');
const submitProjectBtn = document.querySelector('#submit-project-btn');

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   addProjectToContainer: () => (/* binding */ addProjectToContainer),
/* harmony export */   projectArray: () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


const projectListContainer = document.querySelector('#project-list-container');
let projectArray = [];

// wait... every section is a project, even Inbox
// just this.tasks and projectArray

class Project {
  constructor(projectName) {
    this.name = projectName;
    this.tasks = [];
  }
}

function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name');
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(newProject.tasks);
  });

  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
  const newTask = (0,_Task__WEBPACK_IMPORTED_MODULE_1__.getTaskFromInput)();
  newProject.tasks.push(newTask);
  (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(newProject.tasks);
}

console.log(
  'Project Input (checking if i need a form to receive input, form might just be for form validation and submitting data to server): ' +
    newProjectName
);


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   createTaskDiv: () => (/* binding */ createTaskDiv),
/* harmony export */   "default": () => (/* binding */ addTaskToProject),
/* harmony export */   getTaskFromInput: () => (/* binding */ getTaskFromInput)
/* harmony export */ });
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");


  // so you want to create the class first, then dynamically create DOM Elements based off of those class values

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

// this is the first thing that is called when the form is submitted
function addTaskToProject() {

  const newTask = getTaskFromInput();
  tasks.push(newTask);
  (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
}

// so here you're creating the new Task with the values from the form
// the class should be created first
function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  return new Task(task, formattedDate);
}

// limit query selectors in here that's important
// you should get all the info you need off of your class which has the info query selected already
// now you just want to create the HTML elements with that CLASS info
function createTaskDiv(task) {
  const newTaskDiv = document.createElement('div');
  const left = document.createElement('div');
  const newTaskText = document.createElement('div');
  const newDateDiv = document.createElement('div');
  const right = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

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
    _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.editModal.style.display = 'flex';
    // this keeps current value in form, needed for edit
    document.querySelector('#edit-task').value = newTaskText.textContent;
  });

  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.myEditForm.addEventListener('submit', (event) => {
    console.log('edit form submitted');
    event.preventDefault();
    task.taskText = document.querySelector('#edit-task').value;
    const date = document.querySelector('#edit-date-modal').value;
    task.taskDate = formatDate(date);
    _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.editModal.style.display = 'none';
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
  });

  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    task.splice(task.indexOf(task), 1);
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
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
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.taskListContainer.appendChild(newTaskDiv);
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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");

const taskListContainer = document.querySelector('#task-list-container');

function updateDisplay(projectTaskArray) {
  // what does setting = "" do
  // have a feeling it clears the display 
  taskListContainer.textContent = '';
  for (const task of projectTaskArray) {
    (0,_Task__WEBPACK_IMPORTED_MODULE_0__.createTaskDiv)(task);
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
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");
/*
the default when opened should show inbox 

when you add a task, you always add it to inbox and check the date to also put it in this week or Today 

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)
you can edit task by reopening a new form but with the saved text in it from its current textContent

use dialog for projectmodal display, try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

localStorage.setItem(key, value);

*/






/* Task event listeners */ 
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.taskModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.myForm.addEventListener('submit', (event) => {
  (0,_Task_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.taskModal.style.display = 'none';
  event.preventDefault();
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.myForm.reset();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.closeTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.taskModal.style.display = 'none';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.closeEditTaskModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.editModal.style.display = 'none';
});




/* Project event listeners */

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.addProjectButton.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.showModal();
})

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.submitProjectBtn.addEventListener('click', () => {
  ;(0,_Project_js__WEBPACK_IMPORTED_MODULE_1__.addProjectToContainer)();
})

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.closeProjectModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.close();
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNicUM7QUFDRjtBQUMxQztBQUNPOztBQUVQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFnQjtBQUNsQztBQUNBLEVBQUUsMERBQWE7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQzRDO0FBQzZCO0FBQ3pFOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osd0JBQXdCLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSztBQUM3QztBQUNBOztBQUVBO0FBQ2U7O0FBRWY7QUFDQTtBQUNBLEVBQUUsMERBQWE7QUFDZjs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFTO0FBQ2I7QUFDQTtBQUNBLEdBQUc7O0FBRUgsRUFBRSxvREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFTO0FBQ2IsSUFBSSwwREFBYTtBQUNqQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBaUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR3VDO0FBQ3ZDOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCO0FBQ0E7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRXlDO0FBQ1k7QUFDK0s7OztBQUdwTztBQUNBLG9EQUFVO0FBQ1YsRUFBRSxtREFBUztBQUNYLENBQUM7O0FBRUQsZ0RBQU07QUFDTixFQUFFLG9EQUFnQjtBQUNsQixFQUFFLG1EQUFTO0FBQ1g7QUFDQSxFQUFFLGdEQUFNO0FBQ1IsQ0FBQzs7QUFFRCx3REFBYztBQUNkLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVELDREQUFrQjtBQUNsQixFQUFFLG1EQUFTO0FBQ1gsQ0FBQzs7Ozs7QUFLRDs7QUFFQSwwREFBZ0I7QUFDaEIsRUFBRSxzREFBWTtBQUNkLENBQUM7O0FBRUQsMERBQWdCO0FBQ2hCLEVBQUUsbUVBQXFCO0FBQ3ZCLENBQUM7O0FBRUQsMkRBQWlCO0FBQ2pCLEVBQUUsc0RBQVk7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTVN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91cGRhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWZvcm0nKTtcbmV4cG9ydCBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLW1vZGFsLWJ0bicpO1xuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcbmV4cG9ydCBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4nKTtcbmV4cG9ydCBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IG15RWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZWRpdC1mb3JtJyk7XG5leHBvcnQgY29uc3QgY2xvc2VFZGl0VGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWVkaXQtbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ1dHRvbicpXG5leHBvcnQgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwnKVxuZXhwb3J0IGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QtbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtcHJvamVjdC1idG4nKTsiLCJpbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXknO1xuaW1wb3J0IHsgZ2V0VGFza0Zyb21JbnB1dCB9IGZyb20gJy4vVGFzayc7XG5jb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG5leHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4vLyB3YWl0Li4uIGV2ZXJ5IHNlY3Rpb24gaXMgYSBwcm9qZWN0LCBldmVuIEluYm94XG4vLyBqdXN0IHRoaXMudGFza3MgYW5kIHByb2plY3RBcnJheVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9Db250YWluZXIoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG4gIG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0TmFtZTtcbiAgbmV3UHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVEaXNwbGF5KG5ld1Byb2plY3QudGFza3MpO1xuICB9KTtcblxuICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4gIGNvbnN0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gIG5ld1Byb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgdXBkYXRlRGlzcGxheShuZXdQcm9qZWN0LnRhc2tzKTtcbn1cblxuY29uc29sZS5sb2coXG4gICdQcm9qZWN0IElucHV0IChjaGVja2luZyBpZiBpIG5lZWQgYSBmb3JtIHRvIHJlY2VpdmUgaW5wdXQsIGZvcm0gbWlnaHQganVzdCBiZSBmb3IgZm9ybSB2YWxpZGF0aW9uIGFuZCBzdWJtaXR0aW5nIGRhdGEgdG8gc2VydmVyKTogJyArXG4gICAgbmV3UHJvamVjdE5hbWVcbik7XG4iLCJpbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXknO1xuaW1wb3J0IHsgZWRpdE1vZGFsLCBteUVkaXRGb3JtLCB0YXNrTGlzdENvbnRhaW5lciB9IGZyb20gJy4vRE9NU3R1ZmYuanMnO1xuICAvLyBzbyB5b3Ugd2FudCB0byBjcmVhdGUgdGhlIGNsYXNzIGZpcnN0LCB0aGVuIGR5bmFtaWNhbGx5IGNyZWF0ZSBET00gRWxlbWVudHMgYmFzZWQgb2ZmIG9mIHRob3NlIGNsYXNzIHZhbHVlc1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRhc2tUZXh0LCB0YXNrRHVlRGF0ZSkge1xuICAgIHRoaXMudGFza1RleHQgPSB0YXNrVGV4dDtcbiAgICB0aGlzLnRhc2tEYXRlID0gdGFza0R1ZURhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGxldCBkYXkgPSBuZXdEYXRlLmdldERhdGUoKSArIDE7XG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGlmIChpc05hTihtb250aCkgJiYgaXNOYU4oZGF5KSAmJiBpc05hTih5ZWFyKSkge1xuICAgIHJldHVybiBgTm8gZGF0ZWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBUYXNrIGR1ZTogJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICB9XG59XG5cbi8vIHRoaXMgaXMgdGhlIGZpcnN0IHRoaW5nIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KCkge1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gIHVwZGF0ZURpc3BsYXkodGFza3MpO1xufVxuXG4vLyBzbyBoZXJlIHlvdSdyZSBjcmVhdGluZyB0aGUgbmV3IFRhc2sgd2l0aCB0aGUgdmFsdWVzIGZyb20gdGhlIGZvcm1cbi8vIHRoZSBjbGFzcyBzaG91bGQgYmUgY3JlYXRlZCBmaXJzdFxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tGcm9tSW5wdXQoKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtbW9kYWwnKS52YWx1ZTtcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gIHJldHVybiBuZXcgVGFzayh0YXNrLCBmb3JtYXR0ZWREYXRlKTtcbn1cblxuLy8gbGltaXQgcXVlcnkgc2VsZWN0b3JzIGluIGhlcmUgdGhhdCdzIGltcG9ydGFudFxuLy8geW91IHNob3VsZCBnZXQgYWxsIHRoZSBpbmZvIHlvdSBuZWVkIG9mZiBvZiB5b3VyIGNsYXNzIHdoaWNoIGhhcyB0aGUgaW5mbyBxdWVyeSBzZWxlY3RlZCBhbHJlYWR5XG4vLyBub3cgeW91IGp1c3Qgd2FudCB0byBjcmVhdGUgdGhlIEhUTUwgZWxlbWVudHMgd2l0aCB0aGF0IENMQVNTIGluZm9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2spIHtcbiAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld1Rhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5ld0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBpZiAodGFzay50YXNrVGV4dCA9PT0gJycpIHtcbiAgICBuZXdUYXNrVGV4dC50ZXh0Q29udGVudCA9IGBFbXB0eSBUYXNrYDtcbiAgfSBlbHNlIHtcbiAgICBuZXdUYXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2sudGFza1RleHQ7XG4gIH1cbiAgaWYgKHRhc2sudGFza0RhdGUgPT09IGBObyBkYXRlYCkge1xuICAgIG5ld0RhdGVEaXYudGV4dENvbnRlbnQgPSBgTm8gZGF0ZWA7XG4gIH0gZWxzZSB7XG4gICAgbmV3RGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGFza0RhdGU7XG4gIH1cblxuICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIC8vIHRoaXMga2VlcHMgY3VycmVudCB2YWx1ZSBpbiBmb3JtLCBuZWVkZWQgZm9yIGVkaXRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykudmFsdWUgPSBuZXdUYXNrVGV4dC50ZXh0Q29udGVudDtcbiAgfSk7XG5cbiAgbXlFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZWRpdCBmb3JtIHN1Ym1pdHRlZCcpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFzay50YXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZS1tb2RhbCcpLnZhbHVlO1xuICAgIHRhc2sudGFza0RhdGUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHVwZGF0ZURpc3BsYXkodGFzayk7XG4gIH0pO1xuXG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFzay5zcGxpY2UodGFzay5pbmRleE9mKHRhc2spLCAxKTtcbiAgICB1cGRhdGVEaXNwbGF5KHRhc2spO1xuICB9KTtcblxuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICBuZXdUYXNrVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRleHQnKTtcbiAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXG4gIGxlZnQuYXBwZW5kQ2hpbGQobmV3VGFza1RleHQpO1xuICBsZWZ0LmFwcGVuZENoaWxkKG5ld0RhdGVEaXYpO1xuICByaWdodC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChyaWdodCk7XG4gIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza0RpdiB9IGZyb20gJy4vVGFzayc7XG5jb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkocHJvamVjdFRhc2tBcnJheSkge1xuICAvLyB3aGF0IGRvZXMgc2V0dGluZyA9IFwiXCIgZG9cbiAgLy8gaGF2ZSBhIGZlZWxpbmcgaXQgY2xlYXJzIHRoZSBkaXNwbGF5IFxuICB0YXNrTGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdFRhc2tBcnJheSkge1xuICAgIGNyZWF0ZVRhc2tEaXYodGFzayk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbnRoZSBkZWZhdWx0IHdoZW4gb3BlbmVkIHNob3VsZCBzaG93IGluYm94IFxuXG53aGVuIHlvdSBhZGQgYSB0YXNrLCB5b3UgYWx3YXlzIGFkZCBpdCB0byBpbmJveCBhbmQgY2hlY2sgdGhlIGRhdGUgdG8gYWxzbyBwdXQgaXQgaW4gdGhpcyB3ZWVrIG9yIFRvZGF5IFxuXG55b3UgY2FuIGFsc28gZGVsZXRlIHRhc2tzIGFuZCBwcm9qZWN0cywgc2ltcGxlIGFzIGRlbGV0aW5nIGZyb20gYXJyYXkgKGNoZWNrIGxpYnJhcnkgZm9yIGhvdyB0byBkZWxldGUpXG55b3UgY2FuIGVkaXQgdGFzayBieSByZW9wZW5pbmcgYSBuZXcgZm9ybSBidXQgd2l0aCB0aGUgc2F2ZWQgdGV4dCBpbiBpdCBmcm9tIGl0cyBjdXJyZW50IHRleHRDb250ZW50XG5cbnVzZSBkaWFsb2cgZm9yIHByb2plY3Rtb2RhbCBkaXNwbGF5LCB0cnkgYWRkaW5nIGFuIG92ZXJsYXlcblxuaG93IHRvIHJlbW92ZSBwcm9qZWN0cz8gaWRlYWxseSBhIGJ1dHRvbiB0aGF0IHNob3dzIHVwIG9uIGhvdmVyLCB5b3UgY2FuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgb25lICBcblxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG5cbiovXG5cbmltcG9ydCBhZGRUYXNrVG9Qcm9qZWN0IGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9Db250YWluZXIgfSBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IHthZGRUYXNrQnRuLCBjbG9zZVRhc2tNb2RhbCwgbXlGb3JtLCB0YXNrTW9kYWwsIGVkaXRCdG4sIGVkaXRNb2RhbCwgbXlFZGl0Rm9ybSwgY2xvc2VFZGl0VGFza01vZGFsLCBhZGRQcm9qZWN0QnV0dG9uLCBwcm9qZWN0TW9kYWwsIGRlbGV0ZUJ0biwgdGFza0xpc3RDb250YWluZXIsIHN1Ym1pdFByb2plY3RCdG4sIGNsb3NlUHJvamVjdE1vZGFsIH0gZnJvbSAnLi9ET01TdHVmZi5qcyc7XG5cblxuLyogVGFzayBldmVudCBsaXN0ZW5lcnMgKi8gXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5teUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGFkZFRhc2tUb1Byb2plY3QoKTtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIG15Rm9ybS5yZXNldCgpO1xufSk7XG5cbmNsb3NlVGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5jbG9zZUVkaXRUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cblxuXG5cbi8qIFByb2plY3QgZXZlbnQgbGlzdGVuZXJzICovXG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbn0pXG5cbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFkZFByb2plY3RUb0NvbnRhaW5lcigpO1xufSlcblxuY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHByb2plY3RNb2RhbC5jbG9zZSgpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==