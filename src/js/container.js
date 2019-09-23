const renderContainer = (lists) => {
    const body = document.querySelector('body');
    const cont = document.createElement('div');
    cont.classList.add('mainContainer');
    body.appendChild(cont);

    const listCont = document.createElement('div');
    listCont.classList.add('listContainer');
    cont.appendChild(listCont);

    const taskCont = document.createElement('div');
    taskCont.classList.add('taskContainer');
    cont.appendChild(taskCont);

    lists.map((element,index) => {
        const item = document.createElement('div');
        item.classList.add('listItem');
        item.setAttribute('id',`${index}`);
        item.innerHTML = `<div class="ui fitted toggle checkbox">
                            <input type="checkbox" ${element.checked ? 'checked':''} disabled="disabled" id="listInput${index}">
                            <label></label>
                          </div><span>${element.name}</span>`;
        listCont.appendChild(item);
    });

    const butCont = document.createElement('div');
    butCont.classList.add('buttonContainer');
    for(let i=0;i<4;i++) {
        const button = document.createElement('div');
        let buttonText;
        switch(i) {
            case 0:
                buttonText = 'Add new list';
                break;
            case 1:
                buttonText = 'Delete list';
                break;
            case 2:
                buttonText = 'Add new task';
                break;
            case 3:
                buttonText = 'Delete task';
                break;
        }
        button.innerHTML = `<button class="fluid blue ui big button">${buttonText}</button>`;
        butCont.appendChild(button);
    }
    body.appendChild(butCont);

    const forms = document.createElement('div');
    forms.classList.add('formContainer');
    body.appendChild(forms);
    const addListForm = document.createElement('div');
    addListForm.classList.add('listPopup');
    addListForm.innerHTML = `<form>
                                <h1>New List</h1>
                                <div class="ui labeled input">
                                    <div class="ui label">
                                        Name:
                                    </div>
                                    <input type="text" placeholder="New list" class="listInput">
                                </div>
                                <button type="submit" class="fluid blue ui button listAdd">Add</button>
                                <button type="submin" class="fluid ui button listCancel">Close</button>
                            </form>`;
    forms.appendChild(addListForm);

    const addTaskForm = document.createElement('div');
    addTaskForm.classList.add('taskPopup');
    addTaskForm.innerHTML = `<form>
                                <h1>New Task</h1>
                                <div class="ui labeled input">
                                    <div class="ui label">
                                        Name:
                                    </div>
                                    <input type="text" placeholder="New task" class="taskInput">
                                </div>
                                <button type="submit" class="fluid blue ui button taskAdd">Add</button>
                                <button type="submin" class="fluid ui button taskCancel">Close</button>
                            </form>`;
    forms.appendChild(addTaskForm);
}

const displayTasks = (object) => {
    const taskCont = document.querySelector('.taskContainer');
    taskCont.innerHTML = '';
    object.tasks.map((element,index) => {
        const item = document.createElement('div');
        item.classList.add('taskItem');
        item.id = `task${index}`;
        item.innerHTML = `<div class="ui fitted toggle checkbox">
                            <input type="checkbox" ${element.checked ? 'checked':''}  data-index="${index}">
                            <label></label>
                          </div><span id="span${index}">${element.name}</span>`;
        taskCont.appendChild(item);
    });
}

module.exports = {renderContainer,displayTasks};