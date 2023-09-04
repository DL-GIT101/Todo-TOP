import './style.css';
import icon from './img/icon.svg';
import githubLogo from './img/github.svg';
import {addToLayout,createNavbar,createMain,createFooter, createSidebar, createMainContainer} from './layout';
import { displayProjectForm, displayProjectList } from './sidebar';
import { createProject, createProjectList } from './container';

addToLayout(
    createNavbar(icon, 'todo', []),
    createMain(
        createSidebar(),
        createMainContainer(),
        ),
    createFooter(githubLogo,"DL-GIT101"),
    displayProjectForm()
    );

const allProjects = createProjectList("ALL");
for (let index = 1; index <= 5; index++) {
   let sample = createProject(index);
    allProjects.addItem(sample);
}
displayProjectList(allProjects);
