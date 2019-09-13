const listResetStyle = (count) => {
    for(let i=1;i<=count;i++) {
        const item = document.querySelector(`.listItem:nth-child(${i})`);
        item.style.backgroundColor = 'lightsteelblue';
        item.style.borderRight = '1px solid black';
    }
}

const styleSelected = (item) => {
    item.style.borderRight = '1px dashed black';
    item.style.backgroundColor = 'white';
    return item.id;
}

module.exports = {listResetStyle, styleSelected};