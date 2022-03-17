import { useState, useEffect } from "react";
import { getUserLocation } from "../api/API";

// Returns user location
const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState(0);

  useEffect(() => {
    getUserLocation(setUserLocation);
  }, []);

  return [userLocation];
};

export default useUserLocation;
