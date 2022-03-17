import { useEffect, useState } from "react";
import { CharacterDisplay } from "./CharacterDisplay";
import { WeatherEtymologyDisplay } from "./WeatherEtymologyDisplay";
import { ClothingEtymologyDisplay } from "./ClothingEtymologyDisplay";
import { clothing } from "../utils/constants";

// Component displaying etymology info and clothing info/image
export const InfoDisplay = ({ weatherInfo }) => {
  // State for choosing to view clothing or weather etymology
  const [viewClothingEtymology, setViewClothingEtymology] = useState(false);

  const [clothingInfo, setClothingInfo] = useState(
    clothing["sunny"]["20"].clothingLayers
  );
  const [clothingLayerIndex, setClothingLayerIndex] = useState(0);

  // Browse through the clothing layers
  const incrementClothingLayerIndex = () => {
    let newClothingLayerIndex = clothingLayerIndex + 1;
    if (newClothingLayerIndex >= clothingInfo.length) {
      newClothingLayerIndex = 0;
    }
    setClothingLayerIndex(newClothingLayerIndex);
  };

  // Toggle view of clothing or weather etymology
  const toggleView = () => setViewClothingEtymology(!viewClothingEtymology);

  // Set clothing info according to weather
  useEffect(() => {
    setClothingInfo(
      clothing[weatherInfo.weatherClass][weatherInfo.temperatureClass]
        .clothingLayers
    );
    setClothingLayerIndex(0);
  }, [weatherInfo]);

  return (
    <div className="main-container">
      <div className="etymology-container" onClick={toggleView}>
        {viewClothingEtymology ? (
          <ClothingEtymologyDisplay
            clothingLayer={clothingInfo[clothingLayerIndex].clothing}
          />
        ) : (
          <WeatherEtymologyDisplay weatherInfo={weatherInfo} />
        )}
      </div>
      <div className="character-container">
        <CharacterDisplay
          incrementClothingLayerIndex={incrementClothingLayerIndex}
          clothingLayer={clothingInfo[clothingLayerIndex]}
        />
      </div>
    </div>
  );
};
