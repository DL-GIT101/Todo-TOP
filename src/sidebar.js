import { addToLayout, addToSidebar, removeAllChild } from "./layout";
import { createProject } from "./container";

const sidebar = document.getElementById("sidebar");

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

const displayProjectList = (title,objectStorage) => {
    removeAllChild("sidebar");
    const container = document.createElement('div');
    container.id = "project-list";
    container.append(createH3(title));
    objectStorage.projects.map(project => container.appendChild(displayProject(project)));
    container.appendChild(createAddProjectBtn("+new"));
    addToSidebar(container);
}

const displayProjectForm  = () => {

    const modal = document.createElement('div');
    modal.className = "modal";
    modal.id = "project-form";

    const content = document.createElement('div');
    content.className = "content";

    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addProject();
    })

    const titleLabel = document.createElement('label');
    titleLabel.textContent = "project title";
    titleLabel.setAttribute("for","title");

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = titleInput.id = titleInput.placeholder = "title";
    titleInput.required = true;
    titleInput.minLength = "2";
    titleInput.maxLength = "10";

    const buttonGroup = document.createElement('span');
    buttonGroup.className = "group";

    const addButton = createButton("add","add");
    addButton.type = "submit";

    const closeButton = createButton("close","close");
    closeButton.type = "button";
    closeButton.addEventListener('click', () => {
        modal.remove();
    })

    buttonGroup.append(addButton,closeButton);
    form.append(titleLabel,titleInput,buttonGroup);
    content.appendChild(form);
    modal.appendChild(content);
    return modal;
}

const addProject = () => {
    let title = document.getElementById("title").value;
    createProject(title);
    displayProjectList("projects",objectStorage);
    let modal = document.getElementById("project-form");
    modal.remove();
}

export {displayProjectList,displayProjectForm};