const titleMethods = (state) => ({
    getTitle: () => state.title,
    setTitle:(newTitle) => state.title = newTitle
 })

 const typeMethods = (state) => ({
    getType: () => state.type
 })

 const stateMethods = (state) => ({
    getState: () =>  ({...state})
 })

const containerMethods = (array) => ({
    addItem: (item) => {
        array.push(item);
    },
    removeItem: (index) => {
        if (index >= 0 && index < array.length) {
            array.splice(index, 1);
          }
    },
    getItem: (index) => {
        if (index >= 0 && index < array.length) {
            return array[index];
          }
          return null;
    },
    getAllItem: () => {
        return array.map(item => item.getState());
    }
 })

const checklistMethods = (array) => ({
    addItem: (item) => {
        if(item.getType() === "list"){
            array.push(item);
        }
    }
})

const createCheckList = (title) => {
    let type = "checklist";

    let state = {
        title,
        type
    }

    let array = [];

   return Object.assign({},titleMethods(state),typeMethods(state),stateMethods(state),containerMethods(array),checklistMethods(array))
}

const createProject = (title) => {
    let type = "project";

    let state = {
        title,
        type
    }

    let array = [];

   const project = Object.assign({},titleMethods(state),typeMethods(state),stateMethods(state),containerMethods(array));
   objectStorage.projects.push(project);
   return project;
}

export {createCheckList, createProject,};