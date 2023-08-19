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