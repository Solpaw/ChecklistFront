import '../style/style.scss';
import {renderContainer} from './container.js';
import List from './List.js';
import Task from './Task.js';

window.onload = () => {
    const tasks1 = [new Task('ale'),new Task('jazda!!')];
    const tasks2 = [new Task('dawaj'),new Task('lecimy'), new Task('uaaaa')];
    const list = [new List('jeden',tasks1),new List('dwa',tasks2)];
    renderContainer(list);

    //event listenery do zmiany wyświetlanych tasków
    for(let i=1;i<=list.length;i++) {
        const item = document.querySelector(`.listItem:nth-child(${i})`);
        item.addEventListener('click', (e) => {
            list[e.target.id].displayTasks();
        });
    }
}