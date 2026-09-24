# Real PM Portfolio Sites: Structure and Content Patterns

> **READ FIRST: verification status.** This environment's network egress proxy blocked WebFetch and curl to every non-GitHub domain tried (bestfolios.com, careerfoundry.com, sitebuilderreport.com, aakashg.com, news.aakashg.com, underdog.io, productschool.com, hellopm.co, joinleland.com, rianvdm.com; all returned `EGRESS_BLOCKED` / proxy 403). **I verified zero PM portfolio sites by fetching them.** Only WebSearch (which returns titles and summary snippets) and the GitHub API worked. So this file does **not** contain the 8-15 per-site teardowns asked for. What it does contain: (a) curated-list sources that exist (seen in search results, not opened), (b) the named examples those lists mention, taken from search snippets and marked UNVERIFIED, (c) pattern-level claims from snippets, and (d) a small set of GitHub-hosted PM portfolio repos seen through the GitHub search API. The report writer should treat everything below as snippet-level evidence. The per-site structural detail (nav order, section order, hero copy) is still an open gap.

## What pages do strong PM portfolios have, in what nav order, and how many projects do they show?

### Takeaway
Across the guides, the same core set comes up: Case studies/Work, About, Resume (often a PDF download) and Contact/LinkedIn. Writing/blog shows up on more senior portfolios. Guides say to keep case studies to about 3-4, because recruiters rarely read more than that in depth. I could not confirm real nav orders because no site could be fetched.

