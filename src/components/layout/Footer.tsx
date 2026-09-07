import { component$ } from "@builder.io/qwik";

const socialLinks = [
  { label: "GitHub", url: "https://github.com/Prasanna186" },
  { label: "LinkedIn", url: "https://linkedin.com" },
  { label: "Twitter", url: "https://twitter.com" },
  { label: "Instagram", url: "https://instagram.com" },
];

export const Footer = component$(() => {
  return (
    <div class="w-full bg-background border-t border-surface-border px-4 md:px-margin-desktop py-8 sm:py-10">
      <div class="max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">

        {/* Left — CTA */}
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-1.5 text-technical-highlight font-label-mono text-[10px] uppercase tracking-widest">
            <span class="material-symbols-outlined text-xs">handshake</span>
            <span>/initiate/direct_engagement</span>
          </div>
          <h2 class="font-headline-md text-xl sm:text-2xl md:text-3xl font-bold text-on-background uppercase tracking-tight">
            READY TO INITIATE A PROJECT?
          </h2>
          <p class="font-label-mono text-[11px] sm:text-xs text-on-surface-variant max-w-sm leading-relaxed">
            Available for select engineering contracts, systems architecture, and technical consulting. Let's talk about what you're building.
          </p>
          <div class="pt-0.5">
            <a
              href="/services"
              class="font-button text-[11px] uppercase bg-status-ready text-black px-3.5 py-1.5 btn-hover hard-shadow border border-transparent font-bold inline-flex items-center gap-1"
            >
              <span>EXPLORE SERVICES &amp; SLA</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Right — 2 columns: Social Links & Contact */}
        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
          <div class="flex flex-col gap-1.5">
            <span class="text-[10px] font-label-mono uppercase tracking-widest text-on-surface-variant mb-1">
              NETWORK
            </span>
            {socialLinks.map((s, i) => (
              <p key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-label-mono text-sm text-on-background border-b border-dotted border-on-surface-variant hover:text-technical-highlight hover:border-technical-highlight transition-colors"
                >
                  {s.label}
                </a>
                <sup class="text-technical-highlight text-[10px] pl-0.5">{i + 1}</sup>
              </p>
            ))}
          </div>

          <div class="flex flex-col gap-1.5">
            <span class="text-[10px] font-label-mono uppercase tracking-widest text-on-surface-variant mb-1">
              CONTACT
            </span>
            <p>
              <a
                href="mailto:contact@zenthralabs.dev"
                class="font-label-mono text-sm text-on-background border-b border-dotted border-on-surface-variant hover:text-technical-highlight hover:border-technical-highlight transition-colors break-all"
              >
                contact@zenthralabs.dev
              </a>
              <sup class="text-technical-highlight text-[10px] pl-0.5">5</sup>
            </p>
            <p class="font-label-mono text-[11px] text-on-surface-variant mt-2">
              Direct line: engineering &amp; architecture inquiries.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
});
