import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE_CONFIG } from "~/lib/constants";

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
}

export function createHead({
  title = `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
  description = SITE_CONFIG.tagline,
  image = "/og-image.png",
}: SeoProps = {}): DocumentHead {
  return {
    title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: image,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
    ],
  };
}
