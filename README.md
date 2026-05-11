# Nicholas Nelson Portfolio

Professional portfolio for Nicholas Nelson, built with Vite, React, and TypeScript for GitHub Pages hosting.

## Current status
- Novu-inspired interactive homepage scaffolded
- Focus pages scaffolded
- Single source of truth doc added in docs/PROJECT_SPEC.md
- Project content still needs the final midterm and job-technology details
- GitHub Pages deployment workflow added

## Source of truth
All major scope and content decisions should be checked against docs/PROJECT_SPEC.md before editing.

## Local development
1. Install dependencies
2. Run the dev server

## Build
- `npm run build`

## GitHub Pages
- Routing uses `HashRouter`, so focus-page URLs work on GitHub Pages without server-side rewrites.
- Vite is configured with relative asset paths (`base: './'`), so the built files load correctly from the repository subpath.
- The deploy workflow publishes `dist/` directly with GitHub Pages Actions.
- Local validation for production output:
	1. Run `npm run build`
	2. Run `npm run preview`
	3. Open the local preview and verify `#/focus`, `#/focus/research`, `#/focus/projects`, and `#/focus/workflow`

## Live site
https://eagolo135.github.io/nicholas.nelson/

## Repo
https://github.com/Eagolo135/nicholas.nelson

## TODO before final release
- Add LinkedIn URL
- Replace project placeholders