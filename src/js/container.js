
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
        item.setAttribute('id',`${i++}`)
        item.innerText = element.name;
        listCont.appendChild(item);
    });
}

module.exports = {renderContainer};