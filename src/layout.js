const body = document.querySelector("body");

const createNavBar = (name, iconSrc) => {

    const nav = document.createElement('nav');
    nav.id = "navbar";
    const logoContainer = document.createElement('div');

    const logoName = document.createElement('h1');
    logoName.innerHTML = name;

    const logo = document.createElement('object');
    logo.setAttribute("type", "image/svg+xml");
    logo.setAttribute("data", iconSrc);
    logo.id = "icon";

    logoContainer.append(logoName,logo);

    nav.append(logoContainer);
    body.appendChild(nav);

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

export {createNavBar,createFooter,createContent};