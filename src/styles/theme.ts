export const theme = {
  colors: {
    background: {
      base: "rgb(15 23 42 / 1)",
      surface: "rgb(30 41 59 / 1)",
      surfaceHover: "rgba(30, 41, 59, 0.5)",
      surfaceRaised: "rgb(38 50 71 / 1)",
    },
    text: {
      primary: "#E2E8F0",
      secondary: "#94A3B8",
      muted: "#64748B",
    },
    accent: {
      turquoise: "rgb(94 234 212 / 1)",
      turquoiseMuted: "rgba(38, 166, 154, 0.2)",
      turquoiseHover: "rgb(153 246 228 / 1)",
    },
    border: "rgba(148, 163, 184, 0.15)",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "64px",
  },
  breakpoints: {
    mobile: "600px",
    tablet: "768px",
    nav: "1024px",
    wide: "1025px",
  },
  transitions: {
    fast: "150ms ease",
    base: "250ms ease",
    slow: "400ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  radii: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    pill: "30px",
  },
  shadows: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.2)",
    md: "0 8px 30px rgba(0, 0, 0, 0.3)",
  },
};

export type Theme = typeof theme;
