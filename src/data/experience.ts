export type ExperienceEntry = {
  id: string;
  dateLabel: string;
  isCurrent?: boolean;
  title: string;
  organization?: string;
  text: string;
  tools: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "sap-fiori-leverx",
    dateLabel: "Oct 2025 - Present", // TODO(confirm): exact start date
    isCurrent: true,
    title: "SAP Fiori Developer",
    organization: "LeverX",
    text: "Building foundational SAP skills on the job, working with SAPUI5 and OData services (V2/V4) to develop and maintain Fiori applications, with a growing interest in SAP CAP and hands-on exposure to SAP BTP.",
    tools: ["SAPUI5", "OData", "SAP CAP", "SAP BTP", "JavaScript", "Git"],
  },
  {
    id: "sapui5-training",
    dateLabel: "Sep - Oct 2025",
    title: "SAPUI5 Framework Training",
    organization: "LeverX",
    text: "Two-month training program covering the SAPUI5 framework fundamentals, MVC architecture, and OData integration, ahead of joining as a Fiori Developer.",
    tools: ["SAPUI5", "OData", "JavaScript"],
  },
  {
    id: "react-developer",
    dateLabel: "2022 - Present",
    title: "Self-Taught React Development",
    text: "Learned React on my own — no formal job title, just consistent practice through personal projects, courses, and documentation. Built and shipped several projects (including this portfolio, a Spotify profile app, and a trading journal app) using React, Redux, React Router, and Next.js, alongside self-directed backend work focused on Python and Django.",
    tools: ["React", "Redux", "Router", "Next.js", "Python", "Django"],
  },
  {
    id: "junior-angular-developer",
    dateLabel: "Apr - Sep 2022",
    title: "Junior Angular Developer",
    text: "Freelance role rewriting an existing website and implementing new designs (re-branding). Learned state management for Angular (NgRx and RxJS) and worked directly with a client on live functionality changes.",
    tools: ["TypeScript", "Angular", "Git", "NgRx", "RxJS"],
  },
  {
    id: "tbc-angular-course",
    dateLabel: "Jul - Dec 2021",
    title: "Front-End Development with Angular",
    organization: "TBC IT Academy",
    text: "Six-month course covering Angular, TypeScript, and Git. Worked in a group and individually to build projects and learn the process of working on real-world codebases.",
    tools: ["TypeScript", "Angular", "Git", "HTML", "CSS", "SCSS"],
  },
];
