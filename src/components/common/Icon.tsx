import { component$ } from "@builder.io/qwik";
import {
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuExternalLink,
  LuArrowRight,
  LuMenu,
  LuX,
  LuMail,
  LuMapPin,
  LuSparkles,
  LuCode,
  LuBriefcase,
  LuLayers,
  LuCheck,
  LuChevronRight,
  LuSun,
  LuMoon,
} from "@qwikest/icons/lucide";

export type IconName =
  | "github"
  | "linkedin"
  | "twitter"
  | "external-link"
  | "arrow-right"
  | "menu"
  | "x"
  | "mail"
  | "map-pin"
  | "sparkles"
  | "code"
  | "briefcase"
  | "layers"
  | "check"
  | "chevron-right"
  | "sun"
  | "moon";

export interface IconProps {
  name: IconName;
  class?: string;
  size?: number;
}

export const Icon = component$<IconProps>(({ name, class: className = "w-5 h-5", size }) => {
  const style = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  switch (name) {
    case "github":
      return <LuGithub class={className} style={style} />;
    case "linkedin":
      return <LuLinkedin class={className} style={style} />;
    case "twitter":
      return <LuTwitter class={className} style={style} />;
    case "external-link":
      return <LuExternalLink class={className} style={style} />;
    case "arrow-right":
      return <LuArrowRight class={className} style={style} />;
    case "menu":
      return <LuMenu class={className} style={style} />;
    case "x":
      return <LuX class={className} style={style} />;
    case "mail":
      return <LuMail class={className} style={style} />;
    case "map-pin":
      return <LuMapPin class={className} style={style} />;
    case "sparkles":
      return <LuSparkles class={className} style={style} />;
    case "code":
      return <LuCode class={className} style={style} />;
    case "briefcase":
      return <LuBriefcase class={className} style={style} />;
    case "layers":
      return <LuLayers class={className} style={style} />;
    case "check":
      return <LuCheck class={className} style={style} />;
    case "chevron-right":
      return <LuChevronRight class={className} style={style} />;
    case "sun":
      return <LuSun class={className} style={style} />;
    case "moon":
      return <LuMoon class={className} style={style} />;
    default:
      return <LuSparkles class={className} style={style} />;
  }
});
