// 유저 현재위치 받아오기
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

const API_KEY = '6fb68e472e3f68d3c20fc55f183c5b8c';

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const weather = document.querySelector('#weather');
  const temperature = document.querySelector('#temperature');
  const cityName = document.querySelector('#cityName');

  fetch(url).then(response => response.json()).then(data => {
    weather.innerText = data.weather[0].main;
    temperature.innerHTML = `${data.main.temp}&deg;C`;
    cityName.innerText = data.name;

    weather.style.setProperty('--weather-icon', `url('https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`);
  }).catch(error => {
    weather.innerText = '날씨정보를 받아올 수 없습니다.';
    temperature.innerText = '';
    cityName.innerText = '';
  });
}

function onGeoError() {
  alert('위치를 찾을 수 없습니다');
}