// Component for displaying character with clothes
export const CharacterDisplay = ({
  clothingLayer,
  incrementClothingLayerIndex,
}) => {
  const click = () => {
    incrementClothingLayerIndex()
    localStorage.setItem('weather', false);
  }
  return (
    <div className="character">
      <img
        onClick={click}
        src={`/assets/clothing/${clothingLayer.img}`}
        alt="raincoat girl"
      />
    </div>
  );
};
