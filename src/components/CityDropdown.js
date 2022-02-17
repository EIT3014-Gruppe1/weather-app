import { NavDropdown } from "react-bootstrap";

// list of coords for top cities in Norway
export const cities = [
  {
    name: "Trondheim",
    latitude: 63.430515,
    longitude: 10.395053,
  },
  {
    name: "Oslo",
    latitude: 59.913868,
    longitude: 10.752245,
  },
  {
    name: "Bergen",
    latitude: 60.391262,
    longitude: 5.322054,
  },
  {
    name: "Stavanger",
    latitude: 58.969975,
    longitude: 5.733107,
  },
  {
    name: "Bodø",
    latitude: 67.279999,
    longitude: 14.40501,
  },
];

// A dropdown menu for choosing location
export const CityDropdown = ({ setChoosenCity, choosenCity, userLocation }) => {
  return (
    <NavDropdown
      id="dropdown-basic-button"
      title={choosenCity.name}
      menuVariant="dark"
    >
      <NavDropdown.Item
        onClick={() =>
          setChoosenCity({
            name: "My location",
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          })
        }
      >
        My location
      </NavDropdown.Item>
      {cities.map((city) => {
        return (
          <NavDropdown.Item
            onClick={() => setChoosenCity(city)}
            key={city.name}
          >
            {city.name}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default CityDropdown;
