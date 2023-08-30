const addToLayout = (...contents) => {
    const body = document.querySelector("body");
    
    body.append(...contents);
}

const createNavbar = (logoSrc, name, linkNames) => {

    const navbar = document.createElement('nav');
    navbar.id = "navbar";

    const logoContainer = document.createElement('span');
    logoContainer.className = "container";

    if(logoSrc){
        const logo = document.createElement('object');
        logo.setAttribute("type", "image/svg+xml");
        logo.setAttribute("data", logoSrc);
        logo.id = "logo";
        logoContainer.appendChild(logo);
    }

    const logoName = document.createElement('h1');
    logoName.textContent = name;
    logoName.id = "name";

    logoContainer.appendChild(logoName);

    navbar.appendChild(logoContainer);

    const linkList = document.createElement('ul');
    for (const linkName of linkNames) {
        const linkItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = linkName;

        linkItem.appendChild(link);
        linkList.appendChild(linkItem);
    }

    navbar.appendChild(linkList);

    return navbar;
}

const createMain = (...elements) => {

    const content = document.createElement('div');
    content.id = "main";
    content.append(...elements);

    return content;
}

const createFooter = (logoSrc, username) => {

    const footer = document.createElement('nav');
    footer.id = "footer";

    const container = document.createElement('span');
    container.className ="container";

    const logo = document.createElement('object');
    logo.setAttribute("type", "image/svg+xml");
    logo.setAttribute("data", logoSrc);
    logo.id = "logo";

    const name = document.createElement('h5');
    name.textContent = username;

    container.append(logo,name);
    footer.append(container);
    return footer;
}

const createSidebar = () => {
    
    const sidebar = document.createElement('div');
    sidebar.id ="sidebar";

    body.appendChild(sidebar);
}

const createObjContainer = () => {

    const container = document.createElement('div');
    container.id = "container";

    body.appendChild(container);
}

export {addToLayout,createNavbar,createMain,createFooter};