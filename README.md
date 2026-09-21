# Midnight-Rider Portfolio Template

A cinematic, single-page developer portfolio with a motorcycle-inspired theme. Smooth scrolling, glassmorphism, scroll reveals, and a splash loader - ready to clone and make yours.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## Use this template

1. Clone this repo

```bash
git clone https://github.com/sudo-pixel-spec/midnight-rider-portfolio-template.git cd midnight-rider-portfolio-template
```

2. Replace lorem ipsum, swap images, deploy

```bash
npm install
npm run dev
```

-> [http://localhost:5173](http://localhost:5173)

---

## Preview

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen background image, animated headline, CTAs |
| **Rider** | About bio + vertical timeline |
| **Engine Specs** | Skill groups in glass cards |
| **Rides** | Project showcase list |
| **Gallery** | Masonry-style image grid |
| **Contact** | CTA, email button, social links |

---

## Features

- Lenis smooth scrolling with fixed-nav offset
- Framer Motion scroll reveals + hero animations
- Splash loader with hero image preload
- Scroll progress bar
- Mobile hamburger menu
- `prefers-reduced-motion` support
- Semantic HTML & accessible focus states
- Centralized content in `src/data/index.ts`

---

## Customize

Most list data lives in one place:

```
src/data/index.ts    ← nav, projects, timeline, skills, socials
```

Section copy and images are in:

```
src/components/sections/   ← Hero, Rider, EngineSpecs, Rides, Gallery, Contact
src/components/layout/     ← Navbar brand
src/components/common/     ← Loader brand
index.html                 ← title, meta, theme color
src/index.css              ← CSS theme variables
src/assets/images/         ← hero + gallery photos
public/favicon.svg         ← browser tab icon
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | ESLint |

---

## Deploy

Static output in `dist/` - works on any static host:

| Platform | Build command | Publish directory |
|----------|---------------|-------------------|
| [Vercel](https://vercel.com) | `npm run build` | `dist` |
| [Netlify](https://netlify.com) | `npm run build` | `dist` |
| [Cloudflare Pages](https://pages.cloudflare.com) | `npm run build` | `dist` |
| [GitHub Pages](https://pages.github.com) | `npm run build` | `dist` |

Framework preset: **Vite**.

---

## Project structure

```
hunter-portfolio/
├── CUSTOMIZE.md              ← Start here: fill-in checklist
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── index.ts          ← Nav, projects, timeline, skills, socials
│   ├── assets/images/        ← Hero & gallery images
│   ├── components/
│   │   ├── common/           ← Loader, GlowButton, GlassCard, Reveal…
│   │   ├── layout/           ← Navbar
│   │   └── sections/         ← Page sections
│   ├── lib/
│   │   ├── lenis.ts          ← Smooth scroll
│   │   └── motion.ts         ← Animation variants
│   ├── App.tsx
│   ├── index.css             ← Theme colors
│   └── main.tsx
├── index.html
└── package.json
```

---

## Tech stack

- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite 8](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lenis](https://github.com/darkroomengineering/lenis)
- [React Icons](https://react-icons.github.io/react-icons)
- [clsx](https://github.com/lukeed/clsx)

---

## License

[MIT](./LICENSE) - free for personal and commercial use. Attribution appreciated but not required.

---

Built for the night riders.
