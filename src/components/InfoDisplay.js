import { useEffect, useState } from "react";
import { CharacterDisplay } from "./CharacterDisplay";
import { WeatherEtymologyDisplay } from "./WeatherEtymologyDisplay";
import { ClothingEtymologyDisplay } from "./ClothingEtymologyDisplay";
import { clothing } from "../utils/constants";
import ToggleSwitch from "./ToggleSwitch";
import WeatherIcon from "./WeatherIcon";

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
      <div className="character-container">
        <CharacterDisplay
          incrementClothingLayerIndex={incrementClothingLayerIndex}
          clothingLayer={clothingInfo[clothingLayerIndex]}
        />
      </div>
      <div className="text-container">
        {/* src={`assets/weather_icons/${weatherInfo.yrWeatherClass}.png`} */}
        <WeatherIcon />
        {viewClothingEtymology ? (
          <ClothingEtymologyDisplay
            clothingLayer={clothingInfo[clothingLayerIndex].clothing}
          />
        ) : (
          <WeatherEtymologyDisplay weatherInfo={weatherInfo} />
        )}
        <ToggleSwitch
          toggle={toggleView}
          options={["weather", "clothes"]}
          state={viewClothingEtymology}
        />
      </div>
    </div>
  );
};
