import { useState } from "react";

// Takes in a list of items, a selectItem (state updater) and title (currently selected item)
// Returns a functional dropdown to select between locations
const CustomDropdown = ({ title, locations, selectItem }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => setIsListOpen(!isListOpen);

  return (
    <div className="dropdown">
      <div onClick={toggleList}>{title}</div>
      {isListOpen && (
        <div role="list" className="dropdown-list">
          <hr />
          {locations
            .filter((location) => location.name !== title)
            .map((location, index) => (
              <div
                className="dropdown-list-item"
                key={index}
                onClick={() => {
                  selectItem(location);
                  toggleList();
                }}
              >
                {location.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
