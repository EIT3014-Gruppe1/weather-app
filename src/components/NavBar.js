import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import AudioPlayer from "./AudioPlayer";
import { CityDropdown } from "./CityDropdown";

// Navbar component
export const NavBar = ({ setChoosenCity, choosenCity, weatherInfo }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Klesmelding</h1>
        </Navbar.Brand>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item px-2 my-auto">
            <CityDropdown
              setChoosenCity={setChoosenCity}
              choosenCity={choosenCity}
            />
          </li>
          {weatherInfo.temperature ? (
            <>
              <li className="nav-item px-2">
                <p style={{ color: "white" }}>{weatherInfo.temperature}°</p>
              </li>
              <img
                className="img-responsive"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  height: "60px",
                }}
                src={`/assets/weather_icons/${weatherInfo.yrWeatherClass}.png`}
                alt="icon"
              />
            </>
          ) : (
            <p>loading</p>
          )}
        </ul>
      </Container>
      <li className="px-5 my-auto">
        <AudioPlayer
          loop={true}
          weatherClass={weatherInfo.weatherClass}
          windLevel={weatherInfo.windLevel}
          rainLevel={weatherInfo.rainLevel}
        />
      </li>
    </Navbar>
  );
};
