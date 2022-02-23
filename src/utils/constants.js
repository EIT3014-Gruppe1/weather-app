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
 overdel: {
  innertøy: [
   {
    name: "tskjorte",
    temperature: 20,
    rain_proof: false,
    about:
     "T-skjorte, også kalt T-trøye, er en enkel skjorte eller trøye med rette linjer og korte eller lange ermer, som gir den form av en T",
   },
  ],
  yttertøy: [
   {
    name: "boblejakke",
    temperature: -5,
    rain_proof: false,
    about:
     "Dunjakke, også kjent som «boblejakke», er en vattert jakke som er fylt med enten ande- eller gåsedun, eller syntetisk dun. Luftlommene som dannes mellom dunene gjør at jakken kan holde på varm luft.",
   },
   {
    name: "hettegenser",
    temperature: 10,
    rain_proof: false,
    about: "En hettegenser er en genser med hette.",
   },
   {
    name: "regnjakke",
    temperature: 15,
    rain_proof: true,
    about:
     "Regntøy er klær laget av tekstiler som er spesielt behandlet for å holde nedbør i form av regn på utsiden av plagget/plaggene.",
   },
  ],
 },
 underdel: {
  bukse: [
   {
    name: "jeans",
    temperature: 0,
    rain_proof: true,
    about: "Vanlig bukse my guy!",
   },
  ],
 },
};
