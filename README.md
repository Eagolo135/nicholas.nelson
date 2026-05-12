# Nicholas Nelson Portfolio

Professional portfolio for Nicholas Nelson, built with Vite, React, TypeScript, and TailwindCSS for GitHub Pages hosting.

## Current status
- Stitch-inspired Liquid Glass redesign implemented across the public site
- Shared app chrome, recruiter-facing homepage, focus hub, direction page, and searchable projects page implemented
- Content refreshed around an Applied AI Systems Student identity using the sourced portfolio brief in Applied_AI_Portfolio_Site_Creation.txt
- Projects page includes a modal-based deep dive surface with explicit pending states where source details are still incomplete
- Single source of truth doc added in docs/PROJECT_SPEC.md
- Revised midterm project still needs its final exact title, tools, links, and screenshots if available
- GitHub Pages deployment workflow added

## Source of truth
All major scope and content decisions should be checked against docs/PROJECT_SPEC.md before editing.

## Local development
1. Install dependencies
2. Run `npm run dev`

## Build
- `npm run build`
- `npm run typecheck`

## GitHub Pages
- Routing uses `HashRouter`, so focus-page URLs work on GitHub Pages without server-side rewrites.
- Vite is configured with relative asset paths (`base: './'`), so the built files load correctly from the repository subpath.
- The deploy workflow publishes `dist/` directly with GitHub Pages Actions.
- Local validation for production output:
	1. Run `npm run build`
	2. Run `npm run preview`
	3. Open the local preview and verify `#/`, `#/focus`, `#/focus/research`, and `#/focus/projects`

## Live site
https://eagolo135.github.io/nicholas.nelson/

## Repo
https://github.com/Eagolo135/nicholas.nelson

## TODO before final release
- Finalize the revised midterm project details
- Add source/live links for projects where they are available and safe to publish