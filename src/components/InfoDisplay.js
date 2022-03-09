import { useState } from "react";
import { CharacterDisplay } from "./CharacterDisplay";
import { EtymologyDisplay } from "./EtymologyDisplay";
import { weather } from "../utils/constants";

// Function for finding the best clothes given the weather
const getIdealClothing = (data) => {
  /* HERE SHOULD BE LOGIC FOR WHICH CLOTHES TO RETURN BASED ON WEATHER*/
  return weather.sunny["-10"].clothingLayers;
};

export const InfoDisplay = ({ data }) => {
  let idealClothing = getIdealClothing(data);
  const [layerIndex, setLayerIndex] = useState(0);

  const incrementLayerIndex = () => {
    let newLayerIndex = layerIndex + 1;
    if (newLayerIndex >= idealClothing.length) {
      newLayerIndex = 0;
    }
    setLayerIndex(newLayerIndex);
  };

  return (
    <div className="main-container">
      <div className="etymology-container">
        <EtymologyDisplay clothing={idealClothing[layerIndex]} />
      </div>
      <div className="character-container">
        <CharacterDisplay
          clothing={idealClothing[layerIndex]}
          onClick={incrementLayerIndex}
        />
      </div>
    </div>
  );
};
