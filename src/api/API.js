// Updates the passed state to current weather data
export const getWeather = async (setData) => {
  // The weather API
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete.json`;

  // Fetch weather and update weatherData state
  const success = async (pos) => {
    // crd is the current position of the user
    const crd = pos.coords;

    // fetches data from weather API
    const result = await fetch(
      url + `?lat=${crd.latitude}&lon=${crd.longitude}`
    );
    setData(await result.json());
  };

  // Get user's current position
  navigator.geolocation.getCurrentPosition(success);
};
