const createCheckList = () => {
    let listArray = [];

    return {
        addList: (list) => {
            if(list.getType() === "list"){
                listArray.push(list);
            }            
        },
        removeList: (index) => {
                listArray.splice(index,1);
        },
        getAllList: () => {
            return listArray.map(list => list.getState());
        }
    }
}

export default createCheckList;