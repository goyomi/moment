const days = document.querySelector("#days");
const clock = document.querySelector("#clock");

// 날짜 & 시간
function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  days.innerText = `${year}-${month}-${day}`;

  return date;
}

function getTime() {
  const date = getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours.toString().padStart(2, "0") : "12";

  clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

getDate();
getTime();
setInterval(getTime, 1000);
