// Single source for project content. Edit text here; the pages read from it.
// Numbers must match content/facts.md. Anything marked placeholder is waiting for real copy.

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Shape of a project window (Work section). Copy this block into a project to fill it in.
const placeholderWindow = {
  lede: 'A short, impactful one-line description of what this project is about.',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  overview: `${lorem} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  role: `${lorem} Ut enim ad minim veniam, quis nostrud exercitation.`,
  highlights: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore.',
    'Ut enim ad minim veniam, quis nostrud exercitation.',
    'Duis aute irure dolor in reprehenderit in voluptate velit.',
  ],
  tools: ['Tool 1', 'Tool 2', 'Tool 3', 'Tool 4', 'Tool 5'],
  results: lorem,
  learnings: lorem,
  // Image paths under /public, e.g. '/work/tcpl-hero.jpg'. Empty = gradient placeholder.
  hero: '',
  gallery: ['', '', '', ''],
};

export const mainProjects = [
  { slug: 'tata-consumer-products', short: 'Tata Consumer', name: 'Tata Consumer Products', tag: 'Digital Strategy Intern', period: 'Apr to May 2026', window: placeholderWindow },
  { slug: 'jp-morgan-chase', short: 'JP Morgan', name: 'JP Morgan Chase', tag: 'Software Development Intern', period: 'Jan to Jun 2025', window: placeholderWindow },
  { slug: 'country-delight', short: 'Country Delight', name: 'Country Delight', tag: 'Live Project, ISB', period: 'Placeholder dates', window: placeholderWindow },
];

export const sideProjects = [
  { name: 'Novartis', tag: 'Pro Bono', text: 'Placeholder description. The problem in one line, what I did about it in another, and the outcome with a number.' },
  { name: 'Forus Health', tag: 'Pro Bono', text: 'Placeholder description. The problem in one line, what I did about it in another, and the outcome with a number.' },
  { name: 'AI Build Lab', tag: 'Semifinalist', text: 'Placeholder description. The problem in one line, what I did about it in another, and the outcome with a number.' },
  { name: 'MakeMyTrip', tag: 'Product Strategy', text: 'Placeholder description. The problem in one line, what I did about it in another, and the outcome with a number.' },
  { name: 'Paytm', tag: 'Product Strategy', text: 'Placeholder description. The problem in one line, what I did about it in another, and the outcome with a number.' },
];

export const email = 'hello@example.com'; // placeholder until confirmed
export const phone = '+91 8447032640';
export const linkedin = 'https://linkedin.com/in/radhikagoel4';

export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
