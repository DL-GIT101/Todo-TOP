import * as date from 'date-fns';
import {createTodo,createNote,createListItem} from './task';
import createCheckList from './container';

let sugar = createListItem("sugar");
let salt = createListItem("salt");
let pepper = createListItem("get pepper");
console.log(pepper.getDescription());
let toto = createTodo("title","asdasd","12-12-12",1);

let shopping = createCheckList();
shopping.addList(sugar);
shopping.addList(salt);
shopping.addList(pepper);
console.log(shopping.getAllList());
console.log(sugar.getState())