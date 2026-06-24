// MVC Model Layer – gedeelde TypeScript interfaces en types

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface CareerExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface NavLink {
  path: string;
  label: string;
}
