// Component for displaying character with clothes
export const CharacterDisplay = ({
  clothingLayer,
  incrementClothingLayerIndex,
}) => {
  return (
    <div className="character">
      <img
        onClick={incrementClothingLayerIndex}
        src={`/assets/clothing/${clothingLayer.img}`}
        alt="raincoat girl"
      />
    </div>
  );
};
