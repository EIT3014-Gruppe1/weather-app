import { useEffect, useState } from "react";
import { CharacterDisplay } from "./CharacterDisplay";
import { EtymologyDisplay } from "./EtymologyDisplay";
import { weather } from "../utils/constants";

// Function for getting the high level weather category
const getHighLevelWeather = (data, temperature) => {
  let highLevelWeather = weather
  let isPercipitation = data.next_1_hour.probability_of_precipitation > 0.5 || data.next_1_hour.precipitation_amount > 0.1
  let isRaining = isPercipitation && temperature > 0
  let isSnowing = isPercipitation && temperature < 0
  let isSunny = !isRaining && !isSnowing

  if (isRaining)
    highLevelWeather = highLevelWeather.rain
  if (isSnowing)
    highLevelWeather = highLevelWeather.snow
  if (isSunny)
    highLevelWeather = highLevelWeather.sunny

  return highLevelWeather
}

// Function for getting the data within a temperature given a weather category
const getDetailLevelWeather = (highLevelWeather, temperature) => {
  if (temperature <= -5)
    return highLevelWeather["-10"]
  if (temperature <= 5)
    return highLevelWeather["0"]
  if (temperature <= 15)
    return highLevelWeather["10"]

  return highLevelWeather["20"]
}

// Function for deciding what should be displayed given the current weather
const getInfoFromWeather = (data) => {
  let temperature = data.now.temperature
  let highLevelWeather = getHighLevelWeather(data, temperature)
  let detailLevelWeather = getDetailLevelWeather(highLevelWeather, temperature)

  return detailLevelWeather;
};

export const InfoDisplay = ({ data }) => {
  let weatherInfo = getInfoFromWeather(data);
  const [clothingLayerIndex, setClothingLayerIndex] = useState(0);

  const incrementClothingLayerIndex = () => {
    let newClothingLayerIndex = clothingLayerIndex + 1;
    if (newClothingLayerIndex >= weatherInfo.clothingLayers.length) {
      newClothingLayerIndex = 0;
    }
    setClothingLayerIndex(newClothingLayerIndex);
  };

  useEffect(() => {
    setClothingLayerIndex(0)
  }, [data])

  return (
    <div className="main-container">
      <div className="etymology-container">
        <EtymologyDisplay clothingEtymology={weatherInfo.clothingLayers[clothingLayerIndex].etymology} weatherEtymology={weatherInfo.etymology} />
      </div>
      <div className="character-container">
        <CharacterDisplay
          clothing={weatherInfo.clothingLayers[clothingLayerIndex]}
          onClick={incrementClothingLayerIndex}
        />
      </div>
    </div>
  );
};
