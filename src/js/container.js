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

    let i=0;
    lists.forEach(element => {
        const item = document.createElement('div');
        item.classList.add('listItem');
        item.setAttribute('id',`${i}`);
        item.innerHTML = `<div class="ui fitted toggle checkbox">
                            <input type="checkbox" ${element.checked ? 'checked':''} disabled="disabled" id="listInput${i}">
                            <label></label>
                          </div><span>${element.name}</span>`;
        listCont.appendChild(item);
        i++;
    });
}

const displayTasks = (object) => {
    const taskCont = document.querySelector('.taskContainer');
    taskCont.innerHTML = '';
    let i=0;
    object.tasks.forEach(element => {
        const item = document.createElement('div');
        item.classList.add('taskItem');
        item.innerHTML = `<div class="ui fitted toggle checkbox">
                            <input type="checkbox" ${element.checked ? 'checked':''}  data-index="${i}">
                            <label></label>
                          </div><span>${element.name}</span>`;
        i++;
        taskCont.appendChild(item);
    });
}

module.exports = {renderContainer,displayTasks};