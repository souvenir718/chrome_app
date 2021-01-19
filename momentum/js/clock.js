const clockContainer = document.querySelector('.js-clock');
const clock = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const stringHour = hour < 10 ? `0${hour}` : hour;
    const stringMinute = minute < 10 ? `0${minute}` : minute;
    const stringSecond = second < 10 ? `0${second}` : second;

    clock.innerText = `${stringHour} : ${stringMinute} : ${stringSecond}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
