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

// List of clothing by name, with title and etymology
const clothing = {
  jeans: {
    title: "jeans/denim pants",
    etymology:
      "Dongeri- from English dungaree (and to English from Hindi). Commonly used for denim. Ola is commonly used as a stereotypical Norwegian name, but the term olabukse used to be a specific trademark, but is now meaning jeans. Bukse, meaning pants, from Low German buckhose, which means pants (hose) made from goatskin. Jeans is of course from English.",
  },
  lue: {
    title: "lue",
    etymology:
      "A (woolen) hat, meant to keep you warm. From old norse lúfa, which was a nickname for someone with a thick and dense hair of head.",
  },
  hansker: {
    title: "gloves",
    etymology:
      "Gloves, usually with individual space for each finger. From old norse handzkar, originally from Low German hantscho, hantsche, literally translated to hand shoe.",
  },
  ull_trøye: {
    title: "woolen shirt",
    etymology:
      "Composite word of ull, from old norse ull, meaning wool, and trøye, from Old Norse (to which it probably came from Low German) treyja, meaning some kind of shirt. ",
  },
  jakke: {
    title: "jacket",
    etymology:
      "Probably came from German through Danish to Middle Norwegian, where it was called jakka. In cold temperature, this does not need to be waterproof, but could be made out of cotton or synthetic fiber. For windy weather, it should be wind proof.",
  },
  stillongs: {
    title: "long johns",
    etymology:
      "Woolen (or other warm material) long johns. The word was the name of a brand producing woolen long johns. It no longer exists, and the word has become the general term for long johns.",
  },
  bukse: {
    title: "pants",
    etymology:
      "From Low German buckhose, which means pants (hose) made from goatskin.",
  },
  genser: {
    title: "sweater/hoodie",
    etymology:
      "Thicker shirt covering the arms. From English Guernsey, meaning a shirt from the island Guernsey.",
  },
  t_skjort: {
    title: "T-shirt",
    etymology:
      "From english t-shirt, and the Old Norse word skyrta, meaning shirt made of wool, canvas or leather.",
  },
  kortbukse: {
    title: "shorts",
    etymology:
      "Literally translates to short pants. Composed of kort, meaning short, from Old Norse kortr, which came from latin curtus, meaning shortened, through Low German. The second part is bukse, meaning pants, from Low German buckhose, which means pants (hose) made from goatskin. Jeans is of course from English.",
  },
  solbriller: {
    title: "sunglasses",
    etymology:
      "Sol, from Old Norse sól, means sun, and briller, from Low German, means glasses.",
  },
  vintersko: {
    title: "winter shoes",
    etymology:
      "Vinter, meaning winter, comes from Old Norse vintr, and probably has the same origin as the English word. Sko, meaning shoes, comes from Old Norse skór, which literally translates to something that covers.",
  },
  joggesko: {
    title: "joggers/sneakers",
    etymology:
      "Literally translates to jogging shoes. This word is often used for your average everyday shoe. Jogge means jog, and comes from the English word jog. Sko, meaning shoes, comes from Old Norse skór, which literally translates to something that covers.",
  },
  ullsokker: {
    title: "woolen socks",
    etymology:
      "Composite word of ull, from old norse ull, meaning wool, and sokker, from Old Norse sokkr meaning low, soft shoe, originally from Latin.",
  },
  regntøy: {
    title: "rain gear",
    etymology:
      "Literally translates to rain clothing or rain material. Regn means rain, and the word was written the exact same way in Old Norse, and tøy means material or clothing, and from the Old Norse word tygi, meaning tool or equipment, which had the same Low German origin as the German word Zeug.",
  },
};

// List of weather and what clothing should display for that weather
export const clothingForWeather = {
  // The weather condition
  sunny: {
    // The temperature limit
    "-10": {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.stillongs, clothing.ullsokker, clothing.t_skjort],
          img: "Kaldt_L1.png", // Path to imag
        },
        {
          clothing: [clothing.genser, clothing.bukse, clothing.vintersko],
          img: "Kaldt_L2.png", // Path to imag
        },
        {
          clothing: [clothing.lue, clothing.hansker, clothing.bukse],
          img: "Kaldt_L3png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.jeans, clothing.joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.t_skjort, clothing.jeans, clothing.joggesko],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.jeans, clothing.joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.t_skjort, clothing.jeans, clothing.joggesko],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.jeans, clothing.joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.t_skjort, clothing.jeans, clothing.joggesko],
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
          clothing: [clothing.stillongs, clothing.ullsokker, clothing.t_skjort],
          img: "Kaldt_L1.png", // Path to imag
        },
        {
          clothing: [clothing.genser, clothing.bukse, clothing.vintersko],
          img: "Kaldt_L2.png", // Path to imag
        },
        {
          clothing: [clothing.lue, clothing.hansker, clothing.bukse],
          img: "Kaldt_L3png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.jeans, clothing.joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.t_skjort, clothing.jeans, clothing.joggesko],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.jeans, clothing.joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.t_skjort, clothing.jeans, clothing.joggesko],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.jeans, clothing.joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.t_skjort, clothing.jeans, clothing.joggesko],
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
          clothing: [clothing.regntøy, clothing.joggesko, clothing.jeans],
          img: "Regn_L3.png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.regntøy, clothing.joggesko, clothing.jeans],
          img: "Regn_L3.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.regntøy, clothing.joggesko, clothing.jeans],
          img: "Regn_L3.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.regntøy, clothing.joggesko, clothing.jeans],
          img: "Regn_L3.png", // Path to imag
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
    img: "rain.png",
  },
  sunny: {
    primary: "#F0FFEF",
    secondary: "#9EDB99",
    tertiary: "#FFD88C",
    img: "sunny.png",
  },
  snow: {
    primary: "#DEFFFF",
    secondary: "#A7C8D5",
    tertiary: "#4B7E9E",
    img: "snow.png",
  },
};
