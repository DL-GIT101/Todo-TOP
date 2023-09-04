import { addToSidebar } from "./layout";

const createH3 = (text) => {
    const name = document.createElement('h3');
    name.className = "group";
    name.textContent = text;

    return name;
}

const createAddProjectBtn = (text) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = "add";
    return button;
}

const displayProject = (project) => {

    const button = document.createElement('button');
    button.textContent = project.getTitle();
    button.className = "project";

    return button;
}

const displayProjectList = (allProject) => {
    addToSidebar(createH3("projects"));
    const projectlist = allProject.getArray();
    const projectButtons = projectlist.map(project => addToSidebar(displayProject(project)));
    addToSidebar(createAddProjectBtn("+new"));
} 

const displayProjectForm  = () => {

    const modal = document.createElement('div');
    modal.className = "modal";
    modal.id = "project-form";

    const content = document.createElement('div');
    content.className = "content";

    const project = createH3("project");

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = titleInput.id = titleInput.placeholder = "title";

    const addButton = document.createElement('button');
    addButton.textContent = "add";
    
    content.append(project,titleInput,addButton);
    modal.appendChild(content);
    return modal;
}

export {displayProjectList,displayProjectForm};