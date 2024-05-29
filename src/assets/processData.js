export default function processWeatherData(data){
    const forecast = data.forecast.forecastday;
    const location = {
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localTIme: data.location.localTime,
    }
    const currentInfo = {
        conditionText : data.current.condition.text,
        conditionIcon : data.current.condition.icon,
        currentTemp: data.current.temp_c,
        minTemp: forecast[0].day.mintemp_c,
        maxTemp: forecast[0].day.maxtemp_c,
        currentFeelsLikeTemp : data.current.feelslike_c,
    }
    const moreInfo = {
        windSpeed: data.current.wind_kph,
        humidity: data.current.humidity,
        rainChance: forecast[0].day.daily_chance_of_rain,
        UVIndex: data.current.uv,
    }
    const forecastInfo = []
    forecast.forEach( element => 
        forecastInfo.push({
            date: element.date,
            maxTemp: element.day.maxtemp_c,
            minTemp: element.day.mintemp_c,
            rainChance: element.day.daily_chance_of_rain,
            icon: element.day.condition.icon, 
        }));
    console.log( {location, currentInfo, moreInfo, forecastInfo});
     }