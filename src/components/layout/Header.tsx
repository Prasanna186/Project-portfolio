import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const Header = component$(() => {
  const loc = useLocation();
  const isServices = loc.url.pathname.startsWith("/services");

  return (
    <nav class="w-full h-14 bg-background/95 backdrop-blur-md border-b border-surface-border sticky top-0 z-50">
      <div class="flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto h-full gap-4">
        {/* Brand */}
        <a href="/" class="flex items-center gap-2 group shrink-0">
          <span class="w-2 h-2 bg-technical-highlight shadow-[0_0_6px_#FF6B00] group-hover:scale-110 transition-transform inline-block"></span>
          <span class="font-headline-md text-sm font-bold text-on-background tracking-tight group-hover:text-technical-highlight transition-colors">
            STUDIO_ARCH
          </span>
          <span class="hidden md:inline-block font-label-mono text-[9px] text-on-surface-variant bg-surface-container border border-surface-border px-1.5 py-0.5 ml-0.5">
            v2.6
          </span>
        </a>

        {/* Center Nav */}
        <div class="flex items-center gap-6">
          <a
            href="/"
            class={`font-label-mono text-xs uppercase tracking-wide transition-colors ${
              !isServices
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
        </div>

        {/* Right Actions */}
        <div class="flex items-center gap-3 shrink-0">
          <div class="hidden sm:flex items-center gap-1.5 font-label-mono text-[10px] text-status-ready">
            <span class="w-1.5 h-1.5 bg-status-ready animate-pulse inline-block"></span>
            <span>ONLINE</span>
          </div>

          <a
            href="mailto:contact@zenthralabs.dev"
            class="font-button text-[11px] uppercase px-3 py-1.5 bg-status-ready text-black font-bold btn-hover hard-shadow border border-transparent cursor-pointer inline-flex items-center gap-1"
          >
            <span class="hidden sm:inline">LET'S BUILD</span>
            <span class="sm:hidden">BUILD</span>
            <span class="material-symbols-outlined text-xs">arrow_forward</span>
          </a>
        </div>
      </div>
    </nav>
  );
});
