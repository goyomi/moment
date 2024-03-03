const logoutBtn = document.querySelector('#logoutBtn');

function onLogoutBtnClick() {
  localStorage.removeItem(USER_NAME_KEY);

  header.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'none';
  loginForm.classList.remove(HIDE_CLASSNAME);
};

logoutBtn.addEventListener('click', onLogoutBtnClick);