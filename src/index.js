import _ from 'lodash';
import header from './header';
import './style.css';
import footer from './footer';

const content = document.createElement('content');
document.body.appendChild(content);
const main = document.createElement('main');

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

content.appendChild(header());
main.appendChild(component());
content.appendChild(main);
content.appendChild(footer());
