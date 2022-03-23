import { ThemeContext } from "../App";

// Component for displaying etymology
export const ClothingEtymologyDisplay = ({ clothingLayer }) => {
  return (
    <ThemeContext.Consumer>
      {(theme) =>
        clothingLayer.map((clothing, index) => (
          <div className="textbox" key={index}>
            <h1
              className="title"
              style={{ color: theme.tertiary}}
            >
              {clothing.title}
            </h1>
            <p className="text">
              {clothing.etymology}
            </p>
          </div>
        ))
      }
    </ThemeContext.Consumer>
  );
};
