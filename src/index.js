import './style.css';
import getWeatherData from './assets/weatherData';
import processWeatherData from './assets/processData';
import sunny from './images/sunny.jpg';
import displayData from './assets/displayData';

let celsius = true;
const degree = document.querySelector('#degree')
const body = document.querySelector("body");
const content = document.querySelector(".content");
const span = document.querySelector("span");
const submit = document.querySelector("button[type=submit]");
const input = document.querySelector("input");

body.style.backgroundImage = `url(${sunny})`;
body.style.backgroundSize = '100% auto';  



submit.addEventListener("click", (event) =>{
    event.preventDefault();
    const city = input.value.trim();
    if(city){
        const data =  getWeatherData(city);
    data.then((data) => {
        const processedData = processWeatherData(data);
        content.innerHTML = '';
        span.textContent = "";
        displayData(processedData,celsius);
    }).catch((error) => {
        console.error('Error processing weather data:', error);
        span.textContent = "Cannot find the city";
    });
    }else{
        span.textContent = "Please enter a city name";
    }
    
})

degree.addEventListener("click", () => {
    celsius = !celsius;
    degree.textContent = ' ';
    if(celsius){
        degree.textContent = "°C";
        
    }else{
        degree.textContent = "°F";
    }
});