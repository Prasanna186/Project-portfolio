import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="w-full py-12 bg-surface-container-lowest border-t-2 border-outline-variant mt-auto">
      <div class="flex flex-col md:flex-row justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto gap-gutter text-center md:text-left">
        <span class="font-label-mono text-label-mono font-bold text-status-ready mb-4 md:mb-0">
          ©2024 STUDIO_ARCH. ALL RIGHTS RESERVED. ENGINEERED FOR PERFORMANCE.
        </span>
        <div class="flex gap-6">
          <a
            class="font-label-mono text-label-mono text-on-surface hover:text-status-ready underline underline-offset-4 transition-opacity duration-200"
            href="#"
          >
            TERMINAL
          </a>
          <a
            class="font-label-mono text-label-mono text-on-surface hover:text-status-ready underline underline-offset-4 transition-opacity duration-200"
            href="#"
          >
            PRIVACY
          </a>
          <a
            class="font-label-mono text-label-mono text-on-surface hover:text-status-ready underline underline-offset-4 transition-opacity duration-200"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            class="font-label-mono text-label-mono text-on-surface hover:text-status-ready underline underline-offset-4 transition-opacity duration-200"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
});
