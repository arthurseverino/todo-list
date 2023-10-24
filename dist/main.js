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
/* harmony export */   inbox: () => (/* binding */ inbox),
/* harmony export */   myEditForm: () => (/* binding */ myEditForm),
/* harmony export */   myForm: () => (/* binding */ myForm),
/* harmony export */   projectModal: () => (/* binding */ projectModal),
/* harmony export */   submitProjectBtn: () => (/* binding */ submitProjectBtn),
/* harmony export */   taskListContainer: () => (/* binding */ taskListContainer),
/* harmony export */   taskModal: () => (/* binding */ taskModal),
/* harmony export */   thisWeek: () => (/* binding */ thisWeek),
/* harmony export */   today: () => (/* binding */ today)
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
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#this-week');


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
/* harmony export */   projectArray: () => (/* binding */ projectArray),
/* harmony export */   turnOffProject: () => (/* binding */ turnOffProject)
/* harmony export */ });
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");


const projectListContainer = document.querySelector('#project-list-container');
let taskContainerHeading = document.querySelector('#task-container-heading');
let projectArray = [];

class Project {
  constructor(projectName, isClicked) {
    this.name = projectName;
    this.clicked = isClicked;
    this.tasks = [];
    this.deleted = false;
  }
  display() {
    turnOffProject();
    this.clicked = true;
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
    taskContainerHeading.textContent = this.name;
  }
}

function addProjectToContainer() {
  const newProjectName = document.querySelector('#project-name').value;
  const newProjectDiv = document.createElement('div');
  const newProjectNameDiv = document.createElement('div');
  const deleteProjectBtn = document.createElement('button');

  const newProject = new Project(newProjectName, false);
  newProjectNameDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    newProject.display();
  });

  deleteProjectBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    newProject.deleted = true;
    newProject.clicked = false;
    for (const project of projectArray) {
      if (project.deleted) {
        projectArray.splice(projectArray.indexOf(project), 1);
        projectListContainer.removeChild(newProjectDiv);
        ___WEBPACK_IMPORTED_MODULE_1__.inboxProject.display();
      }
    }
  });

  deleteProjectBtn.textContent = 'Delete';
  newProjectDiv.classList.add('new-project-div');
  newProjectNameDiv.classList.add('new-project-name-div');
  deleteProjectBtn.classList.add('delete-project-btn');

  newProjectDiv.appendChild(newProjectNameDiv);
  newProjectDiv.appendChild(deleteProjectBtn);
  projectListContainer.appendChild(newProjectDiv);
  projectArray.push(newProject);
}

