const body = document.querySelector('body'),
    img = body.querySelector('img');

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    // img.src = `../images/${imgNumber}.jpg`;
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();
