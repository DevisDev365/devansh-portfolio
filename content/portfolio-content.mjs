export const portfolioIdentity = {
  name: 'Devansh Khanna',
  title: 'Business Solutions Architect',
  subtitle: 'Turning Business Problems into Executable Prototypes.',
  portfolioUrl: 'https://devisdev365.github.io/devansh-portfolio/',
  linkedinUrl: 'https://www.linkedin.com/in/devansh-khanna-618606178/',
  githubUrl: 'https://github.com/devisdev365',
  phone: '+91 9870316839',
  phoneUrl: 'tel:+919870316839',
  email: 'devanshkhanna75@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1SMNtQ3_G9JwO0-VmzdGXndOEXV7K_TyQ/view?usp=sharing',
};

export const bio = {
  heading: 'I build products by directing AI precisely—shipping faster than line-by-line coding.',
  subHeading:
    "Now open to product/consulting roles where strategy meets shipping.",
  introduction: [
    "I solve business problems by building working prototypes—fast. With ₹5+ crore in managed revenue and experience across automotive manufacturing, entertainment, and AI-driven decision tools, I don't just analyze data—I turn business challenges into executable solutions that leaders can see, touch, and use.",
    'Not pure tech, not pure management — deliberately both. I can sit in a client meeting, understand the business problem, and build a working prototype the same day. I bridge what engineers build and what clients actually need.',
  ],
  idealCollaborators: [
    'Consulting firms needing rapid solution prototyping',
    'Operations teams wanting data-driven optimization',
    'Strategy groups bridging business vision and technical execution',
    'Startups in SaaS, FinTech, or Analytics spaces',
  ],
};

export const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'Delhi School of Business, Delhi',
    year: '2026',
    gpa: '5.77 CGPA',
    details: [
      'Specialization: Data Analytics & Operations (Primary), Marketing (Secondary)',
      'Focus Areas: Operational Analytics, Process Optimization, Demand Forecasting, KPI Design',
      'Leadership: Coordinator, INVICTUS Data Analysis Club (Scaled reach 66%, boosted engagement 5x)',
    ],
  },
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Chandigarh University, Punjab',
    year: '2022',
    gpa: 'CGPA: 7.0',
    details: [
      'Foundation in Business Fundamentals',
      'Transitioned into revenue management and analytics roles',
    ],
  },
];

