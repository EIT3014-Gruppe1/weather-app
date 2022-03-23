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
  Lue: {
    title: "Lue",
    etymology: "a (woolen) hat, meant to keep you warm. From Old Norse lúfa, which was a nickname for someone with a thick and dense hair of head"
  },
  // Hue: synonym to lue, might vary between dialects. From Old Norse húfa, which had the same meaning (https://ordbokene.no/nn/31657/hue og norrøn ordbok) 

  Skjerf: { title: "Skjerf", etymology: "Scarf. From French écharpe with similar meaning." },

  Hals: { title: "Hals", etymology: "A closed, tight kind of garment that goes around your neck instead of a scarf. The same word also means neck. From Old Norse hals, which had the same meaning" },

  Hansker: { title: "Hansker", eytomology: "Gloves, usually with individual space for each finger. From Old Norse handzkar, originally from Low German hantscho, hantsche, literally translated to hand shoe" },

  Votter: { title: "Votter", etymology: "Mittens or gloves, usually with one space for the thumb, another for the rest of the fingers. From Old Norse vǫttar with the same meaning" },

  Ulltrøye: { title: "Ulltrøye", etymology: "(woolen) shirt. Composite word of ull, from old norse ull, meaning wool, and trøye, from Old Norse (to which it probably came from Low German) treyja, meaning some kind of shirt." },

  Mellomlag: { title: "Mellomlag", etymology: "Middle layer. Composite word of mellom, from Old Norse (í, á) milli(m), mill(j)um, meðal, originally meaning “in the middle of”, and lag, from Old Norse lag, meaning the same.This is the layer between the inner layer and the outer layer. It could consist of multiple layers, and it should be a warm material. Fleece is ideal for this use, either synthetic or fleece made from wool." },

  Jakke: { title: "Jakke", etymology: "Jacket. Probably came from German through Danish to Middle Norwegian, where it was called jakka. (https://ordbokene.no/nn/35137/jakke) In cold temperature, this does not need to be waterproof, but could be made out of cotton or synthetic fiber. For windy weather, it should be wind proof." },

  Anorakk: { title: "Anorakk", etymology: "An outer jacket with a hood, and usually not a full zipper. These are very common in Norway, and have been for a long while. You will probably see both really old ones and newer models during the winter in Norway. The word comes from Eskimo-Aleut language, probably Greenlandic." },

  Stillongs: { title: "Stillongs", etymology: "Woolen (or other warm material) long johns. The word was the name of a brand producing woolen long johns. It no longer exists, and the word has become the general term for long johns." },

  Boblebukse: { title: "Boblebukse", etymology: "Outer pants. Literally translates to bubble pants. Composite word of boble, meaning bubble, from Low German, and bukse, meaning pants, from Low German buckhose, which means pants (hose) made from goatskin" },

  Bukse: { title: "Bukse", etymology: "Pants. From Low German buckhose, which means pants (hose) made from goatskin." },

  Jeans: { title: "Dongeribukse/olabukse/jeans", etymology: "Jeans/denim pants. Dongeri- from English dungaree (and to English from Hindi). Commonly used for denim. Ola is commonly used as a stereotypical Norwegian name, but the term olabukse used to be a specific trademark, but is now meaning jeans. Bukse, meaning pants, from Low German buckhose, which means pants (hose) made from goatskin. Jeans is of course from English." },

  Genser: { title: "Genser", etymology: "Sweater/hoodie. Thicker shirt covering the arms. From English Guernsey, meaning a shirt from the island Guernsey" },

  Tskjorte: { title: "T-skjorte", etymology: "T-shirt. From english t-shirt, and the Old Norse word skyrta, meaning shirt made of wool, canvas or leather" },

  Singlet: { title: "Singlet", etymology: "A shirt with no sleeves. From English." },

  Kortbukse: { title: "Kortbukse", etymology: "Shorts. Literally translates to short pants. Composed of kort, meaning short, from Old Norse kortr, which came from latin curtus, meaning shortened, through Low German. The second part is bukse, meaning pants, from Low German buckhose, which means pants (hose) made from goatskin. Jeans is of course from English." },

  Solbriller: { title: "Solbriller", etymology: "Sunglasses. Sol, from Old Norse sól, means sun, and briller, from Low German, means glasses." },

  Gummistøvler: { title: "Gummistøvler", etymology: "Rubber boots. Gummi means rubber, and probably came from Egyptian through Latin, and støvler, from Middle Norwegian styfill, before that from Italian stivale through Low German." },

  Vintersko: { title: "Vintersko", etymology: " Winter shoes. Vinter, meaning winter, comes from Old Norse vintr, and probably has the same origin as the English word. Sko, meaning shoes, comes from Old Norse skór, which literally translates to something that covers" },

  Joggesko: { title: "Joggesko", etymology: "Joggers/sneakers. Literally translates to jogging shoes. This word is often used for your average everyday shoe. Jogge means jog, and comes from the English word jog. Sko, meaning shoes, comes from Old Norse skór, which literally translates to something that covers" },

  Sandaler: { title: "Sandaler", etymology: "Sandals, from Persian through Greek." },

  Ullsokker: { title: "Ullsokker", etymology: "Woolen socks. Composite word of ull, from old norse ull, meaning wool, and sokker, from Old Norse sokkr meaning low, soft shoe, originally from Latin." },

  Solhatt: { title: "Solhatt", etymology: " Sun hat. Composed of sol, from Old Norse sól, which means sun, and hatt, from Old Norse hǫttr/hattr, meaning hat." },

  Sydvest: { title: "Sydvest", etymology: "A rain hat. Literally translates to southwest, and also exists in English as sou’wester. The name is due to the fact that the hat originally was meant to protect its wearer from southweststorm." },

  Solkrem: { title: "Solkrem", etymology: " Sun protector lotion. Literally translates to sun cream. Composed of sol, from Old Norse sól, means sun, and krem, from French crème, means cream." },

  Regntøy: { title: "Regntøy", etymology: "Rain gear. Literally translates to rain clothing or rain material. Regn means rain, and the word was written the exact same way in Old Norse, and tøy means material or clothing, and from the Old Norse word tygi, meaning tool or equipment, which had the same Low German origin as the German word Zeug" },
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
          clothing: [clothing.Genser, clothing.Bukse, clothing.Vintersko],
          img: "Kaldt_L2.png", // Path to imag
        },
        {
          clothing: [clothing.Lue, clothing.Hansker, clothing.Bukse],
          img: "Kaldt_L3png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.Jeans, clothing.Joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.Tskjorte, clothing.Jeans, clothing.Joggesko],
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
          clothing: [clothing.Jeans, clothing.Joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.Tskjorte, clothing.Jeans, clothing.Joggesko],
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
          clothing: [clothing.Jeans, clothing.Joggesko],
          img: "Sommer.png", // Path to imag
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
          clothing: [clothing.Genser, clothing.Bukse, clothing.Vintersko],
          img: "Kaldt_L2.png", // Path to imag
        },
        {
          clothing: [clothing.Lue, clothing.Hansker, clothing.Bukse],
          img: "Kaldt_L3png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.Jeans, clothing.Joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.Tskjorte, clothing.Jeans, clothing.Joggesko],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.Jeans, clothing.Joggesko],
          img: "Vaar_L2.png", // Path to imag
        },
        {
          clothing: [clothing.Tskjorte, clothing.Jeans, clothing.Joggesko],
          img: "Vaar_L1.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.Jeans, clothing.Joggesko],
          img: "Sommer.png", // Path to imag
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
          clothing: [clothing.Regntøy, clothing.Joggesko, clothing.Jeans],
          img: "Regn_L3.png", // Path to imag
        },
      ],
    }, // The temperature limit
    0: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.Regntøy, clothing.Joggesko, clothing.Jeans],
          img: "Regn_L3.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    10: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.Regntøy, clothing.Joggesko, clothing.Jeans],
          img: "Regn_L3.png", // Path to imag
        },
      ],
    },
    // The temperature limit
    20: {
      // Array of clothing layers
      clothingLayers: [
        {
          clothing: [clothing.Regntøy, clothing.Joggesko, clothing.Jeans],
          img: "Regn_L3.png", // Path to imag
        },
      ],
    },
  },
};

