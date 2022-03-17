import { NavDropdown } from "react-bootstrap";
import { cities } from "../utils/constants";
import useUserLocation from "../utils/useUserLocation";

// A dropdown menu for choosing location
export const CityDropdown = ({ setChoosenCity, choosenCity }) => {
  const [userLocation] = useUserLocation();
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
