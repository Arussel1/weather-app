import sunny from './../images/sunny.jpg';
import cloudy from './../images/cloudy.gif';
import partlycloudy from './../images/partlycloudy.gif';
import rainy from './../images/rainy.gif'; 
import clear from './../images/clear.jpg';

export default function displayData(info, celsius) {
    const content = document.querySelector(".content");
    const infoContainer = document.createElement('div');

    // Main info display
    const mainInfo = document.createElement("div");
    const location = document.createElement('p');
    const time = document.createElement('p');
    const currentText = document.createElement('p');
    const currentIcon = document.createElement('img');
    const currentTemp = document.createElement('p');
    const maxTemp = document.createElement('p');
    const minTemp = document.createElement('p');
    const feelsLikeTemp = document.createElement('p');

    const sideInfo = document.createElement("div");
    const windSpeed = document.createElement('p');
    const humidity = document.createElement('p');
    const rainChance = document.createElement('p');
    const UVIndex = document.createElement('p');

    location.textContent = `${info.location.city}, ${info.location.country}`;
    time.textContent = `${info.location.localTime}`;
    currentText.textContent = `${info.currentInfo.conditionText}`;
    currentIcon.src = `${info.currentInfo.conditionIcon}`;
    if(celsius){
        currentTemp.textContent = `${info.currentInfo.currentTemp} °C`;
        maxTemp.innerHTML = `Max: ${info.currentInfo.maxTemp} °C`;
        minTemp.textContent = `Min: ${info.currentInfo.minTemp} °C`;
        feelsLikeTemp.textContent = `Feels Like: ${info.currentInfo.currentFeelsLikeTemp} °C`;
    }else{
        currentTemp.textContent = `${Math.round(info.currentInfo.currentTemp * 9 / 5 + 32 )} °F`;
        maxTemp.textContent = `Max: ${Math.round(info.currentInfo.maxTemp * 9 / 5 + 32)} °F`;
        minTemp.textContent = `Min: ${Math.round(info.currentInfo.minTemp * 9 / 5 + 32)} °F`;
        feelsLikeTemp.textContent = `Feels Like: ${Math.round(info.currentInfo.currentFeelsLikeTemp * 9 / 5 + 32)} °F`;
    }

    windSpeed.textContent = `Wind speed: ${info.moreInfo.windSpeed} km/h`;
    humidity.textContent = `Humidity: ${info.moreInfo.humidity}%`;
    rainChance.textContent = `Rain Chance: ${info.moreInfo.rainChance}%`;
    UVIndex.textContent = `UV Index: ${info.moreInfo.UVIndex}`;

    mainInfo.appendChild(location);
    mainInfo.appendChild(time);
    mainInfo.appendChild(currentText);
    mainInfo.appendChild(currentIcon);
    mainInfo.appendChild(currentTemp);
    mainInfo.appendChild(maxTemp);
    mainInfo.appendChild(minTemp);
    mainInfo.appendChild(feelsLikeTemp);
    mainInfo.classList.add("mainInfo");

    sideInfo.append(windSpeed);
    sideInfo.append(humidity);
    sideInfo.append(rainChance);
    sideInfo.append(UVIndex);
    sideInfo.classList.add("sideInfo");

    infoContainer.appendChild(mainInfo);
    infoContainer.appendChild(sideInfo);
    infoContainer.classList.add("infoContainer");

    content.appendChild(infoContainer);

    const conditionText = info.currentInfo.conditionText.toLowerCase().trim();
    setBackgroundImage(conditionText);

    const forecastContainer = forecastDisplay(info,celsius);
    content.appendChild(forecastContainer);
}

function setBackgroundImage(text){
    const body = document.querySelector("body");
    let backgroundImage;

    switch (text) {
        case 'sunny':
            backgroundImage = sunny;
            break;
        case 'cloudy':
            backgroundImage = cloudy;
            break;
        case 'partly cloudy':
            backgroundImage = partlycloudy;
            break;
        case 'light rain':
            backgroundImage = rainy;
            break;
        case 'clear':
            backgroundImage = clear;
    }

    body.style.backgroundImage = `url(${backgroundImage})`;
}

function forecastDisplay(info, celsius){
    const forecastContainer = document.createElement('div');
    info.forecastInfo.forEach( (element) => {
        const forecast = document.createElement("div");
        const date = document.createElement('p');
        const minTemp = document.createElement('p');
        const maxTemp = document.createElement('p');
        const rainChance = document.createElement('p');
        const icon = document.createElement('img');
        date.textContent = `${element.date}`;
        icon.src = `${element.icon}`;
        rainChance.textContent = `Rain chance: ${element.rainChance}%`;

        if(celsius == true){
            maxTemp.textContent = `Max: ${element.maxTemp} °C`;
            minTemp.textContent = `Min: ${element.minTemp} °C`;
        }else{
            maxTemp.textContent = `Max: ${Math.round(element.maxTemp * 9 / 5 + 32)} °F`;
            minTemp.textContent = `Min: ${Math.round(element.minTemp * 9 / 5 + 32)} °F`;
        }


        forecast.appendChild(date);
        forecast.appendChild(icon);
        forecast.appendChild(rainChance);
        forecast.appendChild(maxTemp);
        forecast.appendChild(minTemp);

        forecastContainer.appendChild(forecast);
        forecastContainer.classList.add("forecastContainer");
    });
    return forecastContainer;
}