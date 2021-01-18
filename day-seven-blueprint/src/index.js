<<<<<<< HEAD
// <⚠️ DONT DELETE THIS ⚠️>
import './styles.css';
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector('.js-addTask'),
    taskInput = taskForm.querySelector('input'),
    pendingList = document.querySelector('.js-pending'),
    finishedList = document.querySelector('.js-finished');

const PENDING_LS = 'PENDING';
const FINISHED_LS = 'FINISHED';

let pendingTodos = [];
let finishedtoDos = [];

function loadToDos() {
    const loadedPendingTodos = localStorage.getItem(PENDING_LS);
    const loadedFinishedTodos = localStorage.getItem(FINISHED_LS);

    if (loadedPendingTodos !== null) {
        const parsedPendingTodos = JSON.parse(loadedPendingTodos);
        parsedPendingTodos.forEach(function (todo) {
            paintTodo(todo.text);
        });
    }
    if (loadedFinishedTodos !== null) {
    }
}

function saveTodos() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingTodos));
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedtoDos));
}

function deletePending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanPendings = pendingTodos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });
    pendingTodos = cleanPendings;
    saveTodos();
}

function finishPending(event) {}

function paintTodo(text) {
    const pendingLi = document.createElement('li');
    const delBtn = document.createElement('button');
    const finishBtn = document.createElement('button');
    const pendingSpan = document.createElement('span');
    const newId = pendingTodos.length + 1;

    delBtn.innerHTML = 'Delete';
    finishBtn.innerHTML = 'Finish';
    pendingSpan.innerText = `${text} `;

    delBtn.addEventListener('click', deletePending);
    finishBtn.addEventListener('click', finishPending);

    pendingLi.appendChild(pendingSpan);
    pendingLi.appendChild(delBtn);
    pendingLi.appendChild(finishBtn);
    pendingLi.id = newId;

    pendingList.appendChild(pendingLi);

    const toDoObj = {
        text: text,
        id: newId,
    };
    pendingTodos.push(toDoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintTodo(currentValue);
    taskInput.value = '';
}

function init() {
    loadToDos();
    taskForm.addEventListener('submit', handleSubmit);
}

=======

import "./styles.css";

const select = document.querySelector("select");
const myCountry = document.querySelector("h2");


function selectValue(event) {
  localStorage.setItem("myCountry", event.target.value);
  myCountry.innerText = `MyCountry is ${event.target.value}`;
}

function init() {
    myCountry.innerText = `MyCountry is ${ localStorage.getItem('myCountry')}`;
    select.addEventListener("change", selectValue);
}
>>>>>>> 0064f1edf24934922be5bdceceb5023e65d6f315
init();
