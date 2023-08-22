const titleMethods = (state) => ({
    getTitle: () => state.title,
    setTitle:(newTitle) => state.title = newTitle
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

const createCheckList = (title) => {
    let state = {
        title
    }

    let array = [];

    const checklistMethods = (array) => ({
        addItem: (item) => {
            if(item.getType() === "list"){
                array.push(item);
            }
        }
    })

   return Object.assign({},titleMethods(state),containerMethods(array),checklistMethods(array))
}

const createProject = (title) => {
    let state = {
        title
    }

    let array = [];

   return Object.assign({},titleMethods(state),containerMethods(array))
}

export {createCheckList, createProject};