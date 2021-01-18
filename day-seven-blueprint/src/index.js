// <⚠️ DONT DELETE THIS ⚠️>
import './styles.css';
// <⚠️ /DONT DELETE THIS ⚠️>
//Math.random().toString(36).slice(2)
const taskForm = document.querySelector('.js-addTask'),
    taskInput = taskForm.querySelector('input'),
    pendingList = document.querySelector('.js-pending'),
    finishedList = document.querySelector('.js-finished');

const PENDING_LS = 'PENDING';
const FINISHED_LS = 'FINISHED';

let pendingTodos = [];
let finishedTodos = [];

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
        const parsedFinishedTodos = JSON.parse(loadedFinishedTodos);
        parsedFinishedTodos.forEach(function (todo) {
            paintTodo2(todo.text);
        });
    }
}

function saveTodos() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingTodos));
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedTodos));
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

function deleteFinish(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanFinish = finishedTodos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });
    finishedTodos = cleanFinish;
    saveTodos();
}

function finishPending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const finishLi = document.createElement('li');
    const delBtn = document.createElement('button');
    const pendingBtn = document.createElement('button');
    const newId = finishedTodos.length + 1;
    const finishSpan = document.createElement('span');

    const text = li.querySelector('span').innerHTML;

    delBtn.innerHTML = 'Delete';
    pendingBtn.innerHTML = 'Pending';
    finishSpan.innerHTML = text;

    pendingList.removeChild(li);
    const cleanPendings = pendingTodos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });
    pendingTodos = cleanPendings;

    delBtn.addEventListener('click', deleteFinish);
    pendingBtn.addEventListener('click', returnPending);

    finishLi.appendChild(finishSpan);
    finishLi.appendChild(delBtn);
    finishLi.appendChild(pendingBtn);
    finishLi.id = newId;

    finishedList.appendChild(finishLi);
    const toDoObj = {
        text: text,
        id: newId,
    };
    finishedTodos.push(toDoObj);
    saveTodos();
}

function returnPending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const pendingLi = document.createElement('li');
    const delBtn = document.createElement('button');
    const finishBtn = document.createElement('button');
    const newId = pendingTodos.length + 1;
    const pendingSpan = document.createElement('span');

    const text = li.querySelector('span').innerHTML;

    delBtn.innerHTML = 'Delete';
    finishBtn.innerHTML = 'Finish';
    pendingSpan.innerHTML = text;

    finishedList.removeChild(li);
    const cleanFinish = finishedTodos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });
    finishedTodos = cleanFinish;

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

function paintTodo2(text) {
    const finishedLi = document.createElement('li');
    const delBtn = document.createElement('button');
    const pendingBtn = document.createElement('button');
    const newId = finishedTodos.length + 1;
    const finishSpan = document.createElement('span');

    delBtn.innerHTML = 'Delete';
    pendingBtn.innerHTML = 'Pending';
    finishSpan.innerText = `${text} `;

    delBtn.addEventListener('click', deleteFinish);
    pendingBtn.addEventListener('click', returnPending);

    finishedLi.appendChild(finishSpan);
    finishedLi.appendChild(delBtn);
    finishedLi.appendChild(pendingBtn);
    finishedLi.id = newId;

    finishedList.appendChild(finishedLi);

    const toDoObj = {
        text: text,
        id: newId,
    };
    finishedTodos.push(toDoObj);
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

init();
