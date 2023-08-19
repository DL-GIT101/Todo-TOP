import * as date from 'date-fns';
import {createTodo, createNote, createListItem} from './task';

let sampleTodo1prop = {
    title: "totle",
    description: "asdasdasd",
    dueDate: "12-12-12",
    priority: 3
};

let sampleTodo1 = createTodo(sampleTodo1prop);
console.log(sampleTodo1.getDescription());
console.log(sampleTodo1.getTitle());
sampleTodo1.setTitle("newTitle");
console.log(sampleTodo1.getTitle());