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
    <div class="min-h-screen flex flex-col bg-background text-on-background font-body-md selection:bg-technical-highlight selection:text-surface">
      {showHeader && <Header />}
      <Slot />
      {showFooter && <Footer />}
    </div>
  );
});