export const weatherEtymology = {
  clearsky: {
    name: "Sol",
    etymology:
      "Noun. Means sun. from Old Norse sól, which also means sun.",
  },
  cloudy: {
    name: "Overskya",
    etymology:
      "Adjective. Means cloudy. Over means over, and probably came from Low German ōver and Old Norse yfir. Skya means clouded, and is the perfekt participle of the verb skye which means to get cloudy. Originates from the Old Norse noun ský. ",
  },
  fair: {
    name: "Pent vêr",
    etymology:
      "Adjective + noun. Means fair weather, but litterally means “pretty weather”. Pent, which means pretty, probably came from French peine. Vêr, which means weather, comes from the Old Norse word veðr.",
  },
  fog: {
    name: "Tåke",
    etymology:
      " Noun. Means fog. From Old Norse Þoka.",
  },
  heavyrain: {
    name: "Kraftig regn",
    etymology:
      "Adjective + noun. Means heavy rain. Kraftig means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Regn means rain, and the word was written the exact same way in Old Norse",
  },
  heavyrainandthunder: {
    name: "Kraftig regn og tore",
    etymology:
      "Adjective + noun and (og) noun. Means heavy rain and thunder. Kraftig means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Regn means rain, and the word was written the exact same way in Old Norse. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  heavyrainshowers: {
    name: "Kraftige regnbyer",
    etymology:
      "Adjective + noun. Means heavy rainshowers. Kraftige means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Regn means rain, and the word was written the exact same way in Old Norse. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  heavyrainshowersandthunder: {
    name: "Kraftige regnbyer og tore ",
    etymology:
      "Adjective + noun and (og) noun. Means heavy rainshowers and thunder. Kraftige means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Regn means rain, and the word was written the exact same way in Old Norse. Byer means showers in the weather sense, and comes from the Dutch word bui. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  heavysleet: {
    name: "Kraftig sludd",
    etymology:
      "Adjective + noun. Means heavy sleet. Kraftig means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Sludd means sleet, and is ilnkted to the Low German word sludderen.",
  },
  heavysleetandthunder: {
    name: "Kraftig sludd og tore",
    etymology:
      "Adjectiv + noun and (og) noun. Means heavy sleet and thunder. Kraftig means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Sludd means sleet, and is ilnkted to the Low German word sludderen. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  heavysleetshowers: {
    name: "Kraftige sluddbyer",
    etymology:
      "Adjective + noun. Means heavy sleetshowers. Kraftige means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Sludd means sleet, and is ilnkted to the Low German word sludderen. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  heavysleetshowersandthunder: {
    name: "Kraftige sluddbyer og tore",
    etymology:
      "Adjective + noun. Means heavy sleetshowes and thunder. Kraftige means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Sludd means sleet, and is ilnkted to the Low German word sludderen. Byer means showers in the weather sense, and comes from the Dutch word bui. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  heavysnow: {
    name: "Kraftig snøvêr",
    etymology:
      "Adjective + noun. Means heavy snow. Kraftig means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Snø means snow and comes from the Old Norse snjór, snær. Vêr, which means weather, comes from the Old Norse word veðr.",
  },
  heavysnowandthunder: {
    name: "Kraftig snøvêr og tore",
    etymology:
      "Adjective + noun and (og) noun. Means heavy snow and thunder. Kraftig means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Snø means snow and comes from the Old Norse snjór, snær. Vêr, which means weather, comes from the Old Norse word veðr. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  heavysnowshowers: {
    name: "Kraftige snøbyer",
    etymology:
      "Adjective + noun. Means heavy snowshowers. Kraftige means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Snø means snow and comes from the Old Norse snjór, snær. Byer means showers in the weather sense, and comes from the Dutch word bui",
  },
  heavysnowshowersandthunder: {
    name: "Kraftige snøbyer og tore",
    etymology:
      "Adjective + noun and (og) noun. Means heavy snowshowers and thunder. Kraftige means heavy or powerful, and comes from the noun kraft, meaning power, which again comes from the Old Norse word kraptr, krǫptr, probably also with some German influence. Snø means snow and comes from the Old Norse snjór, snær. Byer means showers in the weather sense, and comes from the Dutch word bui Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  lightrain: {
    name: "Lett regn",
    etymology:
      " Adjective + noun. Means light rain. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Regn means rain, and the word was written the exact same way in Old Norse ",
  },
  lightrainandthunder: {
    name: "Lett regn og tore",
    etymology:
      "Adjective + noun and (og) noun. Means light rain and thunder. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Regn means rain, and the word was written the exact same way in Old Norse. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  lightrainshowers: {
    name: "Lette regnbyer",
    etymology:
      " Adjective + noun. Means light rainshowers. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Regn means rain, and the word was written the exact same way in Old Norse. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  lightrainshowersandthunder: {
    name: "Lette regnbyer og tore",
    etymology:
      "Adjective + noun and (og) noun. Means light rainshowers and thunder. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Regn means rain, and the word was written the exact same way in Old Norse. Byer means showers in the weather sense, and comes from the Dutch word bui. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  lightsleet: {
    name: "Lett sludd",
    etymology:
      " Adjective + noun. Means light sleet. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Sludd means sleet, and is linked to the Low German word sludderen. ",
  },
  lightsleetandthunder: {
    name: "Lett sludd og tore",
    etymology:
      ": Adjective + noun and (og) noun. Means light sleet and thunder. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Sludd means sleet, and is ilnkted to the Low German word sludderen. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  lightsleetshowers: {
    name: "Lette sluddbyer",
    etymology:
      "Adjective + noun. Means light sleetshowers. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Sludd means sleet, and is ilnkted to the Low German word sludderen. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  lightsleetshowersandthunder: {
    name: "Lette sluddbyer og tore",
    etymology:
      "Adjective + noun. Means light sleetshowes and thunder. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Sludd means sleet, and is ilnkted to the Low German word sludderen. Byer means showers in the weather sense, and comes from the Dutch word bui. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  lightsnow: {
    name: "Lett snøvêr",
    etymology:
      "Adjective + noun. Means light heavy snow. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Snø means snow and comes from the Old Norse snjór, snær. Vêr, which means weather, comes from the Old Norse word veðr.",
  },
  lightsnowandthunder: {
    name: "Lett snøvêr og tore",
    etymology:
      "Adjective + noun and (og) noun. Means light snow and thunder. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Snø means snow and comes from the Old Norse snjór, snær. Vêr, which means weather, comes from the Old Norse word veðr. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  lightsnowshowers: {
    name: "Lette snøbyer",
    etymology:
      "Adjective + noun. Means light snowshowers. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Snø means snow and comes from the Old Norse snjór, snær. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  lightsnowshowersandthunder: {
    name: "Lette snøbyer og tore",
    etymology:
      "Adjective + noun and (og) noun. Means lilght snowshowers and thunder. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Snø means snow and comes from the Old Norse snjór, snær. Byer means showers in the weather sense, and comes from the Dutch word bui Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  partlycloudy: {
    name: "Lettskya",
    etymology:
      "Noun. Means party loudy. Lett means light, as in not heavy, and comes from the Old Norse word léttr. Skya means clouded, and is the perfekt participle of the verb skye which means to get cloudy. Originates from the Old Norse noun ský.",
  },
  rain: {
    name: "Regn",
    etymology:
      " Noun. Means rain. Regn means rain, and the word was written the exact same way in Old Norse.",
  },
  rainandthunder: {
    name: "Regn og tore",
    etymology:
      "Noun and (og) noun. Means rain and thunder. Regn means rain, and the word was written the exact same way in Old Norse. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse."
  },
  rainshowers: {
    name: "Regnbyer",
    etymology:
      "Noun. Means rainshowers. Regn means rain, and the word was written the exact same way in Old Norse. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  rainshowersandthunder: {
    name: "Regnbyer og tore",
    etymology:
      "Noun and (og) noun. Means rainshowers and thunder. Regn means rain, and the word was written the exact same way in Old Norse. Byer means showers in the weather sense, and comes from the Dutch word bui. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  sleet: {
    name: "Sludd",
    etymology:
      "Noun. Means sleet. Sludd means sleet, and is linkted to the Low German word sludderen",
  },
  sleetandthunder: {
    name: "Sludd og tore",
    etymology:
      "Noun and (og) noun. Means sleet and thunder. Sludd means sleet, and is ilnkted to the Low German word sludderen. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  sleetshowers: {
    name: "Sluddbyer ",
    etymology:
      "Noun. Means sleetshowers. Sludd means sleet, and is ilnkted to the Low German word sludderen. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  sleetshowersandthunder: {
    name: "Sluddbyer og tore",
    etymology:
      "Noun. Means sleetshowes and thunder. Sludd means sleet, and is ilnkted to the Low German word sludderen. Byer means showers in the weather sense, and comes from the Dutch word bui. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  snow: {
    name: "Snøvêr",
    etymology:
      "Noun. Means heavy snow. Snø means snow and comes from the Old Norse snjór, snær. Vêr, which means weather, comes from the Old Norse word veðr.",
  },
  snowandthunder: {
    name: "Snøvêr og tore",
    etymology:
      "Noun and (og) noun. Means snow and thunder. Snø means snow and comes from the Old Norse snjór, snær. Vêr, which means weather, comes from the Old Norse word veðr. Og, from Old Norse ok, means and. Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
  snowshowers: {
    name: "Snøbyer",
    etymology:
      "Noun. Means snowshowers. Snø means snow and comes from the Old Norse snjór, snær. Byer means showers in the weather sense, and comes from the Dutch word bui.",
  },
  snowshowersandthunder: {
    name: "Snøbyer og tore",
    etymology:
      "Noun and (og) noun. Means snowshowers and thunder. Snø means snow and comes from the Old Norse snjór, snær. Byer means showers in the weather sense, and comes from the Dutch word bui Tore means thunder, and comes from the name of the Norse god Tor, or Þórr in Old Norse.",
  },
};

export const getMappedWeatherEtymology = (yrWeatherClass) => {
  // TODO: Map from yrWeatherClass to something existing in weatherEtymology
  let mapping = "clearsky";
  if (yrWeatherClass)
    mapping = yrWeatherClass.split("_")[0];
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
