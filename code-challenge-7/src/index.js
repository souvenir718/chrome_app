import './styles.css';

const form = document.querySelector('.js-form'),
    range = form.querySelector('.js-range'),
    input = form.querySelector('.js-input'),
    submitBtn = form.querySelector('button'),
    choose = document.querySelector('.js-choose'),
    result = document.querySelector('.js-result'),
    rangeText = document.querySelector('.js-rangeText');

let maxValue = range.max;
let randomNumber = Math.floor(Math.random() * maxValue);

function handleRange(event) {
    const changedMax = event.target.value;
    rangeText.innerHTML = `Generate a number between 0 and ${changedMax}`;
    maxValue = changedMax;
}

function handleSubmit(event) {
    event.preventDefault();
}

function handleChoose() {
    if (parseInt(maxValue) < parseInt(input.value)) {
        alert('최대값보다 입력값이 커요!');
        input.value = '';
    } else {
        randomNumber = Math.floor(Math.random() * maxValue);
        choose.innerHTML = `You chose : ${input.value}, the machine chose : ${randomNumber}`;
        if (randomNumber === parseInt(input.value)) {
            result.innerHTML = 'You Win!!';
        } else {
            result.innerHTML = 'You Lost..';
        }
    }
}

function init() {}

range.addEventListener('change', handleRange);
form.addEventListener('submit', handleSubmit);
submitBtn.addEventListener('click', handleChoose);

init();
