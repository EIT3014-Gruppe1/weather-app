import { useState, useEffect } from "react";
import { getWeather, defaultWeather, getUserLocation } from "./api/API";
import "bootstrap/dist/css/bootstrap.min.css";
import { cities } from "./utils/constants";
import { NavBar } from "./components/NavBar";
import { weatherDataFormatter } from "./utils/weatherDataFormatter";
import { InfoDisplay } from "./components/InfoDisplay";

const dataFormat = {
 now: {
  temperature: 0,
  image_name: 0,
  wind_speed: 0,
 },
 next_1_hour: {
  precipitation_amount: 0,
  probability_of_precipitation: 0,
 },
 next_6_hours: {
  max_temperature: 0,
  probability_of_precipitation: 0,
 },
};

const App = () => {
 // Weather data
 const [data, setData] = useState(0);
 const [formattedData, setFormattedData] = useState(dataFormat);
 const [userLocation, setUserLocation] = useState(0);
 const [choosenCity, setChoosenCity] = useState(cities[0]);

 useEffect(() => {
  defaultWeather(setData);
  getUserLocation(setUserLocation);
 }, []);

 useEffect(() => {
  // Fetch and set data to choosen city weather
  const getChoosenCityWeather = async () => {
   let weatherData = await getWeather({
    latitude: choosenCity.latitude,
    longitude: choosenCity.longitude,
   });
   setData(weatherData);
  };

  // Get choosen location weather
  getChoosenCityWeather();
 }, [choosenCity]);

 // Formats the data to include only important fields
 useEffect(() => {
  if (data) {
   setFormattedData(weatherDataFormatter(data));
  }
 }, [data]);

 return (
  <>
   <NavBar
    setChoosenCity={setChoosenCity}
    choosenCity={choosenCity}
    userLocation={userLocation}
    temperature={formattedData.now.temperature}
    imageName={formattedData.now.image_name}
   />
   <br />
   <InfoDisplay data={formattedData} />
  </>
 );
};

export default App;
