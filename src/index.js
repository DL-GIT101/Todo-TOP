import './style.css';
import icon from './img/icon.svg';
import githubLogo from './img/github.svg';
import {addToLayout,createNavbar,createMain,createFooter, createSidebar, createMainContainer} from './layout';
import { displayProjectList } from './sidebar';
import { createProject } from './container';
import { createTodo } from './task';

addToLayout(
    createNavbar(icon, 'todo', []),
    createMain(
        createSidebar(),
        createMainContainer(),
        ),
    createFooter(githubLogo,"DL-GIT101"),
    );

window.objectStorage = {
    projects: [],
};

for (let index = 0; index < 6; index++) {
   createProject(index);
   
}

for (let i = 0; i < objectStorage.projects.length; i++) {
    for (let j = 0; j < 6; j++) {
        objectStorage.projects[i].addItem(createTodo(`sample${i}`,"12-12-2023","low",i));
    }
}

displayProjectList("projects",objectStorage);