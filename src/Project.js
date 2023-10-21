import updateDisplay from "./updateDisplay";
projectListContainerproject-list-container

export let projectArray = [];

//so same thing here, create functions, add event listeners 

export class Project{
    constructor(projectName){
        this.name = projectName;
        this.projectTasks = [];
        this.active = false;
    }
}


export function addProjectToContainer(){
    const newProjectName = document.querySelector('#project-name');
    const newProject = new Project(newProjectName)
    projectArray.push(newProject);
    console.log('Project Input: (checking if i need a form to receive input) ' + newProjectName)
    createProjectDiv();
}

function createProjectDiv(){
    const newProjectDiv = document.createElement('button');
    newProjectDiv.addEventListener('click', () => {

    })

    projectListContainer.appendChild(newProjectDiv)
}



