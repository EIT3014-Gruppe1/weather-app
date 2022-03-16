import { useEffect, useState } from "react";

// Function for getting the high level weather category
const getWeatherClass = (data, temperature) => {
    let isPercipitation = data.next_1_hour.probability_of_precipitation > 0.5 || data.next_1_hour.precipitation_amount > 0.1
    let isRaining = isPercipitation && temperature > 0
    let isSnowing = isPercipitation && temperature < 0
    let isSunny = !isRaining && !isSnowing

    if (isRaining)
        return "rain"
    if (isSnowing)
        return "snow"
    if (isSunny)
        return "sunny"
}

// Function for getting the data within a temperature given a weather category
const getTemperatureClass = (temperature) => {
    if (temperature <= -5)
        return "-10"
    if (temperature <= 5)
        return "0"
    if (temperature <= 15)
        return "10"

    return "20"
}

// Function for getting the data within a temperature given a weather category
const getWindLevel = (data) => {
    const windSpeed = data.now.wind_speed
    if (windSpeed <= 5)
        return 0
    if (windSpeed <= 10)
        return 1

    return 2
}

const getRainLevel = (data) => {
    const rainAmount = data.next_1_hour.probability_of_precipitation
    if (rainAmount <= 1)
        return 0
    if (rainAmount <= 5)
        return 1

    return 2
}

// Function for deciding what should be displayed given the current weather
const getInfoFromWeather = (data) => {
    let temperature = data.now.temperature
    let weatherClass = getWeatherClass(data, temperature)
    let temperatureClass = getTemperatureClass(temperature)
    let windLevel = getWindLevel(data)
    let rainLevel = getRainLevel(data)

    return { weatherClass, windLevel, rainLevel, temperatureClass };
};

export const useWeather = (data) => {
    const [weatherReport, setWeatherReport] = useState({ weatherClass: "sunny", windLevel: 0, rainLevel: 0, temperatureClass: "20" });

    useEffect(() => {
        setWeatherReport(getInfoFromWeather(data))
    }, [data])

    return weatherReport;
}