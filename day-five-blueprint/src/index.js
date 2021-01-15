import './styles.css';
const timer = document.querySelector('h2');

const HOURS_MILLISECONDS = 3600000;

// 크리스마스 이브까지 시간 계산(2020년도)
function getTime() {
    const date = new Date();
    const xmasDay = new Date('2020-12-24:00:00:00+0900');
    const gap = date - xmasDay;
    const day = Math.ceil(gap / (HOURS_MILLISECONDS * 24));
    const hour = Math.ceil((gap % (HOURS_MILLISECONDS * 24)) / HOURS_MILLISECONDS);
    const min = Math.ceil((gap % HOURS_MILLISECONDS) / (1000 * 60));
    const sec = Math.ceil((gap % (1000 * 60)) / 1000);
    timer.innerText = `${day}d ${hour < 10 ? `0${hour}` : hour}h ${min < 10 ? `0${min}` : min}m ${sec < 10 ? `0${sec}` : sec}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
