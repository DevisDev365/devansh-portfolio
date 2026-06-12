import { Experience, NavItem, Project, SocialLink, Education, Achievement, Certification } from "./types";
import {
  bio,
  education,
  experience,
  projects,
  socials,
  achievements,
  certifications,
} from "./content/portfolio-content.mjs";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const PERSONAL_EMAIL = "devanshkhanna75@gmail.com";

export const BIO = bio;

export const EDUCATION: Education[] = education;

export const EXPERIENCE: Experience[] = experience;

export const PROJECTS: Project[] = projects;

export const SOCIALS: SocialLink[] = socials;

export const SKILL_LINKS: Record<string, string> = {
  // Technical
  "Python": "https://www.python.org/",
  "SQL": "https://en.wikipedia.org/wiki/SQL",
  "Power BI": "https://powerbi.microsoft.com/",
  "Excel VBA": "https://learn.microsoft.com/en-us/office/vba/api/overview/excel",
  "LLM APIs": "https://platform.openai.com/docs/introduction",
  "Prompt Engineering": "https://en.wikipedia.org/wiki/Prompt_engineering",
  "Product Management": "https://en.wikipedia.org/wiki/Product_management",
  "LeadSquared CRM": "https://www.leadsquared.com/",
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
  "Generative AI API": "https://en.wikipedia.org/wiki/Generative_artificial_intelligence",
  "Google Trends": "https://trends.google.com/",
  "AI Design Generation": "https://en.wikipedia.org/wiki/Artificial_intelligence_art"
};

export const TECHNICAL_SKILLS = [
  { name: "Python", url: SKILL_LINKS["Python"], badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "SQL", url: SKILL_LINKS["SQL"], badge: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
  { name: "Prompt Engineering", url: SKILL_LINKS["Prompt Engineering"], badge: "https://img.shields.io/badge/Prompt_Engineering-FF9900?style=for-the-badge&logo=openai&logoColor=white" },
  { name: "Product Management", url: SKILL_LINKS["Product Management"], badge: "https://img.shields.io/badge/Product_Management-0052CC?style=for-the-badge&logo=jira&logoColor=white" },
  { name: "LeadSquared CRM", url: SKILL_LINKS["LeadSquared CRM"], badge: "https://img.shields.io/badge/LeadSquared_CRM-FF5722?style=for-the-badge&logo=salesforce&logoColor=white" },
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
  { name: "Supabase", url: SKILL_LINKS["Supabase"], badge: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
  { name: "Google Trends", url: SKILL_LINKS["Google Trends"], badge: "https://img.shields.io/badge/Google_Trends-4285F4?style=for-the-badge&logo=google&logoColor=white" },
  { name: "Gemini API", url: SKILL_LINKS["LLM APIs"], badge: "https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white" }
];

export const ACHIEVEMENTS: Achievement[] = achievements;

export const CERTIFICATIONS: Certification[] = certifications;
