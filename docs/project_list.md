# Comprehensive Technical Project Portfolio

> A detailed dossier of production systems, enterprise platforms, native applications, and core engine frameworks developed and maintained by Kabiraj Pan.

---

## Quick Navigation & Executive Summary

| Project | Domain / Type | Primary Tech Stack | Status / Scale |
| :--- | :--- | :--- | :--- |
| [1. Pratibha Institute ERP](#1-pratibha-institute-enterprise-erp-platform) | Enterprise EdTech ERP | Rust (Axum, SQLx), PostgreSQL, Next.js 16, Tailwind v4 | Client Production |
| [2. ZenthraLabs Ecosystem](#2-zenthralabs-cloud-platform--developer-ecosystem) | Cloud SaaS & Developer Portal | Rust (Axum), PostgreSQL, Qwik City, Vercel Edge, Docker | Live Platform |
| [3. FilmyWeds](#3-filmyweds--wedding-vendor-marketplace--management-platform) | Vendor Marketplace & CMS | Node.js / Bun, Express 5, MongoDB, Next.js 16, Redux | Production Ready |
| [4. NexAssist Hub](#4-nexassist-hub--ai-powered-oracle-epm-middleware--assistant) | Enterprise AI & Oracle Middleware | Python (FastAPI), TiDB (MySQL), React 18, Vite, Shadcn UI | Enterprise Tool |
| [5. After Motion](#5-after-motion--professional-mobile-video-editor--motion-graphics) | Native Mobile Video & Motion Engine | Kotlin Multiplatform, Jetpack Compose, Rust NDK, MediaCodec | **Google Play (>10k+ Downloads)** |
| [6. Zenthra UI Framework (v2)](#6-zenthra-ui-framework-v2--native-desktop-ecosystem) | High-Performance GPU UI Framework | Rust, WGPU, Winit, Cosmic-Text, Taffy, WGSL Shaders | Core Engine & Desktop Apps |
| [7. ZenFile](#8-zenfile--native-desktop-file-manager) | Native Desktop File Manager | Rust, Zenthra UI, WGPU, Taffy, LazyContainer | Open Source Native App |
| [8. Zenthra View](#9-zenthra-view--native-gpu-image-viewer) | Native GPU Image Viewer | Rust, Zenthra UI, WGPU, OpenGL, Filmstrip | Open Source Native App |
| [9. Kairaba Health (NCD Bot)](#7-kairaba-health--multilingual-ai-public-health-assistant) | Multilingual GenAI HealthTech | Gemini 2.5 Flash, React 19, Vite, Recharts, Multimodal | Active AI Studio App |

---

## 1. Pratibha Institute Enterprise ERP Platform

* **Local Repository Path**: `/home/kabir/Desktop/projects/clients/pratibha-inst/development`
* **Sub-projects**: `backend-rust/`, `frontend-pratibha-inst/`, `guide/`
* **Live Deployment**: [frontend-pratibha-inst.vercel.app/login](https://frontend-pratibha-inst.vercel.app/login)
* **Deployment Target**: Enterprise On-Prem / Cloud VPS with PostgreSQL
* **Client / Domain**: Higher Education Institute Management System

### System Overview & Problem Solved
Pratibha Institute ERP is an enterprise-grade academic administration and financial governance system. It eliminates data corruption, phantom database records, and financial discrepancies common in legacy spreadsheets through strict relational validation, single canonical schemas, and an intelligent Excel Data Center featuring cell-level diffing and conflict resolution.

### Architecture & Technical Stack
```
┌──────────────────────────────────────────────┐
│  Next.js 16 (React 19) + Tailwind CSS v4     │
│  Zustand Global State + ExcelJS + Lucide     │
└──────────────────────┬───────────────────────┘
                       │ HTTPS / JSON & Multipart
┌──────────────────────▼───────────────────────┐
│  Rust Axum 0.7 + Tokio Async Runtime         │
│  Tower-HTTP CORS/Trace + SQLx PostgreSQL     │
│  JWT + Argon2/Bcrypt + Lettre SMTP Mailer    │
└──────────────────────┬───────────────────────┘
                       │
┌──────────────────────▼───────────────────────┐
│  PostgreSQL Relational Storage               │
│  Strict Foreign Keys, Unique Indexes, Enums  │
└──────────────────────────────────────────────┘
```

* **Backend Engine (`backend-rust`)**:
  * **Language & Runtime**: Rust (2021 Edition), Tokio (`v1.43`, full multi-threaded async runtime).
  * **Web Framework**: Axum (`v0.7`), Axum-Extra (`v0.9` with secure cookies), Tower-HTTP (`v0.5`).
  * **Database & ORM**: SQLx (`v0.8`) with compile-time checked SQL queries targeting PostgreSQL.
  * **Security & Auth**: `jsonwebtoken` (`9.3`), `bcrypt` (`0.15`), `uuid` (`v4`), `dotenvy`.
  * **Observability & Notifications**: `tracing` & `tracing-subscriber`, `lettre` (`0.11` SMTP mailer), `reqwest` (`0.12`).
* **Frontend Application (`frontend-pratibha-inst`)**:
  * **Framework**: Next.js (`16.2.9`) using React 19 (`19.2.4`) and TypeScript 5.
  * **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss` 4.3.1).
  * **State & Networking**: Zustand (`5.0.14`), Axios (`1.18.1`), JS-Cookie (`3.0.8`).
  * **Spreadsheet & Sanitation**: `exceljs` (`4.4.0`), `dompurify` (`3.4.11`), `lucide-react`.

### Key Functional Modules
1. **Student Information Master (SIS)**:
   * Canonical records for enrollment, personal demographics, academic streams, and statuses.
   * Strict relational validation: Prevents placeholder entities (e.g. invalid hostel rooms or transport vehicles are rejected with `400 Bad Request` instead of creating ghost entities).
2. **Tuition & Fee Governance Engine**:
   * Multi-installment fee scheduling, payment mode categorization (Cash, UPI, NEFT/RTGS with UTR verification), discount approvals, and instant receipt generation.
   * Real-time ledger computation for pending dues and historical collections.
3. **Excel Data Center & Conflict Resolution Engine**:
   * Bi-directional Excel import/export using `ExcelJS`.
   * **Cell-level Visual Diffing**: Color-coded categorization:
     * *Green*: Newly identified records.
     * *Blue / Yellow*: Existing records with modified cell-level values highlighted in yellow.
     * *White*: Unchanged data verified against PostgreSQL.
   * **Mandatory Conflict Alert Modal**: Enforces administrator review and explicit sign-off before committing batch updates.
4. **Hostel & Fleet Logistics Management**:
   * Room inventory occupancy tracking and transport route allocation with pre-registered vehicle validation.

---

## 2. ZenthraLabs Cloud Platform & Developer Ecosystem

* **Local Repository Path**: `/home/kabir/Desktop/projects/personal/web/zenthralabs`
* **Sub-projects**: `zenthralabs-backend/`, `zenthra-labs-frontend/`
* **Live Platform**: [zenthralabs.dev](https://zenthralabs.dev)
* **Deployment Target**: Vercel Edge (Frontend) + Dockerized Container / Cloud VPS (Backend)
* **Domain**: Developer Tools, Product Showcase, Cloud Sync, and Licensing

### System Overview & Problem Solved
ZenthraLabs acts as the centralized umbrella platform, product hub, and cloud backend servicing native client applications (such as After Motion and the Zenthra UI framework). It powers user authentication, cloud project synchronization, asset catalog delivery, licensing, and documentation distribution.

### Architecture & Technical Stack
```
┌──────────────────────────────────────────────┐
│  Qwik City + Vite 7 + Tailwind CSS v4        │
│  Resumable Island Architecture (Vercel Edge) │
└──────────────────────┬───────────────────────┘
                       │ REST API / WebSocket
┌──────────────────────▼───────────────────────┐
│  Rust Axum 0.7 Web Service                   │
│  Tokio + Tower-HTTP + SQLx PostgreSQL        │
│  Google OAuth 2.0 + AWS S3 / Cloud Storage   │
└──────────────────────┬───────────────────────┘
                       │
┌──────────────────────▼───────────────────────┐
│  PostgreSQL Database + S3 Asset Buckets      │
└──────────────────────────────────────────────┘
```

* **Backend Service (`zenthralabs-backend`)**:
  * **Language & Web Engine**: Rust 2021, Axum (`v0.7`), Tokio (`v1`), Tower-HTTP (`v0.5`).
  * **Database**: SQLx (`v0.7`) connected to PostgreSQL with connection pooling.
  * **Identity & Security**: Google OAuth 2.0 integration (`client_secret`), JWT (`jsonwebtoken 9.2`), Bcrypt (`0.15`), Regex validation.
  * **Containerization**: Multi-stage production `Dockerfile` and `docker-compose.yml`.
* **Frontend Portal (`zenthra-labs-frontend`)**:
  * **Framework**: Builder.io Qwik (`^1.20.0`) + Qwik City file-based routing.
  * **Bundler & Styling**: Vite 7 (`7.3.1`), Tailwind CSS v4 (`@tailwindcss/vite` 4.3.0).
  * **Adapters**: Vercel Edge adapter for instantaneous sub-100ms global response times with zero client-side JavaScript hydration penalties.

### Key Capabilities & Workflows
1. **Developer & Product Portal**:
   * Interactive documentation and live showcases for Zenthra UI, After Motion, and ZenFile.
2. **Project Cloud Sync Gateway**:
   * Low-latency endpoints for native clients to back up project metadata, timeline states, and layer configurations to cloud storage.
3. **Asset Delivery Service (CDN)**:
   * Dynamic asset catalog serving preset packs, video overlays, LUTs, and typography packages to mobile and desktop apps.
4. **Subscription & Licensing Engine**:
   * License validation and tier access control across web, Android, and desktop ecosystems.

---

## 3. FilmyWeds — Wedding Vendor Marketplace & Management Platform

* **Local Repository Path**: `/home/kabir/Desktop/projects/personal/web/filmyweds`
* **Sub-projects**: `filmyweds-backend/`, `filmyweds-frontend-nextjs/`
* **Live Deployment**: [filmyweds-frontend.vercel.app/login](https://filmyweds-frontend.vercel.app/login)
* **Deployment Target**: Google App Engine / Cloud Run / VPS + MongoDB Atlas
* **Domain**: Wedding Vendor Aggregation, Portfolio Showcase & Booking Marketplace

### System Overview & Problem Solved
FilmyWeds connects brides, grooms, and event planners with top-tier wedding cinematographers, photographers, venues, and makeup artists. It provides rich media portfolio management, interactive geolocation search, drag-and-drop showcase curation, and verified client review channels.

### Architecture & Technical Stack
```
┌─────────────────────────────────────────────────────────────┐
│  Next.js 16 (React 19) + Tailwind CSS v4                    │
│  Redux Toolkit + Redux-Persist + Framer Motion              │
│  @dnd-kit Sortable + Google Maps API + Monaco Editor        │
└──────────────────────────────┬──────────────────────────────┘
                               │ JSON REST API
┌──────────────────────────────▼──────────────────────────────┐
│  Node.js / Bun Runtime + Express 5                          │
│  Passport.js (Google & Facebook OAuth) + JWT                │
│  Mongoose 8 + Cloudinary SDK + Nodemailer + Node-Cron        │
│  Security: Helmet + Rate Limiter + Mongo Sanitize + XSS     │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  MongoDB Atlas (Geospatial Indexes, Full-Text Search)       │
│  Cloudinary CDN (High-Resolution Video/Photo Storage)       │
└─────────────────────────────────────────────────────────────┘
```

* **Backend API (`filmyweds-backend`)**:
  * **Runtime & Framework**: Bun / Node.js, Express (`^5.1.0`), `express-async-handler`.
  * **Database & Modeling**: MongoDB via Mongoose (`^8.15.2`) with 2dsphere geolocation indexes.
  * **Authentication**: Passport.js (`passport-google-oauth20`, `passport-facebook`), JWT (`9.0.2`), BcryptJS.
  * **Media & Storage**: Cloudinary SDK (`v2.8.0`) with Multer (`2.1.1`) memory storage for automated high-res processing and WebP conversion.
  * **Hardened Security**: Helmet (`8.1.0`), `express-rate-limit`, `express-mongo-sanitize`, `express-xss-sanitizer`.
  * **Background Jobs**: `node-cron` for automated reminders, review follow-ups, and subscription tier expiration.
* **Frontend Web Application (`filmyweds-frontend-nextjs`)**:
  * **Framework**: Next.js (`16.1.4`) with React 19 (`19.2.3`).
  * **State & Motion**: Redux Toolkit (`^2.11.2`) + Redux Persist, Framer Motion (`12.29.0`).
  * **Interactive Components**:
    * `@dnd-kit/core` & `@dnd-kit/sortable`: Drag-and-drop media reordering in vendor portfolio managers.
    * `@googlemaps/js-api-loader` & `@react-google-maps/api`: Interactive map exploration with cluster pins.
    * `@monaco-editor/react`: Professional in-browser code/markdown editor for blog and editorial publishing.

### Key Functional Modules
1. **Vendor Directory & Geospatial Discovery**:
   * Distance-based radius filtering, category filters (Cinematography, Pre-wedding, Candid), and pricing tier filters.
2. **Interactive Vendor Showcase & Booking Requests**:
   * Rich media galleries, package breakdowns, direct inquiry messaging via EmailJS and Nodemailer.
3. **Rating, Review & Verification System**:
   * Verified booking reviews with photographic proof submission to prevent fake testimonials.
4. **Admin Moderation & Editorial Engine**:
   * Admin dashboard for vendor onboarding verification, featured listings curation, and blog management.

---

## 4. NexAssist Hub — AI-Powered Oracle EPM Middleware & Assistant

* **Local Repository Path**: `/home/kabir/Desktop/projects/personal/web/nexassist-hub`
* **Sub-projects**: `Backend-NexAssist/`, `nexassist-hub/`
* **Live Deployment**: [nexassistfrontend.vercel.app/home](https://nexassistfrontend.vercel.app/home)
* **Deployment Target**: Google Cloud Run (Containerized) + TiDB Cloud (MySQL)
* **Domain**: Enterprise Financial Planning, Oracle EPM Integration & AI Workflows

### System Overview & Problem Solved
NexAssist Hub serves as an intelligent middleware and AI assistant layer bridging complex enterprise workflows with Oracle EPM (Enterprise Performance Management). It standardizes, transforms, and proxies requests between modern web interfaces and legacy Oracle EPM REST APIs while augmenting users with conversational AI assistance, automated data validation, and real-time financial reporting.

### Architecture & Technical Stack
```
┌─────────────────────────────────────────────────────────────┐
│  React 18 + Vite + TypeScript                               │
│  Shadcn UI + Radix UI + Tailwind CSS                        │
│  Recharts (Area, Bar, Line, Pie) + Vitest + Playwright      │
└──────────────────────────────┬──────────────────────────────┘
                               │ REST API / JWT Session
┌──────────────────────────────▼──────────────────────────────┐
│  FastAPI (Python 3.11) + Uvicorn / Gunicorn                 │
│  Pydantic v2 + SQLAlchemy 2.0 (Async) + Alembic Migrations  │
│  HTTPX Async Proxy Client + OpenPyXL + PyJWT                │
└──────────────────────┬───────────────────────┬──────────────┘
                       │                       │
┌──────────────────────▼───────┐       ┌───────▼──────────────┐
│  TiDB Cloud (Distributed SQL)│       │  Oracle EPM Cloud    │
│  Auth, Users, Chats, Audits  │       │  Planning, Finance   │
└──────────────────────────────┘       └──────────────────────┘
```

* **Backend Engine (`Backend-NexAssist`)**:
  * **Framework & Server**: FastAPI (`0.111.0`), Uvicorn (`0.29.0`), Gunicorn (`22.0.0`).
  * **ORM & Database**: SQLAlchemy (`2.0.30`) with Alembic (`1.13.1`) connecting to TiDB Cloud (MySQL protocol via `PyMySQL` and `cryptography`).
  * **Data Validation & Typing**: Pydantic v2 (`2.7.1`) and Pydantic-Settings (`2.2.1`).
  * **Oracle EPM Proxy**: Async HTTP client (`httpx 0.27.0`) handling session cookies, authorization headers, payload transformations, and error normalization.
  * **Document Processing**: `openpyxl` for reading and generating enterprise Excel workbooks.
* **Frontend Dashboard (`nexassist-hub`)**:
  * **Framework & Build**: Vite + React 18 with TypeScript.
  * **Component Design**: Complete Shadcn UI system built on top of Radix UI primitives (Dialog, Dropdown, Navigation Menu, Popover, Progress, Accordion, ScrollArea).
  * **Data Visualization**: Recharts suite (Custom Line Charts, Bar Charts, Area Charts, Pie Charts).
  * **Testing & Verification**: Unit testing via Vitest + End-to-End automation testing via Playwright.

### Key Functional Capabilities
1. **Oracle EPM Reverse Proxy & Orchestration**:
   * Transparently proxies requests to Oracle Planning, Financial Consolidation, Workforce, Approvals, and Reporting endpoints.
   * Manages authentication handshake cookies (`cookies.txt` / session tokens) securely without leaking credentials to client browsers.
2. **Conversational AI Financial Assistant**:
   * Context-aware chat system parsing financial queries, pulling data from Oracle modules, and rendering structured table responses.
3. **Analytics & Performance Visualizer**:
   * Real-time financial dashboards displaying budget vs. actual variances, forecast trends, and approval workflows.
4. **Audit Logging & RBAC Governance**:
   * Granular permission controls restricting access by organizational role with full API request audit trails.

---

## 5. After Motion — Professional Mobile Video Editor & Motion Graphics

* **Local Repository Path**: `/home/kabir/Desktop/projects/personal/app/after-motion`
* **Google Play Store**: [play.google.com/store/apps/details?id=com.aftermotion.app](https://play.google.com/store/apps/details?id=com.aftermotion.app)
* **Status**: **In Production on Google Play Store with >10,000+ Downloads**
* **Target Platforms**: Android (Active Play Store Production), iOS (Architecture Ready via KMP)
* **Domain**: Mobile Motion Graphics, Multi-track Timeline Video Editing & VFX

### System Overview & Problem Solved
After Motion brings desktop-grade keyframe animation, multi-track compositing, 3D camera transformations, and video effects to mobile creators. Running on devices without relying on slow cloud rendering, it achieves 60 FPS timeline playback and sub-second keyframe evaluation through a native Rust core engine interacting directly with Android NDK hardware codecs.

### Architecture & Technical Stack
```
┌─────────────────────────────────────────────────────────────┐
│  Android App Layer (Kotlin Multiplatform + Jetpack Compose)  │
│  - Multi-track Timeline, Ruler Scrubber, Keyframe Markers   │
│  - Layer Panel, Property Inspector, Transform Panel         │
└──────────────────────────────┬──────────────────────────────┘
                               │ JNI (Java Native Interface)
┌──────────────────────────────▼──────────────────────────────┐
│  Native Core Engine (`aftermotion-core-v2` in Rust)         │
│  ├── Hardware Decoder: Android NDK AMediaCodec via NDK-sys  │
│  ├── Math & Matrix: glam 0.27 (Vec2, Vec3, Mat4 projections)│
│  ├── Compositor: Multi-layer blender with transfer modes    │
│  ├── 3D Camera: Depth, perspective & camera transformations │
│  ├── Audio Pipeline: Multi-track mixer & waveform sync      │
│  └── Ring Buffer: Zero-copy frame ring buffer for scrubbing │
└──────────────────────────────┬──────────────────────────────┘
                               │ Hardware Acceleration
┌──────────────────────────────▼──────────────────────────────┐
│  Device GPU / NDK Surface + MediaCodec Hardware Encoders    │
└─────────────────────────────────────────────────────────────┘
```

* **Native Engine (`native/aftermotion-core-v2`)**:
  * **Language & Output**: Rust 2021 compiled to `cdylib`, `rlib`, and `staticlib`.
  * **Android NDK Integration**: `ndk` (`0.8.0`), `ndk-sys` (`0.5.0`), `jni` (`0.21.1`), `android_logger`.
  * **Graphics & Linear Algebra**: `glam` (`0.27`), `image` (`0.24` for PNG, JPEG, WebP decoding).
  * **Concurrency & Safety**: `parking_lot` (`0.12.1`), `lazy_static`, `once_cell`.
* **Mobile Application Layer (`androidApp` & `shared`)**:
  * **Architecture**: Kotlin Multiplatform (KMP), Gradle 8.x (`build.gradle.kts`).
  * **UI Engine**: Jetpack Compose declarative UI with custom gesture recognizers for pinch-to-zoom timeline scaling.
  * **Local Database**: SQLite (`kls_database.db`) storing project state, layer hierarchies, and keyframe points.
  * **Speech & Captioning Module**: Native automatic speech-to-text transcribe engine.
  * **Release Governance**: Production Google Play release keys, signing configurations, Google Play Services, and `app-ads.txt`.

### Key Features & Architectural Innovations
1. **Custom Native Compositor Pipeline**:
   * Evaluates complex nested layer graphs (video, images, text, shapes, audio) frame-by-frame.
2. **Bézier Keyframe Interpolation**:
   * Smooth ease-in, ease-out, and cubic Bézier curve velocity editors for position, scale, rotation, opacity, and custom effects.
3. **Hardware-Accelerated Frame Seeking**:
   * Native ring buffer caches decoded video frames around the playhead, enabling jitter-free reverse scrubbing and instant preview.
4. **3D Camera Projection**:
   * Full 3D camera layer allowing 2D elements to be oriented and animated in 3D space with perspective division and depth sorting.

---

## 6. Zenthra UI Framework (v2) & Native Desktop Ecosystem

* **Local Repository Path**: `/home/kabir/Desktop/projects/personal/framworks/zenthra-v2`
* **Sub-projects / Crates**:
  * `crates/`: `zenthra`, `zenthra-core`, `zenthra-render`, `zenthra-layout`, `zenthra-widgets`, `zenthra-state`, `zenthra-animation`, `zenthra-text`, `zenthra-input`, `zenthra-platform`, `zenthra-theme`
  * `apps/`: `ZenFile`, `after-motion-desktop`, `after-motion-v2`, `zenthree`
* **Website & Docs**: [zenthralabs.dev](https://zenthralabs.dev)
* **Domain**: Native Systems Software, GPU UI Engine & High-Performance Desktop Applications

### System Overview & Problem Solved
Zenthra is a high-performance, immediate-mode GUI framework written from scratch in Rust. Frustrated by the memory bloat, lag, and multi-megabyte runtimes of Electron and web-based wrappers, Zenthra was built to deliver blistering speed, zero-overhead immediate-mode ergonomics, native GPU acceleration via WGPU, and modern design aesthetics (including hardware-accelerated Kawase blur glassmorphism and custom WGSL shaders).

### Architecture & Workspace Breakdown
```
┌─────────────────────────────────────────────────────────────┐
│  Zenthra Applications (ZenFile, After Motion Desktop, etc.) │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  `zenthra` (Unified Public Facade Crate)                    │
├───┬──────────────┬──────────────┬──────────────┬────────────┤
│   ▼              ▼              ▼              ▼            │
│ zenthra-widgets zenthra-layout zenthra-state  zenthra-text  │
│ (Input, Buttons)(Taffy Flexbox)(Reactive Store)(Cosmic Text)│
├───┴──────────────┴──────────────┴──────────────┴────────────┤
│   ▼                             ▼                           │
│ zenthra-render                  zenthra-platform            │
│ (WGPU 29 Draw Pipeline,         (Winit 0.30 Windowing &     │
│  Dual-Pass Kawase Blur WGSL)     Event Dispatcher)          │
└─────────────────────────────────────────────────────────────┘
```

* **Core Dependencies & Low-Level Tooling**:
  * **Graphics API**: `wgpu` (`v29` supporting Vulkan, Metal, DX12).
  * **Windowing & Events**: `winit` (`v0.30`).
  * **Text Shaping & BiDi**: `cosmic-text` (`v0.18` with Swash rasterizer).
  * **Layout Engine**: `taffy` (`v0.10` Flexbox and CSS Grid layout algorithms).
  * **Linear Algebra & Packing**: `glam` (`0.29`), `bytemuck` (`1.25`), `etagere` (`0.3` texture atlas packing).
  * **Modern Time/Date**: `jiff` (`0.2`).

### Standalone Desktop Applications Built with Zenthra
1. **ZenFile (Native High-Performance File Manager)**:
   * Location: `apps/ZenFile/`
   * Modern file explorer with hardware-accelerated frosted glassmorphic sidebar, live folder inspection, and sub-millisecond directory traversal.
   * Leverages `LazyContainer` virtualization to effortlessly browse directories containing tens of thousands of files at locked 60 FPS without memory spikes.
2. **After Motion Desktop (`apps/after-motion-desktop/`)**:
   * Desktop counterpart to the mobile video editor.
   * Modular workspace architecture split across:
     * `after-motion-desktop`: Application entry point and orchestrator.
     * `after-motion-ui`: Zenthra-powered timeline, toolbars, and inspectors.
     * `after-motion-state`: Undo/redo history, project state serialization.
     * `after-motion-backend`: Native video decoding and export pipeline.
     * `after-motion-transcribe`: Local audio speech-to-text generation.
3. **ZenThree (`apps/zenthree/`)**:
   * Interactive 3D viewport demonstrator embedding custom WGPU 3D mesh rendering pipelines alongside 2D Zenthra immediate-mode UI overlays.

### Framework Architectural Innovations
* **Dual Rendering Mode**:
  * *Event-Driven (Default)*: Conserves battery and CPU by sleeping when idle, awakening only upon user input or system events.
  * *Continuous*: Automatically engages during animations or live video playback to deliver a buttery smooth 60–144+ FPS.
* **Hardware-Accelerated Dual-Pass Kawase Blur**:
  * Custom WGSL shader implementation performing downsampled two-pass ping-pong blurring for frosted glassmorphism without the heavy performance cost of traditional Gaussian blurs.
* **Dynamic WGSL Shader Injection**:
  * Enables developers to register custom fragment shaders and bind them directly to any layout container.

---

## 7. Kairaba Health — Multilingual AI Public Health Assistant

* **Local Repository Path**: `/home/kabir/Desktop/projects/personal/ai_ml/health-bot/NCD---Health-bot`
* **Domain**: Multilingual Generative AI, Public Health Coaching, Non-Communicable Disease (NCD) Prevention
* **Target Region & Alignment**: The Gambia (West Africa) & Global; Aligned with WHO SDG 3 (Good Health & Well-Being) & Gambia Ministry of Health Guidelines

### System Overview & Problem Solved
Non-Communicable Diseases (hypertension, diabetes, cardiovascular disease) are surging in developing nations where low digital literacy, language barriers, and acute shortages of clinical personnel create severe care bottlenecks. Kairaba Health (*"Kairaba"* meaning Peace) bridges this gap as an empathetic, culturally grounded AI health assistant that communicates fluently in native West African languages (**Mandinka, Wolof, Fula**), alongside English and 15+ world languages. It delivers culturally attuned nutrition coaching, multimodal meal and prescription analysis, and life-saving clinical triage.

### Architecture & Technical Stack
```
┌─────────────────────────────────────────────────────────────┐
│  React 19 + TypeScript + Vite 6                             │
│  - Multilingual Chat Interface + Voice/Audio Recording      │
│  - Multimodal Camera / Image Attachment Upload              │
│  - Interactive Cardiovascular Risk Assessment Flow          │
│  - Recharts Vitals Dashboard (BP & Blood Sugar Metrics)     │
└──────────────────────────────┬──────────────────────────────┘
                               │ Async Stream Generators (Chunk Yield)
┌──────────────────────────────▼──────────────────────────────┐
│  Google GenAI SDK (`@google/genai` v1.30.0)                 │
│  - Model: `gemini-2.5-flash` (Temperature: 0.7)             │
│  - Dynamic Session Instruction Injection per Language Mode │
│  - Multimodal Part Payload: [InlineData(Image), Text]       │
└──────────────────────────────┬──────────────────────────────┘
                               │ Contextual Grounding & Safety
┌──────────────────────────────▼──────────────────────────────┐
│  Cultural & Medical Knowledge Base + WHO Guardrails         │
│  - Local Dietary Context (Benachin, Domoda, Netetu, Attaya) │
│  - Emergency Triage (Edward Francis Small Teaching Hospital)│
└─────────────────────────────────────────────────────────────┘
```

* **Frontend & Client Architecture**:
  * **Framework & Build**: React 19 (`^19.2.0`), React DOM 19, TypeScript (`~5.8.2`), Vite 6 (`^6.2.0`).
  * **Health Visualization**: Recharts (`^3.4.1`) for systolic/diastolic blood pressure curves and blood glucose spikes.
  * **Iconography & UI**: Lucide React (`^0.554.0`) with responsive mobile-first views (`Home`, `Chat`, `RiskAssessment`, `Learn`, `Dashboard`).
  * **Audio / Hardware Readiness**: Frame permission configurations for microphone voice recording.
* **Generative AI & Multimodal Engine**:
  * **SDK & Model**: Official Google GenAI SDK (`@google/genai` 1.30.0) driving **Gemini 2.5 Flash** (`gemini-2.5-flash`).
  * **Streaming Generation**: Real-time token streaming using JavaScript async generators (`sendMessageStream`) for zero perceived latency.
  * **Multimodal Vision Analysis**: Accepts inline image attachments (base64 MIME encoding) allowing users to snap photos of meal plates, ingredient packaging, or medication labels for instant nutritional and safety evaluations.

### Key Functional Modules & Architectural Innovations
1. **Multilingual Dialect Engine**:
   * Context-aware prompt engineering with native dialect greetings and conversation logic:
     * *Mandinka*: *"Kaira be! N to mu Kairaba le ti. N be jang ka i maabo i la kende yaa to."*
     * *Wolof*: *"Na nga def! Man la Kairaba, sa ndimbal ci wallu wergu yaram."*
     * *Fula*: *"No mbada! Ko mi Kairaba, balloowo ma e cellal."*
     * *Gambian English*: Respectful elder greetings (*"Korro"*), colloquial terms (*"How is the body?", "Small small"*).
   * Full capability across major world languages (Arabic, French, Spanish, Chinese, Swahili, Hausa, Yoruba, Zulu).
2. **Culturally Grounded Diet & Lifestyle Coaching**:
   * Substitutes high-sodium *Maggi* stock cubes with traditional fermented locust beans (*Netetu*) and fresh herbs.
   * Practical advice for halving palm and groundnut oil in heavy stews (*Benachin*, *Domoda*, *Supakanja*).
   * Moderates sugar in *Attaya* green tea rituals while championing native superfoods (*Baobab/Bouye* for Vitamin C, *Wonjo/Hibiscus* for blood pressure reduction, *Moringa/Nebeday*, and local *Yaboy* fish).
3. **Interactive Cardiovascular Risk Calculator**:
   * Multilingual diagnostic questionnaire evaluating diet, smoking, and blood pressure checks.
   * Keyword parsing engine dynamically recognizing affirmative and frequency words in local dialects (*"Ha"*, *"Lung"*, *"Waaw"*, *"Bés"*, *"Eey"*, *"Kala"*) to calculate clinical risk categories (Low, Moderate, High).
4. **Emergency Red-Flag Guardrails & WHO Safety Compliance**:
   * Detects acute warning signs (unilateral numbness, severe chest pressure, acute dyspnea, slurred speech).
   * Halts standard conversational flow immediately to issue urgent clinic dispatch warnings directing patients to regional care facilities (e.g. *Edward Francis Small Teaching Hospital*).
   * Strict non-prescriptive medical disclaimers adhering to WHO SDG 3 protocols.

---

## 8. ZenFile — Native Desktop File Manager

* **Website**: [zenthralabs.dev/products/zenthra/apps/file-manager/](https://zenthralabs.dev/products/zenthra/apps/file-manager/)
* **GitHub Repository**: [github.com/kabirajpan/ZenFile](https://github.com/kabirajpan/ZenFile)
* **Domain**: Native Systems Desktop Software, High-Performance File Management
* **Status**: Open Source Desktop Application

### System Overview & Problem Solved
ZenFile is a dependency-light, native cross-platform desktop file manager engineered in Rust using the Zenthra immediate-mode GUI framework. It replaces bloated Electron file managers with an instantaneous sub-4ms launch sequence and zero runtime virtualization lag, reading directly from the host operating system filesystem.

### Key Architecture & Capabilities
* **Immediate-Mode UI & 4ms Redraw**: Built on the Zenthra widget tree with Taffy layout algorithms, redrawing file trees, toolbars, and metadata inspectors in under 4ms per frame.
* **LazyContainer List Virtualization**: Smoothly scrolls and inspects directories with 100,000+ files with zero layout stutter and locked 60 FPS performance.
* **Inline Live Preview & Metadata**: Right-hand inspection panel surfaces file metadata, dimensions, and live previews without opening external windows.
* **Native Contextual Actions**: Right-click menus, file operations, multi-color folder labeling, and language-aware syntax icons for source code files.

---

## 9. Zenthra View — Native GPU Image Viewer

* **Website**: [zenthralabs.dev/products/zenthra/apps/zenthra-view/](https://zenthralabs.dev/products/zenthra/apps/zenthra-view/)
* **GitHub Repository**: [github.com/kabirajpan/Zenthra-Viewer](https://github.com/kabirajpan/Zenthra-Viewer)
* **Domain**: Native Desktop Graphics & Photography Workflow
* **Status**: Open Source Desktop Application

### System Overview & Problem Solved
Zenthra View is a blazing-fast native desktop image viewer built with Rust and WGPU. It provides photographer-grade directory exploration, instant viewport zooming, and virtualized filmstrip scrolling across massive media directories without locking the main thread.

### Key Architecture & Capabilities
* **GPU Texture Blitting**: Uploads image textures directly to GPU buffers via dedicated WGPU pipelines. Zooming, panning, and rotations are computed entirely in vertex shaders for locked 60 FPS redraws.
* **Virtualized Filmstrip**: Handles libraries of 100,000+ images with dynamic garbage collection, keeping only active viewport thumbnails cached in VRAM.
* **Split Sidebar Directory Browser**: Instant directory trees with real-time filesystem watchers (hot reloading) for active shooting directories.
* **Non-Blocking Metadata Engine**: Background image metadata and color-space parser operating off the main render thread.

---

## Cross-Project Technology Matrix

| Technology | Pratibha ERP | ZenthraLabs | FilmyWeds | NexAssist Hub | After Motion (App) | Zenthra v2 (Framework) | Kairaba Health (AI) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Rust** | ✔ Backend | ✔ Backend | — | — | ✔ Core Engine | ✔ Entire Framework | — |
| **Kotlin (KMP)** | — | — | — | — | ✔ App Layer | — | — |
| **Python** | — | — | — | ✔ Backend | — | — | — |
| **TypeScript / JS** | ✔ Frontend | ✔ Frontend | ✔ Fullstack | ✔ Frontend | — | — | ✔ Full Frontend |
| **Generative AI / LLM** | — | — | — | ✔ Proxy / Chat | — | — | ✔ Gemini 2.5 Flash |
| **WGPU / NDK** | — | — | — | — | ✔ NDK MediaCodec | ✔ WGPU 29 | — |
| **PostgreSQL** | ✔ Primary DB | ✔ Primary DB | — | — | — | — | — |
| **MongoDB** | — | — | ✔ Primary DB | — | — | — | — |
| **MySQL / TiDB** | — | — | — | ✔ Cloud DB | — | — | — |
| **Next.js** | ✔ v16 (React 19) | — | ✔ v16 (React 19) | — | — | — | — |
| **React 18 / 19** | ✔ React 19 | — | ✔ React 19 | ✔ React 18 | — | — | ✔ React 19 |
| **Qwik City** | — | ✔ v1.20 | — | — | — | — | — |
| **FastAPI** | — | — | — | ✔ Core API | — | — | — |
| **Tailwind CSS** | ✔ v4 | ✔ v4 | ✔ v4 | ✔ v3/v4 | — | — | ✔ Yes |
| **Docker / Cloud Run** | — | ✔ Docker | ✔ Docker | ✔ Cloud Run | — | — | — |
| **Store Production** | — | — | — | — | ✔ Play Store (10k+) | — | — |

---
*Document generated for project showcase integration and portfolio reference.*
