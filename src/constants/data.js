import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'The "Big Gourmet Award" is a prestigious recognition given to exceptional restaurants for their outstanding achievements in the culinary world',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'The "Rising Star Award" in the restaurant industry is a distinguished recognition bestowed upon promising and up-and-coming restaurants that have shown great potential and promise in the culinary world',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'The "AA Hospitality Restaurant Award" is a prestigious recognition presented by The AA (Automobile Association), a reputable organization known for providing hotel and restaurant ratings in the United Kingdom',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'The "Outstanding Chef Award" is a prestigious recognition given to exceptional and highly accomplished chefs in the culinary industry',
  },
];

export default { wines, cocktails, awards };
