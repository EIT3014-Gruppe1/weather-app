import { CharacterDisplay } from "./CharacterDisplay";
import { EtymologyDisplay } from "./EtymologyDisplay";
import { clothes } from "../utils/constants";

// Function for finding the best clothes given the weather
const getIdealClothing = (data) => {
 let currentTemperature = data.now.temperature;
 let isRaining = data.next_1_hour.probability_of_precipitation > 0.5;
 let potentialJacket = clothes.overdel.yttertøy;
 let potentialShirt = clothes.overdel.innertøy;
 let potentialPants = clothes.underdel.bukse;
 let idealClothing = {
  yttertøy: [],
  innertøy: potentialShirt[0],
  underdel: potentialPants[0],
 };

 // If it is raining filter out all non-rain proof clothes
 if (currentTemperature > 0 && isRaining) {
  potentialJacket = potentialJacket.filter((clothing) => {
   console.log(clothing.rain_proof === true);
   return clothing.rain_proof;
  });
 }

 // Find the clothing with closest temperature to current temperature
 idealClothing.yttertøy = potentialJacket.reduce((prev, curr) => {
  return Math.abs(curr.temperature - currentTemperature) <
   Math.abs(prev.temperature - currentTemperature)
   ? curr
   : prev;
 });
 return idealClothing;
};

export const InfoDisplay = ({ data }) => {
 let idealClothing = getIdealClothing(data);
 return (
  <div className="container">
   <div className="row">
    <div className="col-sm">
     <EtymologyDisplay clothing={idealClothing} />
    </div>
    <div className="col-sm">
     <CharacterDisplay clothing={idealClothing} />
    </div>
   </div>
  </div>
 );
};
