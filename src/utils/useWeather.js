import { useEffect, useState } from "react";
import { getWeather } from "../api/API";
import { weatherDataFormatter } from "./weatherDataFormatter";

// Function for getting the high level weather category
const getWeatherClass = (data, temperature) => {
  let isPercipitation =
    data.next_1_hour.probability_of_precipitation > 0.5 ||
    data.next_1_hour.precipitation_amount > 0.1;
  let isRaining = isPercipitation && temperature > 0;
  let isSnowing = isPercipitation && temperature < 0;
  let isSunny = !isRaining && !isSnowing;

  if (isRaining) return "rain";
  if (isSnowing) return "snow";
  if (isSunny) return "sunny";
};

// Function for getting the temperature class
const getTemperatureClass = (temperature) => {
  if (temperature <= -5) return "-10";
  if (temperature <= 5) return "0";
  if (temperature <= 15) return "10";

  return "20";
};

// Function for getting the wind level
const getWindLevel = (data) => {
  // TODO: improve level definitions
  const windSpeed = data.now.wind_speed;
  if (windSpeed <= 5) return 0;
  if (windSpeed <= 10) return 1;

  return 2;
};

// Function for getting the rain level
const getRainLevel = (data) => {
  const rainAmount = data.next_1_hour.probability_of_precipitation;
  // TODO: improve level definitions
  if (rainAmount <= 1) return 0;
  if (rainAmount <= 5) return 1;

  return 2;
};

// Returns an object containing high level information about the weather
const getInfoFromWeather = (data) => {
  let temperature = data.now.temperature;
  let weatherClass = getWeatherClass(data, temperature);
  let temperatureClass = getTemperatureClass(temperature);
  let windLevel = getWindLevel(data);
  let rainLevel = getRainLevel(data);
  let yrWeatherClass = data.now.image_name;

  return {
    weatherClass,
    windLevel,
    rainLevel,
    temperatureClass,
    yrWeatherClass,
    temperature,
  };
};

// Data format for formatted weather data
const dataFormat = {
  now: {
    temperature: undefined,
    image_name: undefined,
    wind_speed: undefined,
  },
  next_1_hour: {
    precipitation_amount: undefined,
    probability_of_precipitation: undefined,
  },
  next_6_hours: {
    max_temperature: undefined,
    probability_of_precipitation: undefined,
  },
};

// Returns a report with high level information about the weather given a location (longitude, latitude)
export const useWeather = (location) => {
  // Weather data
  const [data, setData] = useState(0);
  const [formattedData, setFormattedData] = useState(dataFormat);
  const [weatherReport, setWeatherReport] = useState({
    weatherClass: "sunny",
    windLevel: 0,
    rainLevel: 0,
    temperatureClass: "20",
    yrWeatherClass: "clearsky_day",
    temperature: formattedData.now.temperature,
  });

  useEffect(() => {
    // Fetch and set data to choosen location weather
    const getLocationWeather = async () => {
      let weatherData = await getWeather({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      setData(weatherData);
    };

    // Get choosen location weather
    getLocationWeather();
  }, [location]);

  // Formats the data to include only important fields
  useEffect(() => {
    if (data) {
      setFormattedData(weatherDataFormatter(data));
    }
  }, [data]);

  // Set weather report data
  useEffect(() => {
    setWeatherReport(getInfoFromWeather(formattedData));
  }, [formattedData]);

  return weatherReport;
};
