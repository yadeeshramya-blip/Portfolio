"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

function classifyLink(href: string): string {
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("#")) return "anchor";
  if (href.startsWith("http")) return "external";
  return "internal";
}

export default function AnalyticsTracker() {
  useEffect(() => {
    // --- Section dwell-time tracking ---
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    const enteredAt = new Map<string, number>();

    function flushSection(sectionId: string, beacon: boolean) {
      const start = enteredAt.get(sectionId);
      if (start == null) return;
      enteredAt.delete(sectionId);
      trackEvent("section_engagement", {
        section_id: sectionId,
        engagement_time_msec: Math.round(performance.now() - start),
        ...(beacon ? { transport_type: "beacon" } : {}),
      });
    }

    function flushAllSections(beacon: boolean) {
      for (const id of Array.from(enteredAt.keys())) {
        flushSection(id, beacon);
      }
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const id = entry.target.id;
        if (!id) continue;
        if (entry.isIntersecting) {
          if (!enteredAt.has(id)) {
            enteredAt.set(id, performance.now());
            trackEvent("section_view", { section_id: id });
          }
        } else {
          flushSection(id, false);
        }
      }
    });

    sections.forEach((section) => observer.observe(section));

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") flushAllSections(true);
    }
    function handlePageHide() {
      flushAllSections(true);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    // --- CTA / interactive element click tracking ---
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      if (link) {
        const href = link.getAttribute("href") || "";
        trackEvent("cta_click", {
          link_url: href,
          link_type: classifyLink(href),
          link_text:
            (link.textContent || "").trim().slice(0, 100) ||
            link.getAttribute("aria-label") ||
            "",
          section_id: link.closest("section[id]")?.id || "",
        });
        return;
      }

      const button = target.closest("button") as HTMLButtonElement | null;
      if (button) {
        trackEvent("cta_click", {
          link_type: "button",
          link_text:
            button.getAttribute("aria-label") ||
            (button.textContent || "").trim().slice(0, 100),
          section_id: button.closest("section[id]")?.id || "",
        });
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      observer.disconnect();
      flushAllSections(false);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
