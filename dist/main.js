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
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   projectArray: () => (/* binding */ projectArray),
/* harmony export */   turnOffProject: () => (/* binding */ turnOffProject)
/* harmony export */ });
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


const projectListContainer = document.querySelector('#project-list-container');
const sidebar = document.querySelector('#sidebar');
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#this-week');
let projectArray = [];

class Project {
  constructor(projectName, isClicked = false) {
    this.name = projectName;
    this.clicked = isClicked;
    this.tasks = [];
  }
}

function turnOffProject() {
  for (const project of projectArray) {
    if (project.clicked) {
      project.clicked = false;
    }
  }
}

function init() {
  const inboxProject = new Project('Inbox', true);
  const todayProject = new Project('Today', false);
  const thisWeekProject = new Project('This week', false);
  projectArray.push(inboxProject, todayProject, thisWeekProject);
  inbox.addEventListener('click', () => {
    turnOffProject();
    inbox.clicked = true;
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}

function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name');
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName, false);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    turnOffProject();
    newProject.clicked = true;
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  //const newTask = getTaskFromInput();
  //newProject.tasks.push(newTask);
  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
}


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   createTaskDivs: () => (/* binding */ createTaskDivs),
/* harmony export */   getTaskFromInput: () => (/* binding */ getTaskFromInput)
/* harmony export */ });
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");



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

function getTaskFromInput() {
  const task = document.querySelector('#task').value;
  const date = document.querySelector('#date-modal').value;
  const formattedDate = formatDate(date);
  return new Task(task, formattedDate);
}

// limit query selectors in here that's important
// you should get all the info you need off of your class which has the info query selected from the form already
// now you just want to dynamically create the HTML elements with that CLASS info
//you want to create a task array not just one task

