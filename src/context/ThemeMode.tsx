import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Mode = "light" | "dark";
type Setting = Mode | "system";

type ThemeModeValue = {
  /** The resolved mode currently applied to the page. */
  mode: Mode;
  /** Cycle: system -> light -> dark -> system. */
  toggle: () => void;
};

const STORAGE_KEY = "theme-preference";

const ThemeModeContext = createContext<ThemeModeValue | null>(null);

const getSystemMode = (): Mode =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const readSetting = (): Setting => {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
};

const applySetting = (setting: Setting) => {
  const root = document.documentElement;
  if (setting === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", setting);
  }
};

export const ThemeModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [setting, setSetting] = useState<Setting>(readSetting);
  const [systemMode, setSystemMode] = useState<Mode>(getSystemMode);

  useEffect(() => {
    applySetting(setting);
    if (setting === "system") {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, setting);
    }
  }, [setting]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setSystemMode(mq.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const mode: Mode = setting === "system" ? systemMode : setting;

  const toggle = useCallback(() => {
    // Flip to the opposite of what's currently showing.
    setSetting((prev) => {
      const showing = prev === "system" ? getSystemMode() : prev;
      return showing === "dark" ? "light" : "dark";
    });
  }, []);

  return (
    <ThemeModeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx)
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  return ctx;
};
