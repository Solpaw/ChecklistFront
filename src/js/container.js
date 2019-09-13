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
}

const displayTasks = (object) => {
    const taskCont = document.querySelector('.taskContainer');
    taskCont.innerHTML = '';
    object.tasks.map((element,index) => {
        const item = document.createElement('div');
        item.classList.add('taskItem');
        item.innerHTML = `<div class="ui fitted toggle checkbox">
                            <input type="checkbox" ${element.checked ? 'checked':''}  data-index="${index}">
                            <label></label>
                          </div><span>${element.name}</span>`;
        taskCont.appendChild(item);
    });
}

module.exports = {renderContainer,displayTasks};