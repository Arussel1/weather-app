import './style.css';
import getWeatherData from './assets/weatherData';
import processWeatherData from './assets/processData';
import sunny from './images/sunny.jpg';
import displayData from './assets/displayData';

const body = document.querySelector("body");
const span = document.querySelector("span");
const button = document.querySelector("button");
const input = document.querySelector("input");

body.style.backgroundImage = `url(${sunny})`;
body.style.backgroundSize = '100% auto';  

button.addEventListener("click", (event) =>{
    event.preventDefault();
    const city = input.value.trim();
    if(city){
        const data =  getWeatherData(city);
    data.then((data) => {
        const processedData = processWeatherData(data);
        displayData(processedData);
    }).catch((error) => {
        console.error('Error processing weather data:', error);
        span.textContent = "Cannot find the city";
    });
    }else{
        span.textContent = "Please enter a city name";
    }
    
})

