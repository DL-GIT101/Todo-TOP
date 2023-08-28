const createSidebar = () => {
    
    const sidebar = document.createElement('div');
    sidebar.id ="sidebar";

    const today = createButton("today","date");
    const tommorrow = createButton("tommorrow","date");
    const week = createButton("week","date");

    const dates = createBtnGroup(today,tommorrow,week);

    const title = document.createElement('h3');
    title.innerHTML = "Project";
    title.className = "title";

    const other = createButton("others","project");

    const project = createBtnGroup(title,other);

    sidebar.append(dates,project);

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