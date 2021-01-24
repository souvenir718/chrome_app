// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
//Math.random().toString(36).slice(2)
const taskForm = document.querySelector(".js-addTask"),
  taskInput = taskForm.querySelector("input"),
  pendingList = document.querySelector(".js-pending"),
  finishedList = document.querySelector(".js-finished");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pendingTodos = [];
let finishedTodos = [];

function loadToDos() {
  const loadedPendingTodos = localStorage.getItem(PENDING_LS);
  const loadedFinishedTodos = localStorage.getItem(FINISHED_LS);

  if (loadedPendingTodos !== null) {
    const parsedPendingTodos = JSON.parse(loadedPendingTodos);
    parsedPendingTodos.forEach(function (todo) {
      paintTodo(todo.text, "pending");
    });
  }
  if (loadedFinishedTodos !== null) {
    const parsedFinishedTodos = JSON.parse(loadedFinishedTodos);
    parsedFinishedTodos.forEach(function (todo) {
      paintTodo(todo.text, "finished");
    });
  }
}

function saveTodos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingTodos));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedTodos));
}

function deleteTodos(type, event) {
  const btn = event.target;
  const li = btn.parentNode;
  if (type === "pending") {
    pendingList.removeChild(li);
    const cleanPendings = pendingTodos.filter(function (todo) {
      return todo.id !== li.id;
    });
    pendingTodos = cleanPendings;
  } else {
    finishedList.removeChild(li);
    const cleanFinishs = finishedTodos.filter(function (todo) {
      return todo.id !== li.id;
    });
    finishedTodos = cleanFinishs;
  }

  saveTodos();
}

function handlePending(type, event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span").innerHTML;

  if (type === "pending") {
    pendingList.removeChild(li);
    const cleanPendings = pendingTodos.filter(function (todo) {
      return todo.id !== li.id;
    });
    pendingTodos = cleanPendings;
    paintTodo(text, "finish");
  } else {
    finishedList.removeChild(li);
    const cleanFinishs = finishedTodos.filter(function (todo) {
      return todo.id !== li.id;
    });
    finishedTodos = cleanFinishs;
    paintTodo(text, "pending");
  }

  saveTodos();
}

function paintTodo(text, type) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const secondBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Math.random().toString(36).slice(2);

  if (type === "pending") {
    secondBtn.innerHTML = "Finish";
    secondBtn.classList.add("finish");
    delBtn.addEventListener("click", (event) => {
      deleteTodos("pending", event);
    });
    secondBtn.addEventListener("click", (event) => {
      handlePending("pending", event);
    });
  } else {
    secondBtn.innerHTML = "Pending";
    secondBtn.classList.add("pending");
    delBtn.addEventListener("click", (event) => {
      deleteTodos("finished", event);
    });
    secondBtn.addEventListener("click", (event) => {
      handlePending("finished", event);
    });
  }

  delBtn.innerHTML = "Delete";
  delBtn.classList.add("delete");
  span.innerText = `${text}  `;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(secondBtn);
  li.id = newId;

  const toDoObj = {
    text: text,
    id: newId
  };

  if (type === "pending") {
    pendingList.appendChild(li);
    pendingTodos.push(toDoObj);
  } else {
    finishedList.appendChild(li);
    finishedTodos.push(toDoObj);
  }

  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintTodo(currentValue, "pending");
  taskInput.value = "";
}

function init() {
  loadToDos();
  taskForm.addEventListener("submit", handleSubmit);
}

init();
