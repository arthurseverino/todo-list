### Todo List

This is my first CRUD app.

It is a Todo List I made with HTML, CSS and Javascript.

You can view the app here:
https://arthurseverino.github.io/todo-list/

I spent about a week on this project and learned a lot.

A big issue I had with this project was appending the DOM elements to taskListContainer just fine, but running into trouble when trying to delete or edit. This was because I wasn't keeping track of each task in a class. I was just building the elements based off of the querySelectors. I learned that you want to create the class first, then dynamically create DOM Elements based off of those class values.

First, you want to populate the class variables with the query selectors.
Second, you create the div elements based off those class variables. Create a function that takes in a class. This is your updateDisplay() in a sense.
This connects them all. Now you have a way of keeping track of the elements/classes. ALSO, don't store HTML elements or Nodes in a class - stick to objects, strings, arrays, etc.

The new projects that the user adds are also deleted with removeChild on top of splicing from the projectArray because our updateDisplay function only updates taskListContainer, not projectListContainer.

I spent a while trying to have an Inboxtask and ProjectTasks array before I realized that an inbox IS a project, it holds tasks and has a name. I decided to store all of the projects in a project array instead and let each project have its own task array. Then, I initialized and appended inbox, today and this week projects to the projectArray. The default when opening the app is inbox because it is initialized to true.
When deleting from a project, inboxDisplay is automatically shown. You can control everything that is shown by splicing from that main projectArray.

Some important points:

Keep track of every element.
You can have a div as an eventListener, not just buttons!
You can have all your querySelectors in an imported DOMStuff file.
You shouldn't need a parameter for updateDisplay.
projectArray and taskListContainer were my main 2 variables, should have put projectListContainer as well.
Hard-coded HTML elements can be overwritten, they're kind of dummy text and not real nodes, not apart of the array.
