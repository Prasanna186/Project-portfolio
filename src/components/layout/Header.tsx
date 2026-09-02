import { component$, useSignal, $ } from "@builder.io/qwik";

export const Header = component$(() => {
  const isMobileMenuOpen = useSignal(false);

  const toggleMobileMenu = $(() => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  });

  return (
    <nav class="w-full h-20 bg-background border-b-2 border-outline-variant sticky top-0 z-50">
      <div class="flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto h-full">
        {/* Brand */}
        <a
          href="/"
          class="font-headline-md text-headline-md font-bold text-on-background tracking-tighter"
        >
          STUDIO_ARCH
        </a>

        {/* Desktop Nav Links */}
        <div class="hidden md:flex gap-8 items-center">
          <a
            class="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors hover:bg-technical-highlight hover:text-surface transition-all duration-200 px-2 py-1"
            href="#services"
          >
            SERVICES
          </a>
          <a
            class="font-label-mono text-label-mono text-technical-highlight border-b-2 border-technical-highlight pb-1 active:translate-x-1 active:translate-y-1"
            href="#work"
          >
            WORK
          </a>
          <a
            class="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors hover:bg-technical-highlight hover:text-surface transition-all duration-200 px-2 py-1"
            href="#process"
          >
            PROCESS
          </a>
          <a
            class="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors hover:bg-technical-highlight hover:text-surface transition-all duration-200 px-2 py-1"
            href="#about"
          >
            ABOUT
          </a>
        </div>

        {/* CTA Button */}
        <div class="hidden md:block">
          <button class="bg-status-ready text-surface font-button text-button px-6 py-2 hover:bg-background hover:text-status-ready border-2 border-status-ready transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer">
            LET'S BUILD
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div class="flex md:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick$={toggleMobileMenu}
            class="font-label-mono text-label-mono border border-outline-variant px-3 py-1.5 text-on-surface hover:bg-surface-container"
          >
            {isMobileMenuOpen.value ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen.value && (
        <div class="md:hidden bg-background border-b-2 border-outline-variant px-4 py-6 space-y-4">
          <a
            class="block font-label-mono text-label-mono text-on-surface-variant hover:text-technical-highlight"
            href="#services"
            onClick$={toggleMobileMenu}
          >
            &gt; SERVICES
          </a>
          <a
            class="block font-label-mono text-label-mono text-technical-highlight"
            href="#work"
            onClick$={toggleMobileMenu}
          >
            &gt; WORK
          </a>
          <a
            class="block font-label-mono text-label-mono text-on-surface-variant hover:text-technical-highlight"
            href="#process"
            onClick$={toggleMobileMenu}
          >
            &gt; PROCESS
          </a>
          <a
            class="block font-label-mono text-label-mono text-on-surface-variant hover:text-technical-highlight"
            href="#about"
            onClick$={toggleMobileMenu}
          >
            &gt; ABOUT
          </a>
          <div class="pt-2">
            <button
              class="w-full bg-status-ready text-surface font-button text-button py-2 border-2 border-status-ready"
              onClick$={toggleMobileMenu}
            >
              LET'S BUILD
            </button>
          </div>
        </div>
      )}
    </nav>
  );
});
