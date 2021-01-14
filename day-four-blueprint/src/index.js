import { purple } from 'color-name';
import './styles.css';

const body = document.querySelector('body');

function handleResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 500) {
        body.className = 'blue';
    } else if (window.innerWidth >= 500 && window.innerWidth < 800) {
        body.className = 'purple';
    } else {
        body.className = 'yellow';
    }
}

window.addEventListener('resize', handleResize);
