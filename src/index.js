import './style.css';
import getWeatherData from './assets/weatherData';
import processWeatherData from './assets/processData';
const data = getWeatherData("toronto");

data.then( (data) => {
    processWeatherData(data);
}) 