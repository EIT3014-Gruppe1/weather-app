import { getMappedWeatherEtymology } from "../utils/constants";
import { ThemeContext } from "../App";

// Component for displaying etymology
export const WeatherEtymologyDisplay = ({ weatherInfo }) => {
  let weatherEtymology = getMappedWeatherEtymology(weatherInfo.yrWeatherClass);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className="text-area">
          <h1 className="title" style={{ color: theme.tertiary }}>
            {weatherEtymology.name}
          </h1>
          <div className="text-box">
            <p>{weatherEtymology.etymology}</p>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
