import { createButton } from "./dom";
import { removeAllChild,addToContent } from "./layout";

const displayTodo = (text) => {

    const container = document.createElement('div');
    container.className = "todo";
    container.textContent = text;

    return container;
}

const addTodoButton = () => {
    const button = createButton("add","+ add new todo");
    return button;
}

const displayTodoList = (project) => {
    removeAllChild("container");
    let projectArray = project.getAllItem();
    projectArray.map(todo =>  addToContent(displayTodo(todo.getDescription())));
    addToContent(addTodoButton());
}
export {displayTodoList};