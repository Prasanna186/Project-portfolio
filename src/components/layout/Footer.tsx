import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="w-full py-4 bg-surface-container-lowest/80 backdrop-blur-md border-t border-surface-border mt-auto">
      <div class="flex flex-col md:flex-row justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto gap-3 text-center md:text-left">
        <div class="flex items-center gap-2 font-label-mono text-[10px] text-on-surface-variant">
          <span class="w-1.5 h-1.5 bg-technical-highlight inline-block"></span>
          <span>©2026 STUDIO_ARCH. ALL RIGHTS RESERVED. PRECISION EXECUTED.</span>
        </div>

        <nav class="flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-label-mono text-[10px]">
          <a
            class="text-on-surface-variant hover:text-technical-highlight transition-colors px-2 py-0.5 hover:bg-surface-container btn-hover hard-shadow-rim"
            href="/services"
          >
            SERVICES
          </a>
          <a
            class="text-on-surface-variant hover:text-technical-highlight transition-colors px-2 py-0.5 hover:bg-surface-container btn-hover hard-shadow-rim"
            href="/"
          >
            WORK
          </a>
          <a
            class="text-on-surface-variant hover:text-technical-highlight transition-colors px-2 py-0.5 hover:bg-surface-container btn-hover hard-shadow-rim"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            class="text-on-surface-variant hover:text-technical-highlight transition-colors px-2 py-0.5 hover:bg-surface-container btn-hover hard-shadow-rim"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </nav>
      </div>
    </footer>
  );
});
