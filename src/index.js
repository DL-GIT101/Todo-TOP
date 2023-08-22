import * as date from 'date-fns';
import {createTodo,createNote,createListItem} from './task';

let todo = createTodo("title","asdasdad","12-12-12",2);
console.log(todo.getTitle());
todo.setTitle('new Title');

let nota = createNote("asdasdasdasdasdasdasdasd");
console.log(nota.getDescription());

let list =  createListItem("asdasdasd");
console.log(list.getComplete());