export const experience = [
  {
    company: 'Imperial Auto Industries Ltd.',
    companyUrl: 'https://imperialauto.in/',
    role: 'Key Account Executive',
    period: 'Aug 2022 - Aug 2023',
    businessChallenge:
      'Managing ₹5+ crore OEM portfolio in automotive manufacturing with manual processes causing pricing delays and operational inefficiencies.',
    solutions: [
      'Revenue Optimization: Managed pricing workflows and production planning for 3 OEM accounts (Hyzon Motors, Kohler, Mitsubishi).',
      'Analytics Infrastructure: Developed Power BI dashboards and Excel forecasting models for manufacturing KPIs.',
      'Process Automation: Built Excel VBA macros + SQL queries for ERP reporting, achieving 87% time reduction (4hrs → 30min).',
    ],
    impact: [
      '₹5+ Crore portfolio managed with data-driven decision-making',
      '12% pricing accuracy improvement = direct margin gains',
      '87% time saved on reporting = 3.5 hours/week freed for strategic work',
      'Enhanced operational visibility across manufacturing workflow',
    ],
    skills: [
      'Revenue Management',
      'Demand Forecasting',
      'Business Process Automation',
      'Manufacturing Analytics',
      'Strategic Account Management',
    ],
  },
  {
    company: 'SMAAASH Entertainment Pvt Ltd',
    companyUrl: 'https://smaaash-entertainment.in/',
    role: 'Intern',
    period: 'May 2025 - June 2025',
    businessChallenge:
      'Expanding customer base and launching new revenue streams in a competitive entertainment market — while uncovering why brand awareness was critically low despite active marketing spend.',
    solutions: [
      'Karaoke Service Launch (Phase 1): Led end-to-end launch from market analysis to first paying customer in 10–20 days — built offers, coordinated stakeholders, set up screens & projectors personally.',
      'On-Ground Sales (Phase 2): Chose field sales deliberately to plug a blind spot — 61 field visits + 200+ outbound calls; optimized 1,200+ lead database using data segmentation, improving quality scores by 40%.',
      "Root Cause Discovery: Identified that SMAAASH ran only hyper-targeted Meta/Instagram ads — invisible outside a narrow funnel. Many prospects simply didn't know SMAAASH existed. No dashboard would've surfaced this. Only being on the ground did.",
    ],
    impact: [
      '₹59K revenue generated in 2-month internship',
      '40% improvement in lead quality = higher conversion rates',
      'Successfully launched new Karaoke service line from concept to market',
      'Uncovered critical brand visibility gap invisible to digital analytics',
    ],
    skills: [
      'Go-to-Market Strategy',
      'Data-Driven Sales',
      'Market Analysis',
      'Revenue Optimization',
      'Stakeholder Management',
    ],
  },
  {
    company: 'INVICTUS @ DSB',
    companyUrl: 'https://dsb.edu.in/invictus/',
    role: 'Joint Coordinator → Coordinator',
    period: 'Oct 2024 - April 2026',
    businessChallenge:
      'Started as Joint Coordinator and promoted to lead the data analysis club at Delhi School of Business, managing speakers, operations, and communications across a nearly two-year tenure.',
    solutions: [
      'Coordinated events and workshops; managed speakers, operations, and communications.',
      'Tracked registrations, attendance, and feedback to improve planning.',
    ],
    impact: [
      'Scaled club reach and managed end-to-end event operations.',
      'Improved event planning through data-driven attendance tracking.',
    ],
    skills: [
      'Project Management',
      'Data Analysis',
      'Stakeholder Management',
    ],
  },
];

