import { component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export type InputProps = PropsOf<"input"> & {
  label?: string;
  error?: string;
  class?: string;
};

export const Input = component$<InputProps>(({
  label,
  error,
  id,
  class: className,
  ...props
}) => {
  return (
    <div class="w-full space-y-1.5">
      {label && (
        <label for={id} class="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        id={id}
        class={cn(
          "w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-500",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 text-sm",
          error && "border-red-500/80 focus:ring-red-500/50 focus:border-red-500",
          className
        )}
        {...props}
      />
      {error && <p class="text-xs text-red-400">{error}</p>}
    </div>
  );
});
