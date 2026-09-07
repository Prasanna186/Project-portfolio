import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  SERVICES_DATA,
  ENGINEERING_STANDARDS,
} from "~/lib/servicesData";

export default component$(() => {
  return (
    <div class="w-full min-h-screen grid-bg">
      <main class="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-6 sm:py-10 md:py-12 flex flex-col gap-6 sm:gap-10">

        {/* Hero Section */}
        <header class="border-b border-surface-border pb-5 sm:pb-7 flex flex-col gap-3.5 sm:gap-4">
          <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-sm">terminal</span>
            <span>/services/engineering_capabilities</span>
          </div>

          <h1 class="font-headline-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-background uppercase tracking-tight leading-[1.1]">
            ENGINEERED FOR SCALE,<br />
            <span class="text-technical-highlight">PERFORMANCE & PRECISION.</span>
          </h1>

          <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant max-w-2xl leading-relaxed">
            Deep-tier software architecture and native systems development. From low-level GPU rendering engines and mobile video editors with 10k+ downloads to enterprise Oracle EPM proxies and multilingual GenAI assistants — we build software that survives extreme loads.
          </p>
        </header>

        {/* 5 Core Service Pillars - Bento Grid */}
        <section class="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          {SERVICES_DATA.map((service) => {
            const isSpan8 = service.colSpan === 8;
            const isSpan12 = service.colSpan === 12;

            return (
              <article
                key={service.id}
                class={`bg-surface-container-high/50 border border-surface-border p-4 sm:p-5 flex flex-col justify-between gap-4 group hover:border-outline-variant transition-all relative overflow-hidden card-hover ${
                  isSpan12
                    ? "md:col-span-12"
                    : isSpan8
                    ? "md:col-span-8"
                    : "md:col-span-4"
                }`}
              >
                {/* Subtle glow */}
                <div class="absolute -right-16 -top-16 w-40 h-40 bg-technical-highlight opacity-[0.04] blur-[60px] rounded-full pointer-events-none"></div>

                <div class="flex flex-col gap-3.5 relative z-10">
                  {/* Top Bar */}
                  <div class="flex justify-between items-center border-b border-surface-border/60 pb-2">
                    <span class="font-label-mono text-xs font-bold text-technical-highlight">
                      {service.code}
                    </span>
                    <span class="font-label-mono text-[9px] bg-surface/90 border border-surface-border px-2 py-0.5 text-on-surface-variant uppercase">
                      {service.categoryBadge}
                    </span>
                  </div>

                  {/* Header & Description */}
                  <div>
                    <h2 class="font-headline-md text-base sm:text-lg md:text-xl font-bold text-on-background group-hover:text-technical-highlight transition-colors leading-tight">
                      {service.title}
                    </h2>
                    <p class="font-label-mono text-[10px] text-status-ready mt-0.5 font-semibold">
                      {service.headline}
                    </p>
                    <p class="font-label-mono text-[11px] text-on-surface-variant mt-1.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Multi-Column Layout for wider cards */}
                  <div
                    class={`grid gap-3 ${
                      isSpan12
                        ? "grid-cols-1 lg:grid-cols-3"
                        : isSpan8
                        ? "grid-cols-1 lg:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {/* Deliverables */}
                    <div class="flex flex-col gap-1">
                      <span class="font-label-mono text-[9px] text-technical-highlight uppercase tracking-widest">
                        CORE DELIVERABLES
                      </span>
                      <ul class="flex flex-col gap-1 font-label-mono text-[10px] sm:text-[11px] text-on-surface mt-1">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} class="flex items-start gap-1.5">
                            <span class="text-technical-highlight text-xs mt-0.5 leading-none shrink-0">›</span>
                            <span class="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics Table */}
                    <div class="bg-surface/60 border border-surface-border p-2.5 flex flex-col gap-2">
                      <div class="border-b border-surface-border pb-1 flex justify-between font-label-mono text-[9px] text-on-surface-variant uppercase tracking-wide">
                        <span>SPECIFICATION</span>
                        <span>TARGET VALUE</span>
                      </div>
                      <div class="flex flex-col gap-1 font-label-mono text-xs">
                        {service.metrics.map((m) => (
                          <div key={m.label} class="flex justify-between items-center py-0.5 border-b border-surface-border/20">
                            <span class="text-on-surface-variant text-[10px]">{m.label}</span>
                            <span class="text-technical-highlight font-bold text-[10px] sm:text-[11px]">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schematic Image */}
                    <div class="border border-surface-border bg-surface relative overflow-hidden h-28 lg:h-auto min-h-[110px] flex flex-col justify-between p-2 group/img">
                      <div
                        class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover/img:scale-105"
                        style={`background-image: url('${service.placeholderImage}')`}
                      ></div>

                      <div class="absolute inset-0 bg-background/72 flex flex-col justify-between p-2 pointer-events-none">
                        <div class="flex justify-between items-center font-label-mono text-[9px] text-technical-highlight">
                          <span>[{service.schematicTag}]</span>
                          <span class="material-symbols-outlined text-xs">architecture</span>
                        </div>
                        <div class="flex justify-between items-end font-label-mono text-[8px] text-on-surface-variant">
                          <span>SPEC_v2.4</span>
                          <span>HARDWARE_READY</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div class="flex flex-wrap gap-1 pt-2 border-t border-surface-border/60">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        class="font-label-mono text-[9px] bg-surface/90 border border-surface-border px-1.5 py-0.5 text-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Engineering Standards */}
        <section class="border-t border-surface-border pt-7 sm:pt-9 flex flex-col gap-4">
          <div class="flex items-center gap-2 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">verified_user</span>
            <span>/standards/engineering_sla_benchmarks</span>
          </div>

          <h2 class="font-headline-md text-xl sm:text-2xl md:text-3xl font-bold text-on-background uppercase">
            ARCHITECTURAL STANDARDS & GUARANTEES
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {ENGINEERING_STANDARDS.map((std) => (
              <div
                key={std.standard}
                class="bg-surface-container-high/50 border border-surface-border p-3 flex flex-col gap-1 card-hover"
              >
                <span class="font-label-mono text-[9px] text-technical-highlight font-bold uppercase tracking-widest">
                  {std.category}
                </span>
                <h3 class="font-headline-md text-sm sm:text-base font-bold text-on-background">
                  {std.standard}
                </h3>
                <p class="font-label-mono text-[10px] text-on-surface-variant leading-relaxed">
                  {std.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section class="border-t border-surface-border pt-8 sm:pt-10 flex flex-col items-center gap-3 text-center">
          <div class="flex items-center gap-1.5 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">terminal</span>
            <span>/engage/book_architecture_review</span>
          </div>

          <h2 class="font-headline-md text-xl sm:text-2xl md:text-3xl font-bold text-on-background uppercase tracking-tight">
            READY TO INITIATE AN ARCHITECTURE REVIEW?
          </h2>

          <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant max-w-xl leading-relaxed">
            Schedule a technical consultation to evaluate your project specifications, compute frame budgets, and audit your system architecture.
          </p>

          <div class="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="mailto:contact@zenthralabs.dev"
              class="font-button text-xs uppercase bg-status-ready text-black px-5 py-2.5 btn-hover hard-shadow border border-transparent font-bold inline-flex items-center gap-1.5"
            >
              <span>REQUEST ARCHITECTURE REVIEW</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>

            <a
              href="/"
              class="font-button text-xs uppercase px-5 py-2.5 border border-surface-border text-on-surface hover:text-technical-highlight hover:border-technical-highlight font-bold inline-flex items-center gap-1.5 transition-colors btn-hover hard-shadow-rim"
            >
              <span>VIEW VERIFIED WORK</span>
              <span class="material-symbols-outlined text-xs">grid_view</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "STUDIO_ARCH - Engineering Services & Capabilities",
  meta: [
    {
      name: "description",
      content:
        "High-performance software engineering services: Native GPU engines, cross-platform mobile apps (10k+ downloads), enterprise Oracle EPM backends, and applied multimodal GenAI.",
    },
  ],
};
