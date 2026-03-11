import { Experience, NavItem, Project, SocialLink, Education, Achievement } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const BIO = {
  heading: "Turning Business Problems into Executable Prototypes.",
  subHeading: "Bridging strategy and execution with ₹5Cr+ revenue management experience, data analytics expertise, and rapid prototyping capabilities.",
  introduction: [
    "I solve business problems by building working prototypes—fast. With ₹5+ crore in managed revenue and experience across automotive manufacturing, entertainment, and AI-driven decision tools, I don't just analyze data—I turn business challenges into executable solutions that leaders can see, touch, and use.",
    "My foundation lies in a blend of Business Administration and Data Analytics. I bridge the gap between 'What if we could...' strategy sessions and 'Here's how it works' technical execution."
  ],
  idealCollaborators: [
    "Consulting firms needing rapid solution prototyping",
    "Operations teams wanting data-driven optimization",
    "Strategy groups bridging business vision and technical execution",
    "Startups in SaaS, FinTech, or Analytics spaces"
  ]
};

export const EDUCATION: Education[] = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Delhi School of Business, Delhi",
    year: "Expected 2026",
    gpa: "Pursuing",
    details: [
      "Specialization: Data Analytics & Operations (Primary), Marketing (Secondary)",
      "Focus Areas: Operational Analytics, Process Optimization, Demand Forecasting, KPI Design",
      "Leadership: Coordinator, INVICTUS Data Analysis Club (Scaled reach 66%, boosted engagement 5x)"
    ]
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Chandigarh University, Punjab",
    year: "2022",
    gpa: "CGPA: 7.0",
    details: [
      "Foundation in Business Fundamentals",
      "Transitioned into revenue management and analytics roles"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Imperial Auto Industries Ltd.",
    companyUrl: "https://imperialauto.in/",
    role: "Key Account Executive → Business Solutions Lead",
    period: "Aug 2022 - Aug 2023",
    businessChallenge: "Managing ₹5+ crore OEM portfolio in automotive manufacturing with manual processes causing pricing delays and operational inefficiencies.",
    solutions: [
      "Revenue Optimization: Managed pricing workflows and production planning for 3 OEM accounts (Hyzon Motors, Kohler, Mitsubishi).",
      "Analytics Infrastructure: Developed Power BI dashboards and Excel forecasting models for manufacturing KPIs.",
      "Process Automation: Built Excel VBA macros + SQL queries for ERP reporting, achieving 87% time reduction (4hrs → 30min)."
    ],
    impact: [
      "₹5+ Crore portfolio managed with data-driven decision-making",
      "12% pricing accuracy improvement = direct margin gains",
      "87% time saved on reporting = 3.5 hours/week freed for strategic work",
      "Enhanced operational visibility across manufacturing workflow"
    ],
    skills: ["Revenue Management", "Demand Forecasting", "Business Process Automation", "Manufacturing Analytics", "Strategic Account Management"]
  },
  {
    company: "SMAAASH Entertainment Pvt Ltd",
    companyUrl: "https://smaaash-entertainment.in/",
    role: "Sales & Marketing Intern → Market Expansion Lead",
    period: "May 2025 - June 2025",
    businessChallenge: "Expanding customer base and launching new revenue streams in a competitive entertainment market.",
    solutions: [
      "Revenue Generation: Drove ₹59K revenue through 200+ outbound calls and 61 field visits using data-driven lead prioritization.",
      "Database Optimization: Analyzed and segmented 1,200+ lead database using analytics, improving quality scores by 40%.",
      "New Service Launch: Orchestrated end-to-end launch of Karaoke service—from market analysis to go-to-market strategy."
    ],
    impact: [
      "₹59K revenue generated in 2-month internship",
      "40% improvement in lead quality = higher conversion rates",
      "Successfully launched new service line from concept to market"
    ],
    skills: ["Go-to-Market Strategy", "Data-Driven Sales", "Market Analysis", "Revenue Optimization", "Stakeholder Management"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Neura-Q",
    role: "Business Solutions Architect",
    category: "AI Decision Framework",
    businessProblem: "Users often treat ChatGPT like a 'magic wand,' providing zero context ('Do this') yet expecting expert-level results. Without defining Personality, Context, and Constraints, LLMs produce generic, shallow, or hallucinated answers that fail in strategic business scenarios.",
    solutionPrototype: [
      "PCT Architecture: Forces users to define Personality (Who), Context (Why), and Task (What) before submission—proven parameters that significantly enhance AI reasoning quality over standard prompting.",
      "JSON-First Optimization: Feeds user inputs to the LLM as structured JSON objects. AI models parse JSON far more effectively than raw text, unlocking deeper analytical capabilities.",
      "Tree-of-Thought Engine: Unlike standard linear chats, this maps out multiple logical branches (options) and evaluates risk-weighted outcomes for each before synthesizing a solution.",
      "Structured Deliverables: Automatically transforms chaotic brainstorming into a clean, executive-ready decision memo."
    ],
    impact: [
      "Transforms 1-line prompts into deep strategic analysis automatically",
      "Eliminates 'Blank Page Syndrome' by enforcing prompt engineering best practices",
      "Significantly enhances answer quality by providing structured context",
      "Reduced strategic planning cycles from weeks to days"
    ],
    techStack: ["Python", "Supabase", "LLM APIs", "JSON Engineering"],
    link: "https://neuraq.netlify.app/",
    github: "https://github.com/devisdev365/neura-q",
    disclaimer: "Proof-of-concept demonstrating how structured prompt engineering architectures outperform raw chat interfaces."
  },
  {
    title: "AI Resume Enhancer",
    role: "Product Prototyping",
    category: "EdTech / Career Services",
    businessProblem: "Students struggle to optimize their resumes for placement success, lacking insights into what makes their CV stand out or how well it aligns with job descriptions.",
    solutionPrototype: [
      "Built ML-powered resume optimization platform for students with three integrated modules:",
      "CV Analyzer: Identifies weaknesses and improvement areas in student resumes",
      "Placement Predictor: XGBoost ML model predicting placement success bracket with 85% accuracy",
      "Resume Parser & Maker: Parses resume content and generates JD-aligned versions tailored to specific job descriptions"
    ],
    impact: [
      "Built For: Student self-improvement and placement preparation",
      "Core Value: Automated feedback loop for students to improve CV quality before applying"
    ],
    techStack: ["Python", "XGBoost", "Generative AI API", "Pandas"],
    link: "https://resume-ai-dev.netlify.app/",
    github: "https://github.com/devisdev365/resume-ai"
  },
  {
    title: "Crypto Market Intelligence",
    role: "Financial Analytics Prototyping",
    category: "FinTech / Trading",
    businessProblem: "Can retail investors compete with institutional algorithms in identifying price inefficiencies across Indian crypto exchanges?",
    solutionPrototype: [
      "Built real-time market monitoring system that tracks Bitcoin price spreads across 2 Indian crypto exchanges",
      "Flags arbitrage opportunities (buy low on Exchange A, sell high on Exchange B)",
      "Calculates profit after fees, taxes, and slippage",
      "Backend automation pipeline built with VectorShift"
    ],
    impact: [
      "Identified 15+ profitable opportunities during testing period",
      "Proved concept: ₹10,000 investment could yield ₹500-1,500 per trade",
      "Demonstrated ability to integrate multiple financial APIs in real-time and build decision tools for financial services"
    ],
    techStack: ["Python", "Pandas", "Financial Modeling", "VectorShift"],
    link: "https://btc-arbitrage-analyst.bolt.host/",
    github: "https://github.com/devisdev365/crypto-arbitrage",
    disclaimer: "Built to understand market microstructure and financial modeling—not as production trading system."
  },
  {
    title: "QSR Brand Intelligence",
    role: "Marketing Analytics",
    category: "Quick Service Restaurant (QSR) Industry",
    businessProblem: "QSR brands (McDonald's, Domino's, KFC) lack competitive intelligence on social media engagement strategies. Need: Data-driven insights into what content drives customer engagement.",
    solutionPrototype: [
      "Data Collection: Scraped 650+ Instagram posts across 3 QSR brands over 6-7 months using ParseHub (Domino's: 154, KFC: 251, McDonald's: 251)",
      "Comparative Analysis: Python (Pandas, Seaborn) to evaluate engagement metrics across brands",
      "Insight Generation: Identified content patterns, posting frequency, and engagement drivers"
    ],
    impact: [
      "Identified top-performing content types for each brand",
      "Revealed engagement rate benchmarks (Likes/Comments/Shares per 1000 followers)",
      "Mapped optimal posting times and frequency",
      "Highlighted competitive gaps and opportunities"
    ],
    techStack: ["Python", "Pandas", "Seaborn", "ParseHub"],
    link: "https://colab.research.google.com/drive/1tvOLnaMfJI8w-UVfwO6NWKvkH9vgj98B?usp=sharing"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/devisdev365", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/devansh-khanna-618606178/", icon: "linkedin" },
  { name: "Phone", url: "tel:+919870316839", icon: "phone" },
];

