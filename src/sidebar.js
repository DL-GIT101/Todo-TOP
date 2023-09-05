import { addToLayout, addToSidebar } from "./layout";
import { createProject } from "./container";

const createH3 = (text) => {
    const name = document.createElement('h3');
    name.className = "group";
    name.textContent = text;

    return name;
}

const createButton = (text,name) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = name;
    return button;
}

const createAddProjectBtn = (text) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = "add";
    button.addEventListener('click',() => {
        addToLayout(displayProjectForm());
    })
    return button;
}

const displayProject = (project) => {

    const button = document.createElement('button');
    button.textContent = project.getTitle();
    button.className = "project";

    return button;
}

const displayProjectList = (objectStorage) => {
    addToSidebar(createH3("projects"));
    const projectButtons = objectStorage.projects.map(project => addToSidebar(displayProject(project)));
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

    const buttonGroup = document.createElement('span');
    buttonGroup.className = "group";

    const addButton = createButton("add","add");
    addButton.addEventListener('click', () => {
        let title = document.getElementById("title").value;
        createProject(title);
    })

    const closeButton = createButton("close","close");
    closeButton.addEventListener('click', () => {
        modal.remove();
    })

    buttonGroup.append(addButton,closeButton);
    content.append(project,titleInput,buttonGroup);
    modal.appendChild(content);
    return modal;
}

export {displayProjectList,displayProjectForm};