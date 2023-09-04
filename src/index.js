import './style.css';
import icon from './img/icon.svg';
import githubLogo from './img/github.svg';
import {addToLayout,createNavbar,createMain,createFooter, createSidebar, createMainContainer, addToSidebar} from './layout';
import { createAddProjectBtn,createH3 } from './content';

addToLayout(
    createNavbar(icon, 'todo', []),
    createMain(
        createSidebar(),
        createMainContainer(),
        ),
    createFooter(githubLogo,"DL-GIT101"),
    );

addToSidebar(createH3("projects"),createAddProjectBtn("+ add project"));