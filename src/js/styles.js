const listResetStyle = (count) => {
    for(let i=1;i<=count;i++) {
        const item = document.querySelector(`.listItem:nth-child(${i})`);
        item.style.backgroundColor = 'lightsteelblue';
        item.style.borderRight = '1px solid black';
    }
}

const styleList = (item) => {
    item.style.borderRight = '1px dashed black';
    item.style.backgroundColor = 'white';
    return item.id;
}

const taskResetStyle = (count) => {
    for(let i=0;i<count;i++) {
        const item = document.querySelector(`#task${i}`);
        item.style.backgroundColor = 'white';
    }
}

const styleTask = (item) => {
    item.style.backgroundColor = 'lightyellow';
}

module.exports = {listResetStyle, styleList, taskResetStyle, styleTask};