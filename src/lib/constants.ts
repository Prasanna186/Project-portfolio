import type { SiteConfig, NavItem, SocialLink } from "./types";

export const SITE_CONFIG: SiteConfig = {
  name: "Portfolio",
  title: "Professional Developer & Designer",
  tagline: "Crafting performant web experiences, modern user interfaces, and scalable architectures.",
  bio: "Full-stack engineer specializing in modern web frameworks, elegant design systems, and resilient cloud architecture.",
  email: "hello@example.com",
  location: "San Francisco, CA",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com", icon: "github", label: "GitHub Profile" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin", label: "LinkedIn Profile" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter", label: "Twitter / X" },
  ],
};
