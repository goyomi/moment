const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const loginUserName = document.querySelector("#loginUserName");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const HIDE_CLASSNAME = "hide_display";
const USER_NAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();

  // 공백제출 막기
  const trimLoginInput = loginInput.value.trim();
  if (trimLoginInput === "") {
    alert("이름을 한 글자 이상 입력해 주세요.");
    return;
  }

  const userName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, userName);
  loginForm.classList.add(HIDE_CLASSNAME);

  header.style.display = "";
  main.style.display = "";
  footer.style.display = "";
  loginUserName.innerText = userName;

  loginInput.value = "";
}

loginForm.addEventListener("submit", onLoginSubmit);

const getUserName = localStorage.getItem(USER_NAME_KEY);
if (getUserName === null) {
  loginForm.classList.remove(HIDE_CLASSNAME);
} else {
  // 로그인 후
  loginForm.classList.add(HIDE_CLASSNAME);
  header.style.display = "";
  main.style.display = "";
  footer.style.display = "";
  loginUserName.innerText = `${getUserName} 님.`;
}
