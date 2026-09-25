// Bento tiles. Numbers must match content/facts.md. count/pre/post drive the count-up animation.
export const highlights = {
  gauge: {
    cap: 'New retail stores onboarded',
    sub: 'in first 2 months of MVP pilot',
    value: { count: 600, pre: '~' },
    chips: ['Tata Consumer', 'AI store mapping', 'Scaled to 66 cities'],
  },
  a: {
    cap: 'Frontline sales reps interviewed',
    value: { count: 50, post: '+' },
    sub: 'Tata Consumer, to fix a 33% feature drop-off',
  },
  map: {
    value: { count: 40, post: ' hrs' },
    cap: 'saved per sales rep monthly',
    sub: 'Tata Consumer',
  },
  wide: {
    cap: ['Annual sales opportunity from 3.5k', 'new retail leads, Tata Consumer'],
    value: { count: 80, pre: '₹', post: 'cr' },
  },
  bars: {
    cap: 'Est. risk exposure mitigated',
    sub: 'per year, via anomaly detection tool',
    value: { count: 42, pre: '$', post: 'mn' },
    chips: ['JP Morgan', '0 to 1 build', 'Shipped early'],
  },
};
