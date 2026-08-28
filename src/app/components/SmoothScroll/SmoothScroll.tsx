"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * GSAP ScrollSmoother for the whole page.
 *
 * ScrollSmoother translates #smooth-content while the window keeps its native
 * scroll position, so anchor links (/#features) and the header's scroll-state
 * listeners keep working. position:fixed elements break inside the transformed
 * wrapper, which is why the Header, CookieConsent, and other overlays stay
 * OUTSIDE this component in layout.tsx.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect users who asked the OS to minimize motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
