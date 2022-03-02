import "../styles/character.css";
import BodyPart from "./BodyPart";

// Component for displaying character with clothes
export const CharacterDisplay = ({ upperbody, lowerbody, headwear, footwear }) => {
  const headwearImages = headwear.map(clothing => clothing.image)
  const upperbodyImages = upperbody.map(clothing => clothing.image)
  const lowerbodyImages = lowerbody.map(clothing => clothing.image)
  const footwearImages = footwear.map(clothing => clothing.image)

  return (
    <div className="character">
      <div className="head-wear">
        <BodyPart
          clothingImages={headwearImages}
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
        <BodyPart clothingImages={footwearImages} />
      </div>
    </div>
  );
};
