export interface Project {
  title: string;
  role?: string;
  category?: string;
  businessProblem: string;
  solutionPrototype: string | string[];
  impact: string[];
  techStack: string[];
  link?: string;
  github?: string;
  image?: string;
  disclaimer?: string;
}

export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  businessChallenge: string;
  solutions: string[];
  impact: string[];
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  details: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
}