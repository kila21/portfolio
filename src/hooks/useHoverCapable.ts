import { useEffect, useState } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

/** True on devices with a precise pointer (mouse) — used to gate cursor effects. */
export const useHoverCapable = () => {
  const [capable, setCapable] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.(QUERY).matches === true
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setCapable(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return capable;
};
