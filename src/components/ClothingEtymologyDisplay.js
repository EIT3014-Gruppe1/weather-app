import { ThemeContext } from "../App";

// Component for displaying etymology
export const ClothingEtymologyDisplay = ({ clothingLayer }) => {
  return (
    <ThemeContext.Consumer>
      {(theme) =>
        clothingLayer.map((clothing, index) => (
          <div className="text-area">
            <h1 className="small-title" style={{ color: theme.tertiary }}>
              {clothing.title}
            </h1>
            <div className="text-box" key={index}>
              <p className="small-text">{clothing.etymology}</p>
            </div>
          </div>
        ))
      }
    </ThemeContext.Consumer>
  );
};
