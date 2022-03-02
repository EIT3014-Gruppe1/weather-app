import { CharacterDisplay } from "./CharacterDisplay";
import { EtymologyDisplay } from "./EtymologyDisplay";
import { clothes } from "../utils/constants";

const getClothClosestToCurrentTemp = (clothingArray, currentTemperature) => {
  return clothingArray.reduce((prev, curr) => {
    return Math.abs(curr.temperature - currentTemperature) <
      Math.abs(prev.temperature - currentTemperature)
      ? curr
      : prev;
  });
}

// Function for finding the best clothes given the weather
const getIdealClothing = (data) => {
  let currentTemperature = data.now.temperature;
  let isRaining = data.next_1_hour.probability_of_precipitation > 70;
  let potentialJacket = clothes.upper_body.outerwear;
  let potentialShirt = clothes.upper_body.innerwear;
  let potentialPants = clothes.lower_body.pants;
  
  let idealClothing = {
    outerwear: [],
    innerwear: [],
    pants: [],
  };
  
  // If it is raining filter out all non-rain proof clothes
  if (currentTemperature > 0 && isRaining) {
    potentialJacket = potentialJacket.filter((clothing) => {
      //console.log(clothing.rain_proof === true);
      return clothing.rain_proof;
    });
  }

  // Find the clothing with closest temperature to current temperature
  idealClothing.outerwear = getClothClosestToCurrentTemp(potentialJacket, currentTemperature)
  idealClothing.innerwear = getClothClosestToCurrentTemp(potentialShirt, currentTemperature)
  idealClothing.pants = getClothClosestToCurrentTemp(potentialPants, currentTemperature)

  return idealClothing;
};

export const InfoDisplay = ({ data }) => {
  let idealClothing = getIdealClothing(data);
  return (
    <div className="main-container">
      <div className="etymology-container">
        <EtymologyDisplay clothing={idealClothing} />
      </div>
      <div className="character-container">
        <CharacterDisplay upperbody={[ idealClothing.outerwear, idealClothing.innerwear]} lowerbody={[idealClothing.pants]} />
      </div>
    </div>
  );
};
