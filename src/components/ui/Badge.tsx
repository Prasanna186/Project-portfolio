import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "cyan"
  | "glow";

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: "sm" | "md";
  class?: string;
}

export const Badge = component$<BadgeProps>(({
  variant = "default",
  size = "md",
  class: className,
}) => {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors select-none gap-1.5";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  }[size];

  const variantStyles = {
    default: "bg-slate-800 text-slate-300 border border-slate-700",
    primary: "bg-indigo-950/70 text-indigo-300 border border-indigo-700/50",
    secondary: "bg-purple-950/70 text-purple-300 border border-purple-700/50",
    cyan: "bg-cyan-950/70 text-cyan-300 border border-cyan-700/50",
    success: "bg-emerald-950/70 text-emerald-300 border border-emerald-700/50",
    outline: "bg-transparent text-slate-300 border border-slate-700",
    glow: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.2)]",
  }[variant];

  return (
    <span class={cn(baseStyles, sizeStyles, variantStyles, className)}>
      <Slot />
    </span>
  );
});