export const SKILL_LINKS: Record<string, string> = {
  // Technical
  "Python": "https://www.python.org/",
  "SQL": "https://en.wikipedia.org/wiki/SQL",
  "Power BI": "https://powerbi.microsoft.com/",
  "Excel VBA": "https://learn.microsoft.com/en-us/office/vba/api/overview/excel",
  "LLM APIs": "https://platform.openai.com/docs/introduction",
  "Data Analysis": "https://en.wikipedia.org/wiki/Data_analysis",
  "Business Strategy": "https://en.wikipedia.org/wiki/Strategic_management",
  "Project Management": "https://en.wikipedia.org/wiki/Project_management",
  "Automotive Ops": "https://en.wikipedia.org/wiki/Operations_management",
  "Sales Optimization": "https://en.wikipedia.org/wiki/Sales_operations",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "XGBoost": "https://xgboost.readthedocs.io/",
  "Supabase": "https://supabase.com/",

  // Business / Domain
  "Revenue Management": "https://en.wikipedia.org/wiki/Revenue_management",
  "Demand Forecasting": "https://en.wikipedia.org/wiki/Demand_forecasting",
  "Business Process Automation": "https://en.wikipedia.org/wiki/Business_process_automation",
  "Manufacturing Analytics": "https://en.wikipedia.org/wiki/Manufacturing_operations_management",
  "Strategic Account Management": "https://en.wikipedia.org/wiki/Key_account_management",
  "Go-to-Market Strategy": "https://en.wikipedia.org/wiki/Go-to-market_strategy",
  "Data-Driven Sales": "https://en.wikipedia.org/wiki/Sales_operations",
  "Market Analysis": "https://en.wikipedia.org/wiki/Market_analysis",
  "Stakeholder Management": "https://en.wikipedia.org/wiki/Stakeholder_management",

  // Tech Stack from Projects
  "JSON Engineering": "https://www.json.org/",
  "Pandas": "https://pandas.pydata.org/",
  "Financial Modeling": "https://en.wikipedia.org/wiki/Financial_modeling",
  "VectorShift": "https://www.vectorshift.ai/",
  "Seaborn": "https://seaborn.pydata.org/",
  "ParseHub": "https://www.parsehub.com/",
  "Generative AI API": "https://en.wikipedia.org/wiki/Generative_artificial_intelligence"
};

