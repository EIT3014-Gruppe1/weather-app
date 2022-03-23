import AudioPlayer from "./AudioPlayer";
import { CityDropdown } from "./CityDropdown";
import { ThemeContext } from "../App";
// Navbar component
export const NavBar = ({ setChoosenCity, choosenCity, weatherInfo }) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className="navbar">
          <div className="navbar-left">
            <CityDropdown
              setChoosenCity={setChoosenCity}
              choosenCity={choosenCity}
            />
            <p className="temp" style={{ color: theme.tertiary }}>{weatherInfo.temperature}°C</p>
          </div>
          <div className="navbar-right">
            <AudioPlayer
              loop={true}
              weatherClass={weatherInfo.weatherClass}
              windLevel={weatherInfo.windLevel}
              rainLevel={weatherInfo.rainLevel}
            />
            {/* TODO: Perhaps make it so you can change language here */}
            <img
              src={"/assets/norway.png"}
              alt="choose language"
              className="navbar-image"
            />
          </div>
        </div>
      )
      }
    </ThemeContext.Consumer>
  );
};
