// function getWeatherReg(reg){
//     var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + reg + '&APPID=' + appid;
//     var xhr = new XMLHttpRequest();

//     var selectedregion = document.getElementById('entreg');
//     var tempyoreg = document.getElementById('yoregtemp');


// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             var data = JSON.parse(xhr.responseText);
//             console.log(data);
//             var temp = data.main.temp;
//             console.log(temp);
//             selectedregion.innerHTML = data.name;
//             tempyoreg.innerHTML = data.main.temp;
//         } else {
//             console.log(xhr.statusText);
//         }
//     }
// };


// xhr.open('GET', url, true);
// xhr.send();
// }










var appid = 'dd248616b9c538a5d8d575debddb41b3';

function YourWeather(reg) {
    var link = 'https://api.openweathermap.org/data/2.5/weather?q=' + reg + '&APPID=' + appid;
    var xhr = new XMLHttpRequest();

    var selectedRegion = document.getElementById('entreg');
    var weatherr = document.getElementById('weatherr')
    var weatIco = document.querySelector('.weaticon');
    // var iconUrl = data.weather[0].icon;
    var tempYoReg = document.getElementById('yoregtemp');
    var atmtsk = document.getElementById('atmtisk');
    var hum = document.getElementById('hum');
    var windSpeed = document.getElementById('windspeed');
    var cloud = document.getElementById('cloud')

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            selectedRegion.innerHTML = data.name;
            weatherr.innerHTML = data.weather[0].description;
            weatIco.setAttribute ('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
            // document.body.appendChild(weatIco);
            tempYoReg.innerHTML = (data.main.temp - 273.15).toFixed(2);
            atmtsk.innerHTML = data.main.pressure;
            hum.innerHTML = data.main.humidity;
            windSpeed.innerHTML = data.wind.speed;
            cloud.innerHTML = data.clouds.all;
        }
    }
}
xhr.open('GET',link, true);
xhr.send()
}
// YourWeather(reg);


var sendreg = document.getElementById("sendreg");

sendreg.addEventListener("click", function () {
    var reg = document.getElementById('reg').value;

    YourWeather(reg);
    // getForecastWeather(reg);

    // var weathervals = document.getElementById("weathervals");
    // weathervals.remove();
});







































// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             var data = JSON.parse(xhr.responseText);
//             console.log(data);

//             selectedregion.innerHTML = data.name;
//             // weatherr.innerHTML = data.weather[0].discription;
//             tempyoreg.innerHTML = (data.main.temp - 273.15).toFixed(2);
//             // tempyoreg.innerHTML = data.main.temp;
//             atmtsk.innerHTML = data.main.pressure;
//             hum.innerHTML = data.main.humidity;
//             windspeed.innerHTML = data.wind.speed;
//             cloud.innerHTML = data.clouds.all;
//         }
//     }
// }
// var selectedregion = document.getElementById('entreg');
// var weatherr = document.getElementById('weather')
// var tempyoreg = document.getElementById('yoregtemp');
// var atmtsk = document.getElementById('atmtisk');
// var hum = document.getElementById('hum');
// var windspeed = document.getElementById('windspeed');
// var cloud = document.getElementById('cloud')

// var appid = 'dd248616b9c538a5d8d575debddb41b3';
// var reg = 'Ivano-Frankivsk'
// xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + reg + '&APPID=' + appid);
// xhr.send();


// var sendreg = document.getElementById("sendreg");

// sendreg.addEventListener("click", function () {
//     var reg = document.getElementById('reg').value;

//     getCurrentWeather(reg);
//     getForecastWeather(reg);

//     // var weathervals = document.getElementById("weathervals");
//     // weathervals.remove();
// });

















































// function CurrentWeather(city){
//    var findcity = document.getElementsByid("city");
//    var appid = 'dd248616b9c538a5d8d575debddb41b3';

// const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + findcity + '&APPID=' + appid;

// fetch(requestURL, {
//     method: 'GET',
//     }).then(Response => {
//     Response.json.().then(data => {
//         console.info(data);
//     });
// }).catch(error => {
//     console.error(Error);
// })
// }
// console.log(CurrentWeather);

// let appid = 'dd248616b9c538a5d8d575debddb41b3';
// let units = 'imperial'
// let searchMethod;
//-------------------------------------------------------------------------------------------------------------------
// function getSearchMethod(searchTerm) {
//     if(searchTerm.lenght === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
//         searchMethod = 'zip';
//     else 
//         searchMethod = 'q';
// }
// function searchWeather(searchTerm) {

//     fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appid}`).then(result => {
//         return result.json();
//     }).then(result => {
//         init(result);
//     })
// }

// function init(resultFromServer) {
//     console.log(resultFromServer);
// }

// document.getElementById('city').addEventListener('click', () => {
//     let searchTerm = documet.getElementById('sendid').value;
//     if(searchTerm)
//     searchWeather(searchTerm);
// })