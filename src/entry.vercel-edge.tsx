/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Vercel Edge Functions.
 *
 */
import {
  createQwikCity,
  type PlatformVercel,
} from "@builder.io/qwik-city/middleware/vercel-edge";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";

declare global {
  interface QwikCityPlatform extends PlatformVercel {}
}

export default createQwikCity({ render, qwikCityPlan });
