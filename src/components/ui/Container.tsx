import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

export interface ContainerProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  class?: string;
}

export const Container = component$<ContainerProps>(({
  size = "lg",
  class: className,
}) => {
  const sizeStyles = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
  }[size];

  return (
    <div class={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeStyles, className)}>
      <Slot />
    </div>
  );
});
