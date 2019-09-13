class List {
    constructor(name, tasks) {
        this.name = name;
        this.checked = false;
        this.tasks = [];
        tasks.forEach(element => {
            this.tasks.push(element);
        }); 
    }
}

export default List;