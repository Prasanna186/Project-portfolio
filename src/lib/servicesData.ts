export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServicePillar {
  id: string;
  code: string;
  title: string;
  categoryBadge: string;
  headline: string;
  colSpan: 8 | 4 | 12;
  description: string;
  metrics: ServiceMetric[];
  deliverables: string[];
  techStack: string[];
  schematicTag: string;
  placeholderImage: string;
}

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: "native-systems",
    code: "SRV_SYS_01",
    title: "NATIVE SYSTEMS & GPU ENGINES",
    categoryBadge: "RUST / WGPU / NDK",
    headline: "Bypassing web-view bloat with bare-metal GPU pipelines and zero-overhead native binaries.",
    colSpan: 8,
    description:
      "When standard web stacks or Electron cannot satisfy extreme 60+ FPS frame budgets, low memory limits, or intensive compute workloads, we engineer native desktop and mobile engines in Rust, C++, and Android NDK. From custom WGPU 29 draw pipelines with hardware-accelerated Kawase blur to hardware MediaCodec video decoders, we deliver precision at silicon level.",
    metrics: [
      { label: "TARGET FRAME RATE", value: "60 - 144 FPS" },
      { label: "MEMORY OVERHEAD", value: "< 35 MB Base" },
      { label: "BLUR PIPELINE", value: "Dual-Pass Kawase" },
      { label: "DECODER LATENCY", value: "< 16ms / Frame" },
    ],
    deliverables: [
      "Immediate-mode GPU user interfaces and custom widgets",
      "Android NDK / JNI native library integration (cdylib / staticlib)",
      "Hardware-accelerated video decoding, scrubbing & compositing",
      "Dynamic WGSL shader development and post-processing pipelines",
      "High-performance virtualization handling millions of items",
    ],
    techStack: ["Rust", "WGPU 29", "Winit", "Android NDK", "MediaCodec", "WGSL", "Taffy", "Cosmic-Text"],
    schematicTag: "GPU_PIPELINE_SCHEMATIC",
    placeholderImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cross-platform-mobile",
    code: "SRV_MOB_02",
    title: "CROSS-PLATFORM MOBILE APPS",
    categoryBadge: "KMP / COMPOSE / NATIVE",
    headline: "Fluid gesture-driven mobile applications backed by production Play Store credentials.",
    colSpan: 4,
    description:
      "Proven track record of building and shipping consumer-grade mobile applications with over 10,000+ Google Play downloads. Utilizing Kotlin Multiplatform (KMP) and Jetpack Compose alongside native C++/Rust layers for compute-heavy tasks like multi-track timeline editing, audio waveform synchronization, and real-time canvas rendering.",
    metrics: [
      { label: "STORE TRACTION", value: ">10,000+ Downloads" },
      { label: "CRASH-FREE RATE", value: "99.8%" },
      { label: "UI ENGINE", value: "Jetpack Compose" },
      { label: "ARCH", value: "Kotlin Multiplatform" },
    ],
    deliverables: [
      "Custom multi-track timelines, scrubbers, and gesture controllers",
      "Bézier keyframe curve animation and transformation engines",
      "Offline-first local databases with SQLite and room persistence",
      "Google Play Store compliance, release signing, and monetization",
    ],
    techStack: ["Kotlin Multiplatform", "Jetpack Compose", "Android NDK", "SQLite", "JNI", "Google Play Console"],
    schematicTag: "MOBILE_SYSTEM_BLUEPRINT",
    placeholderImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "enterprise-backend",
    code: "SRV_ENT_03",
    title: "ENTERPRISE BACKENDS & ERP PLATFORMS",
    categoryBadge: "RUST AXUM / FASTAPI / ORACLE",
    headline: "High-concurrency systems, strict relational governance, and legacy enterprise proxying.",
    colSpan: 12,
    description:
      "We design robust, resilient backends and data pipelines that eliminate ghost records, data drift, and synchronization failures. From building reverse-proxy middleware that interfaces modern dashboards with Oracle EPM Cloud to engineering academic ERP platforms with cell-level Excel diffing and automated tuition ledgers, our systems guarantee strict relational integrity.",
    metrics: [
      { label: "DATA DRIFT", value: "0 Phantom Records" },
      { label: "DIFF RESOLUTION", value: "Cell-Level Precision" },
      { label: "API PROXY", value: "Oracle EPM Reverse Proxy" },
      { label: "CONCURRENCY", value: "Tokio Async Multi-Thread" },
    ],
    deliverables: [
      "High-throughput REST and WebSocket APIs in Rust (Axum) & Python (FastAPI)",
      "Oracle EPM reverse proxying with session isolation and automated cookie management",
      "Bi-directional Excel data center with visual diffing and conflict alert modals",
      "Strict relational validation, database migrations, and role-based access control",
    ],
    techStack: ["Rust Axum", "Python FastAPI", "SQLx PostgreSQL", "TiDB Cloud (MySQL)", "SQLAlchemy", "Alembic", "Docker", "Cloud Run"],
    schematicTag: "ERP_ORACLE_GATEWAY_ARCH",
    placeholderImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "generative-ai",
    code: "SRV_AI_04",
    title: "APPLIED GENERATIVE AI & MULTIMODAL AGENTS",
    categoryBadge: "GEMINI 2.5 FLASH / VISION / VOICE",
    headline: "Domain-specific AI assistants with real-time streaming, multimodal vision, and clinical guardrails.",
    colSpan: 4,
    description:
      "Moving far beyond generic LLM chatbots, we build specialized domain assistants that understand local dialects, stream responses via async generators, analyze images (meal plates, prescriptions, medical labels), and enforce strict safety guardrails aligned with public health and WHO protocols.",
    metrics: [
      { label: "FOUNDATION MODEL", value: "Gemini 2.5 Flash" },
      { label: "STREAMING LATENCY", value: "Zero Perceived Lag" },
      { label: "DIALECT CAPABILITY", value: "Mandinka, Wolof, Fula" },
      { label: "INPUT MODALITY", value: "Vision + Voice + Text" },
    ],
    deliverables: [
      "Streaming token generators utilizing official Google GenAI SDKs",
      "Multimodal image analysis pipelines (base64 inline data extraction)",
      "Cultural & domain prompt engineering with dialect-specific decision trees",
      "Automated clinical triage guardrails with hospital dispatch alerts",
    ],
    techStack: ["Google GenAI SDK", "Gemini 2.5 Flash", "Multimodal Vision", "React 19", "Recharts", "Dialect Prompting"],
    schematicTag: "GENAI_MULTIMODAL_WORKFLOW",
    placeholderImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fullstack-saas",
    code: "SRV_WEB_05",
    title: "HIGH-PERFORMANCE WEB APPS & SAAS",
    categoryBadge: "NEXT.JS 16 / QWIK CITY / TAILWIND V4",
    headline: "Sub-second LCP, zero-hydration architectures, and complex interactive marketplaces.",
    colSpan: 8,
    description:
      "Modern web engineering focused on speed, aesthetics, and user conversion. Whether leveraging Next.js 16 (React 19) for two-sided marketplaces with drag-and-drop sortable portfolios and Google Maps clustering, or deploying Qwik City to Vercel Edge for zero client hydration delays, we build web apps that feel instantaneous.",
    metrics: [
      { label: "LARGEST CONTENTFUL PAINT", value: "< 1.2s Guaranteed" },
      { label: "EDGE HYDRATION", value: "0ms Pure Resumable" },
      { label: "INTERACTIONS", value: "Drag & Drop + Maps" },
      { label: "DESIGN SYSTEM", value: "Tailwind CSS v4" },
    ],
    deliverables: [
      "Two-sided marketplaces with vendor directories, portfolios, and reviews",
      "Interactive geospatial mapping with radius queries and pin clustering",
      "Resumable edge applications running on global distributed CDNs",
      "Complete design system implementation with modern dark mode and industrial micro-interactions",
    ],
    techStack: ["Next.js 16", "React 19", "Qwik City", "Tailwind CSS v4", "Redux Toolkit", "DnD Kit", "Google Maps", "MongoDB", "Express 5"],
    schematicTag: "EDGE_WEB_ARCHITECTURE",
    placeholderImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const ENGINEERING_STANDARDS = [
  {
    category: "PERFORMANCE",
    standard: "Frame Budget Adherence",
    detail: "60 to 144 FPS smooth rendering for native UI/GPU operations with zero frame drops during scrubs.",
  },
  {
    category: "DATA INTEGRITY",
    standard: "Relational Governance",
    detail: "Zero phantom records; strict compile-time SQL queries (SQLx) and strict schema validation.",
  },
  {
    category: "TYPE SAFETY",
    standard: "End-to-End Typing",
    detail: "Strict TypeScript and Rust static typing eliminating runtime null pointer or undefined errors.",
  },
  {
    category: "WEB VITALS",
    standard: "Sub-Second LCP",
    detail: "Core Web Vitals optimized out of the box: LCP < 1.2s, FID < 100ms, CLS < 0.01.",
  },
];
