import { useEffect, useRef, useState } from "react";

export const useScrollReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    // Reveal immediately if already at/near the viewport on mount.
    if (element.getBoundingClientRect().top < window.innerHeight * 1.1) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);

    // Failsafe: never leave content hidden if the observer somehow doesn't fire.
    const failsafe = window.setTimeout(() => setIsVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return { ref, isVisible };
};
