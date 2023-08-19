const taskMethods = {
    getTitle() {
        return this.title;
    },

    getDescription() {
        return this.description;
    },

    getDueDate()  {
        return this.dueDate;
    },

    getPriority() {
        return this.priority;
    },
    
    getStatus() {
        return this.status;
    },

    setTitle(newTitle) {
        this.title = newTitle;
    },

    setDescription(newDescription) {
        this.description = newDescription;
    },

    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    },

    setPriority(newPriority) {
        this.priority = newPriority;
    },

    setStatus(newStatus) {
        this.status = newStatus;
    }

}

const createTodo = ({ title, description, dueDate, priority, status = false}) => {
    let todo = Object.create(taskMethods);

    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.status = status;

    return todo;
}

const createNote = ({ description }) => {
    let note = Object.create(taskMethods);

    note.description = description;

    return note;
}

const createListItem = ({ description, status = false}) => {
    let listItem = Object.create(taskMethods);

    listItem.description = description;
    listItem.status = status;

    return listItem;
}

export { createTodo, createNote, createListItem};