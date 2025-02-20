const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temprature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click",() =>{
    let city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'1911d59e8f6ad290220d099aa5e4c924'}`).then(response=>response.json()).then(data => {
        console.log(data);
        const iconCode= data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon" />`

        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML  = `${weatherCity}, ${weatherCountry}`;

        let weatherTemp = data.main.temp;
        weatherTemp = weatherTemp - 273;
        const temp = weatherTemp.toFixed(2)
        temprature.innerHTML = `${temp}°C`
})

}