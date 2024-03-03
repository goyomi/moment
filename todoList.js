const todoForm = document.querySelector('#todoForm');
const todoInput = todoForm.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const resetBtn = document.querySelector('#resetBtn');

const TODOS_KEY = 'todos';
const TODO_DONE_KEY = 'todoDone';

let todos = [];
let numOfDone = 0;

let onEdit = false;

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObject = {
    text: newTodo,
    id: Date.now()
  };
  todos.push(newTodoObject);
  paintTodos(newTodoObject);
  saveTodos();
}

function paintTodos(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '삭제';
  deleteBtn.addEventListener('click', deleteTodos);
  const editBtn = document.createElement('button');
  editBtn.innerText = '수정';
  editBtn.addEventListener('click', editTodos);
  const checkBtn = document.createElement('button');
  checkBtn.innerText = '완료';
  checkBtn.addEventListener('click', doneTodos);

  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  li.appendChild(checkBtn);
  todoList.appendChild(li);
}

todoForm.addEventListener('submit', handleTodoSubmit);

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  localStorage.setItem(TODO_DONE_KEY, numOfDone.toString());
  countTodoProgress();
}

const getTodos = localStorage.getItem(TODOS_KEY);
if (getTodos) {
  const parsedToDos = JSON.parse(getTodos);
  todos = parsedToDos;
  parsedToDos.forEach(paintTodos);
}
const getTodoDone = localStorage.getItem(TODO_DONE_KEY);
numOfDone = getTodoDone ? parseInt(getTodoDone, 10) : 0;

// todo list 삭제, 수정, 완료 버튼
function deleteTodos(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  todos = todos.filter(todo => todo.id !== parseInt(deleteLi.id));
  saveTodos();
  countTodoProgress();
}

function editTodos(event) {
  const parentLi = event.target.parentElement;
  const span = parentLi.querySelector('span');
  // const inputField = `<input type="text" value="${span.innerText}">`;
  const editBtn = parentLi.querySelector('button:nth-child(3)');

  if (!onEdit) {
    onEdit = true;
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = span.innerText;

    parentLi.replaceChild(inputField, span);
    editBtn.innerText = '저장';
  } else {
    onEdit = false;
    const inputField = parentLi.querySelector('input');
    const newText = inputField.value;
    const newSpan = document.createElement('span');

    newSpan.innerText = newText;
    parentLi.replaceChild(newSpan, inputField);
    editBtn.innerText = '수정';

    const todoIndex = todos.findIndex(todo => todo.id === parseInt(parentLi.id));
    if (todoIndex > -1) {
      todos[todoIndex].text = newText;
      saveTodos();
    }
  }
}

function doneTodos(event) {
  deleteTodos(event);
  numOfDone++;
  countTodoDone();
  saveTodos();
}

// 진행중, 완료
function countTodoProgress() {
  const countProgress = document.querySelector("#todoProgress");
  const listLength = todos.length;
  const spanValue = `진행중: ${listLength || 0}`;

  countProgress.innerText = spanValue;
}

function countTodoDone() {
  const countDone = document.querySelector("#todoDone");
  const spanValue = `완료: ${numOfDone || 0}`;

  countDone.innerText = spanValue;
}

countTodoProgress();
countTodoDone();

// reset
function resetTodos() {
  localStorage.removeItem(TODOS_KEY);
  todoList.remove();

  todos = [];
  numOfDone = 0;

  countTodoProgress();
  countTodoDone();
}

resetBtn.addEventListener('click', resetTodos);
