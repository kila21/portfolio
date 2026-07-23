import { useEffect, useState } from "react";

export const useTypewriterLoop = (
  text: string,
  options?: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseMs?: number;
    waitMs?: number;
  }
) => {
  const { typeSpeed = 90, deleteSpeed = 40, pauseMs = 1800, waitMs = 500 } =
    options ?? {};
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayed(text);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = (i: number) => {
      if (cancelled) return;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        timeoutId = setTimeout(() => type(i + 1), typeSpeed);
      } else {
        timeoutId = setTimeout(() => del(text.length), pauseMs);
      }
    };

    const del = (i: number) => {
      if (cancelled) return;
      setDisplayed(text.slice(0, i));
      if (i > 0) {
        timeoutId = setTimeout(() => del(i - 1), deleteSpeed);
      } else {
        timeoutId = setTimeout(() => type(0), waitMs);
      }
    };

    type(0);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [text, typeSpeed, deleteSpeed, pauseMs, waitMs]);

  return displayed;
};
