// 4b224a03bdb8b4f972defb7ef719c1e8
// 3711cf96c86f824b05398e645cfcd2e0
// api.openweathermap.org/data/2.5/weather?q=Bolpur&appid=4b224a03bdb8b4f972defb7ef719c1e8

let htr = new XMLHttpRequest();
let icon = document.getElementById('icon');
let searchIcon = document.getElementById('searchIcon');
let cityVal = document.getElementById('cityVal');
function search() {
    
    let cityName = cityVal.value;
    return cityName;

    
}
htr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=Bolpur&appid=4b224a03bdb8b4f972defb7ef719c1e8`, true);
htr.onload = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        let tempKel = obj.main.temp;
        let maxKel = obj.main.temp_max;
        let minKel = obj.main.temp_min;
        let realKel = obj.main.feels_like;
        let celcius = (temp) => temp - 273.15;
        let mainTemp = Math.round(celcius(tempKel));
        let maxTemp = Math.round(celcius(maxKel));
        let minTemp = Math.round(celcius(minKel));
        let realTemp = Math.round(celcius(realKel));
        let weatherType = obj.weather[0].main;
        let city = obj.name;
        // let icon = 'icon';
        console.log(icon);

        console.log(mainTemp);
        console.log(maxTemp);
        console.log(minTemp);
        console.log(weatherType);
        console.log(city);
        let type = 'fa-sun';
        if (weatherType == 'Drizzle') {
            type = 'fa-cloud-rain';
            //    icon.style.color = "white";

        } else if (weatherType == 'Rain') {
            type = 'fa-cloud-rain';
        } else if (weatherType == 'Thunderstorm') {
            type = 'fa-thunderstorm';
        } else if (weatherType == 'Snow') {
            type = 'fa-snowflake';
        } else {
            type = 'fa-sun';
        }



        // Date
        let dt = new Date();
        let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];



        // search


        //  <img src="${obj.weather[0].icon}.png" alt="">
        let html = `<div class="main_content">
        <div class="logo">
           <i class="fas ${type}" id="icon"></i>
            <h3>${weatherType}</h3>
            <p>Real Feel ${realTemp}<sup>o</sup>C </p>
        </div>
        <div class="content">
            <h1>${city}, ${obj.sys.country}</h1>
            <span>${week[dt.getDay()]} | ${month[dt.getMonth()]} | ${dt.getHours()}.${dt.getMinutes()}  </span>
            <br>
            <br>

            <h1>${mainTemp}<sup>o</sup>C</h1>
            <span>Min ${minTemp}<sup>o</sup>C | Max ${maxTemp}<sup>o</sup>C</span>
        </div>
    </div>`;

        let main = document.getElementById('main');
        main.innerHTML = html;



    } else {
        console.log('Error 404');
    }
}
htr.send();
// let searchCity = search();
// console.log(searchCity);
searchIcon.addEventListener('click', () => {
    // cityVal.style.height = '40px';
    // cityVal.style.border = '1px solid gray';
     
    let cityName = cityVal.value;
    htr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4b224a03bdb8b4f972defb7ef719c1e8`, true);
htr.onload = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText);
        let tempKel = obj.main.temp;
        let maxKel = obj.main.temp_max;
        let minKel = obj.main.temp_min;
        let realKel = obj.main.feels_like;
        let celcius = (temp) => temp - 273.15;
        let mainTemp = Math.round(celcius(tempKel));
        let maxTemp = Math.round(celcius(maxKel));
        let minTemp = Math.round(celcius(minKel));
        let realTemp = Math.round(celcius(realKel));
        let weatherType = obj.weather[0].main;
        let city = obj.name;
        // let icon = 'icon';
        console.log(icon);

        console.log(mainTemp);
        console.log(maxTemp);
        console.log(minTemp);
        console.log(weatherType);
        console.log(city);
        let type = 'fa-sun';
        if (weatherType == 'Drizzle') {
            type = 'fa-cloud-rain';
            //    icon.style.color = "white";

        } else if (weatherType == 'Rain') {
            type = 'fa-cloud-rain';
        } else if (weatherType == 'Thunderstorm') {
            type = 'fa-thunderstorm';
        } else if (weatherType == 'Snow') {
            type = 'fa-snowflake';
        } else if(weatherType == 'Clouds'){
            type = 'fa-cloud';
        }
        else {
            type = 'fa-sun';
        }



        // Date
        let dt = new Date();
        let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];



        // search


        //  <img src="${obj.weather[0].icon}.png" alt="">
        let html = `<div class="main_content">
        <div class="logo">
           <i class="fas ${type}" id="icon"></i>
            <h3>${weatherType}</h3>
            <p>Real Feel ${realTemp}<sup>o</sup>C </p>
        </div>
        <div class="content">
            <h1>${city}, ${obj.sys.country}</h1>
            <span>${week[dt.getDay()]} | ${month[dt.getMonth()]} | ${dt.getHours()}.${dt.getMinutes()}  </span>
            <br>
            <br>

            <h1>${mainTemp}<sup>o</sup>C</h1>
            <span>Min ${minTemp}<sup>o</sup>C | Max ${maxTemp}<sup>o</sup>C</span>
        </div>
    </div>`;

        let main = document.getElementById('main');
        main.innerHTML = html;



    } else {
        console.log('Error 404');
    }
}
htr.send();
    
});

// let cityName = cityVal.ariaValueMax;
