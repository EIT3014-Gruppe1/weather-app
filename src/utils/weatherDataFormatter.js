// returns the weatherData timeseries closest to current time
const getClosestTimeSeries = (weatherData) => {
  const currentTime = new Date();

  // Calculate the nearest hour
  const nearestHour = Math.round(
    currentTime.getHours() + currentTime.getMinutes() / 60
  );

  // Get the timeseries closest to current time
  const currentTimeseries = weatherData.properties.timeseries.filter(
    (timeseries) => {
      const timestamp = new Date(timeseries.time);
      return (
        timestamp.getHours() -1 === nearestHour &&
        timestamp.getDay() === currentTime.getDay() &&
        timestamp.getMonth() === currentTime.getMonth()
      );
    }
  )[0];
  return currentTimeseries

}

// Takes the weather data and returns a formatted object with only important fields
export const weatherDataFormatter = (data) => {
  const currentTimeseries = getClosestTimeSeries(data)
  // Takes field and (time) period and returns value from data
  const getFromData = (field, period) => {
    return currentTimeseries.data[period].details[field];
  };

  let image_name =
    currentTimeseries.data.next_1_hours.summary.symbol_code;

  return {
    now: {
      temperature: getFromData("air_temperature", "instant"),
      wind_speed: getFromData("wind_speed", "instant"),
      image_name,
    },
    next_1_hour: {
      precipitation_amount: getFromData("precipitation_amount", "next_1_hours"),
      probability_of_precipitation: getFromData(
        "probability_of_precipitation",
        "next_1_hours"
      ),
    },
    next_6_hours: {
      max_temperature: getFromData("air_temperature_max", "next_6_hours"),
      probability_of_precipitation: getFromData(
        "probability_of_precipitation",
        "next_6_hours"
      ),
    },
  };
};
