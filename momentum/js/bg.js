const bg = document.getElementById('js-bg');

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    bg.style.backgroundImage = `url(images/${imgNumber + 1}.jpg)`;
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    let randomNumber = genRandom();
    paintImage(randomNumber);
    setInterval(() => {
        randomNumber = genRandom();
        paintImage(randomNumber);
    }, 60000);
}
init();
