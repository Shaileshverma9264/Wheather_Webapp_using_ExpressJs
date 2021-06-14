
const cityName = document.getElementById('cityName');
const country = document.getElementById('country')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const weather = document.getElementById('weather');
const speed = document.getElementById('speed');
const temp = document.getElementById('temp');
const temp_min = document.getElementById('temp_min');
const temp_max = document.getElementById('temp_max');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {

    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "plz write the name of city";
        // it hide the html data
        datahide.classList.add('data_hide')

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b82cb61ef49ad6b07b676a6d38616c7c`;
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            const arrData = [data];


            city_name.innerText = `${arrData[0].name} | ${arrData[0].sys.country}`
            temp.innerText = `${arrData[0].main.temp}°C`;
            weather.innerText = arrData[0].weather[0].main;
            speed.innerText = `Wind speed :${arrData[0].wind.speed}`;
            temp_min.innerText = `Temp-min : ${arrData[0].main.temp_min}°C`;
            temp_max.innerText = `Temp-max :${arrData[0].main.temp_max}°C`;

            datahide.classList.remove('data_hide');

        } catch (error) {
            console.log("please enter proper city name ");
            
            datahide.classList.add('data_hide');
        }

    }

}


submitBtn.addEventListener('click', getInfo);


