import { ThemeContext } from "../App";
// Component for displaying weather icon according to weather/theme
export const WeatherIcon = ({
  src

}) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <img
          // src={`/assets/theme/${theme.img}`}
          src={src}
          alt="weatherIcon"
          className="weather-icon"
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default WeatherIcon