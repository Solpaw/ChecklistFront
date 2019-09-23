class List {
    constructor(name, tasks = [], checked=false) {
        this.name = name;
        this.checked = checked;
        this.tasks = tasks;
    }
}

export default List;