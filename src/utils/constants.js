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

// List of weather and what clothing should display for that weather
export const clothing = {
  // The weather condition
  sunny: {
    // The temperature limit
    "-10": {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Kaldt_L1.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Kaldt_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 3", etymology: "clothing3" }],
          img: "Kaldt_L3png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing2" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [
            { name: "Tskjorte", etymology: "dhskfajhadskjfdsalkjf" },
            { name: "Bukse", etymology: "fjhdasfkjdasfasdf" },
          ],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
  },
  // The weather condition
  snow: {
    // The temperature limit
    "-10": {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
  },
  // The weather condition
  rain: {
    // The temperature limit
    "-10": {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [{ name: "Lag 1", etymology: "clothing" }],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [{ name: "Lag 2", etymology: "clothing2" }],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
  },
};

export const weatherEtymology = {
  clearsky_day: {
    name: "Clear sky day",
    etymology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
};

export const getMappedWeatherEtymology = (yrWeatherClass) => {
  // TODO: Map from yrWeatherClass to something existing in weatherEtymology

  let mapping = "clearsky_day";
  return weatherEtymology[mapping];
};

export const themes = {
  rain: {
    primary: "#a7c9d3",
    secondary: "#8ba7b2",
    tertiary: "#e0fffc",
  },
  sunny: {
    primary: "#F0FFEF",
    secondary: "#9EDB99",
    tertiary: "#FFD88C",
  },
  snow: {
    primary: "#DEFFFF",
    secondary: "#A7C8D5",
    tertiary: "#4B7E9E",
  },
};
