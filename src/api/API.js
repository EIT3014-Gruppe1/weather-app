// The weather API
const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete.json`;
export const defaultWeather = async (setData) => {
  let latitude = 63.446827;
  let longitude = 10.421906;

  const result = await fetch(url + `?lat=${latitude}&lon=${longitude}`);

  setData(await result.json());
};

// Return weather data for given position (longitude, latitude)
export const getWeather = async (pos) => {
  // fetches data from weather API
  const result = await fetch(url + `?lat=${pos.latitude}&lon=${pos.longitude}`);

  // Convert the result to json
  const resultJson = await result.json();
  return resultJson;
};

export const getUserLocation = async (setUserLocation) => {
  const success = async (pos) => {
    // Update the location of the user
    setUserLocation(pos.coords);
  };

  // Get user's current position
  await navigator.geolocation.getCurrentPosition(success);
};
