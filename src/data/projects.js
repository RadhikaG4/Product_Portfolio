// Single source for project content. Edit text here; the pages read from it.
// Numbers must match content/facts.md. Anything marked placeholder is waiting for real copy.

// Window shape (Work section): lede, tags, overview, role, highlights, tools, results, learnings,
// hero (1920x600) and gallery (4 x [image, caption]). Images live in public/work/. Empty image = gradient placeholder.
// caseUrl (optional) sends "Open full case study" to an outside page instead of /work/<slug>/.
const img = (name) => `/work/${name}.webp`;

export const mainProjects = [
  {
    slug: 'tata-consumer-products', short: 'Tata Consumer', name: 'Tata Consumer Products', tag: 'Digital Strategy Intern', period: 'Apr to May 2026',
    window: {
      lede: 'Why a third of AI-picked stores never got a visit, and how I got sales reps to trust the list again.',
      tags: ['Field Research', 'AI Recommendations', 'Sales Tech'],
      overview: "Tata Consumer's sales reps found new stores on foot, and spent 18 to 20% of their time just searching. The team built a recommendation engine that puts new stores into the reps' sales app, with a map to each one. The Mumbai pilot worked, but a third of the recommended stores never got a visit. I set out to find out why, and what would make reps actually use the list.",
      role: 'Summer intern on the Digital (Data & AI) team for 8 weeks. I mapped the whole process end to end, went through the pilot data store by store, and ran a geospatial analysis. I spoke with 50 sales reps on the ground, then designed a feedback loop that lets reps correct the engine from inside the app.',
      highlights: [
        'Found the biggest leak in the pilot: 33% of recommended stores were never visited',
        'Ruled out location and distance by mapping every store against its distributor',
        'Spoke with 50 reps and traced the gap to stale data, duplicate stores and no way to push back',
        'Designed in-app feedback with guardrails: a location check, a photo, and agreement from 2 to 3 reps',
      ],
      tools: ['Excel', 'Python', 'GIS mapping', 'Google Places API', 'Figma'],
      results: 'The pilot brought in more new stores each month than before. The feedback loop I designed turns every wrong recommendation into a signal, so the engine stops sending reps to closed, duplicate or poor-fit stores.',
      learnings: 'Ground truth beats the dashboard. An AI tool only works if the people using it trust it, and that trust needs a way to talk back.',
      hero: img('tcpl_hero'),
      gallery: [
        [img('tcpl_1_on_foot'), 'Before the engine, every new store was found on foot.'],
        [img('tcpl_2_mapping'), "I mapped a rep's day and every step of the engine before opening the data."],
        [img('tcpl_3_geospatial'), 'The map showed that the skipped stores were close and reachable.'],
        [img('tcpl_4_reps'), "50 conversations with reps explained what the data couldn't."],
      ],
    },
  },
  {
    slug: 'country-delight', short: 'Country Delight', name: 'Country Delight', tag: 'Live Project, ISB', period: 'One-month live project',
    caseUrl: 'https://radhikagoel27.github.io/CD-Reward-Points',
    window: {
      lede: 'Getting people who trust Country Delight for milk to try everything else.',
      tags: ['Consumer Research', 'Loyalty Design', 'D2C'],
      overview: "Country Delight is a leading home milk delivery brand. In a one-month live project, we looked at why customers who rely on it for milk every morning buy their staples, fruits and vegetables somewhere else, and whether a loyalty programme would change that. Before designing a reward, I wanted to know why people weren't buying at all.",
      role: 'I visited customers\' homes in Hyderabad and ran phone interviews. I broke "why don\'t they buy?" into four things that have to be true, and built two personas. I designed the tiered coin system and built clickable prototypes to show how it would work.',
      highlights: [
        'Home visits in Hyderabad and 14 customer interviews, plus a survey to test our ideas',
        "Found three broken links: people didn't know, didn't trust it, and found it cheaper elsewhere",
        'Designed a tiered coin system: 2x on non-dairy, 1x on dairy, and a bonus for new categories',
        'Planned a small MVP first, with a month-three checkpoint and backup plans ready',
      ],
      tools: ['Figma', 'Excel', 'Google Forms', 'HTML/CSS', 'GitHub Pages'],
      results: "A phased roadmap and two clickable prototypes: basket expansion, and CD Reward Points. The work wasn't launched, so we set the success measures upfront: how many people try non-dairy, how many buy across categories, and how basket size changes.",
      learnings: "The brief is a starting point, not the answer. Asking why people weren't buying mattered more than designing the reward.",
      hero: img('cd_hero'),
      gallery: [
        [img('cd_1_doorstep'), 'Milk arrives every morning, so the habit is already there.'],
        [img('cd_2_app'), 'In the app, other products are hard to find.'],
        [img('cd_3_pantry'), 'For staples, people stick to brands they already trust.'],
        ['', 'Similar quality is cheaper elsewhere, and people compare.'],
      ],
    },
  },
  {
    slug: 'jp-morgan-chase', short: 'JP Morgan', name: 'JP Morgan Chase', tag: 'Software Development Intern', period: 'Jan to Jun 2025',
    window: {
      lede: 'Eight months as a software engineer, and where I realised I wanted to build products, not just ship code.',
      tags: ['Software Engineering', 'Asset & Wealth Management', 'Risk Tech'],
      overview: "I spent eight months as a software engineering intern with JP Morgan Chase's Asset & Wealth Management Risk team, building the internal tools risk analysts use to monitor client portfolios. Working close to the people who used what we built made me curious about the why behind every feature, and that's what pulled me towards product.",
      role: 'I built internal risk monitoring and productivity tools from 0 to 1, including an anomaly detection system for portfolios valued at $5bn+. I worked with risk analysts to shape how they run the tool on the datasets and models they choose.',
      highlights: [
        'Built anomaly detection for $5bn+ portfolios, surfacing 1.5k+ hidden anomalies a quarter',
        'Built an AI search across 10,000+ reports, saving each analyst 8 hrs a month',
        'Raised automated test coverage from 60% to 87%',
        'Realised I wanted to move into product, which led me to ISB',
      ],
      tools: ['Python', 'SQL', 'Git', 'Jira'],
      results: 'The anomaly tool supports mitigation of ~$42mn in estimated annual risk exposure. 30+ analysts now pull data in plain language without writing SQL, and we delivered 1.5 weeks ahead of schedule.',
      learnings: 'Good engineering starts with a clear problem. I kept asking why we were building something, and that question is what pulled me towards product.',
      hero: img('jpmc_hero'),
      gallery: [
        [img('jpmc_1_dashboard'), 'An anomaly detection tool for $5bn+ portfolios.'],
        [img('jpmc_2_office'), 'Eight months with the Asset & Wealth Management Risk team.'],
        [img('jpmc_3_notes'), 'Plain-language data search, so 30+ analysts skip SQL.'],
        [img('jpmc_4_to_product'), 'Where I started asking "who is this for?"'],
      ],
    },
  },
];

