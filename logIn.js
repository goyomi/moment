const loginForm = document.querySelector('#loginForm');
const loginInput = loginForm.querySelector('input');
const loginUserName = document.querySelector('#loginUserName');

const HIDE_CLASSNAME = 'hide_display';
const USER_NAME_KEY = 'userName';

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, userName);
  loginForm.classList.add(HIDE_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

const getUserName = localStorage.getItem(USER_NAME_KEY);
if (getUserName === null) {
  loginForm.classList.remove(HIDE_CLASSNAME);
} else {
  // 로그인 후 
  loginForm.classList.add(HIDE_CLASSNAME);
  loginUserName.innerText = getUserName;
}