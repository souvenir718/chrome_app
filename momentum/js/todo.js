const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'TODOS';

let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function loadTodo() {
    const strTodo = localStorage.getItem(TODOS_LS);

    if (strTodo !== null) {
        todos = JSON.parse(strTodo);
        todos.forEach(function (todo) {
            paintTodo(todo.text);
        });
    }
}

function addTodo(event) {
    event.preventDefault();
    const todoText = toDoInput.value;
    paintTodo(todoText);
    toDoInput.value = '';
}

function paintTodo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const newId = Math.random().toString(36).slice(2);

    span.innerHTML = `${text}  `;

    li.appendChild(span);
    li.id = newId;

    const todoObj = {
        id: newId,
        text: text,
    };
    toDoList.appendChild(li);
    todos.push(todoObj);

    saveTodo();
}

function init() {
    loadTodo();
    console.log(todos);
    toDoForm.addEventListener('submit', addTodo);
}

init();
