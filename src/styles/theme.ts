// Colors are CSS custom properties (defined in GlobalStyles) so that switching
// light/dark only flips one attribute on <html> — no React re-render.

export const theme = {
  colors: {
    bg: "var(--bg)",
    bgElevated: "var(--bg-elevated)",
    surface: "var(--surface)",
    text: "var(--text)",
    textMuted: "var(--text-muted)",
    line: "var(--line)",
    accent: "var(--accent)",
    accentText: "var(--accent-text)",
    accentSoft: "var(--accent-soft)",
  },
  fonts: {
    display: `"Fraunces", Georgia, "Times New Roman", serif`,
    sans: `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "72px",
    xxxl: "120px",
  },
  radii: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    pill: "999px",
  },
  transitions: {
    fast: "120ms ease",
    base: "220ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "450ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
  layout: {
    maxWidth: "1120px",
    prose: "660px",
  },
  breakpoints: {
    sm: "560px",
    md: "768px",
    lg: "1024px",
  },
  z: {
    nav: 100,
    preview: 90,
    skipLink: 200,
  },
};

export type Theme = typeof theme;
