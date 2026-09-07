import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  PROJECTS_DATA,
  type Project,
  type ProjectCategory,
} from "~/lib/projectsData";

export default component$(() => {
  const activeCategory = useSignal<ProjectCategory>("ALL");
  const selectedProject = useSignal<Project | null>(null);

  const categories: ProjectCategory[] = [
    "ALL",
    "SYSTEMS & GPU",
    "ENTERPRISE & CLOUD",
    "AI & ML",
    "FULL-STACK & MOBILE",
  ];

  const filteredProjects = activeCategory.value === "ALL"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory.value);

  const openProjectModal = $((project: Project) => {
    selectedProject.value = project;
  });

  const closeProjectModal = $(() => {
    selectedProject.value = null;
  });

  return (
    <div class="w-full min-h-screen grid-bg">
      <main class="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-6 sm:py-10 md:py-12 flex flex-col gap-6 sm:gap-10">

        {/* Hero Section */}
        <header class="border-b border-surface-border pb-5 sm:pb-7 flex flex-col gap-3.5 sm:gap-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
              <span class="material-symbols-outlined text-sm">terminal</span>
              <span>/portfolio/verified_production_systems</span>
            </div>
            <div class="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-container border border-status-ready/20 text-status-ready font-label-mono text-[10px] uppercase tracking-wide">
              <span class="w-1.5 h-1.5 bg-status-ready animate-pulse inline-block"></span>
              <span>AVAILABLE FOR SELECT CONTRACTS</span>
            </div>
          </div>

          <h1 class="font-headline-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-background uppercase tracking-tight leading-[1.1]">
            ENGINEERED SYSTEMS.<br />
            <span class="text-technical-highlight">PRECISION AT SCALE.</span>
          </h1>

          <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant max-w-2xl leading-relaxed">
            Verified production systems across native graphics engines, enterprise Oracle middleware, applied multimodal GenAI, and consumer applications with over 10,000+ active downloads.
          </p>

          {/* Quick Metrics Bar */}
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div class="bg-surface-container-high/60 border border-surface-border p-2.5 flex flex-col gap-0.5">
              <span class="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-wide">STORE TRACTION</span>
              <span class="font-label-mono text-base sm:text-lg font-bold text-status-ready">&gt;10,000+ DL</span>
            </div>
            <div class="bg-surface-container-high/60 border border-surface-border p-2.5 flex flex-col gap-0.5">
              <span class="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-wide">NATIVE GPU / NDK</span>
              <span class="font-label-mono text-base sm:text-lg font-bold text-technical-highlight">60 FPS WGPU</span>
            </div>
            <div class="bg-surface-container-high/60 border border-surface-border p-2.5 flex flex-col gap-0.5">
              <span class="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-wide">ENTERPRISE DRIFT</span>
              <span class="font-label-mono text-base sm:text-lg font-bold text-on-background">0 Ghost Records</span>
            </div>
            <div class="bg-surface-container-high/60 border border-surface-border p-2.5 flex flex-col gap-0.5">
              <span class="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-wide">APPLIED GENAI</span>
              <span class="font-label-mono text-base sm:text-lg font-bold text-status-ready">Multimodal 2.5</span>
            </div>
          </div>
        </header>

        {/* Filter Bar */}
        <section class="flex flex-col gap-2">
          <span class="font-label-mono text-[10px] uppercase text-on-surface-variant tracking-widest">
            FILTER / DOMAIN [{filteredProjects.length} OF {PROJECTS_DATA.length}]
          </span>

          <div class="flex items-center overflow-x-auto no-scrollbar gap-1.5 pb-0.5 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick$={() => (activeCategory.value = cat)}
                class={`shrink-0 whitespace-nowrap font-label-mono text-[10px] sm:text-[11px] uppercase px-2.5 py-1 border transition-all duration-150 cursor-pointer ${
                  activeCategory.value === cat
                    ? "bg-technical-highlight text-black border-technical-highlight font-bold"
                    : "bg-surface-container-high/40 text-on-surface-variant border-surface-border hover:text-on-surface hover:border-outline-variant hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Bento Grid */}
        <section class="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          {filteredProjects.map((project) => {
            const isSpan8 = project.colSpanDesktop === 8;
            return (
              <article
                key={project.id}
                class={`bg-surface-container-high/50 border border-surface-border p-4 sm:p-5 flex flex-col justify-between gap-3.5 transition-all duration-200 group hover:border-outline-variant relative overflow-hidden card-hover ${
                  isSpan8 ? "md:col-span-8" : "md:col-span-4"
                }`}
              >
                {/* Subtle glow accent */}
                <div class="absolute -right-16 -top-16 w-36 h-36 bg-technical-highlight opacity-[0.04] blur-[60px] rounded-full pointer-events-none"></div>

                <div class="flex flex-col gap-3 relative z-10">
                  {/* Card Header */}
                  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-surface-border/60 pb-2">
                    <div class="flex items-center gap-1.5">
                      <span class="font-label-mono text-xs text-technical-highlight font-bold">
                        {project.codename}
                      </span>
                      <span class="font-label-mono text-xs text-on-surface-variant">/</span>
                      <span class="font-label-mono text-[10px] text-on-surface-variant uppercase">
                        {project.category}
                      </span>
                    </div>

                    <span
                      class={`font-label-mono text-[9px] px-1.5 py-0.5 border uppercase font-semibold ${
                        project.statusType === "ready"
                          ? "bg-status-ready/10 text-status-ready border-status-ready/20"
                          : "bg-technical-highlight/10 text-technical-highlight border-technical-highlight/20"
                      }`}
                    >
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h2 class="font-headline-md text-base sm:text-lg md:text-xl font-bold text-on-background group-hover:text-technical-highlight transition-colors leading-tight">
                      {project.title}
                    </h2>
                    <p class="font-label-mono text-[10px] sm:text-[11px] text-on-surface-variant mt-1 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Image with Blueprint Overlay */}
                  <div class="w-full relative border border-surface-border bg-surface overflow-hidden group/img">
                    <div
                      class="h-28 sm:h-32 w-full bg-cover bg-center transition-transform duration-300 group-hover/img:scale-105"
                      style={`background-image: url('${project.placeholderImage}')`}
                    ></div>

                    <div class="absolute inset-0 bg-background/72 flex flex-col justify-between p-2 pointer-events-none">
                      <div class="flex justify-between items-center font-label-mono text-[9px] text-technical-highlight">
                        <span>[{project.wireframeTag}]</span>
                        <span class="material-symbols-outlined text-xs">tune</span>
                      </div>
                      <div class="flex justify-between items-end font-label-mono text-[8px] text-on-surface-variant">
                        <span>SYSTEM_READY</span>
                        <span>CALIBRATED</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div class="grid grid-cols-2 gap-1.5 bg-surface/60 border border-surface-border p-2 font-label-mono text-xs">
                    {project.keyMetrics.map((metric) => (
                      <div key={metric.label} class="flex flex-col gap-0.5">
                        <span class="text-[8px] text-on-surface-variant uppercase tracking-wide">{metric.label}</span>
                        <span class="font-bold text-on-background text-[10px] sm:text-[11px]">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul class="flex flex-col gap-0.5 font-label-mono">
                    {project.architectureHighlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} class="flex items-start gap-1.5">
                        <span class="text-technical-highlight text-xs mt-0.5 leading-none shrink-0">›</span>
                        <span class="leading-tight text-on-surface text-[10px] sm:text-[11px]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div class="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        class="font-label-mono text-[9px] bg-surface/80 border border-surface-border px-1.5 py-0.5 text-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div class="flex flex-wrap items-center gap-2 pt-3 border-t border-surface-border/60 relative z-10">
                  <button
                    type="button"
                    onClick$={() => openProjectModal(project)}
                    class="font-button text-[10px] uppercase px-3 py-1.5 bg-status-ready text-black font-bold btn-hover hard-shadow border border-transparent cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>INSPECT</span>
                    <span class="material-symbols-outlined text-xs">visibility</span>
                  </button>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-label-mono text-[10px] uppercase px-2.5 py-1.5 border border-surface-border text-on-surface hover:text-technical-highlight hover:border-technical-highlight transition-colors flex items-center gap-1 btn-hover hard-shadow-rim"
                    >
                      <span>LIVE PLATFORM</span>
                      <span class="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </section>

        {/* Project Detail Modal */}
        {selectedProject.value && (
          <div
            class="fixed inset-0 z-50 bg-black/88 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
            onClick$={closeProjectModal}
          >
            <div
              class="bg-surface-container-high border border-technical-highlight/40 max-w-2xl w-full max-h-[88vh] overflow-y-auto p-4 sm:p-5 flex flex-col gap-4 shadow-[0px_0px_30px_rgba(255,107,0,0.12)] relative"
              onClick$={(e) => e.stopPropagation()}
            >
              {/* Modal Top */}
              <div class="flex justify-between items-start border-b border-surface-border pb-3">
                <div>
                  <div class="flex items-center gap-1.5 text-technical-highlight font-label-mono text-[10px] uppercase">
                    <span>{selectedProject.value.codename}</span>
                    <span>•</span>
                    <span>{selectedProject.value.category}</span>
                  </div>
                  <h3 class="font-headline-md text-lg sm:text-2xl font-bold text-on-background mt-0.5">
                    {selectedProject.value.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick$={closeProjectModal}
                  class="font-label-mono text-xs px-2 py-0.5 border border-surface-border hover:border-technical-highlight hover:text-technical-highlight cursor-pointer transition-colors shrink-0 ml-2 btn-hover hard-shadow-rim"
                >
                  [ ESC ]
                </button>
              </div>

              {/* Modal Content */}
              <div class="flex flex-col gap-4">
                <div>
                  <h4 class="font-label-mono text-[10px] text-technical-highlight uppercase tracking-widest mb-1.5">
                    SYSTEM OVERVIEW
                  </h4>
                  <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                    {selectedProject.value.description}
                  </p>
                </div>

                {/* Metrics */}
                <div>
                  <h4 class="font-label-mono text-[10px] text-technical-highlight uppercase tracking-widest mb-1.5">
                    KEY PERFORMANCE METRICS
                  </h4>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {selectedProject.value.keyMetrics.map((m) => (
                      <div key={m.label} class="bg-surface/80 border border-surface-border p-2">
                        <span class="block font-label-mono text-[8px] text-on-surface-variant uppercase tracking-wide">{m.label}</span>
                        <span class="block font-label-mono text-xs sm:text-sm font-bold text-on-background mt-0.5">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div>
                  <h4 class="font-label-mono text-[10px] text-technical-highlight uppercase tracking-widest mb-1.5">
                    ARCHITECTURE & SPECIFICATIONS
                  </h4>
                  <ul class="flex flex-col gap-1.5 font-label-mono text-xs text-on-surface">
                    {selectedProject.value.architectureHighlights.map((item, i) => (
                      <li key={i} class="flex items-start gap-2 border-l border-technical-highlight pl-2.5 py-0.5">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 class="font-label-mono text-[10px] text-technical-highlight uppercase tracking-widest mb-1.5">
                    VERIFIED TECH STACK
                  </h4>
                  <div class="flex flex-wrap gap-1.5">
                    {selectedProject.value.techStack.map((tech) => (
                      <span
                        key={tech}
                        class="font-label-mono text-[10px] bg-surface border border-surface-border px-2 py-0.5 text-on-surface"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div class="border-t border-surface-border pt-3 flex flex-wrap justify-between items-center gap-2">
                <span class="font-label-mono text-[9px] text-status-ready">
                  ✓ VERIFIED REPOSITORY SPECIFICATION
                </span>

                <div class="flex items-center gap-2">
                  {selectedProject.value.liveLink && (
                    <a
                      href={selectedProject.value.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-label-mono text-[11px] uppercase px-3 py-1.5 bg-technical-highlight text-black font-bold btn-hover hard-shadow"
                    >
                      OPEN PLATFORM
                    </a>
                  )}
                  <button
                    type="button"
                    onClick$={closeProjectModal}
                    class="font-label-mono text-[11px] uppercase px-3 py-1.5 border border-surface-border text-on-surface hover:border-technical-highlight hover:text-technical-highlight transition-colors btn-hover hard-shadow-rim"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section class="border-t border-surface-border pt-8 sm:pt-10 flex flex-col items-center gap-3 text-center">
          <div class="flex items-center gap-1.5 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">handshake</span>
            <span>/initiate/direct_engagement</span>
          </div>

          <h2 class="font-headline-md text-xl sm:text-2xl md:text-3xl font-bold text-on-background uppercase tracking-tight">
            READY TO INITIATE A PROJECT?
          </h2>

          <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant max-w-xl leading-relaxed">
            Whether you require a native graphics engine, an enterprise ERP with zero phantom data drift, or a custom multimodal AI agent — we deliver engineered precision.
          </p>

          <div class="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="/services"
              class="font-button text-xs uppercase bg-status-ready text-black px-5 py-2.5 btn-hover hard-shadow border border-transparent font-bold inline-flex items-center gap-1.5"
            >
              <span>EXPLORE SERVICES & SLA</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "STUDIO_ARCH - Production Systems Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Verified engineering portfolio of 7 production platforms: After Motion (10k+ downloads), Zenthra GPU UI Framework, Pratibha ERP, NexAssist Hub, and Kairaba Health.",
    },
  ],
};
