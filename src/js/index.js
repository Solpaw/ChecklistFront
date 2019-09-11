import '../style/style.scss';

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
    test();
}