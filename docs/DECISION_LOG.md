# Decision Log

## 2026-05-11
- Chose Next.js static export for GitHub Pages compatibility.
- Chose a hybrid scrollytelling portfolio with focus pages.
- Chose docs/PROJECT_SPEC.md as the single source of truth.
- Consolidated sprint tracking to docs/sprints/README.md and the docs/sprints/ folders; docs/SPRINTS.md is redirect-only.
- Narrowed the public portfolio scope to resume-relevant content for Cloud Security Engineer - AI Trainer.
- Removed the public Workflow page and portfolio-build meta content from the public site.
- Rebased the visual system on the Stitch Liquid Glass redesign package instead of the earlier monochrome homepage-only pass.
- Added TailwindCSS as the implementation layer for Stitch tokens and exported layout translation.
- Kept the current public route count and folded the Stitch search view plus project-detail modal into the existing projects page.
- Preserved explicit pending states for unverified project facts rather than filling the new modal/search UI with invented details.

## 2026-05-12
- Repositioned the portfolio from cloud security toward applied AI systems based on the sourced content brief.
- Lifted homepage copy out of inline constants so public content now flows from src/content/site.ts.
- Reframed the focus routes around career direction and project detail while keeping the current route structure stable.
- Replaced the old placeholder project set with StoryLens AI, UNSW-NB15, Taro App, Sakila Movies, and a still-pending revised midterm entry.
