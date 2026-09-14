import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

interface TeamMember {
  name: string;
  role: string;
  handle: string;
  bio: string;
  tags: string[];
  email?: string;
  github?: string;
  linkedin?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Kabiraj Pan",
    role: "Founder & Lead Engineer",
    handle: "KABIR_R",
    bio: "Systems architect and full-stack engineer specializing in native GPU frameworks, AI response pipelines, token optimization, and autonomous agents. Ships production-grade systems at scale.",
    tags: ["Backend", "Systems Architecture", "Rust", "GPU / WGPU", "AI Response", "Token Optimization", "Agent"],
    email: "kabirajpan2@gmail.com",
    github: "https://github.com/Prasanna186",
    linkedin: "https://www.linkedin.com/in/kabirajpan/",
  },
  {
    name: "GNANA PRASANNA KUNDURTHI",
    role: "Engineer",
    handle: "PRASANNA",
    bio: "Full-stack engineer focused on building robust, scalable systems and GenAI applications. Contributes across the stack from backend architecture to polished front-end experiences.",
    tags: ["Frontend", "UI / UX", "GenAI", "Chatbot UI", "Response Design"],
    github: "https://github.com/Prasanna186",
    linkedin: "https://www.linkedin.com/in/gnana-prasanna-kundurthi-b7285b268/",
    email: "Prasannasri.official@gmail.com",
  },
];

export default component$(() => {
  return (
    <div class="w-full min-h-screen grid-bg">
      <main class="w-full max-w-container-max mx-auto px-2.5 sm:px-4 md:px-margin-desktop py-6 sm:py-10 md:py-12 flex flex-col gap-8 sm:gap-12">

        {/* Header */}
        <header class="border-b border-surface-border pb-5 sm:pb-7 flex flex-col gap-3">
          <h1 class="font-headline-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-background uppercase tracking-tight leading-[1.1]">
            THE PEOPLE<br />
            <span class="text-technical-highlight">BEHIND THE SYSTEMS.</span>
          </h1>
          <p class="font-label-mono text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            A dedicated engineering team building clean, reliable, and high-impact digital products. Direct communication, fast delivery, and no agency overhead.
          </p>
        </header>

        {/* Team Grid */}
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM.map((member) => (
            <div key={member.handle} class="bg-surface-container/60 border border-surface-border rounded-[4px] flex flex-col justify-between gap-3 p-4 hover:border-technical-highlight/50 transition-colors">

              <div class="flex flex-col gap-3">
                {/* Top row */}
                <div class="flex items-start justify-between gap-2">
                  <div class="flex flex-col gap-0.5">
                    <span class="font-label-mono text-[9px] text-technical-highlight uppercase tracking-widest">{member.handle}</span>
                    <h2 class="font-headline-md text-base sm:text-lg font-bold text-on-background uppercase tracking-tight leading-tight">{member.name}</h2>
                    <span class="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wide">{member.role}</span>
                  </div>
                  <div class="w-9 h-9 rounded-full border border-surface-border bg-surface-container-high flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-base text-on-surface-variant">person</span>
                  </div>
                </div>

                <div class="border-t border-surface-border"></div>

                <p class="font-label-mono text-[11px] text-on-surface-variant leading-snug">{member.bio}</p>

                <div class="flex flex-wrap gap-1">
                  {member.tags.map((tag) => (
                    <span key={tag} class="font-label-mono text-[9px] bg-surface-container-high border border-surface-border px-1.5 py-0.5 text-technical-highlight uppercase">{tag}</span>
                  ))}
                </div>
              </div>

              <div class="flex items-center gap-3 pt-1 border-t border-surface-border/50">
                {member.email && (
                  <a href={`mailto:${member.email}`} class="font-label-mono text-xs text-on-surface-variant hover:text-technical-highlight transition-colors uppercase flex items-center gap-1.5">
                    <span class="material-symbols-outlined" style="font-size: 15px; line-height: 1;">mail</span>
                    <span>EMAIL</span>
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" class="font-label-mono text-xs text-on-surface-variant hover:text-technical-highlight transition-colors uppercase flex items-center gap-1.5">
                    <span class="material-symbols-outlined" style="font-size: 15px; line-height: 1;">code</span>
                    <span>GITHUB</span>
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" class="font-label-mono text-xs text-on-surface-variant hover:text-technical-highlight transition-colors uppercase flex items-center gap-1.5">
                    <span class="material-symbols-outlined" style="font-size: 15px; line-height: 1;">link</span>
                    <span>LINKEDIN</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </section>

      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "STUDIO_ARCH - Team",
  meta: [
    {
      name: "description",
      content: "Meet the engineers behind STUDIO_ARCH — a precise team building verified production systems.",
    },
  ],
};
