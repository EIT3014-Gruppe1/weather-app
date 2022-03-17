import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { InfoDisplay } from "./components/InfoDisplay";
import { cities } from "./utils/constants";
import { useWeather } from "./utils/useWeather";
import "./app.css";

const App = () => {
  const [choosenCity, setChoosenCity] = useState(cities[0]);
  const weatherInfo = useWeather(choosenCity);

  return (
    <>
      <NavBar
        setChoosenCity={setChoosenCity}
        choosenCity={choosenCity}
        weatherInfo={weatherInfo}
      />
      <br />
      <InfoDisplay weatherInfo={weatherInfo} />
    </>
  );
};

export default App;
