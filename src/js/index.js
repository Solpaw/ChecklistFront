import '../style/style.scss';
import {renderContainer,displayTasks} from './container.js';
import List from './List.js';
import Task from './Task.js';
import {listResetStyle,styleSelected} from './styles.js';

const allTasksChecked = (object) => {
    for(let i=0;i<object.tasks.length;i++) {
        if(!object.tasks[i].checked) return false;
    }
    return true;
}

const populateList = () => {
    const tasks1 = [new Task('test', false),new Task('test2', true)];
    const tasks2 = [new Task('więcej', true),new Task('testów', false), new Task('chyba działa', false)];
    const obj1 = new List('jeden',tasks1);
    const obj2 = new List('dwa',tasks2);
    const list = [];
    list.push(obj1,obj2);
    localStorage.setItem('list', JSON.stringify(list));
    return list;
}

window.onload = () => {
    const list = JSON.parse(localStorage.getItem('list')) || populateList();
    renderContainer(list);

    //event listenery do zmiany wyświetlanych tasków
    let curList;
    for(let i=0;i<list.length;i++) {
        const container = document.querySelector(`.listItem:nth-child(${i+1})`);
        container.addEventListener('click', (e) => {
            displayTasks(list[e.currentTarget.id]);
            listResetStyle(list.length);
            styleSelected(container);
            curList = e.currentTarget.id;
        });
    }

    //event listener do zmiany stanu checkboxów
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.addEventListener('click', (e) => {
        if(e.target.matches('input')) {
            list[curList].tasks[e.target.dataset.index].checked = !list[curList].tasks[e.target.dataset.index].checked;
            const ele = document.querySelector(`#listInput${curList}`);
            if(allTasksChecked(list[curList])) {
                list[curList].checked = true;
                ele.setAttribute('checked','');
            } else {
                list[curList].checked = false;
                ele.removeAttribute('checked');
            }
            localStorage.setItem('list', JSON.stringify(list));
        }      
    });
}