export const sideProjects = [
  { name: 'Novartis', tag: 'Pro Bono', text: 'Worked on understanding the economic and societal impact of Chronic Spontaneous Urticaria (CSU) in India. Researched the patient journey and key cost drivers, including treatment, healthcare visits, productivity loss, and caregiver burden. Built a scenario-based calculator to estimate the overall cost of the disease and understand how earlier treatment could change these costs.' },
  { name: 'Forus Health', tag: 'Pro Bono', text: 'Worked on identifying ways for Forus Health to expand its AI-based eye screening solution through hospital partnerships in Tier-2 cities. Evaluated different types of potential partners, their patient volumes, ability to pay, and operational fit. Designed a pilot model to test whether hospitals could provide a scalable distribution channel and create a sustainable business model for eye screening.' },
  { name: 'AI Build Lab', tag: 'Semifinalist', text: 'Built an AI-led platform to help municipalities prepare for recurring floods and other climate-related shocks. Worked on combining different data points to score and rank wards based on their vulnerability and likely impact. The platform was designed to help municipalities identify high-risk areas earlier and prioritize limited resources for preventive action.' },
  { name: 'MakeMyTrip', tag: 'Product Strategy', text: 'Worked on understanding how travellers plan trips and where they face friction while searching, comparing, and deciding between different travel options. Mapped the user journey and explored ways to make travel planning more personalized and easier to navigate. Developed product ideas focused on reducing the effort involved in planning a trip and helping users make decisions with greater confidence.' },
];

export const email = 'goelradhika2704@gmail.com';
export const phone = '+91 8447032640';
export const linkedin = 'https://linkedin.com/in/radhikagoel4';

export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
