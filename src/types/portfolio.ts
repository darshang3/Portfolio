export interface Metric {
  label: string;
  value: string;
  context?: string;
  isVerified?: boolean;
}

export interface CaseStudyArtifact {
  title: string;
  caption: string;
  type: 'wireframe' | 'system' | 'flow' | 'ui' | 'metric';
  previewDetails?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  productName: string;
  shortDescription: string;
  role: string;
  category: 'Design Systems' | 'FinTech & B2B' | 'AI & Tools' | 'HealthTech';
  duration: string;
  year: string;
  coverImage: string;
  metrics: Metric[];
  overview: string;
  theProblem: string;
  theChallenge: string;
  researchAndDiscovery: string;
  designDecisions: string[];
  keyOutcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  artifacts?: CaseStudyArtifact[];
  nextProjectSlug?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  workArrangement: 'Remote' | 'Hybrid' | 'On-site';
  summary: string;
  keyContributions: string[];
  coreSkills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  highlights?: string[];
}

export interface PersonalProfile {
  name: string;
  roleTitle: string;
  yearsExperience: number;
  location: string;
  currentRole: string;
  availability: string;
  headline: string;
  leadCopy: string;
  email: string;
  linkedin: string;
  github?: string;
  dribbble?: string;
  twitter?: string;
  resumeDownloadUrl?: string;
}
