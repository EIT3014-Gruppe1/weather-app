import { useState, useEffect } from "react";
import { getWeather } from "./api/API";
import "./app.css";

const App = () => {
  // Weather data
  const [data, setData] = useState(0);

  useEffect(() => {
    getWeather(setData);
  }, []);

  // Get the temperature from the data
  const temperature =
    data && data.properties.timeseries[0].data.instant.details.air_temperature;

  // Get image name from the data
  const image =
    data && data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;

  return (
    <div class="center">
      {data ? (
        <div>
          <h1>{temperature}°</h1>
          <img
            src={`/assets/png/${image}.png`}
            alt="icon"
            width="500"
            height="500"
          />
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default App;
