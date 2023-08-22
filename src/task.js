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

const createTodo = (title, description, dueDate, priority) => {
    
    let complete = false;
    
    let state = {
        title, 
        description, 
        dueDate, 
        priority,
        complete
    }

    return Object.assign({},titleMethods(state),descriptionMethods(state),dueDateMethods(state),priorityMethods(state),completeMethods(state))
}

const createNote = (description) => {
    let state = {
        description
    }

    return Object.assign({},descriptionMethods(state))
}

const createListItem = (description) => {
    
    let complete = false;
    
    let state = {
        description, 
        complete
    }

    return Object.assign({},descriptionMethods(state), completeMethods(state))
}

export { createTodo,createNote, createListItem };