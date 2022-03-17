import { ThemeContext } from "../App";

// Takes in two options, a state and toggle function
// Returns aesthetic aestettoggle component that can toggle between the two options
const ToggleSwitch = ({ toggle, options, state }) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className="toggle-switch" onClick={toggle}>
          <p>{options[0]}</p>
          <div
            className={`toggle ${state}`}
            style={{ backgroundColor: theme.tertiary }}
          >
            <div className="toggle-indicator" />
          </div>
          <p>{options[1]}</p>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default ToggleSwitch;
