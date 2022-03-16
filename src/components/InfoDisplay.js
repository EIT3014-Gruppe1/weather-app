import { useEffect, useState } from "react";
import { CharacterDisplay } from "./CharacterDisplay";
import { EtymologyDisplay } from "./EtymologyDisplay";
import { useWeather } from "../utils/useWeather";
import { weather } from "../utils/constants"

const getClothing = (weatherInfo) => {
  return weather[weatherInfo.weatherClass][weatherInfo.temperatureClass]
}

export const InfoDisplay = ({ data }) => {
  let weatherInfo = useWeather(data);
  const [clothingInfo, setClothingInfo] = useState(weather["sunny"]["20"])
  const [clothingLayerIndex, setClothingLayerIndex] = useState(0);

  const incrementClothingLayerIndex = () => {
    let newClothingLayerIndex = clothingLayerIndex + 1;
    if (newClothingLayerIndex >= clothingInfo.clothingLayers.length) {
      newClothingLayerIndex = 0;
    }
    setClothingLayerIndex(newClothingLayerIndex);
  };

  useEffect(() => {
    setClothingInfo(getClothing(weatherInfo));
    setClothingLayerIndex(0)
  }, [data])

  return (
    <div className="main-container">
      <div className="etymology-container">
        <EtymologyDisplay clothingEtymology={clothingInfo.clothingLayers[clothingLayerIndex].etymology} weatherEtymology={clothingInfo.etymology} />
      </div>
      <div className="character-container">
        <CharacterDisplay
          clothing={clothingInfo.clothingLayers[clothingLayerIndex]}
          onClick={incrementClothingLayerIndex}
        />
      </div>
    </div>
  );
};
