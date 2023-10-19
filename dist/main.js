/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handleSubmit.js":
/*!*****************************!*\
  !*** ./src/handleSubmit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleSubmit)
/* harmony export */ });
function handleSubmit() {}


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

use dialog for project Modal

how to get input from date type 
how to remove projects? ideally a button that shows up on hover, you can document.createElement one 

.value to get value from input

*/



const submitTaskBtn = document.querySelector('#submit-task-btn');
const closeTaskModal = document.querySelector('#close-task-modal-btn');
const addTaskBtn = document.querySelector('#task-button');
const taskModal = document.querySelector('#task-modal');

addTaskBtn.addEventListener('click', () => {
  taskModal.style.display = 'flex';
});

closeTaskModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

submitTaskBtn.addEventListener('click', () => {
  taskModal.style.display = 'none';
  _handleSubmit_js__WEBPACK_IMPORTED_MODULE_0__["default"];
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  console.log('Yippee! We can use localStorage awesomeness')
} else {
  console.log('Too bad, no localStorage for us')
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOzs7Ozs7O1VDQWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUU2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsd0RBQVk7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7fVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuXG5hZGQgbG9jYWxzdG9yYWdlIHRvIG1ha2UgdmlzdWFsaXphdGlvbiB0ZXN0aW5nIGVhc2llclxudGhlIGRlZmF1bHQgd2hlbiBvcGVuZWQgc2hvdWxkIHNob3cgaW5ib3ggXG5cbkEgYnV0dG9uIHRoYXQgc2F5cyArIEFkZCBQcm9qZWN0IC8gKyBBZGQgVGFzayBwbGFjZWQgcmlnaHQgYmVmb3JlIHRoZSBmaXJzdCB0YXNrIC8gcHJvamVjdC5cbldoZW4gY2xpY2tlZCwgYSBtb2RhbCBwb3BzIHVwIHdpdGggYW4geCBvbiB0aGUgdG9wLXJpZ2h0IGFuZCBhbiBhZGQgYnV0dG9uIG9uIHRoZSBib3R0b20ganVzdCBsaWtlIGxpYnJhcnkuXG5cbndoZW4geW91IGFkZCBhIHRhc2ssIHlvdSBhZGQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrIGFuZCBkYXRlIGl0cyBkdWVcbnRoZW4geW91IGFkZCBpdCB0byBpbmJveCBhbmQgY2hlY2sgdGhlIGRhdGUgdG8gYWxzbyBwdXQgaXQgaW4gdGhpcyB3ZWVrIG9yIFRvZGF5IFxuXG53aGVuIHlvdSBhZGQgYSBwcm9qZWN0LCB5b3Ugb25seSBhc2sgZm9yIHByb2plY3QgbmFtZVxudGhlbiB5b3UgYXBwZW5kIGEgZGl2IHRvIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHNjcmVlbiB3aXRoIHRoZSB0aXRsZSBvZiBwcm9qZWN0IG5hbWUgdGhhdCB3YXMgZW50ZXJlZFxuVGhlbiwgbWFrZSB0aGF0IGRpdiBjbGlja2FibGUoYnV0dG9uKSwgYW5kIGl0IHdpbGwgc2hvdyBhbiBhcnJheSBvZiB0YXNrcyB3aGVuIGNsaWNrZWQgLSBcbnRoZXNlIHRhc2tzIGdldCBhcHBlbmRlZCBqdXN0IGxpa2UgaWYgdGhleSB3ZXJlIGJlaW5nIGFwcGVuZGVkIHRvIGluYm94LCB3aXRoIGEgbW9kYWwgZm9ybSBcblxudG8gYWRkIHRhc2sgdG8gcHJvamVjdCBwdXQgYSBidXR0b24gY2FsbGVkICsgQWRkIFByb2plY3QgVGFza1xuXG50aGVzZSB0YXNrcyBhcmUgbm90IGFkZGVkIHRvIGluYm94IHRobyBzbyBrZWVwIHR3byBkaWZmIGFycmF5czpcbmFycmF5IG9mIHRhc2tzIGluIGluYm94LCBhcnJheSBvZiBwcm9qZWN0cywgYXJyYXkgb2YgdGFza3MgaW4gcHJvamVjdHNcblxueW91IGNhbiBhbHNvIGRlbGV0ZSB0YXNrcyBhbmQgcHJvamVjdHMsIHNpbXBsZSBhcyBkZWxldGluZyBmcm9tIGFycmF5IChjaGVjayBsaWJyYXJ5IGZvciBob3cgdG8gZGVsZXRlKVxuXG5tYWtlIHN1cmUgYWxsIGJ1dHRvbnMgc3RheSBhY3RpdmUgd2hlbiBjbGlja2VkIGFuZCBob3ZlcmVkIHRvIHNob3cgd2hlcmUgeW91IGFyZSBcblxueW91IGNhbiBlZGl0IHRhc2sgYnkgcmVvcGVuaW5nIGZvcm0gd2l0aCB0aGUgc2FtZSBkYXRhIGluIGl0IHRoYXQgaXQgaGFzIFxuY3VycmVudGx5IGFuZCBjaGFuZ2UgdGhlIGdyZWVuIGFkZCBidXR0b24gdG8gYSB5ZWxsb3cgXCJlZGl0XCJcblxuZXZlcnl0aGluZyBpbiBzaWRlYmFyIGlzIGEgYnV0dG9uXG5cbmhvdyB0byBtYWtlIGl0ZW1zIGluIGJhY2tncm91bmQgdW5jbGlja2FibGUgd2hlbiBzaG93aW5nIG1vZGFsXG5cbnVzZSBkaWFsb2cgZm9yIHByb2plY3QgTW9kYWxcblxuaG93IHRvIGdldCBpbnB1dCBmcm9tIGRhdGUgdHlwZSBcbmhvdyB0byByZW1vdmUgcHJvamVjdHM/IGlkZWFsbHkgYSBidXR0b24gdGhhdCBzaG93cyB1cCBvbiBob3ZlciwgeW91IGNhbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IG9uZSBcblxuLnZhbHVlIHRvIGdldCB2YWx1ZSBmcm9tIGlucHV0XG5cbiovXG5cbmltcG9ydCBoYW5kbGVTdWJtaXQgZnJvbSAnLi9oYW5kbGVTdWJtaXQuanMnO1xuXG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC10YXNrLWJ0bicpO1xuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtdGFzay1tb2RhbC1idG4nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1idXR0b24nKTtcbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufSk7XG5cbmNsb3NlVGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5zdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaGFuZGxlU3VibWl0O1xufSk7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBjb25zb2xlLmxvZygnWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzcycpXG59IGVsc2Uge1xuICBjb25zb2xlLmxvZygnVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1cycpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=