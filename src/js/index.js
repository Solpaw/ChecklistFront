import '../style/style.scss';
import {renderContainer,displayTasks} from './container.js';
import List from './List.js';
import Task from './Task.js';
import {listResetStyle,styleList, taskResetStyle, styleTask} from './styles.js';

const test = () => {
    const body = document.querySelector('body');
    const cont = document.createElement('div');
    cont.classList.add('ui','container');
    body.appendChild(cont);
    const button = document.createElement('button');
    button.classList.add('ui','button');
    button.innerText = 'Press here';
    cont.appendChild(button);
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
            styleList(container);
            curList = e.currentTarget.id;
        });
    }

    //event listener do zmiany stanu checkboxów
    let curTask;
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
        else if(e.target.matches('div')) {
            curTask = e.target.id[4];
        }
        else if (e.target.matches('span')) {
            curTask = e.target.id[4];
        }
        if(curTask) {
            taskResetStyle(list[curList].tasks.length);
            styleTask(document.querySelector(`#task${curTask}`));
        }
    });

    //event listenery do przycisków
    const buttons = document.querySelectorAll('.button');
    buttons[0].addEventListener('click', (e) => {
        document.querySelector('.listPopup').style.display = 'block';
        document.querySelector('.formContainer').scrollIntoView();
    });
    buttons[1].addEventListener('click', (e) => {
        if(curList) {
            if(confirm('Do you want to delete the selected list?')) {
                list.splice(curList,1);
                localStorage.setItem('list', JSON.stringify(list));
                location.reload();
            }
        } else alert('Please select a list!');
    });
    buttons[2].addEventListener('click', (e) => {
        if(curList) {
            document.querySelector('.taskPopup').style.display = 'block';
            document.querySelector('.formContainer').scrollIntoView();
        } else alert('Please select a list!');
        
    });
    buttons[3].addEventListener('click', (e) => {
        if(curTask) {
            if(confirm('Do you want to delete the selected task?')) {
                list[curList].tasks.splice(curTask,1);
                localStorage.setItem('list', JSON.stringify(list));
                location.reload();
            }          
        } else alert('Please select a task!');
    });

    //event listenery do formularzy
    const listAdd = document.querySelector('.listAdd');
    listAdd.addEventListener('click', (e) => {
        let str = document.querySelector('.listInput').value;
        const l = new List(str);
        list.push(l);
        localStorage.setItem('list', JSON.stringify(list));
    });
    const taskAdd = document.querySelector('.taskAdd');
    taskAdd.addEventListener('click', (e) => {
        let str = document.querySelector('.taskInput').value;
        const t = new Task(str);
        list[curList].tasks.push(t);
        localStorage.setItem('list', JSON.stringify(list));
    });
    const listCancel = document.querySelector('.listCancel');
    listCancel.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.listPopup').style.display = 'none';
    });
    const taskCancel = document.querySelector('.taskCancel');
    taskCancel.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.taskPopup').style.display = 'none';
    });
}