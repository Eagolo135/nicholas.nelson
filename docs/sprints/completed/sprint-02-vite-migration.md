# Sprint-02 · Vite Migration

**Goal:** Replace Next.js with Vite + React for simpler static hosting and hash routing.
**Spec ref:** [PROJECT_SPEC.md](../../PROJECT_SPEC.md) § Product shape (static, GitHub Pages)
**Opened:** session 2
**Closed:** session 2

---

## Tasks

- [x] Next.js app directory and config removed (`app/`, `next.config.mjs`, `next-env.d.ts`, `src/lib/base-path.ts`)
- [x] Vite + React + TypeScript (strict) configured (`vite.config.ts`, `tsconfig.json`)
- [x] Hash-based router wired (`react-router-dom` in `src/main.tsx` + `src/App.tsx`)
- [x] GitHub Actions deploy workflow updated to publish `dist/` (`.github/workflows/deploy.yml`)
- [x] `typecheck` + `build` passing

---

## Done When

`npm run build` produces a `dist/` folder that can be deployed to GitHub Pages with no Next.js dependency remaining.

---

## Notes

Commits: `c4b8858`, `9fce490`. Hash routing chosen specifically to avoid 404s on GitHub Pages without a custom 404.html rewrite.
