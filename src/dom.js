const createH3 = (classname,text) => {
    const name = document.createElement('h3');
    name.className = classname;
    name.textContent = text;
    return name;
}

const createButton = (classname,text) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = classname;
    return button;
}

export {createH3,createButton};