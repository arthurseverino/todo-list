/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*

add localstorage to make visualization testing easier
the default when opened should show inbox 

A button that says + Add Project / + Add Task placed right after the last task / project.
When clicked, a modal pops up with an x on the top-right and an add button on the bottom just like library.

when you add a task, you add the description of the task and date its due
then you add it to inbox and check the date to also put it in this week or Today 

when you add a project, you only ask for project name
then you append a div to the left side of the screen with the title of project name that was entered
Then, make that div clickable, and it will show an array of tasks when clicked - 
these tasks get appended just like if they were being appended to inbox, with a modal form 

to add task to project put a button called + Add Project Task

these tasks are not added to inbox tho so keep two diff arrays:
array of tasks in inbox, array of projects, array of tasks in projects

you can also delete tasks and projects, simple as deleting from array (check library for how to delete)

make sure all buttons stay active when clicked and hovered to show where you are 

you can edit task by reopening form with the same data in it that it has 
currently and change the green add button to a yellow "edit"

*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5hZGQgbG9jYWxzdG9yYWdlIHRvIG1ha2UgdmlzdWFsaXphdGlvbiB0ZXN0aW5nIGVhc2llclxudGhlIGRlZmF1bHQgd2hlbiBvcGVuZWQgc2hvdWxkIHNob3cgaW5ib3ggXG5cbkEgYnV0dG9uIHRoYXQgc2F5cyArIEFkZCBQcm9qZWN0IC8gKyBBZGQgVGFzayBwbGFjZWQgcmlnaHQgYWZ0ZXIgdGhlIGxhc3QgdGFzayAvIHByb2plY3QuXG5XaGVuIGNsaWNrZWQsIGEgbW9kYWwgcG9wcyB1cCB3aXRoIGFuIHggb24gdGhlIHRvcC1yaWdodCBhbmQgYW4gYWRkIGJ1dHRvbiBvbiB0aGUgYm90dG9tIGp1c3QgbGlrZSBsaWJyYXJ5LlxuXG53aGVuIHlvdSBhZGQgYSB0YXNrLCB5b3UgYWRkIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzayBhbmQgZGF0ZSBpdHMgZHVlXG50aGVuIHlvdSBhZGQgaXQgdG8gaW5ib3ggYW5kIGNoZWNrIHRoZSBkYXRlIHRvIGFsc28gcHV0IGl0IGluIHRoaXMgd2VlayBvciBUb2RheSBcblxud2hlbiB5b3UgYWRkIGEgcHJvamVjdCwgeW91IG9ubHkgYXNrIGZvciBwcm9qZWN0IG5hbWVcbnRoZW4geW91IGFwcGVuZCBhIGRpdiB0byB0aGUgbGVmdCBzaWRlIG9mIHRoZSBzY3JlZW4gd2l0aCB0aGUgdGl0bGUgb2YgcHJvamVjdCBuYW1lIHRoYXQgd2FzIGVudGVyZWRcblRoZW4sIG1ha2UgdGhhdCBkaXYgY2xpY2thYmxlLCBhbmQgaXQgd2lsbCBzaG93IGFuIGFycmF5IG9mIHRhc2tzIHdoZW4gY2xpY2tlZCAtIFxudGhlc2UgdGFza3MgZ2V0IGFwcGVuZGVkIGp1c3QgbGlrZSBpZiB0aGV5IHdlcmUgYmVpbmcgYXBwZW5kZWQgdG8gaW5ib3gsIHdpdGggYSBtb2RhbCBmb3JtIFxuXG50byBhZGQgdGFzayB0byBwcm9qZWN0IHB1dCBhIGJ1dHRvbiBjYWxsZWQgKyBBZGQgUHJvamVjdCBUYXNrXG5cbnRoZXNlIHRhc2tzIGFyZSBub3QgYWRkZWQgdG8gaW5ib3ggdGhvIHNvIGtlZXAgdHdvIGRpZmYgYXJyYXlzOlxuYXJyYXkgb2YgdGFza3MgaW4gaW5ib3gsIGFycmF5IG9mIHByb2plY3RzLCBhcnJheSBvZiB0YXNrcyBpbiBwcm9qZWN0c1xuXG55b3UgY2FuIGFsc28gZGVsZXRlIHRhc2tzIGFuZCBwcm9qZWN0cywgc2ltcGxlIGFzIGRlbGV0aW5nIGZyb20gYXJyYXkgKGNoZWNrIGxpYnJhcnkgZm9yIGhvdyB0byBkZWxldGUpXG5cbm1ha2Ugc3VyZSBhbGwgYnV0dG9ucyBzdGF5IGFjdGl2ZSB3aGVuIGNsaWNrZWQgYW5kIGhvdmVyZWQgdG8gc2hvdyB3aGVyZSB5b3UgYXJlIFxuXG55b3UgY2FuIGVkaXQgdGFzayBieSByZW9wZW5pbmcgZm9ybSB3aXRoIHRoZSBzYW1lIGRhdGEgaW4gaXQgdGhhdCBpdCBoYXMgXG5jdXJyZW50bHkgYW5kIGNoYW5nZSB0aGUgZ3JlZW4gYWRkIGJ1dHRvbiB0byBhIHllbGxvdyBcImVkaXRcIlxuXG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9