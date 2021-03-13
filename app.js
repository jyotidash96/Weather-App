const weatherApi = {
    key: "b8914589caa7ca04b8b4ff34d3224464" ,
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}


const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress' , (event) =>{
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }

});


function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?-${city}&appid-${weatherApi.key}`)
    .then(function(response){
        let data = response.json();
        return data;

    }).then(showweatherReport);
}

function showweatherReport(data){
console.log(data);

let city = document.getElementById('city');
city.innerText = `${data.name} `;

let temperature = document.getElementById('temp');
temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

let minmaxTemp = document.getElementById('min-max');
minmaxTemp.innerHTML = `${Math.floor(data.main.temp_min)}&deg;C (min)/ ${Math.ceil(data.main.temp_max)}&deg;C(max)`;


let weatherType = document.getElementById('weather');
weatherType.innerText = `${data.weather[0].min}`;

let date=document.getElementById('date');
let todayDate = new Date();
date.innerText = dateManage(todayDate);


if(weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('images\rainy.jpg')"
}
}

function dateManage(date1){
let days = ["sunday" , "Monday" , "tuesday" , "wednesday", "thursday" , "fridaye" ,"saturday"];

let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" ,"Agust" , "September" ,"October" ,"November" , "December"];
let year = date1.getFullYear();
let month = months[date1.getMonth()];
let date = date1.getDate();
let day = days[date1.getDay()];

return `${date} ${month} (${day}) , ${year}`;
}







