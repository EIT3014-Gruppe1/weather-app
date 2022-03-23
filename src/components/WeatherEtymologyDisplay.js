import { getMappedWeatherEtymology } from "../utils/constants";
import { ThemeContext } from "../App";

// Component for displaying etymology
export const WeatherEtymologyDisplay = ({ weatherInfo }) => {
  let weatherEtymology = getMappedWeatherEtymology(weatherInfo.yrWeatherClass);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <>
          <h1 className="title" style={{ color: theme.tertiary }}>
            {weatherEtymology.name}
          </h1>
          <div className="textbox">
            <p className="text">{weatherEtymology.etymology}</p>
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
};
