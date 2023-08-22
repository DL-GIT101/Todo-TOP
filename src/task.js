const titleMethods = (state) => ({
    getTitle: () => state.title,
    setTitle:(newTitle) => state.title = newTitle
 })

 const descriptionMethods = (state) => ({
    getDescription: () => state.description,
    setDescription: (newDescription) => state.description = newDescription
 })

 const dueDateMethods = (state) => ({
    getDueDate: () => state.dueDate,
    setDueDate: (newDueDate) => state.dueDate = newDueDate
 })

 const priorityMethods = (state) => ({
    getPriority: () => state.priority,
    setPriority: (newPriority) => state.priority = newPriority
 })

 const completeMethods = (state) => ({
    getComplete: () => state.complete,
    setComplete: (newComplete) => state.complete = newComplete
 })

 const typeMethods = (state) => ({
    getType: () => state.type
 })

const createTodo = (title, description, dueDate, priority) => {
    
    let complete = false;
    let type = "todo";

    let state = {
        title, 
        description, 
        dueDate, 
        priority,
        complete,
        type
    }

    return Object.assign({},titleMethods(state),descriptionMethods(state),dueDateMethods(state),priorityMethods(state),completeMethods(state),typeMethods(state))
}

const createNote = (description) => {
    let type = "note";
    let state = {
        description,
        type
    }

    return Object.assign({},descriptionMethods(state),typeMethods(state))
}

const createListItem = (description) => {
    
    let complete = false;
    let type = "list";
    
    let state = {
        description, 
        complete,
        type
    }

    return Object.assign({},descriptionMethods(state), completeMethods(state),typeMethods(state))
}

export { createTodo,createNote, createListItem };