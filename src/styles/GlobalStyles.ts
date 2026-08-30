import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #fdfbf7;
    --bg-elevated: #ffffff;
    --surface: #f4efe6;
    --text: #1b1a17;
    --text-muted: #6b6862;
    --line: #e4ddce;
    --accent: #2b4bf2;
    --accent-text: #ffffff;
    --accent-soft: rgba(43, 75, 242, 0.1);
    color-scheme: light;
  }

  :root[data-theme="dark"] {
    --bg: #141310;
    --bg-elevated: #1c1a16;
    --surface: #1e1c18;
    --text: #f1ece2;
    --text-muted: #a8a197;
    --line: #322d25;
    --accent: #93a6ff;
    --accent-text: #141310;
    --accent-soft: rgba(147, 166, 255, 0.14);
    color-scheme: dark;
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #141310;
      --bg-elevated: #1c1a16;
      --surface: #1e1c18;
      --text: #f1ece2;
      --text-muted: #a8a197;
      --line: #322d25;
      --accent: #93a6ff;
      --accent-text: #141310;
      --accent-soft: rgba(147, 166, 255, 0.14);
      color-scheme: dark;
    }
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.sans};
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    transition: background-color ${(props) => props.theme.transitions.base},
      color ${(props) => props.theme.transitions.base};
  }

  h1, h2, h3, h4 {
    font-family: ${(props) => props.theme.fonts.display};
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: ${(props) => props.theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  ::selection {
    background: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accentText};
  }

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 3px;
    border-radius: 2px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }
`;
