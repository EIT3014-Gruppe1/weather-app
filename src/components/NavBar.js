import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import AudioPlayer from "./AudioPlayer";
import { CityDropdown } from "./CityDropdown";
import { useWeather } from "../utils/useWeather";

// Navbar component
export const NavBar = ({
    setChoosenCity,
    choosenCity,
    userLocation,
    temperature,
    imageName,
    data,
}) => {

    const weatherInfo = useWeather(data)
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
                            userLocation={userLocation}
                        />
                    </li>
                    {temperature ? (
                        <>
                            <li className="nav-item px-2">
                                <p style={{ color: "white" }}>{temperature}°</p>
                            </li>
                            <img
                                className="img-responsive"
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    height: "60px",
                                }}
                                src={`/assets/weather_icons/${imageName}.png`}
                                alt="icon"
                            />
                        </>
                    ) : (
                        <p>loading</p>
                    )}
                </ul>
            </Container>
            <li className="px-5 my-auto">
                <AudioPlayer loop={true} weatherClass={weatherInfo.weatherClass} windLevel={weatherInfo.windLevel} rainLevel={weatherInfo.rainLevel}/>
            </li>
        </Navbar>
    );
};

// Synes det var ukomfortabelt å gi tilbakemelding. Vet ikke om jeg klarte å ordlegge meg sånn at tilbakemeldingene var forståelige
// Var greit å få tilbakemeldinger, var allerede klar over de negative tilbakemeldingene, men er nå litt mer motivert til å jobbe med dem.