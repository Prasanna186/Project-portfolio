import { component$, Slot } from "@builder.io/qwik";
import { Header } from "./Header";
import { Footer } from "./Footer";

export interface AppShellProps {
  showHeader?: boolean;
  showFooter?: boolean;
}

export const AppShell = component$<AppShellProps>(({
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <div class="relative min-h-screen bg-background text-on-background font-body-md selection:bg-technical-highlight selection:text-surface">
      {/* Footer fixed at bottom behind everything — the "wall" behind the shutter */}
      {showFooter && (
        <footer class="fixed bottom-0 left-0 w-full z-0">
          <Footer />
        </footer>
      )}

      {/* Header sticky on top */}
      {showHeader && (
        <header class="sticky top-0 z-20">
          <Header />
        </header>
      )}

      {/* Main content — z-10 with solid bg, acts as the shutter.
          mb matches footer height so footer is fully revealed on scroll-end */}
      <main class="relative z-10 bg-background mb-[28rem] sm:mb-[22rem] md:mb-[20rem]">
        <Slot />
      </main>
    </div>
  );
});