### Cited Findings
- Curated lists of PM portfolio examples exist at CareerFoundry ("9 Great Product Manager Portfolio Examples: A 2025 Guide"), Aakash Gupta ("Product Manager Portfolio Examples That Win FAANG+ Offers"), SiteBuilderReport ("20+ Inspiring Product Manager Portfolio Examples"), Product School, Product HQ ("3 Best"), HelloPM, NextLeap, Underdog.io ("7 Standout ... for Startup PMs in 2026"), Leland, and Webflow's "Made in Webflow: product management" gallery. All were seen in search results only, and every fetch was blocked. — [CareerFoundry](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/); [Aakash G](https://www.aakashg.com/product-manager-portfolio-examples/); [SiteBuilderReport](https://www.sitebuilderreport.com/inspiration/product-manager-portfolios); [Product School](https://productschool.com/blog/career-development/product-management-portfolio-examples); [Product HQ](https://producthq.org/career/product-manager/product-manager-portfolio/); [HelloPM](https://hellopm.co/product-manager-portfolio-guide/); [NextLeap](https://nextleap.app/portfolios/product-management/examples); [Underdog.io](https://underdog.io/blog/product-manager-portfolio-examples); [Leland](https://www.joinleland.com/library/a/product-manager-portfolio); [Webflow](https://webflow.com/made-in-webflow/product-management)
- Common sections named in the guides: Case Studies (problem statement, user research, solution, key metrics), a Resume section with PDF download, and an About section with a background summary and key skills. — [search snippet summarising Product School / HelloPM / Aakash G](https://productschool.com/blog/career-development/product-management-portfolio-examples)
- "Recruiters rarely read more than 3-4 case studies in detail"; the guides favour quality over quantity. — [HelloPM (snippet)](https://hellopm.co/product-manager-portfolio-guide/)
- UNVERIFIED example "Rian" (Head of Product): uses his own website as a portfolio, puts his main skills at the top of the intro with a LinkedIn link, and mixes blog posts, product-launch GIFs and information-architecture charts. Product HQ describes it as a full website with a blog and a "Work" section covering portfolio, writing and public speaking. — [CareerFoundry (snippet)](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/); [Product HQ (snippet)](https://producthq.org/career/product-manager/product-manager-portfolio/). (I guessed this might be Rian van der Merwe at rianvdm.com, but the fetch was blocked, so the identity and URL are unconfirmed.)
- UNVERIFIED example "Laura", a freelance PM in Germany: "visually impressive", with contrasting colours and simple messaging. — [CareerFoundry (snippet)](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- UNVERIFIED example "Johnathan": a minimalist portfolio with clear sections on his mobile and web products and evidence of business acumen. — [snippet via CareerFoundry/Product School result set](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- UNVERIFIED example "Mark": shows past projects alongside improvement case studies. The snippet calls it a helpful model for new PMs looking for a first job. — [snippet via CareerFoundry/Product School result set](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- GitHub-hosted PM portfolios (seen through the GitHub search API, which returns repo descriptions; site contents were not reviewed). Example: `Ashutosh-nagaria/AN-website` lists its sections as "hero/intro, about, experience timeline, key projects, skills, case competitions, education, and contact". This is an early-career, MBA-style layout. Others: `prihu/priyank-portfolio` (Senior PM in fintech/AI: experience at named companies plus GitHub projects and resume), `abdullah2695/Portfolio-Website` (aspiring PM), `deep6307.github.io`. These are small, low-profile repos and should not be treated as "well-regarded" examples. — [GitHub: Ashutosh-nagaria/AN-website](https://github.com/Ashutosh-nagaria/AN-website); [GitHub: prihu/priyank-portfolio](https://github.com/prihu/priyank-portfolio); [GitHub: abdullah2695/Portfolio-Website](https://github.com/abdullah2695/Portfolio-Website); [GitHub: deep6307.github.io](https://github.com/deep6307/deep6307.github.io)

### Inferences
- The likely standard set is Home, Work/Case Studies, About, Resume, and Contact (often just a LinkedIn/email link in the footer), with Writing added by senior PMs. This is inferred from guide snippets, not from observed navs.
- A realistic homepage shows 3-4 featured case studies. Early-career and MBA candidates add sections for case competitions, education and skills, which senior PMs usually leave out.

### Gaps
- Actual nav order, page count and number of project cards for any real site. Blocked by the egress proxy.
- The Bestfolios PM category, the main curated gallery, could not be opened.

## How do homepages open (positioning statement, proof points, logos)?

### Takeaway
The snippets point to an opening that states skills or positioning early and links to LinkedIn (the "Rian" example). Nothing I could reach documents real hero copy or logo strips.

### Cited Findings
- The "Rian" portfolio puts main skills at the top of the intro, next to a LinkedIn link. — [CareerFoundry (snippet)](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- The "Laura" portfolio relies on high-contrast visuals and "simple, effective messaging". — [CareerFoundry (snippet)](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- Guidance: a PM portfolio should not be plain or unattractive, but time spent on flashy design is poorly spent; case studies should be clear and easy to digest. — [CareerFoundry (snippet)](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- Aakash Gupta's article reviews seven portfolios built on different platforms (Notion through Webflow). He says portfolios that land offers at Meta, Google and Stripe show quantified impact, explain the "why" behind decisions, and are tailored to the role and company. — [Aakash G (snippet)](https://www.aakashg.com/product-manager-portfolio-examples/)

### Inferences
- The hero likely works best as one line of positioning (domain plus type of PM) with proof points (company names or metrics) directly under it. This matches the "quantified impact" and "tailored" advice but is not observed on a specific site.

### Gaps
- No verbatim hero copy, and no evidence on how often client or company logo strips appear. Both need direct site fetches.

## What makes case studies on these sites stand out?

### Takeaway
The pieces that stand out, according to the guides: a narrative opening, visible reasoning (the "why"), real metrics, and speculative teardowns aimed at a target company.

### Cited Findings
- Structured layout: problem statement, then user research, solution, and key metrics. — [Product School / HelloPM (snippet)](https://productschool.com/blog/career-development/product-management-portfolio-examples)
- A storytelling opening such as "It all started when…" is described as engaging and pulls the recruiter in. — [snippet, CareerFoundry/Product School result set](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)
- Concrete metrics (revenue growth, retention, conversion, NPS change) give hiring managers the evidence to move a candidate forward. — [HelloPM (snippet)](https://hellopm.co/product-manager-portfolio-guide/)
- Teardown case studies built around a dream company's product and shared proactively have reportedly led to interviews and offers. — [snippet, Leland/Aakash G result set](https://www.joinleland.com/library/a/product-manager-portfolio)
- Mixed media (launch GIFs, IA diagrams, blog posts) is used in the "Rian" example. — [CareerFoundry (snippet)](https://careerfoundry.com/en/blog/product-management/product-manager-portfolio/)

### Inferences
- For an MBA-to-PM candidate without shipped products, a target-company teardown or a spec/PRD-style case study is the equivalent that recruiters recognise.

### Gaps
- No observed case-study section order from a real named site.

## How do they handle confidential work and side projects?

### Takeaway
All of the NDA guidance I found comes from UX/design sources. Nothing PM-specific turned up. The usual tactics are to anonymise, show process rather than artefacts, use relative metrics, password-protect, or share privately on request, and to label clearly which projects are under NDA.

### Cited Findings
- Focus on process, challenges and outcomes without client-identifying details, and state that the sample is under NDA. — [IxDF](https://ixdf.org/literature/article/how-to-handle-non-disclosure-agreements-ndas-when-you-write-your-ux-case-study); [UX Planet](https://uxplanet.org/nda-how-to-show-confidential-work-in-your-portfolio-ea165058bb96)
- Anonymise by replacing logos, brand names and colour schemes, swapping product names for descriptive placeholders, and removing identifying data. — [UX Playbook](https://uxplaybook.org/articles/ux-design-portfolio-nda-guide-2026)
- Password-protect sensitive case studies, or keep them in a private section or PDF shown on request. — [Medium, UX Survival Guide](https://medium.com/@uxsurvivalguide/navigating-ndas-for-your-portfolio-a6c51983a2d); [Devonshire](https://wearedevonshire.com/blog/how-to-create-a-portfolio-when-your-work-is-restricted-by-ndas/)
- Ask for permission, possibly after launch or after time has passed. — [freelancermap](https://www.freelancermap.com/blog/can-i-share-nda-protected-work-on-my-portfolio-tips-and-advice/)
- Being open about NDA status signals trustworthiness to hiring managers. — [IxDF](https://ixdf.org/literature/article/keep-it-confidential-how-to-showcase-your-nda-protected-design-work)
- Side projects and writing: senior PMs add a blog, writing and public speaking to "Work" ("Rian"), and HelloPM recommends Medium/Substack for long-form case studies and thought leadership. — [Product HQ (snippet)](https://producthq.org/career/product-manager/product-manager-portfolio/); [HelloPM (snippet)](https://hellopm.co/product-manager-portfolio-guide/)

### Inferences
- For PM work, "relative metrics" (percentages instead of absolute revenue or user counts) is the natural extension of the design-world advice. I found no source stating it for PMs.

### Gaps
- No PM-specific source on NDA handling, and no observed example of a PM portfolio's NDA disclaimer wording.

## What elements appear in almost all good ones vs rarely?

### Takeaway
In most guides: a case studies section, metrics, an About section, and resume/LinkedIn access. Less common, and cited as standout: a blog or writing, speaking, mixed media, teardowns of a target company, and a custom-coded or Webflow build. Frequency counts across real sites could not be established.

### Cited Findings
- Common across guides: case studies, resume PDF, About with skills. — [Product School / HelloPM (snippet)](https://productschool.com/blog/career-development/product-management-portfolio-examples)
- Platform spread: Notion (fastest), Squarespace/Wix/WordPress (branded site on a custom domain), Webflow (higher effort; free starter plan limited to 2 pages, paid from about $14/month, templates about $49-129), and Medium/Substack for long form. — [Aakash G (snippet)](https://www.aakashg.com/product-manager-portfolio-examples/); [HelloPM (snippet)](https://hellopm.co/product-manager-portfolio-guide/); [SiteBuilderReport (snippet)](https://www.sitebuilderreport.com/inspiration/product-manager-portfolios)
- Tailoring to the role and company is named as a trait of portfolios that win offers. — [Aakash G (snippet)](https://www.aakashg.com/product-manager-portfolio-examples/)

### Inferences
- These are candidate "rare but high-signal" items for an MBA-to-PM site: a target-company teardown, a writing/POV section, and a live side project with real usage metrics.

### Gaps
- No quantitative frequency data. It needs 8-15 real sites fetched and coded, which was impossible here. Recommended next step: rerun this task from an environment where these domains are open (bestfolios.com, the listicles above, and the individual portfolio URLs they link to), and fill in a per-site table with these columns: nav, homepage section order, hero line, number of project cards, card metadata, case-study sections, About, resume/contact placement, metrics, side projects/writing.