function turnOffProject() {
  for (const project of projectArray) {
    if (project.clicked) {
      project.clicked = false;
    }
  }
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




class Task {
  constructor(taskText, taskDueDate) {
    this.taskText = taskText;
    this.taskDate = taskDueDate;
  }
}

function formatDate(date) {
  let newDate = new Date(date);
  let currentDay = new Date().getDate();
  let day = newDate.getDate() + 1;
  if (day === currentDay) {
    ___WEBPACK_IMPORTED_MODULE_2__.todayProject.clicked = true;
    ___WEBPACK_IMPORTED_MODULE_2__.thisWeekProject.clicked = true;
  }
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
// you want to create a task array not just one task

function createTaskDivs(taskList) {
  for (const task of taskList) {
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inboxProject: () => (/* binding */ inboxProject),
/* harmony export */   thisWeekProject: () => (/* binding */ thisWeekProject),
/* harmony export */   todayProject: () => (/* binding */ todayProject)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMStuff.js */ "./src/DOMStuff.js");
/* harmony import */ var _updateDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateDisplay.js */ "./src/updateDisplay.js");
/*
use dialog for projectmodal display, try adding an overlay for taskmodal
add real dummy nodes 
localStorage.setItem(key, value);

*/







// init();
const inboxProject = new _Project_js__WEBPACK_IMPORTED_MODULE_0__.Project('Inbox', true);
const todayProject = new _Project_js__WEBPACK_IMPORTED_MODULE_0__.Project('Today', false);
const thisWeekProject = new _Project_js__WEBPACK_IMPORTED_MODULE_0__.Project('This week', false);
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.inbox.addEventListener('click', () => {
  inboxProject.display();
});
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.today.addEventListener('click', () => {
  todayProject.display();
});
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.thisWeek.addEventListener('click', () => {
  thisWeekProject.display();
});
_Project_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.push(inboxProject, todayProject, thisWeekProject);

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.taskModal.style.display = 'flex';
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.myForm.addEventListener('submit', (event) => {
  const newTask = (0,_Task_js__WEBPACK_IMPORTED_MODULE_1__.getTaskFromInput)();
  for (const project of _Project_js__WEBPACK_IMPORTED_MODULE_0__.projectArray) {
    if (project.clicked) {
      project.tasks.push(newTask);
    }
  }

  todayProject.clicked = false;
  thisWeekProject.clicked = false;
  (0,_updateDisplay_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

// no need for prevent default without a form
// but use a form so you can call .reset here
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.addProjectButton.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.showModal();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.submitProjectBtn.addEventListener('click', () => {
  (0,_Project_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToContainer)();
  document.querySelector('#project-name').value = '';
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.close();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.closeProjectModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.close();
  document.querySelector('#project-name').value = '';
});


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
    if (project.clicked && project.name !== "Today" && project.name !== "This week") {
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcUM7QUFDWDtBQUNqQztBQUNBO0FBQ087O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBWTtBQUNwQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ENEM7QUFLckI7QUFDMkI7O0FBRTNDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBWTtBQUNoQixJQUFJLDhDQUFlO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHdCQUF3QixNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDN0M7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG1EQUFTO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxvREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBUztBQUNmLE1BQU0sMERBQWE7QUFDbkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFhO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWlCO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUM0QztBQUNMO0FBQ2M7QUFDUjtBQWV0QjtBQUN3Qjs7QUFFL0M7QUFDTyx5QkFBeUIsZ0RBQU87QUFDaEMseUJBQXlCLGdEQUFPO0FBQ2hDLDRCQUE0QixnREFBTztBQUMxQywrQ0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNELCtDQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Qsa0RBQVE7QUFDUjtBQUNBLENBQUM7QUFDRCxxREFBWTs7QUFFWixvREFBVTtBQUNWLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVELGdEQUFNO0FBQ04sa0JBQWtCLDBEQUFnQjtBQUNsQyx3QkFBd0IscURBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNkRBQWE7QUFDZixFQUFFLG1EQUFTO0FBQ1g7QUFDQSxFQUFFLGdEQUFNO0FBQ1IsQ0FBQzs7QUFFRCx3REFBYztBQUNkLEVBQUUsbURBQVM7QUFDWCxDQUFDOztBQUVELDREQUFrQjtBQUNsQixFQUFFLG1EQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMERBQWdCO0FBQ2hCLEVBQUUsc0RBQVk7QUFDZCxDQUFDOztBQUVELDBEQUFnQjtBQUNoQixFQUFFLGtFQUFxQjtBQUN2QjtBQUNBLEVBQUUsc0RBQVk7QUFDZCxDQUFDOztBQUVELDJEQUFpQjtBQUNqQixFQUFFLHNEQUFZO0FBQ2Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGd0M7QUFDRDtBQUN4Qzs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBWTtBQUNwQztBQUNBLE1BQU0scURBQWM7QUFDcEI7QUFDQTtBQUNBOzs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91cGRhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWZvcm0nKTtcbmV4cG9ydCBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLW1vZGFsLWJ0bicpO1xuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcbmV4cG9ydCBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4nKTtcbmV4cG9ydCBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IG15RWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZWRpdC1mb3JtJyk7XG5leHBvcnQgY29uc3QgY2xvc2VFZGl0VGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWVkaXQtbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idG4nKTtcbmV4cG9ydCBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWJ1dHRvbicpXG5leHBvcnQgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwnKVxuZXhwb3J0IGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QtbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtcHJvamVjdC1idG4nKTtcbmV4cG9ydCBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveCcpO1xuZXhwb3J0IGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5leHBvcnQgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcy13ZWVrJyk7XG4iLCJpbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tICcuL3VwZGF0ZURpc3BsYXknO1xuaW1wb3J0IHsgaW5ib3hQcm9qZWN0IH0gZnJvbSAnLic7XG5jb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG5sZXQgdGFza0NvbnRhaW5lckhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250YWluZXItaGVhZGluZycpO1xuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgaXNDbGlja2VkKSB7XG4gICAgdGhpcy5uYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5jbGlja2VkID0gaXNDbGlja2VkO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmRlbGV0ZWQgPSBmYWxzZTtcbiAgfVxuICBkaXNwbGF5KCkge1xuICAgIHR1cm5PZmZQcm9qZWN0KCk7XG4gICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgdGFza0NvbnRhaW5lckhlYWRpbmcudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb0NvbnRhaW5lcigpIHtcbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV3UHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSwgZmFsc2UpO1xuICBuZXdQcm9qZWN0TmFtZURpdi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lO1xuICBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Byb2plY3QuZGlzcGxheSgpO1xuICB9KTtcblxuICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbmV3UHJvamVjdC5kZWxldGVkID0gdHJ1ZTtcbiAgICBuZXdQcm9qZWN0LmNsaWNrZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdEFycmF5KSB7XG4gICAgICBpZiAocHJvamVjdC5kZWxldGVkKSB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChuZXdQcm9qZWN0RGl2KTtcbiAgICAgICAgaW5ib3hQcm9qZWN0LmRpc3BsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1kaXYnKTtcbiAgbmV3UHJvamVjdE5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtbmFtZS1kaXYnKTtcbiAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idG4nKTtcblxuICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lRGl2KTtcbiAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHVybk9mZlByb2plY3QoKSB7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0QXJyYXkpIHtcbiAgICBpZiAocHJvamVjdC5jbGlja2VkKSB7XG4gICAgICBwcm9qZWN0LmNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheSc7XG5pbXBvcnQge1xuICBlZGl0TW9kYWwsXG4gIG15RWRpdEZvcm0sXG4gIHRhc2tMaXN0Q29udGFpbmVyLFxufSBmcm9tICcuL0RPTVN0dWZmLmpzJztcbmltcG9ydCB7IHRoaXNXZWVrUHJvamVjdCwgdG9kYXlQcm9qZWN0IH0gZnJvbSAnLic7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGFza1RleHQsIHRhc2tEdWVEYXRlKSB7XG4gICAgdGhpcy50YXNrVGV4dCA9IHRhc2tUZXh0O1xuICAgIHRoaXMudGFza0RhdGUgPSB0YXNrRHVlRGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbGV0IGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgbGV0IGRheSA9IG5ld0RhdGUuZ2V0RGF0ZSgpICsgMTtcbiAgaWYgKGRheSA9PT0gY3VycmVudERheSkge1xuICAgIHRvZGF5UHJvamVjdC5jbGlja2VkID0gdHJ1ZTtcbiAgICB0aGlzV2Vla1Byb2plY3QuY2xpY2tlZCA9IHRydWU7XG4gIH1cbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgaWYgKGlzTmFOKG1vbnRoKSAmJiBpc05hTihkYXkpICYmIGlzTmFOKHllYXIpKSB7XG4gICAgcmV0dXJuIGBObyBkYXRlYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYFRhc2sgZHVlOiAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tGcm9tSW5wdXQoKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtbW9kYWwnKS52YWx1ZTtcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gIHJldHVybiBuZXcgVGFzayh0YXNrLCBmb3JtYXR0ZWREYXRlKTtcbn1cblxuLy8gbGltaXQgcXVlcnkgc2VsZWN0b3JzIGluIGhlcmUgdGhhdCdzIGltcG9ydGFudFxuLy8geW91IHNob3VsZCBnZXQgYWxsIHRoZSBpbmZvIHlvdSBuZWVkIG9mZiBvZiB5b3VyIGNsYXNzIHdoaWNoIGhhcyB0aGUgaW5mbyBxdWVyeSBzZWxlY3RlZCBmcm9tIHRoZSBmb3JtIGFscmVhZHlcbi8vIG5vdyB5b3UganVzdCB3YW50IHRvIGR5bmFtaWNhbGx5IGNyZWF0ZSB0aGUgSFRNTCBlbGVtZW50cyB3aXRoIHRoYXQgQ0xBU1MgaW5mb1xuLy8geW91IHdhbnQgdG8gY3JlYXRlIGEgdGFzayBhcnJheSBub3QganVzdCBvbmUgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0RpdnModGFza0xpc3QpIHtcbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tMaXN0KSB7XG4gICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAodGFzay50YXNrVGV4dCA9PT0gJycpIHtcbiAgICAgIG5ld1Rhc2tUZXh0LnRleHRDb250ZW50ID0gYEVtcHR5IFRhc2tgO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdUYXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2sudGFza1RleHQ7XG4gICAgfVxuICAgIGlmICh0YXNrLnRhc2tEYXRlID09PSBgTm8gZGF0ZWApIHtcbiAgICAgIG5ld0RhdGVEaXYudGV4dENvbnRlbnQgPSBgTm8gZGF0ZWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0RhdGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tEYXRlO1xuICAgIH1cblxuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgLy8gdGhpcyBrZWVwcyBjdXJyZW50IHZhbHVlIGluIGZvcm0sIG5lZWRlZCBmb3IgZWRpdFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzaycpLnZhbHVlID0gbmV3VGFza1RleHQudGV4dENvbnRlbnQ7XG4gICAgfSk7XG5cbiAgICBteUVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRhc2sudGFza1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykudmFsdWU7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZS1tb2RhbCcpLnZhbHVlO1xuICAgICAgdGFzay50YXNrRGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICBuZXdUYXNrVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRleHQnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXG4gICAgbGVmdC5hcHBlbmRDaGlsZChuZXdUYXNrVGV4dCk7XG4gICAgbGVmdC5hcHBlbmRDaGlsZChuZXdEYXRlRGl2KTtcbiAgICByaWdodC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICByaWdodC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG4gIH1cbn1cbiIsIi8qXG51c2UgZGlhbG9nIGZvciBwcm9qZWN0bW9kYWwgZGlzcGxheSwgdHJ5IGFkZGluZyBhbiBvdmVybGF5IGZvciB0YXNrbW9kYWxcbmFkZCByZWFsIGR1bW15IG5vZGVzIFxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG5cbiovXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9Db250YWluZXIgfSBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IHsgZ2V0VGFza0Zyb21JbnB1dCB9IGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQge1xuICBhZGRUYXNrQnRuLFxuICBjbG9zZVRhc2tNb2RhbCxcbiAgbXlGb3JtLFxuICB0YXNrTW9kYWwsXG4gIGVkaXRNb2RhbCxcbiAgY2xvc2VFZGl0VGFza01vZGFsLFxuICBhZGRQcm9qZWN0QnV0dG9uLFxuICBwcm9qZWN0TW9kYWwsXG4gIHN1Ym1pdFByb2plY3RCdG4sXG4gIGNsb3NlUHJvamVjdE1vZGFsLFxuICBpbmJveCxcbiAgdG9kYXksXG4gIHRoaXNXZWVrLFxufSBmcm9tICcuL0RPTVN0dWZmLmpzJztcbmltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheS5qcyc7XG5cbi8vIGluaXQoKTtcbmV4cG9ydCBjb25zdCBpbmJveFByb2plY3QgPSBuZXcgUHJvamVjdCgnSW5ib3gnLCB0cnVlKTtcbmV4cG9ydCBjb25zdCB0b2RheVByb2plY3QgPSBuZXcgUHJvamVjdCgnVG9kYXknLCBmYWxzZSk7XG5leHBvcnQgY29uc3QgdGhpc1dlZWtQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RoaXMgd2VlaycsIGZhbHNlKTtcbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpbmJveFByb2plY3QuZGlzcGxheSgpO1xufSk7XG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdG9kYXlQcm9qZWN0LmRpc3BsYXkoKTtcbn0pO1xudGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRoaXNXZWVrUHJvamVjdC5kaXNwbGF5KCk7XG59KTtcbnByb2plY3RBcnJheS5wdXNoKGluYm94UHJvamVjdCwgdG9kYXlQcm9qZWN0LCB0aGlzV2Vla1Byb2plY3QpO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5teUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KCk7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0QXJyYXkpIHtcbiAgICBpZiAocHJvamVjdC5jbGlja2VkKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuICB9XG5cbiAgdG9kYXlQcm9qZWN0LmNsaWNrZWQgPSBmYWxzZTtcbiAgdGhpc1dlZWtQcm9qZWN0LmNsaWNrZWQgPSBmYWxzZTtcbiAgdXBkYXRlRGlzcGxheSgpO1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbXlGb3JtLnJlc2V0KCk7XG59KTtcblxuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmNsb3NlRWRpdFRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuLy8gbm8gbmVlZCBmb3IgcHJldmVudCBkZWZhdWx0IHdpdGhvdXQgYSBmb3JtXG4vLyBidXQgdXNlIGEgZm9ybSBzbyB5b3UgY2FuIGNhbGwgLnJlc2V0IGhlcmVcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbn0pO1xuXG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRQcm9qZWN0VG9Db250YWluZXIoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlID0gJyc7XG4gIHByb2plY3RNb2RhbC5jbG9zZSgpO1xufSk7XG5cbmNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlID0gJyc7XG59KTtcbiIsImltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrRGl2cyB9IGZyb20gJy4vVGFzayc7XG5jb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIC8vIHdoYXQgZG9lcyBzZXR0aW5nID0gXCJcIiBkb1xuICAvLyBoYXZlIGEgZmVlbGluZyBpdCBjbGVhcnMgdGhlIGRpc3BsYXlcbiAgdGFza0xpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RBcnJheSkge1xuICAgIGlmIChwcm9qZWN0LmNsaWNrZWQgJiYgcHJvamVjdC5uYW1lICE9PSBcIlRvZGF5XCIgJiYgcHJvamVjdC5uYW1lICE9PSBcIlRoaXMgd2Vla1wiKSB7XG4gICAgICBjcmVhdGVUYXNrRGl2cyhwcm9qZWN0LnRhc2tzKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=