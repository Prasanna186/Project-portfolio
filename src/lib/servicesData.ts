export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  categoryBadge: string;
  headline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: "fullstack-saas",
    number: "01",
    title: "WEB APPS & SAAS PLATFORMS",
    categoryBadge: "WEB / SAAS",
    headline: "Fast, responsive web applications and customer portals.",
    description:
      "Modern web applications built for speed, clean aesthetics, and high conversion. From multi-user SaaS platforms to client portals and dashboards, we build interfaces that load instantly and work smoothly across all devices.",
    deliverables: [
      "Custom SaaS web portals & dashboards",
      "Interactive searches, maps & directories",
      "Optimized for fast Google search ranking (SEO)",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Qwik"],
  },
  {
    id: "cross-platform-mobile",
    number: "02",
    title: "MOBILE APPLICATIONS",
    categoryBadge: "IOS / ANDROID",
    headline: "Polished mobile apps with 10k+ store downloads.",
    description:
      "Intuitive, smooth apps for iOS and Android. With proven apps reaching over 10,000+ active downloads, we build offline-ready mobile products with fluid touch controls and complete store launch support.",
    deliverables: [
      "Native-feeling iOS & Android mobile apps",
      "Offline database storage with automatic sync",
      "App store publishing, signing & updates",
    ],
    techStack: ["Kotlin Multiplatform", "Jetpack Compose", "iOS", "Android", "SQLite"],
  },
  {
    id: "enterprise-backend",
    number: "03",
    title: "CLOUD BACKENDS & DATABASES",
    categoryBadge: "CLOUD / APIS",
    headline: "Secure, reliable backends that never lose data.",
    description:
      "Robust server architectures and databases designed to handle business growth. We build fast APIs, automated workflows, and integrations with enterprise tools like Oracle, payment gateways, and cloud storage.",
    deliverables: [
      "Secure REST & real-time WebSocket APIs",
      "Enterprise integrations (Oracle, ERPs, billing)",
      "Strict data security & automated cloud backups",
    ],
    techStack: ["Rust", "Python", "PostgreSQL", "MySQL", "Docker", "AWS / GCP"],
  },
  {
    id: "generative-ai",
    number: "04",
    title: "SMART AI & AUTOMATION",
    categoryBadge: "AI / AUTOMATION",
    headline: "Intelligent tools tailored to your business rules.",
    description:
      "Practical AI solutions that automate repetitive tasks. From customer-facing chat assistants and document/photo data extraction to smart internal knowledge tools, we integrate AI where it actually adds value.",
    deliverables: [
      "Real-time AI chat assistants for your app",
      "Image & document data extraction tools",
      "Custom business prompts with strict safety rules",
    ],
    techStack: ["Gemini 2.5", "Vision AI", "LLM APIs", "Workflow Automation"],
  },
  {
    id: "native-systems",
    number: "05",
    title: "HIGH-PERFORMANCE SOFTWARE",
    categoryBadge: "NATIVE / ENGINES",
    headline: "Lag-free native software for demanding tasks.",
    description:
      "When browser-based tools aren't fast enough, we build native desktop and mobile engines. Perfect for creative tools, video/audio editors, and data-heavy applications that demand a constant 60+ FPS experience.",
    deliverables: [
      "Ultra-responsive desktop & mobile software",
      "Real-time media playback & video processing",
      "Low memory usage with zero frame drops",
    ],
    techStack: ["Rust", "WGPU", "C++", "Android NDK", "Hardware Acceleration"],
  },
];

export const ENGINEERING_STANDARDS = [
  {
    category: "SPEED & FLUIDITY",
    standard: "Smooth User Experience",
    detail: "Silky smooth 60 FPS interactions with zero lag, instant page transitions, and quick user feedback.",
  },
  {
    category: "DATA INTEGRITY",
    standard: "100% Data Accuracy",
    detail: "Rock-solid database architecture ensuring zero lost records, secure authentication, and reliable backups.",
  },
  {
    category: "CODE QUALITY",
    standard: "Production Grade",
    detail: "Strict type-checked code and thorough testing to eliminate crashes, broken links, and unexpected errors.",
  },
  {
    category: "SEARCH & SEO",
    standard: "Fast Load Times",
    detail: "Optimized for Google search engines with sub-second page loads, mobile responsiveness, and clean SEO tags.",
  },
];
