import "../styles/character.css";
import BodyPart from "./BodyPart";

// Component for displaying character with clothes
export const CharacterDisplay = ({ upperbody, lowerbody }) => {
  const upperbodyImages = upperbody.map(clothing => clothing.image)
  const lowerbodyImages = lowerbody.map(clothing => clothing.image)

  return (
    <div className="character">
      <div className="head-wear">
        <BodyPart
          clothingImages={["head_wear/lue.png"]}
        />
      </div>
      <div className="head">
        <BodyPart clothingImages={["head.png"]} />
      </div>
      <div className="upper-body">
        <BodyPart clothingImages={upperbodyImages} />
      </div>
      <div className="lower-body">
        <BodyPart clothingImages={lowerbodyImages} />
      </div>
      <div className="feet">
        <BodyPart clothingImages={["feet/sneakers.png", "feet/vintersko.png"]} />
      </div>
    </div>
  );
};
