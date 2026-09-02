import { component$, Slot, type PropsOf } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export type CardProps = PropsOf<"div"> & {
  variant?: "default" | "glass" | "bordered" | "interactive";
  class?: string;
};

export const Card = component$<CardProps>(({
  variant = "glass",
  class: className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-slate-900/90 border border-slate-800",
    glass: "glass-panel bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 shadow-xl",
    bordered: "bg-[#111726]/80 border border-slate-700/60 shadow-lg",
    interactive:
      "glass-panel glass-panel-hover bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 shadow-xl transition-all duration-300",
  }[variant];

  return (
    <div
      class={cn("rounded-2xl overflow-hidden p-6 relative", variantStyles, className)}
      {...props}
    >
      <Slot />
    </div>
  );
});

export const CardHeader = component$<{ class?: string }>(({ class: className }) => (
  <div class={cn("flex flex-col space-y-1.5 mb-4", className)}>
    <Slot />
  </div>
));

export const CardTitle = component$<{ class?: string }>(({ class: className }) => (
  <h3 class={cn("text-xl font-bold tracking-tight text-white", className)}>
    <Slot />
  </h3>
));

export const CardDescription = component$<{ class?: string }>(({ class: className }) => (
  <p class={cn("text-sm text-slate-400 leading-relaxed", className)}>
    <Slot />
  </p>
));

export const CardContent = component$<{ class?: string }>(({ class: className }) => (
  <div class={cn("pt-0", className)}>
    <Slot />
  </div>
));

export const CardFooter = component$<{ class?: string }>(({ class: className }) => (
  <div class={cn("flex items-center pt-4 mt-auto border-t border-slate-800/60", className)}>
    <Slot />
  </div>
));
