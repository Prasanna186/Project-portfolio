import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { LuChevronLeft } from "@qwikest/icons/lucide";
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

  const allImages = [
    project.placeholderImage,
    ...(project.galleryImages || []),
  ];

  return (
    <div class="w-full min-h-screen grid-bg">
      <main class="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop pt-0 pb-6 sm:pb-10 md:pb-12 flex flex-col gap-6 sm:gap-8">

        {/* Banner Image at top */}
        {project.placeholderImage && (
          <div class="w-full border border-surface-border overflow-hidden bg-surface">
            <img
              src={project.placeholderImage}
              alt={`${project.title} Banner`}
              width={1200}
              height={650}
              class="w-full h-[360px] sm:h-[480px] md:h-[580px] lg:h-[650px] object-cover block"
              loading="eager"
            />
          </div>
        )}

        {/* Main 2-Column Layout: Sticky Left Sidebar & Right Content / Gallery */}
        <div class="flex flex-col lg:grid lg:grid-cols-[32%_68%] gap-8 lg:gap-10 w-full items-start">

          {/* Left Sidebar — Sticky on desktop */}
          <div class="lg:sticky lg:top-20 z-10 w-full h-fit mb-6 lg:mb-0 flex flex-col gap-4">
            <div class="flex flex-wrap items-center gap-1.5">
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

            <h1 class="font-headline-md text-2xl sm:text-3xl font-extrabold text-on-background uppercase tracking-tight">
              {project.title}
            </h1>

            <p class="font-label-mono text-xs text-technical-highlight uppercase tracking-wider">
              {project.category}
            </p>

            <p class="font-label-mono text-[11px] text-on-surface-variant leading-relaxed">
              {project.summary}
            </p>

            {/* Quick Actions */}
            <div class="flex flex-col gap-2 pt-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-button text-xs uppercase px-4 py-2.5 bg-status-ready text-black font-bold border border-transparent text-center btn-hover hard-shadow"
                >
                  OPEN LIVE PLATFORM
                </a>
              )}
              <a
                href="/"
                class="font-button text-xs uppercase px-4 py-2 bg-surface-container/60 hover:bg-surface-container-high border border-surface-border hover:border-technical-highlight text-on-surface hover:text-technical-highlight font-bold inline-flex items-center justify-center gap-1.5 btn-hover hard-shadow"
              >
                <LuChevronLeft class="w-4 h-4" />
                <span>BACK TO WORK</span>
              </a>
            </div>
          </div>

          {/* Right Content Area: Info Cards, Description, and Full Image Stack */}
          <div class="w-full flex flex-col">

            {/* Two Info Cards */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Card 1 — Key Performance Metrics */}
              <div class="bg-surface-container/60 border border-surface-border p-4 flex flex-col justify-between">
                <div class="flex items-center gap-1.5 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest mb-3">
                  <span class="material-symbols-outlined text-xs">monitoring</span>
                  <span>PERFORMANCE METRICS</span>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-1">
                  {project.keyMetrics.map((m) => (
                    <div key={m.label} class="flex flex-col gap-0.5">
                      <span class="font-label-mono text-[9px] text-on-surface-variant uppercase">{m.label}</span>
                      <span class="font-label-mono text-sm font-bold text-on-background">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2 — Tech Stack */}
              <div class="bg-surface-container/60 border border-surface-border p-4 flex flex-col justify-between">
                <div class="flex items-center gap-1.5 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest mb-3">
                  <span class="material-symbols-outlined text-xs">code</span>
                  <span>VERIFIED TECH STACK</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      class="font-label-mono text-[10px] bg-surface-container-high border border-surface-border px-2 py-0.5 text-technical-highlight"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div class="border-b border-surface-border mb-6"></div>

            {/* Description & Specifications */}
            <div class="flex flex-col gap-4 mb-8">
              <p class="font-label-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {project.description}
              </p>

              {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                <div class="flex flex-col gap-2 pt-2">
                  <span class="font-label-mono text-[10px] text-technical-highlight uppercase tracking-widest">
                    ARCHITECTURE HIGHLIGHTS:
                  </span>
                  <ul class="flex flex-col gap-1.5">
                    {project.architectureHighlights.map((item, i) => (
                      <li key={i} class="flex items-start gap-2 font-label-mono text-[11px] sm:text-xs text-on-surface">
                        <span class="text-technical-highlight font-bold">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Project Images Gallery — Full Natural Height, No Cropping */}
            <div class="space-y-6 sm:space-y-8">
              {allImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  class="w-full border border-surface-border bg-surface overflow-hidden"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} - View ${idx + 1}`}
                    width={1200}
                    height={800}
                    class="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
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
