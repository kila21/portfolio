import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view using IntersectionObserver
 * (no scroll listener / layout thrashing).
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.intersectionRatio);
        }
        let best = "";
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
};
