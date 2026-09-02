export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  description: string[];
  skills?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}
