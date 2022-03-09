import { useEffect, useState } from "react";
import { CharacterDisplay } from "./CharacterDisplay";
import { EtymologyDisplay } from "./EtymologyDisplay";
import { weather } from "../utils/constants";

// Function for deciding what should be displayed given the current weather
const getInfoFromWeather = (data) => {
  /* HERE SHOULD BE LOGIC FOR WHICH CLOTHES AND INFO TO RETURN BASED ON WEATHER*/
  return weather.sunny["-10"];
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
