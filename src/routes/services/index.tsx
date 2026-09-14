import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  SERVICES_DATA,
  ENGINEERING_STANDARDS,
} from "~/lib/servicesData";

export default component$(() => {
  return (
    <div class="w-full min-h-screen grid-bg">
      <main class="w-full max-w-container-max mx-auto px-2.5 sm:px-4 md:px-margin-desktop py-6 sm:py-10 md:py-12 flex flex-col gap-6 sm:gap-10">

        {/* Hero Section */}
        <header class="border-b border-surface-border pb-5 sm:pb-7 flex flex-col gap-3 sm:gap-4">
          <h1 class="font-headline-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-background uppercase tracking-tight leading-[1.1] break-words">
            SOFTWARE SERVICES.<br />
            <span class="text-technical-highlight">FAST, RELIABLE & SCALABLE.</span>
          </h1>

          <p class="font-label-mono text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Full-cycle product engineering and modern cloud solutions. From fast, intuitive web applications and AI workflows to rock-solid backend infrastructure — we build dependable software tailored to your business goals.
          </p>
        </header>

        {/* Core Services Grid */}
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              class="bg-surface-container/60 border border-surface-border rounded-[4px] p-4 sm:p-5 flex flex-col justify-between gap-4 hover:border-technical-highlight/50 transition-colors card-hover h-full"
            >
              <div class="flex flex-col gap-3">
                {/* Top Row: Number & Category Badge */}
                <div class="flex items-center justify-between gap-2">
                  <span class="font-label-mono text-xs font-bold text-technical-highlight">
                    /{service.number}
                  </span>
                  <span class="font-label-mono text-[9px] bg-surface-container-high border border-surface-border px-2 py-0.5 text-on-surface-variant uppercase rounded-[2px] shrink-0">
                    {service.categoryBadge}
                  </span>
                </div>

                {/* Title & Headline */}
                <div class="flex flex-col gap-1">
                  <h2 class="font-headline-md text-lg sm:text-base md:text-lg font-bold text-on-background uppercase tracking-tight leading-snug">
                    {service.title}
                  </h2>
                  <p class="font-label-mono text-[11px] text-status-ready font-medium leading-snug">
                    {service.headline}
                  </p>
                </div>

                {/* Description */}
                <p class="font-label-mono text-xs text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div class="flex flex-col gap-1.5 pt-2 border-t border-surface-border/50">
                  <span class="font-label-mono text-[9px] text-technical-highlight uppercase tracking-widest font-semibold">
                    KEY DELIVERABLES
                  </span>
                  <ul class="flex flex-col gap-1 font-label-mono text-[11px] text-on-surface">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} class="flex items-start gap-1.5">
                        <span class="text-technical-highlight text-xs mt-0.5 leading-none shrink-0">›</span>
                        <span class="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div class="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border/50">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    class="font-label-mono text-[9px] bg-surface-container-high border border-surface-border px-1.5 py-0.5 text-on-surface-variant rounded-[2px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Engineering Standards */}
        <section class="border-t border-surface-border pt-7 sm:pt-9 flex flex-col gap-4">
          <h2 class="font-headline-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-on-background uppercase">
            OUR QUALITY STANDARDS & GUARANTEES
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {ENGINEERING_STANDARDS.map((std) => (
              <div
                key={std.standard}
                class="bg-surface-container-high/50 border border-surface-border rounded-[4px] p-3.5 flex flex-col gap-1 card-hover"
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
          <h2 class="font-headline-md text-xl sm:text-2xl md:text-3xl font-bold text-on-background uppercase tracking-tight">
            READY TO DISCUSS YOUR PROJECT?
          </h2>

          <p class="font-label-mono text-xs sm:text-sm text-on-surface-variant max-w-xl leading-relaxed px-1">
            Schedule a direct consultation to discuss your product goals, technical roadmap, and how we can bring your vision to life.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-1 w-full max-w-md sm:max-w-none">
            <a
              href="mailto:kabirajpan2@gmail.com"
              class="w-full sm:w-auto justify-center font-button text-xs uppercase bg-status-ready text-black px-5 py-2.5 btn-hover hard-shadow border border-transparent font-bold inline-flex items-center gap-1.5"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>

            <a
              href="/"
              class="w-full sm:w-auto justify-center font-button text-xs uppercase px-5 py-2.5 border border-surface-border text-on-surface hover:text-technical-highlight hover:border-technical-highlight font-bold inline-flex items-center gap-1.5 transition-colors btn-hover hard-shadow-rim"
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
