let inputField = document.getElementById('inputField');
const key = '3f2f9bc259ce45af21bda8132115c015';
let celciusField = document.getElementById('celciusMain');
let city = document.getElementById('city');
let sky = document.getElementById('sky');
let weatherImg = document.getElementById('weather-img');


document.getElementById('showBtn').addEventListener('click', function(){
    let inputFields = inputField.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFields}&appid=${key}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showWeather(data))
})

let showWeather = (data) => {
    let iconId = data.weather[0].icon;
    let imgUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    console.log(data);
    celciusField.innerText = data.main.temp;
    city.innerText = data.name;
    sky.innerText = data.weather[0].description.toUpperCase() ;
    weatherImg.style.display = 'block';
    weatherImg.setAttribute('src', imgUrl);
}