export const projects = [
  {
    title: 'SaaS Market Pulse',
    role: 'Autonomous Systems Architect',
    category: 'Market Intelligence Engine',
    businessProblem:
      'Customer Success and GTM teams spend 45+ minutes every morning manually tracking industry news, open-source trends, and competitor feature releases. This tedious, tab-heavy manual research process is unsustainable and leads to falling behind.',
    solutionPrototype: [
      'Data Aggregation: An autonomous AI agent programmatically scrapes RSS feeds, parses GitHub for trending repositories, fetches regional Google Trends, and uses Firecrawl to monitor 7 major competitors.',
      'AI Synthesis: Raw data is fed into a specialized LLM (Google Gemini, with automatic failover to Groq\'s Llama 3) to filter noise, extract high-value insights, and tailor updates specifically for Customer Success contexts.',
      'Delivery: Structured JSON output is injected into a custom, responsive HTML email template featuring a premium "neon tech" aesthetic and delivered via the Resend API.',
      'Automation: The entire pipeline runs completely serverless overnight via a scheduled GitHub Actions cron job, complete with retry logic and IP proxying—requiring zero manual effort.'
    ],
    impact: [
      'Saves 45 minutes of manual research every single morning.',
      'Fully automated workflow replacing 7+ tabs of daily browsing.',
      'Delivers a single, highly-curated email digest before waking up, ensuring zero duplicate content.'
    ],
    techStack: ['Python', 'Google Gemini AI', 'Firecrawl API', 'Resend API', 'GitHub Actions', 'Web Scraping'],
    link: 'https://www.linkedin.com/posts/devansh-khanna-618606178_customersuccess-gtm-saas-ugcPost-7475791963921977345-GBFn/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACoXs_QBF9YI6gI7W3_AUm-VLLhBymWlNyQ',
    linkText: 'Watch Prototype Video',
  },
  {
    title: 'Neura-Q',
    role: 'Business Solutions Architect',
    category: 'AI Decision Framework',
    businessProblem:
      'People give vague prompts to AI, AI hallucinates, and people accept wrong answers. Without structured context — Background, Dilemma, and a defined Personality — LLMs produce generic, shallow responses that fail in real strategic scenarios.',
    solutionPrototype: [
      "Structured Input Engine: User enters Background + Dilemma + chooses a Persona (any — even fictional characters). An 'Enhance Prompt' button structures the input into clean JSON before hitting the API — AI models parse JSON far more effectively than raw text.",
      'Three Reasoning Personas (same API, different thinking styles): AEON for career path analysis using Tree-of-Thought (ToT), NOVA for life decisions using Graph-of-Thought (GoT), TESS for scenario exploration using Chain-of-Thought (CoT).',
      'Collapsible Visual Nodes: Responses returned as structured reasoning trees — not a wall of text. Each branch is a logical option with risk-weighted outcomes.',
      'Result: Better inputs + structured reasoning = less hallucination, more reliable answers.',
    ],
    impact: [
      'Transforms 1-line prompts into deep strategic analysis automatically',
      'Eliminates hallucination risk by enforcing structured context before API call',
      'Three distinct reasoning modes for different decision types',
      'Reduced strategic planning cycles from weeks to days',
    ],
    techStack: ['Python', 'Supabase', 'LLM APIs', 'JSON Engineering'],
    link: 'https://neuraq.netlify.app/',
    disclaimer:
      'Proof-of-concept demonstrating how structured prompt engineering architectures outperform raw chat interfaces.',
  },
  {
    title: 'AI Resume Enhancer',
    role: 'Product Prototyping',
    category: 'EdTech / Career Services',
    businessProblem:
      'Students struggle to optimize their resumes for placement success, lacking insights into what makes their CV stand out or how well it aligns with job descriptions.',
    solutionPrototype: [
      'Built ML-powered resume optimization platform for students with three integrated modules:',
      'CV Analyzer: Identifies weaknesses and improvement areas in student resumes',
      'Placement Predictor: XGBoost ML model predicting placement success bracket with 85% accuracy',
      'Resume Parser & Maker: Parses resume content and generates JD-aligned versions tailored to specific job descriptions',
    ],
    impact: [
      'Built For: Student self-improvement and placement preparation',
      'Core Value: Automated feedback loop for students to improve CV quality before applying',
    ],
    techStack: ['Python', 'XGBoost', 'Gemini API', 'Pandas'],
    link: 'https://resume-ai-dev.netlify.app/',
  },
  {
    title: 'Crypto Market Intelligence',
    role: 'Financial Analytics Prototyping',
    category: 'FinTech / Trading',
    businessProblem:
      'Can retail investors compete with institutional algorithms in identifying price inefficiencies across Indian crypto exchanges?',
    solutionPrototype: [
      'Built real-time market monitoring system that tracks Bitcoin price spreads across 2 Indian crypto exchanges',
      'Flags arbitrage opportunities (buy low on Exchange A, sell high on Exchange B)',
      'Calculates profit after fees, taxes, and slippage',
      'Backend automation pipeline built with VectorShift',
    ],
    impact: [
      'Identified 15+ profitable opportunities during testing period',
      'Proved concept: ₹10,000 investment could yield ₹500-1,500 per trade',
      'Demonstrated ability to integrate multiple financial APIs in real-time and build decision tools for financial services',
    ],
    techStack: ['Python', 'Pandas', 'Financial Modeling', 'VectorShift'],
    link: 'https://btc-arbitrage-analyst.bolt.host/',
    disclaimer:
      'Built to understand market microstructure and financial modeling—not as production trading system.',
  },
  {
    title: 'Brand Sentiment Analysis',
    role: 'Marketing Analytics',
    category: 'Quick Service Restaurant (QSR) Industry',
    businessProblem:
      "QSR brands (McDonald's, Domino's, KFC) lack competitive intelligence on social media engagement strategies. Need: Data-driven insights into what content drives customer engagement.",
    solutionPrototype: [
      "Data Collection: Scraped 650+ Instagram posts across 3 QSR brands over 6-7 months using ParseHub (Domino's: 154, KFC: 251, McDonald's: 251)",
      'Comparative Analysis: Python (Pandas, Seaborn) to evaluate engagement metrics across brands',
      'Insight Generation: Identified content patterns, posting frequency, and engagement drivers',
    ],
    impact: [
      'Identified top-performing content types for each brand',
      'Revealed engagement rate benchmarks (Likes/Comments/Shares per 1000 followers)',
      'Mapped optimal posting times and frequency',
      'Highlighted competitive gaps and opportunities',
    ],
    techStack: ['Python', 'Pandas', 'Seaborn', 'ParseHub'],
    link: 'https://colab.research.google.com/drive/1tvOLnaMfJI8w-UVfwO6NWKvkH9vgj98B?usp=sharing',
  },
  {
    title: 'Red Tape [X] Anime Collection',
    role: 'Marketing Campaign Strategist',
    category: 'Marketing & Product Design',
    businessProblem:
      "A conceptual marketing and product design campaign proposing Red Tape's entry into the explosive anime streetwear market in India. Global titans dominate the anime shoe space at a premium price point (₹8k-15k), alienating Indian Gen Z. Red Tape is perfectly positioned to capture this massive whitespace.",
    solutionPrototype: [
      'Analyzed 5-year Google Trends data to identify a 12.5x growth in anime footwear demand in India.',
      'Spearheaded the conceptualization of a 7-piece character-themed sneaker line, directing AI-generated product designs.',
      'Produced cinematic promotional video assets for product reveals.',
      'Developed a comprehensive 4-phase, digital-first Go-to-Market (GTM) strategy focusing on Instagram and YouTube.',
      'Created detailed campaign briefs encompassing budget allocation, influencer seeding, and community UGC strategies.',
    ],
    impact: [
      'Identified critical market gap for affordable, Gen-Z targeted streetwear (₹1.5k-3.5k).',
      'Positioned Red Tape as the first major Indian brand in the anime footwear space.',
    ],
    techStack: ['Google Trends', 'AI Design Generation', 'Go-to-Market Strategy', 'Data Analytics'],
    link: 'https://devisdev365.github.io/Marketing-Project/',
    disclaimer: 'Conceptual marketing campaign and product design leveraging Google Trends data.',
  },
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/devisdev365', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/devansh-khanna-618606178/', icon: 'linkedin' },
  { name: 'Phone', url: 'tel:+919870316839', icon: 'phone' },
];

