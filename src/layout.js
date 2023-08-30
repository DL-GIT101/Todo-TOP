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

const createContent = (...elements) => {

    const content = document.createElement('div');
    content.id = "content";
    content.append(...elements);
    body.appendChild(content);
}

const createFooter = (ghLogo, githubName) => {

    const footer = document.createElement('nav');
    footer.id = "footer";

    const github = document.createElement('div');
    github.className ="github";
    const githubLogo = document.createElement('object');
    githubLogo.setAttribute("type", "image/svg+xml");
    githubLogo.setAttribute("data", ghLogo);
    githubLogo.id = "ghLogo";

    const ghUser = document.createElement('h5');
    ghUser.innerHTML = githubName;

    github.append(githubLogo,ghUser);
    footer.append(github);
    body.appendChild(footer);
   
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

export {addToLayout,createNavbar};