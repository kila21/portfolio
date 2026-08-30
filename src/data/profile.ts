// Central place for identity / contact details used across the site.
// Update these values freely — everything else reads from here.

export const profile = {
  name: "Luka Kilasonia",
  role: "React Developer",
  // One-line value proposition shown in the hero.
  pitch:
    "I build fast, accessible web apps in React and TypeScript — and I'm just as comfortable with the backend and SAP systems behind them.",
  location: "Tbilisi, Georgia", // TODO(confirm)
  availability: "Open to work",
  // Public contact address (also the Web3Forms recipient). Change if you prefer another inbox.
  email: "kilasonialuka@gmail.com",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://portfolio-kila21.vercel.app",
  socials: [
    { label: "GitHub", href: "https://github.com/kila21" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luka-kilasonia-937a9a211/",
    },
    { label: "Email", href: "mailto:kilasonialuka@gmail.com" },
  ],
} as const;
