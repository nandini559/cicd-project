export interface Sector {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  marketInsights: string;
  keyRoles: string[];
  image: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  candidateFocus: string;
  clientFocus: string;
  deliverables: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  sectors: string[];
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  initials: string;
}

export interface Job {
  id: string;
  title: string;
  sectorId: string;
  sectorName: string;
  location: string;
  type: 'Permanent' | 'Contract' | 'Executive Search';
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  keyResponsibilities: string[];
  isFeatured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  sector: string;
  type: 'client' | 'candidate';
}
