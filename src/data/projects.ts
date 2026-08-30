import tradingJournal from "../images/trading-journal.webp";
import spotify from "../images/spotify.webp";
import weather from "../images/weather.webp";

export type ProjectEntry = {
  id: string;
  title: string;
  /** Short one-liner for cards and lists. */
  description: string;
  image?: string;
  year: number;
  tools: string[];
  liveLink?: string;
  repoLink?: string;
  featured: boolean;
  /** Longer case-study content (shown on /projects/:id). */
  role?: string;
  timeframe?: string;
  problem?: string;
  contributions?: string[];
  outcome?: string;
};

export const projects: ProjectEntry[] = [
  {
    id: "trading-journal",
    title: "Trading Journal",
    description:
      "A full-stack journal for logging trades, tracking P&L, and spotting which setups actually work.",
    image: tradingJournal,
    year: 2026, // TODO(confirm): exact build year
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
    ],
    liveLink: "https://trading-journal-free.netlify.app/en",
    repoLink: "https://github.com/kila21/Trading-Journal",
    featured: true,
    role: "Solo — design, frontend, backend, deployment",
    problem:
      "Traders keep notes scattered across spreadsheets and screenshots, so it's hard to see whether a strategy is genuinely profitable over time.",
    contributions: [
      "Built a calendar dashboard that summarises P&L and win-rate at a glance",
      "Added analytics that break performance down by setup and trading session",
      "Let users attach chart screenshots to each trade for later review",
      "Shipped full English/Georgian localisation with next-intl routing",
      "Modelled the schema in Prisma on PostgreSQL and handled auth with Better Auth",
    ],
    outcome:
      "A deployed product other traders can sign up for and use to review their own performance.",
  },
  {
    id: "spotify-profile-app",
    title: "Spotify Profile App",
    description:
      "Log in with Spotify to explore your listening: top tracks, recent plays, playlists and more.",
    image: spotify,
    year: 2024,
    tools: [
      "TypeScript",
      "React",
      "React Router",
      "Styled Components",
      "Spotify API",
    ],
    liveLink: "https://spotify-app-kila21.vercel.app/",
    repoLink: "https://github.com/kila21/Spotify-App",
    featured: true,
    role: "Solo — frontend",
    problem:
      "Spotify's own apps don't surface a clean, shareable view of your listening habits.",
    contributions: [
      "Implemented the Spotify OAuth flow with token refresh handling",
      "Fetched and cached profile, top tracks, recently played and playlist data",
      "Designed a consistent component system with styled-components",
    ],
    outcome:
      "A live app that authenticates against a real third-party API and renders a personalised profile.",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Search any city for a current forecast, built on a free weather API.",
    image: weather,
    year: 2023,
    tools: ["TypeScript", "React"],
    liveLink: "https://weather-app-kila.vercel.app/",
    repoLink: "https://github.com/kila21/Weather?tab=readme-ov-file",
    featured: true,
    role: "Solo — frontend",
    problem:
      "An early project to get comfortable with async data fetching and API state in React.",
    contributions: [
      "Handled loading, empty and error states around the API calls",
      "Parsed and formatted the forecast response into a readable UI",
    ],
    outcome:
      "A small, focused app that practises the fetch-render-error loop cleanly.",
  },
  {
    id: "todo-app",
    title: "Todo App",
    description:
      "A todo list with authentication and Redux-managed state. Demo login in the README.",
    year: 2023,
    tools: ["React", "Redux", "TypeScript"],
    liveLink: "https://to-do-phi-opal.vercel.app/",
    featured: false,
  },
  {
    id: "redberry-6",
    title: "Redberry Bootcamp — Assignment #6",
    description:
      "A bootcamp assignment focused on layout and interaction. Best viewed at 1920px.",
    year: 2022,
    tools: ["JavaScript", "React"],
    liveLink: "https://redberry-bootcamp-assigment6.vercel.app/",
    featured: false,
  },
  {
    id: "redberry-project",
    title: "Redberry Project",
    description:
      "A bootcamp project rebuilding an existing site's structure and functionality in Angular.",
    year: 2022,
    tools: ["Angular"],
    repoLink: "https://github.com/kila21/Redbery-Project",
    featured: false,
  },
];

export const getProject = (id: string) =>
  projects.find((project) => project.id === id);
