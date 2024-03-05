const logoutBtn = document.querySelector('#logoutBtn');

function onLogoutBtnClick() {
  // log in 후 뒤로가기 버튼 눌렀을 때 userName 남기기
  const userNameInput = loginForm.querySelector('input');
  userNameInput.value = localStorage.getItem(USER_NAME_KEY);

  localStorage.removeItem(USER_NAME_KEY);

  header.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'none';
  loginForm.classList.remove(HIDE_CLASSNAME);
};

logoutBtn.addEventListener('click', onLogoutBtnClick);