const createButton = (string,className) => {

    const button  = document.createElement('button');
    button.innerHTML = string;
    button.className = className;

    return button;
}

const createBtnGroup = (...buttons) => {

    const container = document.createElement('div');
    container.className = "group";

    container.append(...buttons);

    return container;
}

export {};