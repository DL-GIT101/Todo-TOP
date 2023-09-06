import { removeAllChild,addToContent } from "./layout";

const displayTodo = (text) => {

    const container = document.createElement('div');
    container.className = "todo";
    container.textContent = text;

    return container;
}

const displayTodoList = (project) => {
    removeAllChild("container");
    let projectArray = project.getAllItem();
    projectArray.map(todo => addToContent(displayTodo(todo.description)));
    const end = document.createElement('div');
    end.textContent ="end";
    addToContent(end);
}

export {displayTodoList};