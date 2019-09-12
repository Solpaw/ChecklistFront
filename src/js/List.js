class List {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = [];
        tasks.forEach(element => {
            this.tasks.push(element);
        });
    }

    displayTasks() {
        const taskCont = document.querySelector('.taskContainer');
        taskCont.innerHTML = '';
        this.tasks.forEach(element => {
            const item = document.createElement('div');
            item.classList.add('taskItem');
            item.innerText = element.name;
            taskCont.appendChild(item);
        });
    }
}

export default List;