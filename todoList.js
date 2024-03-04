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

  if (todos.length >= 5) {
    alert('할 일 목록은 최대 5개까지만 추가할 수 있습니다.');
    return;
  }

  // 공백제출 막기
  const trimTodoInput = todoInput.value.trim();
  if (trimTodoInput === '') {
    alert('내용을 한 글자 이상 입력해 주세요.');
    return;
  }

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
  const btns = document.createElement('span');
  btns.className = 'btns';
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
  li.appendChild(btns);
  btns.appendChild(deleteBtn);
  btns.appendChild(editBtn);
  btns.appendChild(checkBtn);
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

// 삭제버튼
function deleteTodos() {
  const parentLi = document.querySelector('#todoList li');
  parentLi.remove();
  todos = todos.filter(todo => todo.id !== parseInt(parentLi.id));
  saveTodos();
  countTodoProgress();
}

// 수정버튼
function editTodos(event) {
  const parentLi = event.target.closest('li');
  const span = parentLi.querySelector('span');
  const editBtn = parentLi.querySelector('button:nth-child(2)');

  if (!onEdit) {
    onEdit = true;
    const inputField = document.createElement('input');
    inputField.className = 'edit_input';
    inputField.minLength = '1';
    inputField.maxLength = '9';
    inputField.required = true;
    inputField.type = 'text';
    inputField.value = span.innerText;
    parentLi.replaceChild(inputField, span);
    editBtn.innerText = '저장';

    inputField.addEventListener('keydown', (event) => handleEnterKey(event, parentLi, inputField, editBtn));
    inputField.focus();
  } else {
    saveEditedTodo(parentLi, editBtn);
  }
}

// 완료버튼
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
  todoList.innerHTML = '';

  todos = [];
  numOfDone = 0;

  countTodoProgress();
  countTodoDone();
  handleTodoSubmit();
}

resetBtn.addEventListener('click', resetTodos);

// 엔터키 처리
function handleEnterKey(event, parentLi, inputField, editBtn) {
  if (event.key === 'Enter') {
    saveEditedTodo(parentLi, editBtn);
  }
}

// 투두 수정 후 저장
function saveEditedTodo(parentLi, editBtn) {
  onEdit = false;
  const inputField = parentLi.querySelector('input');
  const newText = inputField.value;
  const newSpan = document.createElement('span');

  newSpan.innerText = newText;
  parentLi.replaceChild(newSpan, inputField);
  editBtn.innerText = '수정';

  // 공백제출 막기
  const trimInputField = inputField.value.trim();
  if (trimInputField === '') {
    alert('내용을 한 글자 이상 입력해 주세요.');
    return;
  }

  const todoIndex = todos.findIndex(todo => todo.id === parseInt(parentLi.id));
  if (todoIndex > -1) {
    todos[todoIndex].text = newText;
    saveTodos();
  }
}