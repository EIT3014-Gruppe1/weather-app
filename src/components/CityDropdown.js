import { cities } from "../utils/constants";
import useUserLocation from "../utils/useUserLocation";
import CustomDropdown from "./CustomDropdown";

// A dropdown menu for choosing location
export const CityDropdown = ({ setChoosenCity, choosenCity }) => {
  const [userLocation] = useUserLocation();
  let locations = [
    {
      name: "My location",
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    },
    ...cities,
  ];

  return (
    <CustomDropdown
      title={choosenCity.name}
      locations={locations}
      selectItem={setChoosenCity}
    />
  );
};

export default CityDropdown;
