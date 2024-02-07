import _ from 'lodash';
import header from './header';
import './style.css';
import footer from './footer';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
const main = document.createElement('main');

const menu = document.createElement('div');
menu.className = 'menu';
menu.innerText = 'Menu';

const options = document.createElement('div');
options.className = 'options';
const option1 = document.createElement('div');
option1.innerText = 'Option 1';
const option2 = document.createElement('div');
option2.innerText = 'Option 2';
const option3 = document.createElement('div');
option3.innerText = 'Option 3';
options.appendChild(option1);
options.appendChild(option2);
options.appendChild(option3);
options.classList.add('hidden');

menu.addEventListener('click', () => {
    options.classList.toggle('hidden');
});

main.appendChild(menu);
main.appendChild(options);

content.appendChild(header());
content.appendChild(main);
// content.appendChild(footer());
