export const GA_MEASUREMENT_ID = "G-3HGT3KVN5Z";

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(action: string, params: GtagEventParams = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", action, params);
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics:dev]", action, params);
  }
}
