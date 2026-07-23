import tradingJournal from "../images/trading-journal.png";
import spotify from "../images/spotify.png";
import weather from "../images/weather.png";

export type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  image?: string;
  year: number;
  tools: string[];
  liveLink?: string;
  repoLink?: string;
  featured: boolean;
};

export const projects: ProjectEntry[] = [
  {
    id: "trading-journal",
    title: "Trading Journal",
    description:
      "A full-stack trading journal for logging trades and tracking P&L, with a calendar dashboard for an at-a-glance view of performance, win-rate/P&L analytics broken down by setup and session, chart-screenshot attachments per trade, and full English/Georgian bilingual support.",
    image: tradingJournal,
    year: 2026, // TODO(confirm): exact build year
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Netlify",
    ],
    liveLink: "https://trading-journal-free.netlify.app/en",
    repoLink: "https://github.com/kila21/Trading-Journal",
    featured: true,
  },
  {
    id: "spotify-profile-app",
    title: "Spotify Profile App",
    description:
      "Authenticate with Spotify to see your profile: most-liked tracks, recently played music, playlists, and more. Read the README for setup details.",
    image: spotify,
    year: 2024,
    tools: [
      "TypeScript",
      "React",
      "Router",
      "Styled Components",
      "Spotify API",
    ],
    liveLink: "https://spotify-app-kila21.vercel.app/",
    repoLink: "https://github.com/kila21/Spotify-App",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Search any city and get a forecast, using a free weather API (so forecasts aren't always accurate). See the live demo or the README on GitHub.",
    image: weather,
    year: 2023,
    tools: ["TypeScript", "React"],
    liveLink: "https://weather-app-kila.vercel.app/",
    repoLink: "https://github.com/kila21/Weather?tab=readme-ov-file",
    featured: true,
  },
  {
    id: "todo-app",
    title: "Todo App",
    description:
      "A todo list app with authentication and Redux-managed state. A demo login is available in the project README.",
    year: 2023,
    tools: ["React", "Redux", "TypeScript"],
    liveLink: "https://to-do-phi-opal.vercel.app/",
    featured: false,
  },
  {
    id: "redberry-6",
    title: "Redberry Bootcamp Assignment #6",
    description:
      "A bootcamp assignment focused on layout and interaction. Best viewed at a 1920px viewport width.",
    year: 2022,
    tools: ["JavaScript", "React"],
    liveLink: "https://redberry-bootcamp-assigment6.vercel.app/",
    featured: false,
  },
  {
    id: "redberry-project",
    title: "Redberry Project",
    description:
      "A bootcamp project built with Angular, focused on rebuilding an existing site's structure and functionality.",
    year: 2022,
    tools: ["Angular"],
    repoLink: "https://github.com/kila21/Redbery-Project",
    featured: false,
  },
];
