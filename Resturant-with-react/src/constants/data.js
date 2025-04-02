import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const appetizers = [
  {
    title: "Truffle Arancini",
    price: "$14",
    tags: "Crispy risotto | Black truffle | Parmesan",
  },
  {
    title: "Burrata Salad",
    price: "$16",
    tags: "Fresh burrata | Heirloom tomatoes | Basil",
  },
  {
    title: "Beef Tartare",
    price: "$18",
    tags: "Prime beef | Quail egg | Capers",
  },
];

const mainCourses = [
  {
    title: "Filet Mignon",
    price: "$42",
    tags: "8oz prime beef | Truffle mash | Seasonal vegetables",
  },
  {
    title: "Pan-Seared Halibut",
    price: "$36",
    tags: "Lemon beurre blanc | Asparagus | Saffron potatoes",
  },
  {
    title: "Mushroom Risotto",
    price: "$28",
    tags: "Wild mushrooms | Parmesan | White truffle oil",
  },
];

const desserts = [
  {
    title: "Chocolate Soufflé",
    price: "$12",
    tags: "Warm chocolate | Vanilla bean ice cream",
  },
  {
    title: "Crème Brûlée",
    price: "$10",
    tags: "Vanilla bean | Caramelized sugar | Berries",
  },
  {
    title: "Apple Tarte Tatin",
    price: "$11",
    tags: "Caramelized apples | Puff pastry",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, appetizers, mainCourses, desserts, awards };
