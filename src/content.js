const createButton = (projectName) => {

    const button = document.createElement('button');
    button.textContent = projectName;
    button.className = "project";

    return button;
}

const createButtonList = (buttonArray) => {
    const container = document.createElement('div');

    for (const name of buttonArray) {
        const button = createButton(name);
        container.appendChild(button);
    }

    return container;
}

const addToContainer = (containerId,...elements) => {
    const container  = document.getElementById(containerId);

    container.append(...elements);
}

export {createButtonList,addToContainer};