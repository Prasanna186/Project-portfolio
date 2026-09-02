import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/utils";
import { Container } from "./Container";

export interface SectionProps {
  id?: string;
  class?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  badge?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export const Section = component$<SectionProps>(({
  id,
  class: className,
  containerSize = "lg",
  badge,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <section id={id} class={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      <Container size={containerSize}>
        {(badge || title || subtitle) && (
          <div class={cn("mb-12 md:mb-16", centered && "text-center mx-auto max-w-2xl")}>
            {badge && (
              <span class="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                {badge}
              </span>
            )}
            {title && (
              <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p class="text-base md:text-lg text-slate-400 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <Slot />
      </Container>
    </section>
  );
});
