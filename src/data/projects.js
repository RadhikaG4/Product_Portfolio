// Single source for project names and links. Copy is placeholder until final text arrives.
export const mainProjects = [
  { slug: 'tata-consumer-products', short: 'Tata Consumer', name: 'Tata Consumer Products', tag: 'Digital Strategy Intern', period: 'Apr to May 2026' },
  { slug: 'jp-morgan-chase', short: 'JP Morgan', name: 'JP Morgan Chase', tag: 'Software Development Intern', period: 'Jan to Jun 2025' },
  { slug: 'country-delight', short: 'Country Delight', name: 'Country Delight', tag: 'Live Project, ISB', period: 'Placeholder dates' },
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
