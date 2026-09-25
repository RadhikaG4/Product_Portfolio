// Single source for project names and links. Copy is placeholder until final text arrives.
export const mainProjects = [
  { slug: 'tata-consumer-products', name: 'Tata Consumer Products', tag: 'Digital Strategy Intern' },
  { slug: 'jp-morgan-chase', name: 'JP Morgan Chase', tag: 'Software Development Intern' },
  { slug: 'country-delight', name: 'Country Delight', tag: 'Live Project' },
];

export const sideProjects = [
  { name: 'Novartis', tag: 'Pro Bono' },
  { name: 'Forus Health', tag: 'Pro Bono' },
  { name: 'AI Build Lab', tag: 'Semifinalist' },
  { name: 'MakeMyTrip', tag: 'Product Strategy' },
  { name: 'Paytm', tag: 'Product Strategy' },
];

export const email = 'hello@example.com'; // placeholder until confirmed
export const phone = '+91 8447032640';
export const linkedin = 'https://linkedin.com/in/radhikagoel4';

export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
