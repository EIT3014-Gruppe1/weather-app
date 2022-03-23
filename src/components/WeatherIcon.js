import { ThemeContext } from "../App";
// Component for displaying weather icon according to weather/theme
export const WeatherIcon = ({
  clothingLayer,
  incrementClothingLayerIndex,
}) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <img
          onClick={incrementClothingLayerIndex}
          src={`/assets/theme/${theme.img}`}
          alt="weatherIcon"
          className="weather-icon"
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default WeatherIcon