function createTaskDivs(taskList) {
  for (const task in taskList) {
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
      (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.splice(taskList.indexOf(task), 1);
      (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


const taskListContainer = document.querySelector('#task-list-container');

function updateDisplay() {
  // what does setting = "" do
  // have a feeling it clears the display
  taskListContainer.textContent = '';
  for (const project of _Project__WEBPACK_IMPORTED_MODULE_0__.projectArray) {
    if (project.clicked) {
      (0,_Task__WEBPACK_IMPORTED_MODULE_1__.createTaskDivs)(project.tasks);
    }
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
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");
/* harmony import */ var _updateDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateDisplay.js */ "./src/updateDisplay.js");
/*
the default when opened should show inbox 

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)

// so you want to create the class first, then dynamically create DOM Elements based off of those class values

use dialog for projectmodal display, try adding an overlay

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

localStorage.setItem(key, value);

*/






(0,_Project_js__WEBPACK_IMPORTED_MODULE_0__.init)();

/* Task event listeners */
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.addTaskBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.taskModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.myForm.addEventListener('submit', (event) => {
  const newTask = getTaskFromInput();
  for (const project of _Project_js__WEBPACK_IMPORTED_MODULE_0__.projectArray) {
    if (project.clicked) {
      project.tasks.push(newTask);
    }
  }
  (0,_updateDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

/* Project event listeners */

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.addProjectButton.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.projectModal.showModal();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.submitProjectBtn.addEventListener('click', () => {
  (0,_Project_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToContainer)();
  // just make a form so you can call .reset here
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.closeProjectModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_1__.projectModal.close();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQztBQUNGO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQixHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDRDO0FBQzZCOztBQUVsRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHdCQUF3QixNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDN0M7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxtREFBUztBQUNmO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksb0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBUztBQUNmLE1BQU0sMERBQWE7QUFDbkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWlCO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZ5QztBQUNEO0FBQ3hDOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFZO0FBQ3BDO0FBQ0EsTUFBTSxxREFBYztBQUNwQjtBQUNBO0FBQ0E7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ2tEO0FBQ0c7QUFnQjlCO0FBQ3dCOzs7QUFHL0MsaURBQUk7O0FBRUo7QUFDQSxvREFBVTtBQUNWLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVELGdEQUFNO0FBQ047QUFDQSx3QkFBd0IscURBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFhO0FBQ2YsRUFBRSxtREFBUztBQUNYO0FBQ0EsRUFBRSxnREFBTTtBQUNSLENBQUM7O0FBRUQsd0RBQWM7QUFDZCxFQUFFLG1EQUFTO0FBQ1gsQ0FBQzs7QUFFRCw0REFBa0I7QUFDbEIsRUFBRSxtREFBUztBQUNYLENBQUM7O0FBRUQ7O0FBRUEsMERBQWdCO0FBQ2hCLEVBQUUsc0RBQVk7QUFDZCxDQUFDOztBQUVELDBEQUFnQjtBQUNoQixFQUFFLGtFQUFxQjtBQUN2QjtBQUNBLENBQUM7O0FBRUQsMkRBQWlCO0FBQ2pCLEVBQUUsc0RBQVk7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTVN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91cGRhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWZvcm0nKTtcbmV4cG9ydCBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLW1vZGFsLWJ0bicpO1xuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcbmV4cG9ydCBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4nKTtcbmV4cG9ydCBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IG15RWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZWRpdC1mb3JtJyk7XG5leHBvcnQgY29uc3QgY2xvc2VFZGl0VGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWVkaXQtbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ1dHRvbicpXG5leHBvcnQgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwnKVxuZXhwb3J0IGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QtbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtcHJvamVjdC1idG4nKTsiLCJpbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXknO1xuaW1wb3J0IHsgZ2V0VGFza0Zyb21JbnB1dCB9IGZyb20gJy4vVGFzayc7XG5jb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbmNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94Jyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcy13ZWVrJyk7XG5leHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBpc0NsaWNrZWQgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHRoaXMuY2xpY2tlZCA9IGlzQ2xpY2tlZDtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR1cm5PZmZQcm9qZWN0KCkge1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdEFycmF5KSB7XG4gICAgaWYgKHByb2plY3QuY2xpY2tlZCkge1xuICAgICAgcHJvamVjdC5jbGlja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBpbmJveFByb2plY3QgPSBuZXcgUHJvamVjdCgnSW5ib3gnLCB0cnVlKTtcbiAgY29uc3QgdG9kYXlQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RvZGF5JywgZmFsc2UpO1xuICBjb25zdCB0aGlzV2Vla1Byb2plY3QgPSBuZXcgUHJvamVjdCgnVGhpcyB3ZWVrJywgZmFsc2UpO1xuICBwcm9qZWN0QXJyYXkucHVzaChpbmJveFByb2plY3QsIHRvZGF5UHJvamVjdCwgdGhpc1dlZWtQcm9qZWN0KTtcbiAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdHVybk9mZlByb2plY3QoKTtcbiAgICBpbmJveC5jbGlja2VkID0gdHJ1ZTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvQ29udGFpbmVyKCkge1xuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUsIGZhbHNlKTtcbiAgbmV3UHJvamVjdERpdi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lO1xuICBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHR1cm5PZmZQcm9qZWN0KCk7XG4gICAgbmV3UHJvamVjdC5jbGlja2VkID0gdHJ1ZTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xuICAvL2NvbnN0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gIC8vbmV3UHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG59XG4iLCJpbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXknO1xuaW1wb3J0IHsgZWRpdE1vZGFsLCBteUVkaXRGb3JtLCB0YXNrTGlzdENvbnRhaW5lciB9IGZyb20gJy4vRE9NU3R1ZmYuanMnO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRhc2tUZXh0LCB0YXNrRHVlRGF0ZSkge1xuICAgIHRoaXMudGFza1RleHQgPSB0YXNrVGV4dDtcbiAgICB0aGlzLnRhc2tEYXRlID0gdGFza0R1ZURhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGxldCBkYXkgPSBuZXdEYXRlLmdldERhdGUoKSArIDE7XG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGlmIChpc05hTihtb250aCkgJiYgaXNOYU4oZGF5KSAmJiBpc05hTih5ZWFyKSkge1xuICAgIHJldHVybiBgTm8gZGF0ZWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBUYXNrIGR1ZTogJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRnJvbUlucHV0KCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLW1vZGFsJykudmFsdWU7XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICByZXR1cm4gbmV3IFRhc2sodGFzaywgZm9ybWF0dGVkRGF0ZSk7XG59XG5cbi8vIGxpbWl0IHF1ZXJ5IHNlbGVjdG9ycyBpbiBoZXJlIHRoYXQncyBpbXBvcnRhbnRcbi8vIHlvdSBzaG91bGQgZ2V0IGFsbCB0aGUgaW5mbyB5b3UgbmVlZCBvZmYgb2YgeW91ciBjbGFzcyB3aGljaCBoYXMgdGhlIGluZm8gcXVlcnkgc2VsZWN0ZWQgZnJvbSB0aGUgZm9ybSBhbHJlYWR5XG4vLyBub3cgeW91IGp1c3Qgd2FudCB0byBkeW5hbWljYWxseSBjcmVhdGUgdGhlIEhUTUwgZWxlbWVudHMgd2l0aCB0aGF0IENMQVNTIGluZm9cbi8veW91IHdhbnQgdG8gY3JlYXRlIGEgdGFzayBhcnJheSBub3QganVzdCBvbmUgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0RpdnModGFza0xpc3QpIHtcbiAgZm9yIChjb25zdCB0YXNrIGluIHRhc2tMaXN0KSB7XG4gICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGlmICh0YXNrLnRhc2tUZXh0ID09PSAnJykge1xuICAgICAgbmV3VGFza1RleHQudGV4dENvbnRlbnQgPSBgRW1wdHkgVGFza2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Rhc2tUZXh0LnRleHRDb250ZW50ID0gdGFzay50YXNrVGV4dDtcbiAgICB9XG4gICAgaWYgKHRhc2sudGFza0RhdGUgPT09IGBObyBkYXRlYCkge1xuICAgICAgbmV3RGF0ZURpdi50ZXh0Q29udGVudCA9IGBObyBkYXRlYDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3RGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGFza0RhdGU7XG4gICAgfVxuXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAvLyB0aGlzIGtlZXBzIGN1cnJlbnQgdmFsdWUgaW4gZm9ybSwgbmVlZGVkIGZvciBlZGl0XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykudmFsdWUgPSBuZXdUYXNrVGV4dC50ZXh0Q29udGVudDtcbiAgICB9KTtcblxuICAgIG15RWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZWRpdCBmb3JtIHN1Ym1pdHRlZCcpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRhc2sudGFza1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykudmFsdWU7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZS1tb2RhbCcpLnZhbHVlO1xuICAgICAgdGFzay50YXNrRGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICBuZXdUYXNrVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRleHQnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXG4gICAgbGVmdC5hcHBlbmRDaGlsZChuZXdUYXNrVGV4dCk7XG4gICAgbGVmdC5hcHBlbmRDaGlsZChuZXdEYXRlRGl2KTtcbiAgICByaWdodC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICByaWdodC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrRGl2cyB9IGZyb20gJy4vVGFzayc7XG5jb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIC8vIHdoYXQgZG9lcyBzZXR0aW5nID0gXCJcIiBkb1xuICAvLyBoYXZlIGEgZmVlbGluZyBpdCBjbGVhcnMgdGhlIGRpc3BsYXlcbiAgdGFza0xpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RBcnJheSkge1xuICAgIGlmIChwcm9qZWN0LmNsaWNrZWQpIHtcbiAgICAgIGNyZWF0ZVRhc2tEaXZzKHByb2plY3QudGFza3MpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxudGhlIGRlZmF1bHQgd2hlbiBvcGVuZWQgc2hvdWxkIHNob3cgaW5ib3ggXG5cbnlvdSBjYW4gYWxzbyBkZWxldGUgdGFza3MgYW5kIHByb2plY3RzLCBzaW1wbGUgYXMgZGVsZXRpbmcgZnJvbSBhcnJheSAoY2hlY2sgbGlicmFyeSBmb3IgaG93IHRvIGRlbGV0ZSlcblxuLy8gc28geW91IHdhbnQgdG8gY3JlYXRlIHRoZSBjbGFzcyBmaXJzdCwgdGhlbiBkeW5hbWljYWxseSBjcmVhdGUgRE9NIEVsZW1lbnRzIGJhc2VkIG9mZiBvZiB0aG9zZSBjbGFzcyB2YWx1ZXNcblxudXNlIGRpYWxvZyBmb3IgcHJvamVjdG1vZGFsIGRpc3BsYXksIHRyeSBhZGRpbmcgYW4gb3ZlcmxheVxuXG5ob3cgdG8gcmVtb3ZlIHByb2plY3RzPyBpZGVhbGx5IGEgYnV0dG9uIHRoYXQgc2hvd3MgdXAgb24gaG92ZXIsIHlvdSBjYW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBvbmUgIFxuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcblxuKi9cbmltcG9ydCB7IGluaXQsIHByb2plY3RBcnJheSB9IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9Db250YWluZXIgfSBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IHtcbiAgYWRkVGFza0J0bixcbiAgY2xvc2VUYXNrTW9kYWwsXG4gIG15Rm9ybSxcbiAgdGFza01vZGFsLFxuICBlZGl0QnRuLFxuICBlZGl0TW9kYWwsXG4gIG15RWRpdEZvcm0sXG4gIGNsb3NlRWRpdFRhc2tNb2RhbCxcbiAgYWRkUHJvamVjdEJ1dHRvbixcbiAgcHJvamVjdE1vZGFsLFxuICBkZWxldGVCdG4sXG4gIHRhc2tMaXN0Q29udGFpbmVyLFxuICBzdWJtaXRQcm9qZWN0QnRuLFxuICBjbG9zZVByb2plY3RNb2RhbCxcbn0gZnJvbSAnLi9ET01TdHVmZi5qcyc7XG5pbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXkuanMnO1xuXG5cbmluaXQoKTtcblxuLyogVGFzayBldmVudCBsaXN0ZW5lcnMgKi9cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufSk7XG5cbm15Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tGcm9tSW5wdXQoKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RBcnJheSkge1xuICAgIGlmIChwcm9qZWN0LmNsaWNrZWQpIHtcbiAgICAgIHByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlRGlzcGxheSgpO1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbXlGb3JtLnJlc2V0KCk7XG59KTtcblxuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmNsb3NlRWRpdFRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuLyogUHJvamVjdCBldmVudCBsaXN0ZW5lcnMgKi9cblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5cbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFkZFByb2plY3RUb0NvbnRhaW5lcigpO1xuICAvLyBqdXN0IG1ha2UgYSBmb3JtIHNvIHlvdSBjYW4gY2FsbCAucmVzZXQgaGVyZVxufSk7XG5cbmNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0TW9kYWwuY2xvc2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9