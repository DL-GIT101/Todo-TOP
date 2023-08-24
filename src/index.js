import './style.css';
import { createNavBar } from './htmldoms';
import icon from './img/icon.svg';
import * as date from 'date-fns';
import {createTodo,createNote,createListItem} from './task';
import {createCheckList} from './container';

createNavBar("TODO", icon);