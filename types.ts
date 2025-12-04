
export interface Stat {
  label: string;
  value: string;
  subtext?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: string;
  percentage: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  logo?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  metrics?: string;
}

export interface FunnelData {
  stage: string;
  value: number;
  label: string;
  conversion: string;
  fill: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface EventStat {
  name: string;
  type: string;
  role: string;
  impact: string;
  logo?: string;
  date?: string;
  location?: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  level: 'Premium' | 'Gold' | 'Standard';
  category: string;
  skills?: string[];
  logo: string;
  id?: string;
}

export interface Affiliation {
  role: string;
  organization: string;
  description: string;
  type: 'Member' | 'Speaker' | 'Award' | 'Contributor';
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}
