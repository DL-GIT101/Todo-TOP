const createNote = ({ description }) => {
    let note = Object.create(taskMethods);

    note.description = description;

    return note;
}