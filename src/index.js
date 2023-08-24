import './style.css';
import { createNavBar,createFooter,createContent } from './htmldoms';
import icon from './img/icon.svg';
import githubLogo from './img/github.svg';
import {createTodo,createNote,createListItem} from './task';
import {createCheckList} from './container';

createNavBar("TODO", icon);
createContent();
createFooter(githubLogo, "DL-GIT101");