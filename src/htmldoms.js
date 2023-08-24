const createNavBar = (name, iconSrc) => {

    const body = document.querySelector("body");

    const nav = document.createElement('nav');

    const logoContainer = document.createElement('div');

    const logoName = document.createElement('h1');
    logoName.innerHTML = name;

    const logo = document.createElement('object');
    logo.setAttribute("type", "image/svg+xml");
    logo.setAttribute("data", iconSrc);
    logo.className = "icon";

    logoContainer.append(logoName,logo);

    nav.append(logoContainer);
    body.appendChild(nav);

}

export {createNavBar};