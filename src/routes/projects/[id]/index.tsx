import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { PROJECTS_DATA } from "~/lib/projectsData";

export default component$(() => {
  const loc = useLocation();
  const id = loc.params.id;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    return (
      <div class="w-full min-h-screen grid-bg flex items-center justify-center">
        <div class="text-center flex flex-col gap-4">
          <span class="font-label-mono text-[11px] text-technical-highlight uppercase tracking-widest">404 / PROJECT_NOT_FOUND</span>
          <h1 class="font-headline-md text-3xl font-bold text-on-background">Project not found.</h1>
          <a href="/" class="font-label-mono text-xs uppercase text-on-surface-variant hover:text-technical-highlight transition-colors">
            ← BACK TO WORK
          </a>
        </div>
      </div>
    );
  }

  const imgClass =
    project.projectType === "mobile"
      ? "img-portrait"
      : project.projectType === "desktop"
      ? "img-desktop"
      : "img-landscape";

  return (
    <div class="w-full min-h-screen grid-bg">
      <main class="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-6 sm:py-10 md:py-12 flex flex-col gap-6 sm:gap-10">

        {/* Back nav */}
        <nav class="flex items-center gap-2 font-label-mono text-[10px] text-on-surface-variant">
          <a
            href="/"
            class="hover:text-technical-highlight transition-colors flex items-center gap-1"
          >
            <span class="material-symbols-outlined text-xs">arrow_back</span>
            <span>WORK</span>
          </a>
          <span>/</span>
          <span class="text-technical-highlight">{project.codename}</span>
        </nav>

        {/* Hero */}
        <header class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 border-b border-surface-border pb-7 sm:pb-10">

          {/* Left — info */}
          <div class="flex flex-col gap-4 sm:gap-5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-label-mono text-[10px] text-technical-highlight uppercase tracking-widest border border-technical-highlight/30 px-2 py-0.5">
                {project.codename}
              </span>
              <span class="font-label-mono text-[10px] text-on-surface-variant uppercase border border-surface-border px-2 py-0.5">
                {project.projectType}
              </span>
              <span
                class={`font-label-mono text-[9px] px-2 py-0.5 border uppercase font-semibold ${
                  project.statusType === "ready"
                    ? "bg-status-ready/10 text-status-ready border-status-ready/25"
                    : "bg-technical-highlight/10 text-technical-highlight border-technical-highlight/25"
                }`}
              >
                {project.statusBadge}
              </span>
            </div>

            <div>
              <span class="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
                {project.category}
              </span>
              <h1 class="font-headline-md text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-background uppercase tracking-tight leading-[1.05]">
                {project.title}
              </h1>
            </div>

            <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* CTA buttons */}
            <div class="flex flex-wrap gap-2 pt-1">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-button text-xs uppercase px-5 py-2.5 bg-status-ready text-black font-bold btn-hover hard-shadow border border-transparent inline-flex items-center gap-1.5"
                >
                  <span>OPEN LIVE PLATFORM</span>
                  <span class="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              )}
              <a
                href="/"
                class="font-button text-xs uppercase px-4 py-2.5 border border-surface-border text-on-surface hover:text-technical-highlight hover:border-technical-highlight font-bold inline-flex items-center gap-1.5 transition-colors btn-hover hard-shadow-rim"
              >
                <span>ALL PROJECTS</span>
                <span class="material-symbols-outlined text-xs">grid_view</span>
              </a>
            </div>
          </div>

          {/* Right — image with proper aspect ratio */}
          <div class={`w-full relative border border-surface-border bg-surface overflow-hidden group/img ${imgClass} max-h-[70vh] lg:max-h-none`}>
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/img:scale-[1.02]"
              style={`background-image: url('${project.placeholderImage}')`}
            ></div>
            <div class="absolute inset-0 bg-background/40 flex flex-col justify-between p-3 pointer-events-none">
              <div class="flex justify-between items-center font-label-mono text-[9px] text-technical-highlight">
                <span>[{project.wireframeTag}]</span>
                <span class="material-symbols-outlined text-xs">tune</span>
              </div>
              <div class="flex justify-between items-end font-label-mono text-[8px] text-on-surface-variant/70">
                <span>SYSTEM_READY</span>
                <span>CALIBRATED</span>
              </div>
            </div>
          </div>
        </header>

        {/* Metrics Grid */}
        <section class="flex flex-col gap-3">
          <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">monitoring</span>
            <span>KEY PERFORMANCE METRICS</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {project.keyMetrics.map((m) => (
              <div key={m.label} class="bg-surface-container-high/60 border border-surface-border p-3 flex flex-col gap-1">
                <span class="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-wide">{m.label}</span>
                <span class="font-label-mono text-sm sm:text-base font-bold text-on-background">{m.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Highlights */}
        <section class="flex flex-col gap-3">
          <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">architecture</span>
            <span>ARCHITECTURE & SPECIFICATIONS</span>
          </div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.architectureHighlights.map((item, i) => (
              <li key={i} class="flex items-start gap-2.5 border border-surface-border bg-surface-container-high/40 p-3">
                <span class="text-technical-highlight font-label-mono text-sm leading-none mt-0.5 shrink-0">›</span>
                <span class="font-label-mono text-[11px] sm:text-xs text-on-surface leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section class="flex flex-col gap-3">
          <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">code</span>
            <span>VERIFIED TECH STACK</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                class="font-label-mono text-[10px] sm:text-[11px] bg-surface-container-high/60 border border-surface-border px-2.5 py-1 text-on-surface"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section class="border-t border-surface-border pt-7 sm:pt-9 flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
              <span class="material-symbols-outlined text-xs">apps</span>
              <span>OTHER PROJECTS</span>
            </div>
            <a href="/" class="font-label-mono text-[10px] uppercase text-on-surface-variant hover:text-technical-highlight transition-colors flex items-center gap-1">
              <span>VIEW ALL</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 4).map((p) => {
              const thumbClass =
                p.projectType === "mobile"
                  ? "img-portrait"
                  : p.projectType === "desktop"
                  ? "img-desktop"
                  : "img-landscape";
              return (
                <a
                  key={p.id}
                  href={`/projects/${p.id}`}
                  class="group flex flex-col border border-surface-border hover:border-outline-variant transition-all overflow-hidden card-hover"
                >
                  <div class={`w-full relative bg-surface overflow-hidden ${thumbClass}`}>
                    <div
                      class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={`background-image: url('${p.placeholderImage}')`}
                    ></div>
                    <div class="absolute inset-0 bg-background/50"></div>
                    <div class="absolute top-1.5 left-1.5">
                      <span class="font-label-mono text-[8px] uppercase px-1 py-0.5 bg-background/80 border border-surface-border text-technical-highlight">
                        {p.projectType.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div class="px-2.5 py-2 flex flex-col gap-0.5">
                    <span class="font-headline-md text-xs sm:text-sm font-bold text-on-background group-hover:text-technical-highlight transition-colors truncate">{p.title}</span>
                    <span class="font-label-mono text-[8px] text-on-surface-variant uppercase truncate">{p.category}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section class="border-t border-surface-border pt-8 flex flex-col items-center gap-3 text-center">
          <div class="flex items-center gap-1.5 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">handshake</span>
            <span>/initiate/direct_engagement</span>
          </div>
          <h2 class="font-headline-md text-xl sm:text-2xl font-bold text-on-background uppercase tracking-tight">
            READY TO BUILD SOMETHING LIKE THIS?
          </h2>
          <div class="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="mailto:contact@zenthralabs.dev"
              class="font-button text-xs uppercase bg-status-ready text-black px-5 py-2.5 btn-hover hard-shadow border border-transparent font-bold inline-flex items-center gap-1.5"
            >
              <span>GET IN TOUCH</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
            <a
              href="/services"
              class="font-button text-xs uppercase px-5 py-2.5 border border-surface-border text-on-surface hover:text-technical-highlight hover:border-technical-highlight font-bold inline-flex items-center gap-1.5 transition-colors btn-hover hard-shadow-rim"
            >
              <span>VIEW SERVICES</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const project = PROJECTS_DATA.find((p) => p.id === params.id);
  return {
    title: project
      ? `STUDIO_ARCH - ${project.title}`
      : "STUDIO_ARCH - Project",
    meta: [
      {
        name: "description",
        content: project?.description ?? "A verified production system by STUDIO_ARCH.",
      },
    ],
  };
};