export const achievements = [
  {
    title: 'National Finalist (Top 20)',
    organization: 'AIMA Student Management Games 2024',
    description:
      'Regional 1st Runner-Up across 1,200+ B-School Teams. Led team as CEO through finance, operations, and marketing simulations.',
  },
  {
    title: 'Sheets & Beats — Data Analysis Competition',
    organization: 'Coordinator, INVICTUS Data Analysis Club | Delhi School of Business',
    description:
      'Created and ran a data analysis competition at DSB — Round 1: Excel/data quiz via Mentimeter (top 5 teams advance), Final Round: live data problem under time pressure. 60–80 teams participated, tripling participation vs previous events.',
  },
  {
    title: 'Business Competition Recognition',
    organization: 'Various National Challenges',
    description:
      "2nd Runner-Up: Youth's Voice Sustainability Challenge (BCC&I x NTPC) | National Participant: L'Oréal Sustainability Challenge 2024 & HP Power Lab Business Simulation.",
  },
  {
    title: 'Technical Operations Lead',
    organization: 'National & International Conferences',
    description:
      'Led technical operations for 6+ national/international conferences ensuring flawless execution through project planning and vendor management.',
  },
];

export const certifications = [
  {
    title: 'Data-Driven Decision-Making using Excel & SQL',
    issuer: 'NIT Trichy',
    year: '2024',
    description:
      '3-week intensive bootcamp covering advanced Excel modeling, SQL querying, and data-driven business decision frameworks.',
  },
];
