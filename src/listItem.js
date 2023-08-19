const createListItem = ({ description, status = false}) => {
    let listItem = Object.create(taskMethods);

    listItem.description = description;
    listItem.status = status;

    return listItem;
}

export default createListItem;