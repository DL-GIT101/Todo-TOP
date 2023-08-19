const createTodo = ({ title, description, dueDate, priority, status = false}) => {
    let todo = Object.create(taskMethods);

    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.status = status;

    return todo;
}