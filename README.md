# Luka Kilasonia — Portfolio

Personal portfolio site. Live at **https://portfolio-kila21.vercel.app**

## Stack

- **React 18** + **TypeScript**, built with **Vite**
- **styled-components** (CSS-variable theming, light/dark)
- **react-router-dom** — home, `/projects`, `/projects/:id`
- **Vitest** + Testing Library, **ESLint** + **Prettier**
- Deployed on **Vercel** with `@vercel/analytics`

## Local development

```bash
nvm use            # Node 20 (see .nvmrc)
npm install
cp .env.example .env.local   # then add your Web3Forms key
npm run dev
```

| Script                 | What it does                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Vite dev server                          |
| `npm run build`        | Typecheck + production build             |
| `npm run preview`      | Serve the production build               |
| `npm test`             | Run the test suite                       |
| `npm run lint`         | ESLint                                   |
| `npm run format`       | Prettier write                           |

## Content

All copy lives in `src/data/`:

- `profile.ts` — name, role, pitch, location, email, socials, résumé link
- `projects.ts` — project list + case-study fields (`/projects/:id`)
- `experience.ts` — work / education timeline

Résumé PDF: `public/resume.pdf`. Brand assets (`og-image.png`,
`apple-touch-icon.png`) are regenerated with `node scripts/gen-assets.mjs`
(needs the `sharp` devDependency).

## Contact form

The contact section posts to [Web3Forms](https://web3forms.com). Create a
free access key for the inbox you want messages in, then set
`VITE_WEB3FORMS_KEY` locally (`.env.local`) and in the Vercel project
env vars. Without the key, the section falls back to a `mailto:` link.

## CI

`.github/workflows/ci.yml` runs format check, lint, typecheck, tests and
build on every push and PR.

## Author

Luka Kilasonia — [GitHub](https://github.com/kila21) ·
[LinkedIn](https://www.linkedin.com/in/luka-kilasonia-937a9a211/)
