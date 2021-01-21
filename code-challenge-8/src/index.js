const calContainer = document.querySelector('.js-cal'),
    resetBtn = calContainer.querySelector('.js-reset'),
    result = calContainer.querySelector('.js-result'),
    numBtn = calContainer.querySelectorAll('.js-num'),
    opBtn = calContainer.querySelectorAll('.js-op'),
    equalBtn = calContainer.querySelector('.js-equals');

let tempResult = '';
let isOp = false;
let opNum = 0;

function resetResult() {
    result.innerHTML = 0;
    tempResult = '';
}

function handleNum(event) {
    const num = event.target.innerText;
    if (result.innerHTML == 0 || isOp === true) {
        result.innerHTML = num;
        tempResult += num;
    } else {
        result.innerHTML += num;
        tempResult += num;
    }
    console.log(tempResult);
    isOp = false;
}

function handleOp(event) {
    if (opNum > 0) {
        result.innerHTML = eval(tempResult);
    }
    const op = event.target.innerText;

    tempResult += op;
    isOp = true;
    opNum++;
}

function handleEqual() {
    const equalResult = eval(tempResult);
    if (equalResult) result.innerHTML = equalResult;
    else result.innerHTML = 0;
    opNum = 0;
}

resetBtn.addEventListener('click', resetResult);
numBtn.forEach((num) => num.addEventListener('click', handleNum));
opBtn.forEach((op) => op.addEventListener('click', handleOp));
equalBtn.addEventListener('click', handleEqual);
