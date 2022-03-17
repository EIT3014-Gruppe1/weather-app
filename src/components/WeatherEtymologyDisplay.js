import { getMappedWeatherEtymology } from "../utils/constants";

// Component for displaying etymology
export const WeatherEtymologyDisplay = ({ weatherInfo }) => {
  let weatherEtymology = getMappedWeatherEtymology(weatherInfo.yrWeatherClass);
  return (
    <div>
      <h1>{weatherEtymology.name}</h1>
      <p>{weatherEtymology.etymology}</p>
    </div>
  );
};
