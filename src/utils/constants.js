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

// List of clothes
export const clothes = {
 upper_body: {
  innerwear: [
   {
    name: "tskjorte",
    temperature: 20,
    rain_proof: false,
    image: "upper_body/tshirt.png",
    about:
     "T-skjorte, også kalt T-trøye, er en enkel skjorte eller trøye med rette linjer og korte eller lange ermer, som gir den form av en T",
   },
   {
    name: "skjorte",
    temperature: 10,
    rain_proof: false,
    image: "upper_body/skjorte.png",
    about:
     "Skjorte",
   },
  ],
  outerwear: [
   {
    name: "boblejakke",
    temperature: -5,
    rain_proof: false,
    image: "upper_body/dunjakke.png",
    about:
     "Dunjakke, også kjent som «boblejakke», er en vattert jakke som er fylt med enten ande- eller gåsedun, eller syntetisk dun. Luftlommene som dannes mellom dunene gjør at jakken kan holde på varm luft.",
   },
   {
    name: "hettegenser",
    temperature: 15,
    rain_proof: false,
    image: "upper_body/hoodie.png",
    about: "En hettegenser er en genser med hette.",
   },
   {
    name: "regnjakke",
    temperature: 15,
    rain_proof: true,
    image: "upper_body/skalljakke.png",
    about:
     "Regntøy er klær laget av tekstiler som er spesielt behandlet for å holde nedbør i form av regn på utsiden av plagget/plaggene.",
   },
  ],
 },
 lower_body: {
  pants: [
   {
    name: "jeans",
    temperature: 0,
    rain_proof: true,
    image: "lower_body/lyse_jeans.png",
    about: "Vanlig bukse my guy!",
   },
   {
    name: "shorts",
    temperature: 20,
    rain_proof: true,
    image: "lower_body/shorts.png",
    about: "shorts",
   },
  ],
 },
 feet: {
  shoes: [
   {
    name: "shoes",
    temperature: 0,
    rain_proof: true,
    image: "feet/vintersko.png",
    about: "Just some shoes",
   },
  ],
 },
};
