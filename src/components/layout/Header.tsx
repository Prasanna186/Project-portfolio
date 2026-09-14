import { component$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const Header = component$(() => {
  const loc = useLocation();
  const isMenuOpen = useSignal(false);
  const isServices = loc.url.pathname.startsWith("/services");
  const isTeam = loc.url.pathname.startsWith("/team");
  const isWork = loc.url.pathname === "/" || loc.url.pathname.startsWith("/projects");

  return (
    <>
      <nav class="w-full bg-background/95 backdrop-blur-md border-b border-surface-border sticky top-0 z-40">
        <div class="flex justify-between items-center px-2.5 sm:px-4 md:px-margin-desktop max-w-container-max mx-auto h-14 gap-4">
          {/* Left: Mobile Menu Trigger + Brand */}
          <div class="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick$={() => (isMenuOpen.value = true)}
              class="sm:hidden w-8 h-8 flex items-center justify-center border border-surface-border bg-surface-container text-on-background hover:text-technical-highlight hover:border-technical-highlight transition-colors rounded-[4px] cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span class="material-symbols-outlined text-lg">menu</span>
            </button>

            <a href="/" class="flex items-center gap-2 group shrink-0">
              <span class="w-2 h-2 bg-technical-highlight shadow-[0_0_6px_#FF6B00] group-hover:scale-110 transition-transform inline-block"></span>
              <span class="font-headline-md text-sm font-bold text-on-background tracking-tight group-hover:text-technical-highlight transition-colors">
                STUDIO_ARCH
              </span>
              <span class="hidden md:inline-block font-label-mono text-[9px] text-on-surface-variant bg-surface-container border border-surface-border px-1.5 py-0.5 ml-0.5">
                v2.6
              </span>
            </a>
          </div>

          {/* Center Nav - Desktop Only */}
          <div class="hidden sm:flex items-center gap-6">
            <a
              href="/"
              class={`font-label-mono text-xs uppercase tracking-wide transition-colors ${
                isWork
                  ? "text-technical-highlight font-semibold"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
            >
              WORK
            </a>
            <a
              href="/services"
              class={`font-label-mono text-xs uppercase tracking-wide transition-colors ${
                isServices
                  ? "text-technical-highlight font-semibold"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
            >
              SERVICES
            </a>
            <a
              href="/team"
              class={`font-label-mono text-xs uppercase tracking-wide transition-colors ${
                isTeam
                  ? "text-technical-highlight font-semibold"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
            >
              TEAM
            </a>
          </div>

          {/* Right Actions */}
          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <div class="hidden sm:flex items-center gap-1.5 font-label-mono text-[10px] text-status-ready">
              <span class="w-1.5 h-1.5 bg-status-ready animate-pulse inline-block"></span>
              <span>ONLINE</span>
            </div>

            <a
              href="mailto:kabirajpan2@gmail.com"
              class="font-button text-[11px] uppercase px-3 py-1.5 bg-status-ready text-black font-bold btn-hover hard-shadow border border-transparent cursor-pointer inline-flex items-center gap-1"
            >
              <span class="hidden sm:inline">LET'S BUILD</span>
              <span class="sm:hidden">BUILD</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Left-side Drawer Menu for Mobile */}
      {isMenuOpen.value && (
        <div class="sm:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            class="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick$={() => (isMenuOpen.value = false)}
          ></div>

          {/* Left Drawer */}
          <div class="fixed top-0 left-0 bottom-0 w-[270px] max-w-[80vw] bg-surface-container-lowest border-r border-surface-border p-5 flex flex-col justify-between shadow-2xl z-10">
            <div class="flex flex-col gap-6">
              {/* Drawer Header with Brand & Close Button */}
              <div class="flex items-center justify-between border-b border-surface-border pb-4">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-technical-highlight shadow-[0_0_6px_#FF6B00] inline-block"></span>
                  <span class="font-headline-md text-sm font-bold text-on-background tracking-tight">
                    STUDIO_ARCH
                  </span>
                </div>
                <button
                  type="button"
                  onClick$={() => (isMenuOpen.value = false)}
                  class="w-7 h-7 flex items-center justify-center border border-surface-border bg-surface-container text-on-surface-variant hover:text-technical-highlight hover:border-technical-highlight transition-colors rounded-[4px] cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <span class="material-symbols-outlined text-base">close</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div class="flex flex-col gap-1.5">
                <div class="font-label-mono text-[9px] text-technical-highlight uppercase tracking-widest px-2 py-0.5">
                  /navigation
                </div>
                <a
                  href="/"
                  onClick$={() => (isMenuOpen.value = false)}
                  class={`font-label-mono text-xs uppercase tracking-wider py-2.5 px-3 rounded-[4px] border transition-colors flex items-center justify-between ${
                    isWork
                      ? "text-technical-highlight bg-surface-container border-surface-border font-bold"
                      : "text-on-surface-variant border-transparent hover:text-on-background hover:bg-surface-container/50"
                  }`}
                >
                  <span>WORK</span>
                  {isWork && <span class="w-1.5 h-1.5 bg-technical-highlight inline-block"></span>}
                </a>
                <a
                  href="/services"
                  onClick$={() => (isMenuOpen.value = false)}
                  class={`font-label-mono text-xs uppercase tracking-wider py-2.5 px-3 rounded-[4px] border transition-colors flex items-center justify-between ${
                    isServices
                      ? "text-technical-highlight bg-surface-container border-surface-border font-bold"
                      : "text-on-surface-variant border-transparent hover:text-on-background hover:bg-surface-container/50"
                  }`}
                >
                  <span>SERVICES</span>
                  {isServices && <span class="w-1.5 h-1.5 bg-technical-highlight inline-block"></span>}
                </a>
                <a
                  href="/team"
                  onClick$={() => (isMenuOpen.value = false)}
                  class={`font-label-mono text-xs uppercase tracking-wider py-2.5 px-3 rounded-[4px] border transition-colors flex items-center justify-between ${
                    isTeam
                      ? "text-technical-highlight bg-surface-container border-surface-border font-bold"
                      : "text-on-surface-variant border-transparent hover:text-on-background hover:bg-surface-container/50"
                  }`}
                >
                  <span>TEAM</span>
                  {isTeam && <span class="w-1.5 h-1.5 bg-technical-highlight inline-block"></span>}
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div class="border-t border-surface-border pt-4 flex flex-col gap-3">
              <div class="flex items-center justify-between px-1">
                <div class="flex items-center gap-1.5 font-label-mono text-[10px] text-status-ready">
                  <span class="w-1.5 h-1.5 bg-status-ready animate-pulse inline-block"></span>
                  <span>SYSTEMS ONLINE</span>
                </div>
                <span class="font-label-mono text-[9px] text-on-surface-variant bg-surface-container border border-surface-border px-1.5 py-0.5">
                  v2.6
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
