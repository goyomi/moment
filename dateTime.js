const days = document.querySelector('#days');
const clock = document.querySelector('#clock');

// 날짜 & 시간
function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  days.innerText = `${year}-${month}-${day}`;

  return date;
}

function getTime() {
  const date = getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate();
getTime();
setInterval(getTime, 1000);