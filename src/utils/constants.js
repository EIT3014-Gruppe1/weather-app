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

// List of weather and what should display for that weather
export const weather = {
  // The weather condition
  sunny: {
    // The temperature limit
    "-10": {
      // Array of clothing layers
      clothingLayers: [
        {
          name: "Test", // Name of clothing
          etymology: "clothing", // Etymology about clothing
          img: "/logo192.png", // Path to imag
        },
        {
          name: "Test2", // Name of clothing
          etymology: "clothing2", // Etymology about clothing
          img: "/logo512.png", // Path to imag
        },
      ],
      etymology: "weather", // Etymology about the weather
    },
  },
};
