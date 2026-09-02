import { component$, Slot } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import { AppShell } from "~/components/layout/AppShell";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and CDN edge distribution
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <AppShell>
      <Slot />
    </AppShell>
  );
});
