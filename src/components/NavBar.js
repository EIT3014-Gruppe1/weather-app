import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import AudioPlayer from "./AudioPlayer";
import { CityDropdown } from "./CityDropdown";
import { useWeather } from "../utils/useWeather";
import sun_main from "../audio/sun/EiT Sun - Main Track 00.wav";
import sun_wind2 from "../audio/sun/EiT Sun - Wind level 2 00.wav";
import sun_wind3 from "../audio/sun/EiT Sun - Wind level 2 00.wav";
import sun_windChimes1 from "../audio/sun/EiT Sun - Windchimes level 1 00.wav";
import sun_windChimes2 from "../audio/sun/EiT Sun - Windchimes level 2 00.wav";
import sun_windChimes3 from "../audio/sun/EiT Sun - Windchimes level 3 00.wav";
import rain_main from "../audio/rain/EiT Rain - Main Track 00.wav";
import rain_wind2 from "../audio/rain/EiT Rain - Wind level 2 00.wav";
import rain_wind3 from "../audio/rain/EiT Rain - Wind level 2 00.wav";
import rain_windChimes1 from "../audio/rain/EiT Rain - Windchimes level 1 00.wav";
import rain_windChimes2 from "../audio/rain/EiT Rain - Windchimes level 2 00.wav";
import rain_windChimes3 from "../audio/rain/EiT Rain - Windchimes level 3 00.wav";
import rain_rain1 from "../audio/rain/EiT Rain - Windchimes level 1 00.wav";
import rain_rain2 from "../audio/rain/EiT Rain - Windchimes level 2 00.wav";
import rain_rain3 from "../audio/rain/EiT Rain - Windchimes level 3 00.wav";

// 10 sec fadeout
const audio = {
    "sunny": { main: sun_main, wind: [sun_wind2, sun_wind3], chimes: [sun_windChimes1, sun_windChimes2, sun_windChimes3] },
    "rain": { rain_main, rain_wind2, rain_wind3, rain_windChimes1, rain_windChimes2, rain_windChimes3, rain_rain1, rain_rain2, rain_rain3 }
}

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
    console.log(audio[weatherInfo.weatherClass].main)
    console.log(audio[weatherInfo.weatherClass].wind[weatherInfo.windLevel])
    console.log(audio[weatherInfo.weatherClass].chimes[weatherInfo.windLevel])
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
                <AudioPlayer
                    url={
                        audio[weatherInfo.weatherClass]
                    }
                    loop={true}
                />
            </li>
        </Navbar>
    );
};

// Synes det var ukomfortabelt å gi tilbakemelding. Vet ikke om jeg klarte å ordlegge meg sånn at tilbakemeldingene var forståelige
// Var greit å få tilbakemeldinger, var allerede klar over de negative tilbakemeldingene, men er nå litt mer motivert til å jobbe med dem.