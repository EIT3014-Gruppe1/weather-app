// Component for displaying etymology
export const ClothingEtymologyDisplay = ({ clothingLayer }) => {
  return (
    <div>
      {clothingLayer.map((clothing, index) => (
        <div key={index}>
          <h1>{clothing.name}</h1>
          <p>{clothing.etymology}</p>
        </div>
      ))}
    </div>
  );
};
