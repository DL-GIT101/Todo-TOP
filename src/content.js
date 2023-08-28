const createSidebar = () => {
    
    const sidebar = document.createElement('div');
    sidebar.id ="sidebar";

    const today = createButton("today","date");
    const tommorrow = createButton("tommorrow","date");
    const week = createButton("week","date");

    const dates = createBtnGroup(today,tommorrow,week);

    sidebar.append(dates);

    return sidebar;
}

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

export {createSidebar};