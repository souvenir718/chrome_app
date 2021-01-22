const nameForm = document.querySelector('.js-form');
const nameInput = nameForm.querySelector('input');
const nameSpace = document.querySelector('.js-greetings');

const NAME_LS = 'Name';

function handleName(event) {
    event.preventDefault();

    localStorage.setItem(NAME_LS, nameInput.value);
    loadName();
}

function writeName(text) {
    nameSpace.innerHTML = `Hello, ${text} 😎`;
}

function hideForm() {
    nameForm.classList.remove('show');
    nameForm.classList.add('hide');
}

function showForm() {
    nameForm.classList.remove('hide');
    nameForm.classList.add('show');
}

function loadName() {
    const name = localStorage.getItem(NAME_LS);
    if (name === null) {
        showForm();
    } else {
        hideForm();
        writeName(name);
    }
}

function init() {
    loadName();
}

if (nameForm) nameForm.addEventListener('submit', handleName);

init();
