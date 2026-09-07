import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  PROJECTS_DATA,
  type Project,
  type ProjectCategory,
} from "~/lib/projectsData";

export default component$(() => {
  const activeCategory = useSignal<ProjectCategory>("ALL");

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

  return (
    <div class="w-full min-h-screen grid-bg">
      <main class="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-6 sm:py-10 md:py-12 flex flex-col gap-6 sm:gap-10">

        {/* Hero */}
        <header class="border-b border-surface-border pb-5 sm:pb-7 flex flex-col gap-3 sm:gap-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
              <span class="material-symbols-outlined text-sm">terminal</span>
              <span>/portfolio/verified_production_systems</span>
            </div>
            <div class="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-container border border-status-ready/20 text-status-ready font-label-mono text-[10px] uppercase">
              <span class="w-1.5 h-1.5 bg-status-ready animate-pulse inline-block"></span>
              <span>AVAILABLE FOR SELECT CONTRACTS</span>
            </div>
          </div>

          <h1 class="font-headline-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-background uppercase tracking-tight leading-[1.1]">
            ENGINEERED SYSTEMS.<br />
            <span class="text-technical-highlight">PRECISION AT SCALE.</span>
          </h1>

          <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant max-w-2xl leading-relaxed">
            Verified production systems across native graphics engines, enterprise Oracle middleware, applied multimodal GenAI, and consumer applications with 10,000+ active downloads.
          </p>

          {/* Metrics */}
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            {[
              { label: "STORE TRACTION", value: ">10,000+ DL", color: "text-status-ready" },
              { label: "NATIVE GPU / NDK", value: "60 FPS WGPU", color: "text-technical-highlight" },
              { label: "ENTERPRISE DRIFT", value: "0 Ghost Records", color: "text-on-background" },
              { label: "APPLIED GENAI", value: "Multimodal 2.5", color: "text-status-ready" },
            ].map((m) => (
              <div key={m.label} class="bg-surface-container-high/60 border border-surface-border p-2.5 flex flex-col gap-0.5">
                <span class="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-wide">{m.label}</span>
                <span class={`font-label-mono text-base sm:text-lg font-bold ${m.color}`}>{m.value}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Filter */}
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

        {/* Masonry Grid — minimal cards */}
        <section class="masonry-grid">
          {filteredProjects.map((project: Project) => {
            // Two ratios: mobile = square, web/desktop = landscape
            const imgClass = project.projectType === "mobile" ? "img-square" : "img-landscape";

            return (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                class="masonry-item block bg-surface-container-high/50 border border-surface-border group hover:border-outline-variant transition-all duration-200 relative overflow-hidden card-hover"
              >
                {/* Image */}
                <div class={`w-full relative bg-surface overflow-hidden ${imgClass}`}>
                  <div
                    class="absolute inset-0 bg-cover bg-center"
                    style={`background-image: url('${project.placeholderImage}')`}
                  ></div>

                  {/* Overlay — badges only */}
                  <div class="absolute inset-0 flex flex-col justify-between p-2">
                    <div class="flex justify-between items-start gap-1">
                      {/* Type badge */}
                      <span class="font-label-mono text-xs uppercase px-2 py-0.5 bg-background border border-surface-border text-technical-highlight font-bold leading-tight shrink-0">
                        {project.projectType === "mobile" ? "MOBILE" : project.projectType === "desktop" ? "DESKTOP" : "WEB"}
                      </span>
                      {/* Status badge */}
                      <span
                        class={`font-label-mono text-[11px] px-1.5 py-0.5 border uppercase font-bold leading-tight text-right ${
                          project.statusType === "ready"
                            ? "bg-background text-status-ready border-status-ready/50"
                            : "bg-background text-technical-highlight border-technical-highlight/50"
                        }`}
                      >
                        {project.statusBadge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Minimal info strip */}
                <div class="px-3 py-2.5 flex flex-col gap-0.5">
                  <h2 class="font-headline-md text-base sm:text-lg font-bold text-on-background group-hover:text-technical-highlight transition-colors leading-tight truncate">
                    {project.title}
                  </h2>
                  <span class="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-wide truncate">
                    {project.category}
                  </span>
                </div>
              </a>
            );
          })}
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
      content: "Verified engineering portfolio: After Motion (10k+ downloads), Zenthra GPU Framework, Pratibha ERP, NexAssist Hub, Kairaba Health, FilmyWeds, ZenthraLabs.",
    },
  ],
};
