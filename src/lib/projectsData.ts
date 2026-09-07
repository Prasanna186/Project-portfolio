export interface ProjectMetric {
  label: string;
  value: string;
}

export type ProjectCategory =
  | "ALL"
  | "SYSTEMS & GPU"
  | "ENTERPRISE & CLOUD"
  | "AI & ML"
  | "FULL-STACK & MOBILE";

export interface Project {
  id: string;
  title: string;
  codename: string;
  category: "SYSTEMS & GPU" | "ENTERPRISE & CLOUD" | "AI & ML" | "FULL-STACK & MOBILE";
  statusBadge: string;
  statusType: "ready" | "highlight" | "default";
  summary: string;
  description: string;
  colSpanDesktop: 8 | 4 | 12;
  keyMetrics: ProjectMetric[];
  techStack: string[];
  architectureHighlights: string[];
  wireframeTag: string;
  placeholderImage: string;
  liveLink?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "after-motion",
    title: "After Motion",
    codename: "SYS_APP_AM01",
    category: "SYSTEMS & GPU",
    statusBadge: "GOOGLE PLAY • 10,000+ DOWNLOADS",
    statusType: "ready",
    summary:
      "High-performance cross-platform motion graphics and multi-track video editing engine with native hardware decoding.",
    description:
      "A production mobile video editor engineered for precision motion design. Powered by a custom Rust engine (aftermotion-core-v2) compiling to native cdylib and communicating via JNI with Android NDK hardware AMediaCodec. Features 3D camera projection, zero-copy frame ring buffer for instantaneous reverse scrubbing, and Bézier keyframe velocity interpolation.",
    colSpanDesktop: 8,
    keyMetrics: [
      { label: "PLAY STORE", value: ">10,000+ DL" },
      { label: "TIMELINE", value: "60 FPS Native" },
      { label: "DECODER", value: "NDK MediaCodec" },
      { label: "MATH ENGINE", value: "glam Mat4" },
    ],
    techStack: [
      "Rust (Core Engine)",
      "Kotlin Multiplatform (KMP)",
      "Jetpack Compose",
      "Android NDK",
      "AMediaCodec",
      "glam (Linear Algebra)",
      "SQLite",
    ],
    architectureHighlights: [
      "Hardware-accelerated NDK MediaCodec video decoding pipeline",
      "Zero-copy frame ring buffer for fluid bi-directional scrubbing",
      "3D camera transformation engine with perspective projection",
      "Bézier keyframe curve editor with cubic velocity interpolation",
    ],
    wireframeTag: "AM_VIDEO_ENGINE_V2",
    placeholderImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    liveLink: "https://play.google.com/store/apps/details?id=com.aftermotion.app",
  },
  {
    id: "zenthra-v2",
    title: "Zenthra UI Framework",
    codename: "SYS_GPU_ZN02",
    category: "SYSTEMS & GPU",
    statusBadge: "GPU ENGINE & APPS",
    statusType: "highlight",
    summary:
      "High-performance immediate-mode GPU UI framework in Rust with hardware-accelerated dual-pass Kawase blur and WGSL shaders.",
    description:
      "Engineered from scratch to eliminate Electron/web-view bloat. Features a custom WGPU 29 draw pipeline, Taffy flexbox layout engine, Cosmic-Text bi-directional font shaping, and dynamic WGSL fragment shader injection. Powers standalone native desktop apps including ZenFile (glassmorphic file explorer) and After Motion Desktop.",
    colSpanDesktop: 4,
    keyMetrics: [
      { label: "RENDER ENGINE", value: "WGPU v29" },
      { label: "BLUR PASS", value: "Kawase WGSL" },
      { label: "VIRTUALIZATION", value: "Millions @ 60 FPS" },
      { label: "TEXT SHAPING", value: "Cosmic-Text" },
    ],
    techStack: [
      "Rust 2021",
      "WGPU 29",
      "Winit 0.30",
      "Taffy (Layout)",
      "Cosmic-Text",
      "Dual-Pass Kawase",
      "WGSL Shaders",
    ],
    architectureHighlights: [
      "Immediate-mode API with dual event-driven & continuous render loops",
      "Hardware-accelerated Kawase downsampled blur for frosted glassmorphism",
      "LazyContainer virtualization handling massive datasets at locked 60 FPS",
      "Includes ZenFile & After Motion Desktop production application suites",
    ],
    wireframeTag: "WGPU_RENDER_PIPELINE",
    placeholderImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://zenthralabs.dev",
  },
  {
    id: "pratibha-erp",
    title: "Pratibha Institute ERP",
    codename: "B2B_GOV_PR03",
    category: "ENTERPRISE & CLOUD",
    statusBadge: "CLIENT PRODUCTION",
    statusType: "ready",
    summary:
      "Enterprise higher education governance platform featuring strict relational validation and an intelligent Excel Data Center.",
    description:
      "High-reliability enterprise ERP managing student records, multi-installment tuition fees, hostel inventory, and fleet routes. Engineered with Rust Axum and SQLx on PostgreSQL to prevent phantom entities and data anomalies. Features a bi-directional Excel Data Center with cell-level color-coded diffing and mandatory conflict alert modals.",
    colSpanDesktop: 4,
    keyMetrics: [
      { label: "RELATIONAL RULE", value: "0 Ghost Entities" },
      { label: "EXCEL SYNC", value: "Cell-Level Diff" },
      { label: "BACKEND", value: "Rust Axum 0.7" },
      { label: "DATABASE", value: "SQLx PostgreSQL" },
    ],
    techStack: [
      "Rust (Axum 0.7)",
      "SQLx PostgreSQL",
      "Tokio Runtime",
      "Next.js 16 (React 19)",
      "Tailwind CSS v4",
      "Zustand",
      "ExcelJS",
    ],
    architectureHighlights: [
      "Zero-placeholder foreign-key relational validation across all models",
      "Cell-level visual diffing (New=Green, Modified=Yellow, Unchanged=White)",
      "Automated tuition fee ledger computation and receipt generation",
      "Role-based access control with Argon2 / JWT authentication",
    ],
    wireframeTag: "ERP_DIFF_ENGINE_V1",
    placeholderImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://frontend-pratibha-inst.vercel.app/login",
  },
  {
    id: "kairaba-health",
    title: "Kairaba Health Assistant",
    codename: "AI_ML_KH04",
    category: "AI & ML",
    statusBadge: "GEMINI 2.5 FLASH • MULTIMODAL",
    statusType: "highlight",
    summary:
      "Multilingual AI public health assistant for chronic disease prevention in The Gambia, with native Mandinka, Wolof, and Fula dialects.",
    description:
      "A culturally grounded public health assistant aligned with WHO SDG 3. Uses Google Gemini 2.5 Flash via @google/genai with streaming text generators, vision attachment analysis for meals and prescriptions, and microphone audio input. Features culturally attuned nutrition coaching and emergency clinical triage protocols.",
    colSpanDesktop: 8,
    keyMetrics: [
      { label: "AI MODEL", value: "Gemini 2.5 Flash" },
      { label: "LANGUAGES", value: "Mandinka/Wolof/Fula" },
      { label: "INPUTS", value: "Vision + Voice + Text" },
      { label: "SAFETY", value: "WHO SDG 3 Triage" },
    ],
    techStack: [
      "Google GenAI SDK",
      "Gemini 2.5 Flash",
      "React 19",
      "Vite 6",
      "Recharts (Vitals)",
      "Streaming Generators",
      "Multimodal Vision",
    ],
    architectureHighlights: [
      "Real-time token streaming with async generators for zero perceived latency",
      "Cultural dietary knowledge base (Benachin oil reduction, Netetu salt substitute)",
      "Multilingual cardiovascular risk scoring engine with dialect keyword parsing",
      "Emergency red-flag escalation to regional hospital triage centers",
    ],
    wireframeTag: "GENAI_MULTIMODAL_AI",
    placeholderImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "nexassist-hub",
    title: "NexAssist Hub",
    codename: "ENT_ORCL_NX05",
    category: "ENTERPRISE & CLOUD",
    statusBadge: "ENTERPRISE PROXY & AI",
    statusType: "ready",
    summary:
      "Intelligent middleware and reverse proxy bridging modern analytics with Oracle Enterprise Performance Management (EPM).",
    description:
      "Architected as a high-security bridge between enterprise frontend dashboards and Oracle EPM Cloud. Manages session cookies, request transformation, and audit logging while integrating conversational AI assistance for financial planning, workforce analytics, and approval workflows. Deployed to Google Cloud Run.",
    colSpanDesktop: 4,
    keyMetrics: [
      { label: "ORACLE PROXY", value: "Financials/Planning" },
      { label: "FRAMEWORK", value: "FastAPI + Uvicorn" },
      { label: "STORAGE", value: "TiDB Cloud MySQL" },
      { label: "DEPLOYMENT", value: "Google Cloud Run" },
    ],
    techStack: [
      "Python 3.11",
      "FastAPI",
      "SQLAlchemy 2.0",
      "TiDB Cloud",
      "React 18",
      "Shadcn UI",
      "Recharts",
      "Playwright",
    ],
    architectureHighlights: [
      "Secure reverse proxy isolating Oracle EPM credentials from client browsers",
      "Async request streaming with httpx and Pydantic v2 data models",
      "Enterprise audit logging and role-based access control (RBAC)",
      "Interactive analytics visualizer with financial variance charts",
    ],
    wireframeTag: "ORCL_PROXY_GATEWAY",
    placeholderImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://nexassistfrontend.vercel.app/home",
  },
  {
    id: "filmyweds",
    title: "FilmyWeds Marketplace",
    codename: "WEB_MKT_FW06",
    category: "FULL-STACK & MOBILE",
    statusBadge: "FULL-STACK MARKETPLACE",
    statusType: "highlight",
    summary:
      "Full-stack wedding vendor discovery and booking platform with geospatial search, drag-and-drop portfolios, and Monaco CMS.",
    description:
      "A complete two-sided marketplace connecting couples with premier cinematographers and photographers. Features MongoDB 2dsphere geolocation search, Cloudinary high-resolution media pipelines, sortable drag-and-drop portfolio management (@dnd-kit), verified client testimonials, and a hardened Express 5 security layer.",
    colSpanDesktop: 4,
    keyMetrics: [
      { label: "RUNTIME", value: "Bun / Node.js" },
      { label: "DATABASE", value: "MongoDB 2dsphere" },
      { label: "MEDIA PIPELINE", value: "Cloudinary WebP" },
      { label: "FRONTEND", value: "Next.js 16 (React 19)" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Express 5",
      "MongoDB / Mongoose",
      "Redux Toolkit",
      "Google Maps API",
      "DnD Kit",
      "Monaco Editor",
    ],
    architectureHighlights: [
      "Geospatial radius queries with interactive Google Maps clustering",
      "Drag-and-drop sortable portfolio curation for vendor listings",
      "In-browser Monaco editor for publishing editorial articles and blogs",
      "Hardened API with Helmet, rate limiting, and mongo-sanitizer protection",
    ],
    wireframeTag: "MKT_GEOSPATIAL_GRID",
    placeholderImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://filmyweds-frontend.vercel.app/login",
  },
  {
    id: "zenthralabs",
    title: "ZenthraLabs Cloud Platform",
    codename: "CLD_SAAS_ZL07",
    category: "ENTERPRISE & CLOUD",
    statusBadge: "LIVE PLATFORM",
    statusType: "ready",
    summary:
      "Centralized developer portal, cloud project synchronization, and dynamic asset CDN distribution for native applications.",
    description:
      "The cloud backbone servicing the Zenthra software ecosystem. Powers user accounts with Google OAuth 2.0, manages timeline backup synchronization for native mobile and desktop clients, and streams dynamic asset packs from S3 storage. Frontend delivers instant sub-100ms global response times via Qwik City on Vercel Edge.",
    colSpanDesktop: 4,
    keyMetrics: [
      { label: "ARCH", value: "Resumable Islands" },
      { label: "CDN / EDGE", value: "Vercel Edge" },
      { label: "SYNC BACKEND", value: "Rust Axum + S3" },
      { label: "HYDRATION", value: "0ms Pure Resumable" },
    ],
    techStack: [
      "Qwik City",
      "Vite 7",
      "Rust (Axum 0.7)",
      "PostgreSQL",
      "Google OAuth 2.0",
      "AWS S3 CDN",
      "Docker",
    ],
    architectureHighlights: [
      "Zero-hydration resumable web architecture running on global edge nodes",
      "Low-latency project metadata synchronization for native client apps",
      "Dynamic asset catalog serving LUTs, presets, and fonts",
      "Admin moderation portal and developer documentation distribution",
    ],
    wireframeTag: "EDGE_SYNC_GATEWAY",
    placeholderImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    liveLink: "https://zenthralabs.dev",
  },
];
