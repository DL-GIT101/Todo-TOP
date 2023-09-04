import { createProject } from "./container";

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

const displayProject = (projectName) => {

    const button = document.createElement('button');
    button.textContent = projectName;
    button.className = "project";

    return button;
}

const createButtonList = (projectTitle, buttonArray) => {
    const container = document.createElement('div');
    container.className = "group";

    const title  = document.createElement('h3');
    title.className = "title";
    title.textContent = projectTitle;
    container.id = projectTitle;

    container.appendChild(title);

    for (const name of buttonArray) {
        const button = createButton(name);
        container.appendChild(button);
    }

    return container;
}



export {createAddProjectBtn,createH3};