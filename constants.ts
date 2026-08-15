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

export const PERSONAL_EMAIL = "devansh.khanna24@dsb.edu.in";
export const SECONDARY_EMAIL = "devanshkhanna75@gmail.com";
export const RESUME_URL = "https://drive.google.com/file/d/1MF3BBKMvM04cpVVf1md3y4dTLe2WsS9q/view?usp=sharing";

export const BIO = bio;

export const EDUCATION: Education[] = education;

export const EXPERIENCE: Experience[] = experience;

export const PROJECTS: Project[] = projects;

export const SOCIALS: SocialLink[] = socials;

export const SKILL_LINKS: Record<string, string> = {
  // Enterprise & SaaS CS
  "SaaS Solution Consulting": "https://www.sap.com/products/erp/business-one.html",
  "SAP Business One": "https://www.sap.com/products/erp/business-one.html",
  "SAP S/4HANA": "https://www.sap.com/products/erp/s4hana.html",
  "Customer Health Scoring": "https://en.wikipedia.org/wiki/Customer_success",
  "Quarterly Business Reviews (QBRs)": "https://en.wikipedia.org/wiki/Customer_success",
  "Net Revenue Retention (NRR)": "https://en.wikipedia.org/wiki/Net_revenue_retention",
  "Account Expansion": "https://en.wikipedia.org/wiki/Key_account_management",
  "C-Suite Advisory": "https://en.wikipedia.org/wiki/Management_consulting",

  // Commercial & Operations
  "Key Account Management": "https://en.wikipedia.org/wiki/Key_account_management",
  "RFQ & Incoterms Negotiations": "https://en.wikipedia.org/wiki/Incoterms",
  "OEM Lifecycle Management": "https://en.wikipedia.org/wiki/Original_equipment_manufacturer",
  "Go-to-Market (GTM) Strategy": "https://en.wikipedia.org/wiki/Go-to-market_strategy",
  "Lead Pipeline Optimization": "https://en.wikipedia.org/wiki/Sales_operations",
  "Outbound Sales": "https://en.wikipedia.org/wiki/Sales_operations",
  "Pricing Accuracy & Margin Optimization": "https://en.wikipedia.org/wiki/Revenue_management",
  "SLA Compliance": "https://en.wikipedia.org/wiki/Service-level_agreement",

  // AI & Technical
  "AI Workflow Automation": "https://openai.com/",
  "Python": "https://www.python.org/",
  "Gemini API": "https://ai.google.dev/",
  "Google Gemini AI": "https://ai.google.dev/",
  "Firecrawl API": "https://www.firecrawl.dev/",
  "Apple Shortcuts": "https://support.apple.com/guide/shortcuts/welcome/ios",
  "Resend API": "https://resend.com/",
  "GitHub Actions": "https://github.com/features/actions",
  "RSS Feeds": "https://en.wikipedia.org/wiki/RSS",
  "SQL & Advanced Excel": "https://learn.microsoft.com/en-us/office/vba/api/overview/excel",
  "Power BI": "https://powerbi.microsoft.com/",
  "Power BI Dashboards": "https://powerbi.microsoft.com/",
  "Excel VBA & SQL": "https://learn.microsoft.com/en-us/office/vba/api/overview/excel",
  "Pandas": "https://pandas.pydata.org/",
  "Seaborn": "https://seaborn.pydata.org/",
  "ParseHub": "https://www.parsehub.com/",
  "Google Trends": "https://trends.google.com/",
  "AI Design Pipelines": "https://en.wikipedia.org/wiki/Generative_artificial_intelligence",
  "GTM Strategy": "https://en.wikipedia.org/wiki/Go-to-market_strategy",
  "Market Whitespace Analysis": "https://en.wikipedia.org/wiki/Market_analysis",
  "Data Analytics": "https://en.wikipedia.org/wiki/Data_analysis",
  "Market Penetration": "https://en.wikipedia.org/wiki/Market_penetration",
  "Revenue Generation": "https://en.wikipedia.org/wiki/Revenue_management",
};

export const TECHNICAL_SKILLS = [
  { name: "SAP Business One", url: SKILL_LINKS["SAP Business One"], badge: "https://img.shields.io/badge/SAP%20Business%20One-008FD3?style=for-the-badge&logo=sap&logoColor=white" },
  { name: "SAP S/4HANA", url: SKILL_LINKS["SAP S/4HANA"], badge: "https://img.shields.io/badge/SAP%20S%2F4HANA-0A2540?style=for-the-badge&logo=sap&logoColor=white" },
  { name: "AI Workflow Automation", url: SKILL_LINKS["AI Workflow Automation"], badge: "https://img.shields.io/badge/AI%20Automation-000000?style=for-the-badge&logo=openai&logoColor=white" },
  { name: "Google Gemini API", url: SKILL_LINKS["Gemini API"], badge: "https://img.shields.io/badge/Gemini%20API-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white" },
  { name: "Firecrawl API", url: SKILL_LINKS["Firecrawl API"], badge: "https://img.shields.io/badge/Firecrawl-FF5722?style=for-the-badge&logoColor=white" },
  { name: "Power BI", url: SKILL_LINKS["Power BI"], badge: "https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" },
  { name: "SQL & Advanced Excel", url: SKILL_LINKS["SQL & Advanced Excel"], badge: "https://img.shields.io/badge/SQL%20%26%20Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" },
  { name: "Resend API", url: SKILL_LINKS["Resend API"], badge: "https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white" },
];

export const ACHIEVEMENTS: Achievement[] = achievements;

export const CERTIFICATIONS: Certification[] = certifications;

