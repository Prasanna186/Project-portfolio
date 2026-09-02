import { component$, Slot, type PropsOf, type PropFunction } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "glow";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = PropsOf<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  isExternal?: boolean;
  class?: string;
  onClick$?: PropFunction<() => void>;
};

export const Button = component$<ButtonProps>(({
  variant = "primary",
  size = "md",
  href,
  target,
  isExternal,
  onClick$,
  class: className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0a0d14] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none gap-2";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-medium",
    md: "px-5 py-2.5 text-sm font-semibold",
    lg: "px-7 py-3.5 text-base font-semibold",
  }[size];

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg shadow-indigo-500/25 active:scale-[0.98]",
    secondary:
      "bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700/60 shadow-sm active:scale-[0.98]",
    outline:
      "bg-transparent border border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800/40 active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white",
    glow:
      "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 active:scale-[0.98]",
  }[variant];

  const combinedClass = cn(baseStyles, sizeStyles, variantStyles, className);

  if (href) {
    return (
      <a
        href={href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick$={onClick$}
        class={combinedClass}
      >
        <Slot />
      </a>
    );
  }

  return (
    <button class={combinedClass} onClick$={onClick$} {...props}>
      <Slot />
    </button>
  );
});
