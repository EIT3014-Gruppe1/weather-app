import "../styles/character.css";

// Component for displaying character with clothes
export const CharacterDisplay = ({ clothing, onClick }) => {
  return (
    <div className="character">
      <h1>{clothing.name}</h1>
      <img
        onClick={onClick}
        src={`/assets/clothing/${clothing.img}`}
        alt="raincoat girl"
      />
    </div>
  );
};
