import './style.css';
import icon from './img/icon.svg';
import githubLogo from './img/github.svg';
import {addToLayout,createNavbar,createMain,createFooter, createSidebar, createMainContainer, removeAllChild} from './layout';
import { displayProjectForm, displayProjectList } from './sidebar';
import { createProject, createProjectList } from './container';
import { createTodo } from './task';
import { displayTodoList } from './content';

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

for (let index = 1; index <= 5; index++) {
   createProject(index);
   
}

for (let i = 0; i < objectStorage.projects.length; i++) {
    for (let j = 0; j < 6; j++) {
        objectStorage.projects[i].addItem(createTodo("sample","12-12-2023","low",i));
    }
}

displayProjectList("projects",objectStorage);