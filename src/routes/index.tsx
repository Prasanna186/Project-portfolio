import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      {/* Header Section with STUDIO_ARCH aesthetic */}
      <header class="mb-16 md:mb-24 border-b-2 border-outline-variant pb-8">
        <h1 class="font-label-mono text-[48px] md:text-[72px] font-bold text-on-background uppercase tracking-tight leading-none mb-4">
          HELLO<br />
          <span class="text-technical-highlight">WORLD.</span>
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A selection of high-performance technical solutions, robust architectural designs, and engineered platforms. Precision executed at scale.
        </p>
      </header>
    </main>
  );
});

export const head: DocumentHead = {
  title: "STUDIO_ARCH - Work",
  meta: [
    {
      name: "description",
      content: "A selection of high-performance technical solutions, robust architectural designs, and engineered platforms.",
    },
  ],
};