export const TECHNICAL_SKILLS = [
  { name: "Python", url: SKILL_LINKS["Python"], badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "SQL", url: SKILL_LINKS["SQL"], badge: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
  { name: "Power BI", url: SKILL_LINKS["Power BI"], badge: "https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" },
  { name: "Excel VBA", url: SKILL_LINKS["Excel VBA"], badge: "https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" },
  { name: "LLM APIs", url: SKILL_LINKS["LLM APIs"], badge: "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" },
  { name: "Data Analysis", url: SKILL_LINKS["Data Analysis"], badge: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
  { name: "Business Strategy", url: SKILL_LINKS["Business Strategy"], badge: "https://img.shields.io/badge/Strategy-Business-blue?style=for-the-badge" },
  { name: "Project Management", url: SKILL_LINKS["Project Management"], badge: "https://img.shields.io/badge/Management-Project-orange?style=for-the-badge" },
  { name: "Automotive Ops", url: SKILL_LINKS["Automotive Ops"], badge: "https://img.shields.io/badge/Ops-Automotive-red?style=for-the-badge" },
  { name: "Sales Optimization", url: SKILL_LINKS["Sales Optimization"], badge: "https://img.shields.io/badge/Sales-Optimization-green?style=for-the-badge" },
  { name: "JavaScript", url: SKILL_LINKS["JavaScript"], badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
  { name: "XGBoost", url: SKILL_LINKS["XGBoost"], badge: "https://img.shields.io/badge/XGBoost-FF6600?style=for-the-badge&logo=xgboost&logoColor=white" },
  { name: "Supabase", url: SKILL_LINKS["Supabase"], badge: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "₹5Cr+ Revenue Portfolio Management",
    organization: "Imperial Auto Industries Ltd. | 2022-2023",
    description: "Managed strategic OEM accounts (Hyzon Motors, Kohler, Mitsubishi), pricing strategy, and supply chain for India's automotive component manufacturing."
  },
  {
    title: "National Finalist (Top 20)",
    organization: "AIMA Student Management Games 2024",
    description: "Regional 1st Runner-Up across 1,200+ B-School Teams. Led team as CEO through finance, operations, and marketing simulations."
  },
  {
    title: "Data Analytics Leadership",
    organization: "Coordinator, INVICTUS Data Analysis Club | Delhi School of Business",
    description: "Leading 50+ members, scaled club reach by 66%, boosted engagement 5x, building data-driven culture at DSB."
  },
  {
    title: "Business Competition Recognition",
    organization: "Various National Challenges",
    description: "2nd Runner-Up: Youth's Voice Sustainability Challenge | National Participant: L'Oréal Sustainability Challenge & HP Power Lab Business Simulation."
  }
];