import { useState } from "react";

// Takes an array of clothing images and display one from the array
const BodyPart = ({ clothingImages }) => {
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    let newIndex = index + 1;
    if (newIndex >= clothingImages.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  return (
    <img
      onClick={increaseIndex}
      src={`/assets/clothing/${clothingImages[index]}`}
      alt="raincoat girl"
    />
  );
};

export default BodyPart;
