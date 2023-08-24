import './style.css';
import { createNavBar,createFooter } from './htmldoms';
import icon from './img/icon.svg';
import githubLogo from './img/github.svg';
import * as date from 'date-fns';
import {createTodo,createNote,createListItem} from './task';
import {createCheckList} from './container';

createNavBar("TODO", icon);
createFooter(githubLogo, "DL-GIT101");