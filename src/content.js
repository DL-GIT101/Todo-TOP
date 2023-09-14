import { createButton } from "./dom";
import { addToLayout, addToContent, removeAllChild } from "./layout";

const displayTodo = (text) => {

    const container = document.createElement('div');
    container.className = "todo";
    container.textContent = text;

    return container;
}

const createAddTodoBtn = (text) => {
    const button = createButton("add",text);
    button.addEventListener('click',() => {
        addToLayout(displayTodoForm());
    })
    return button;
}

const displayTodoForm = () => {

    const modal = document.createElement('div');
    modal.className = "modal";
    modal.id = "todo-form";

    const content = document.createElement('div');
    content.className = "content";

    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo();
    })

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = "TODO";
    descriptionLabel.setAttribute("for","description");

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = descriptionInput.id = descriptionInput.placeholder = "description";
    descriptionInput.required = true;
    descriptionInput.minLength = "2";
    descriptionInput.maxLength = "100";

    const buttonGroup = document.createElement('span');
    buttonGroup.className = "group";

    const addButton = createButton("add","add");
    addButton.type = "submit";

    const closeButton = createButton("close","close");
    closeButton.type = "button";
    closeButton.addEventListener('click', () => {
        modal.remove();
    })

    buttonGroup.append(addButton,closeButton);
    form.append(descriptionLabel,descriptionInput,buttonGroup);
    content.appendChild(form);
    modal.appendChild(content);
    return modal;
}

const displayTodoList = (project) => {
    removeAllChild("container");
    let projectArray = project.getAllItem();
    projectArray.map(todo =>  addToContent(displayTodo(todo.getDescription())));
    addToContent(createAddTodoBtn("+ add new todo"));
}

const addTodo = () => {
    alert("added todo");
}

export {displayTodoList};