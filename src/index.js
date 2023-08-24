import './style.css';
import * as date from 'date-fns';
import {createTodo,createNote,createListItem} from './task';
import {createCheckList} from './container';

let sugar = createListItem("sugar");
let salt = createListItem("salt");
let pepper = createListItem("get pepper");
console.log(pepper.getType());
let toto = createTodo("title","asdasd","12-12-12",1);

let shopping = createCheckList("checlist baby");
shopping.addItem(sugar);
shopping.addItem(salt);
shopping.addItem(pepper);
console.log(shopping.getAllItem());
console.log(sugar.getState())