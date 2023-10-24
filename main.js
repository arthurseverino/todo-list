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

const projectListContainer = document.querySelector('#project-list-container');
let taskContainerHeading = document.querySelector('#task-container-heading');
let projectArray = [];


class Project {
  constructor(projectName, isClicked) {
    this.name = projectName;
    this.clicked = isClicked;
    this.tasks = [];
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
  const newProjectDiv = document.createElement('button');
  const newProject = new Project(newProjectName, false);
  newProjectDiv.textContent = newProjectName;
  newProjectDiv.addEventListener('click', () => {
    newProject.display();
  });
  projectArray.push(newProject);
  projectListContainer.appendChild(newProjectDiv);
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
  console.log(currentDay); // should be 24
  let day = newDate.getDate();
  if (day === currentDay) {
    ___WEBPACK_IMPORTED_MODULE_2__.todayProject.clicked = true;
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
//you want to create a task array not just one task

function createTaskDivs(taskList) {
  for (const task of taskList) {
    const newTaskDiv = document.createElement('div');
    const left = document.createElement('div');
    const newTaskText = document.createElement('div');
    const newDateDiv = document.createElement('div');
    const right = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    console.log(task.taskText);
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
the default when opened should show inbox 

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)

so you want to create the class first, then dynamically create DOM Elements based off of those class values

use dialog for projectmodal display, try adding an overlay for taskmodal

how to remove projects? ideally a button that shows up on hover, you can document.createElement one  

localStorage.setItem(key, value);

*/






// init();
const inboxProject = new Project('Inbox', true);
const todayProject = new Project('Today', false);
const thisWeekProject = new Project('This week', false);
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

  (0,_updateDisplay_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  todayProject.clicked = false;
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



//no need for prevent default without a form 
_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.addProjectButton.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.showModal();
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.submitProjectBtn.addEventListener('click', () => {
  (0,_Project_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToContainer)();
  document.querySelector('#project-name').value = ""
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.close();
  // just make a form so you can call .reset here
});

_DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.closeProjectModal.addEventListener('click', () => {
  _DOMStuff_js__WEBPACK_IMPORTED_MODULE_2__.projectModal.close();
  document.querySelector('#project-name').value =  ""
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01TdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VwZGF0ZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybScpO1xuZXhwb3J0IGNvbnN0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXRhc2stbW9kYWwtYnRuJyk7XG5leHBvcnQgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG5leHBvcnQgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuZXhwb3J0IGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW1vZGFsJyk7XG5leHBvcnQgY29uc3QgbXlFZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1lZGl0LWZvcm0nKTtcbmV4cG9ydCBjb25zdCBjbG9zZUVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZWRpdC1tb2RhbC1idG4nKTtcbmV4cG9ydCBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ0bicpO1xuZXhwb3J0IGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdC1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtYnV0dG9uJylcbmV4cG9ydCBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1tb2RhbCcpXG5leHBvcnQgY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtcHJvamVjdC1tb2RhbC1idG4nKTtcbmV4cG9ydCBjb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1wcm9qZWN0LWJ0bicpO1xuZXhwb3J0IGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94Jyk7XG5leHBvcnQgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbmV4cG9ydCBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGlzLXdlZWsnKTtcbiIsImltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheSc7XG5jb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG5sZXQgdGFza0NvbnRhaW5lckhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250YWluZXItaGVhZGluZycpO1xuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBpc0NsaWNrZWQpIHtcbiAgICB0aGlzLm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB0aGlzLmNsaWNrZWQgPSBpc0NsaWNrZWQ7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG4gIGRpc3BsYXkoKSB7XG4gICAgdHVybk9mZlByb2plY3QoKTtcbiAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGluZy50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvQ29udGFpbmVyKCkge1xuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUsIGZhbHNlKTtcbiAgbmV3UHJvamVjdERpdi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lO1xuICBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Byb2plY3QuZGlzcGxheSgpO1xuICB9KTtcbiAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHVybk9mZlByb2plY3QoKSB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RBcnJheSkge1xuICAgICAgaWYgKHByb2plY3QuY2xpY2tlZCkge1xuICAgICAgICBwcm9qZWN0LmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiIsImltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheSc7XG5pbXBvcnQgeyBlZGl0TW9kYWwsIG15RWRpdEZvcm0sIHRhc2tMaXN0Q29udGFpbmVyIH0gZnJvbSAnLi9ET01TdHVmZi5qcyc7XG5pbXBvcnQgeyB0b2RheVByb2plY3QgfSBmcm9tICcuJztcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrVGV4dCwgdGFza0R1ZURhdGUpIHtcbiAgICB0aGlzLnRhc2tUZXh0ID0gdGFza1RleHQ7XG4gICAgdGhpcy50YXNrRGF0ZSA9IHRhc2tEdWVEYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBsZXQgY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50RGF5KTsgLy8gc2hvdWxkIGJlIDI0XG4gIGxldCBkYXkgPSBuZXdEYXRlLmdldERhdGUoKTtcbiAgaWYgKGRheSA9PT0gY3VycmVudERheSkge1xuICAgIHRvZGF5UHJvamVjdC5jbGlja2VkID0gdHJ1ZTtcbiAgfVxuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBpZiAoaXNOYU4obW9udGgpICYmIGlzTmFOKGRheSkgJiYgaXNOYU4oeWVhcikpIHtcbiAgICByZXR1cm4gYE5vIGRhdGVgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgVGFzayBkdWU6ICR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0Zyb21JbnB1dCgpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1tb2RhbCcpLnZhbHVlO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgcmV0dXJuIG5ldyBUYXNrKHRhc2ssIGZvcm1hdHRlZERhdGUpO1xufVxuXG4vLyBsaW1pdCBxdWVyeSBzZWxlY3RvcnMgaW4gaGVyZSB0aGF0J3MgaW1wb3J0YW50XG4vLyB5b3Ugc2hvdWxkIGdldCBhbGwgdGhlIGluZm8geW91IG5lZWQgb2ZmIG9mIHlvdXIgY2xhc3Mgd2hpY2ggaGFzIHRoZSBpbmZvIHF1ZXJ5IHNlbGVjdGVkIGZyb20gdGhlIGZvcm0gYWxyZWFkeVxuLy8gbm93IHlvdSBqdXN0IHdhbnQgdG8gZHluYW1pY2FsbHkgY3JlYXRlIHRoZSBIVE1MIGVsZW1lbnRzIHdpdGggdGhhdCBDTEFTUyBpbmZvXG4vL3lvdSB3YW50IHRvIGNyZWF0ZSBhIHRhc2sgYXJyYXkgbm90IGp1c3Qgb25lIHRhc2tcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tEaXZzKHRhc2tMaXN0KSB7XG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrTGlzdCkge1xuICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3VGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc29sZS5sb2codGFzay50YXNrVGV4dCk7XG4gICAgaWYgKHRhc2sudGFza1RleHQgPT09ICcnKSB7XG4gICAgICBuZXdUYXNrVGV4dC50ZXh0Q29udGVudCA9IGBFbXB0eSBUYXNrYDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VGFza1RleHQudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tUZXh0O1xuICAgIH1cbiAgICBpZiAodGFzay50YXNrRGF0ZSA9PT0gYE5vIGRhdGVgKSB7XG4gICAgICBuZXdEYXRlRGl2LnRleHRDb250ZW50ID0gYE5vIGRhdGVgO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay50YXNrRGF0ZTtcbiAgICB9XG5cbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIC8vIHRoaXMga2VlcHMgY3VycmVudCB2YWx1ZSBpbiBmb3JtLCBuZWVkZWQgZm9yIGVkaXRcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS52YWx1ZSA9IG5ld1Rhc2tUZXh0LnRleHRDb250ZW50O1xuICAgIH0pO1xuXG4gICAgbXlFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlZGl0IGZvcm0gc3VibWl0dGVkJyk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGFzay50YXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlLW1vZGFsJykudmFsdWU7XG4gICAgICB0YXNrLnRhc2tEYXRlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgIG5ld1Rhc2tUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dCcpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG5cbiAgICBsZWZ0LmFwcGVuZENoaWxkKG5ld1Rhc2tUZXh0KTtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKG5ld0RhdGVEaXYpO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcbiAgfVxufVxuIiwiLypcbnRoZSBkZWZhdWx0IHdoZW4gb3BlbmVkIHNob3VsZCBzaG93IGluYm94IFxuXG55b3UgY2FuIGFsc28gZGVsZXRlIHRhc2tzIGFuZCBwcm9qZWN0cywgc2ltcGxlIGFzIGRlbGV0aW5nIGZyb20gYXJyYXkgKGNoZWNrIGxpYnJhcnkgZm9yIGhvdyB0byBkZWxldGUpXG5cbnNvIHlvdSB3YW50IHRvIGNyZWF0ZSB0aGUgY2xhc3MgZmlyc3QsIHRoZW4gZHluYW1pY2FsbHkgY3JlYXRlIERPTSBFbGVtZW50cyBiYXNlZCBvZmYgb2YgdGhvc2UgY2xhc3MgdmFsdWVzXG5cbnVzZSBkaWFsb2cgZm9yIHByb2plY3Rtb2RhbCBkaXNwbGF5LCB0cnkgYWRkaW5nIGFuIG92ZXJsYXkgZm9yIHRhc2ttb2RhbFxuXG5ob3cgdG8gcmVtb3ZlIHByb2plY3RzPyBpZGVhbGx5IGEgYnV0dG9uIHRoYXQgc2hvd3MgdXAgb24gaG92ZXIsIHlvdSBjYW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBvbmUgIFxuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcblxuKi9cbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9Db250YWluZXIgfSBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IHsgZ2V0VGFza0Zyb21JbnB1dCB9IGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQge1xuICBhZGRUYXNrQnRuLFxuICBjbG9zZVRhc2tNb2RhbCxcbiAgbXlGb3JtLFxuICB0YXNrTW9kYWwsXG4gIGVkaXRNb2RhbCxcbiAgY2xvc2VFZGl0VGFza01vZGFsLFxuICBhZGRQcm9qZWN0QnV0dG9uLFxuICBwcm9qZWN0TW9kYWwsXG4gIHN1Ym1pdFByb2plY3RCdG4sXG4gIGNsb3NlUHJvamVjdE1vZGFsLFxuICBpbmJveCxcbiAgdG9kYXksXG4gIHRoaXNXZWVrLFxufSBmcm9tICcuL0RPTVN0dWZmLmpzJztcbmltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gJy4vdXBkYXRlRGlzcGxheS5qcyc7XG5cbi8vIGluaXQoKTtcbmV4cG9ydCBjb25zdCBpbmJveFByb2plY3QgPSBuZXcgUHJvamVjdCgnSW5ib3gnLCB0cnVlKTtcbmV4cG9ydCBjb25zdCB0b2RheVByb2plY3QgPSBuZXcgUHJvamVjdCgnVG9kYXknLCBmYWxzZSk7XG5leHBvcnQgY29uc3QgdGhpc1dlZWtQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RoaXMgd2VlaycsIGZhbHNlKTtcbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpbmJveFByb2plY3QuZGlzcGxheSgpO1xufSk7XG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdG9kYXlQcm9qZWN0LmRpc3BsYXkoKTtcbn0pO1xudGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRoaXNXZWVrUHJvamVjdC5kaXNwbGF5KCk7XG59KTtcbnByb2plY3RBcnJheS5wdXNoKGluYm94UHJvamVjdCwgdG9kYXlQcm9qZWN0LCB0aGlzV2Vla1Byb2plY3QpO1xuXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufSk7XG5cbm15Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tGcm9tSW5wdXQoKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RBcnJheSkge1xuICAgIGlmIChwcm9qZWN0LmNsaWNrZWQpIHtcbiAgICAgIHByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5KCk7XG4gIHRvZGF5UHJvamVjdC5jbGlja2VkID0gZmFsc2U7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBteUZvcm0ucmVzZXQoKTtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuY2xvc2VFZGl0VGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5cblxuLy9ubyBuZWVkIGZvciBwcmV2ZW50IGRlZmF1bHQgd2l0aG91dCBhIGZvcm0gXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG59KTtcblxuc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkUHJvamVjdFRvQ29udGFpbmVyKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZSA9IFwiXCJcbiAgcHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gIC8vIGp1c3QgbWFrZSBhIGZvcm0gc28geW91IGNhbiBjYWxsIC5yZXNldCBoZXJlXG59KTtcblxuY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHByb2plY3RNb2RhbC5jbG9zZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWUgPSAgXCJcIlxufSk7XG4iLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IHsgY3JlYXRlVGFza0RpdnMgfSBmcm9tICcuL1Rhc2snO1xuY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0LWNvbnRhaW5lcicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAvLyB3aGF0IGRvZXMgc2V0dGluZyA9IFwiXCIgZG9cbiAgLy8gaGF2ZSBhIGZlZWxpbmcgaXQgY2xlYXJzIHRoZSBkaXNwbGF5XG4gIHRhc2tMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0QXJyYXkpIHtcbiAgICBpZiAocHJvamVjdC5jbGlja2VkKSB7XG4gICAgICBjcmVhdGVUYXNrRGl2cyhwcm9qZWN0LnRhc2tzKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=