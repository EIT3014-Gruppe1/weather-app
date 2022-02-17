import { useState, useEffect } from "react";
import { getWeather, defaultWeather, getUserLocation } from "./api/API";
import rain from "./audio/rain.mp3";
// import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import AudioPlayer from "./components/AudioPlayer";
import { CityDropdown, cities } from "./components/CityDropdown";

const App = () => {
  // Weather data
  const [data, setData] = useState(0);
  const [userLocation, setUserLocation] = useState(0);
  const [choosenCity, setChoosenCity] = useState(cities[0]);

  useEffect(() => {
    defaultWeather(setData);
    getUserLocation(setUserLocation);
  }, []);

  useEffect(() => {
    // Fetch and set data to choosen city weather
    const getChoosenCityWeather = async () => {
      let weatherData = await getWeather({
        latitude: choosenCity.latitude,
        longitude: choosenCity.longitude,
      });
      setData(weatherData);
    };

    // Get choosen location weather
    getChoosenCityWeather();
  }, [choosenCity]);

  // Get the temperature from the data
  const temperature =
    data && data.properties.timeseries[0].data.instant.details.air_temperature;

  // Get image name from the data
  const image =
    data && data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Klesmelding</h1>
          </Navbar.Brand>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item px-2 my-auto">
              <CityDropdown
                setChoosenCity={setChoosenCity}
                choosenCity={choosenCity}
                userLocation={userLocation}
              />
            </li>
            {data ? (
              <>
                <li class="nav-item px-2">
                  <p style={{ color: "white" }}>{temperature}°</p>
                </li>
                <img
                  class="img-responsive"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    height: "60px",
                  }}
                  src={`/assets/png/${image}.png`}
                  alt="icon"
                />
              </>
            ) : (
              <p>loading</p>
            )}
          </ul>
        </Container>
        <li class="px-5 my-auto">
          <AudioPlayer url={rain} loop={false} />
        </li>
      </Navbar>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h2>Regn</h2>
                <br />
                Regn har en stor rolle i vannets kretsløp, der fuktighet fra
                havet fordamper og kondenserer til skyer, for så å falle tilbake
                til jorden som nedbør, og til slutt renner tilbake igjen til
                havet via elver. En liten del av vanndampen i luften kommer også
                fra vegetasjon.
                <br />
                <br />
                Regnmengden blir målt med en nedbørmåler, og vanligvis uttrykt i
                millimeter. Nedbøren blir målt i løpet av en tidsperiode, som
                regel 12 eller 24 timer (et nedbørdøgn). Dersom det kommer 1 mm
                regn på 1000 m² tilsvarer det 1 m³ eller 1 tonn vann. 1 mm regn
                fordelt på en kvadratmeter er altså 1 liter vatn. I Norge blir
                nedbørmålerne tømt til faste tider hver dag og vidareformidlet
                til Meteorologisk institutt. I tillegg har man automatiske
                nedbørmålere (Pluviometer) som registrerer nedbøren fortløpende.
                <br />
                <br />
                Fallende regndråper blir ofte tegnet som en tåre — runde i
                bunnen og smalere på toppen — men dette er ikke riktig. Bare
                dråper som drypper fra et legeme er tåreformet i det de blir
                dannet. Små regndråper er nesten runde, mens større dråper er
                helt flate med samme form som en hamburger. Svært store
                regndråper har form som en fallskjerm. Philipp Lenard studerte
                formen på regndråper i 1898. Han fant ut at små regndråper
                (mindre enn 2 mm i diameter) var så godt som sfæriske, og jo
                større de ble (til omtrent 5 mm i diameter) jo flatere ble de.
                Ble de større enn 5 mm ble de ustabile og delte seg opp. I snitt
                er regndråper 1 til 2 mm i diameter. De største regndråpene som
                er registrert var så store som 10 mm. Det var i Brasil og på
                Marshalløyene i 2004. Dette ble forklart ved kondensasjon på
                store røykpartikler eller ved kollisjon mellom dråper i små
                områder med store mengder flytende vann.
                <br />
                <br />
                Regndråper treffer bakken med sin terminalfart, som øker med
                dråpestørrelsen. I havnivå uten vind vil yr med dråpestørrelse
                på 0,5 mm ha en fart på omtrent 2 m/s, mens dråper på 5 mm har
                en fart på rundt 9 m/s.
                <br />
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card-body">
              <img
                class="img-fluid"
                src="https://i.pinimg.com/originals/7c/ce/0c/7cce0c84a4a813fd366afcede9fa80c2.jpg"
                alt="raincoat girl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
