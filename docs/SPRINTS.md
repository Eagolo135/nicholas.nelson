# Sprints

All new work must be a sprint entry before implementation begins.
Exception: if the user marks something **top priority**, execute immediately and backfill the sprint record in the same commit.
Every sprint follows the [Work Loop Cycle](AI_DEV_FRAMEWORK.md).

---

## Completed

### Sprint-01 · Project Foundation
**Goal:** Establish portfolio direction, SSOT documentation, scaffold, homepage, and focus pages.
- [x] Portfolio direction chosen (Cybersecurity & AI Systems Student → Security Engineer – AI Trainer)
- [x] Scrollytelling + focus-page structure approved
- [x] Drift-control rules added to PROJECT_SPEC.md
- [x] SSOT docs created (PROJECT_SPEC, AGENT_BRIEF, AI_DEV_FRAMEWORK, DECISION_LOG, QA_CHECKLIST, CONTENT_INVENTORY)
- [x] Next.js scaffold created
- [x] Homepage scroll narrative and focus pages (Research, Projects, Workflow) implemented
- [x] Static export builds successfully

### Sprint-02 · Vite Migration
**Goal:** Replace Next.js with Vite + React for simpler static hosting and hash routing.
- [x] Next.js app directory and config removed
- [x] Vite + React + TypeScript (strict) configured
- [x] Hash-based router wired (react-router-dom)
- [x] GitHub Actions deploy workflow updated to publish `dist/`
- [x] Commits: `c4b8858`, `9fce490`

### Sprint-03 · Animation & Scroll
**Goal:** Add scrollytelling animations and smooth scrolling.
- [x] GSAP + ScrollTrigger integrated
- [x] Lenis smooth scroll initialized in `main.tsx`
- [x] `Reveal`, `ScrollProgressBar`, `StaggerGroup`, `StaggerItem` components built
- [x] Animations applied across homepage sections and focus pages
- [x] `typecheck` + `build` passing

### Sprint-04 · QA & Nav Fix
**Goal:** QA the running site and fix hash-router section nav conflict.
- [x] Identified: raw `href="#section"` anchors triggered hash-router route mismatch
- [x] Fix: `makeSectionScroller` helper added to `Home.tsx`; all section nav links use `onClick` + `preventDefault` + `scrollIntoView`
- [x] `typecheck` + `build` passing (exit 0)
- [x] Commit pushed: `a851c6a` — `fix: prevent hash-router conflict on section nav links`

---

## Current

### Sprint-05 · Content Finalization
**Goal:** Replace all TODO placeholders with real, verified content.
**Spec ref:** PROJECT_SPEC.md § Required proof, § Acceptance criteria
- [ ] Replace TODO project fields with real project data (revised midterm, job technology project)
- [ ] Add GitHub profile link
- [ ] Add LinkedIn profile link
- [ ] Add hosted site link (GitHub Pages URL once live)
- [ ] Review CONTENT_INVENTORY.md and mark all items resolved

**Done when:** No TODO markers remain in `src/content/site.ts` or any page component; all Required proof items from PROJECT_SPEC.md are present.

---

## Next

### Sprint-06 · Deploy & Acceptance
**Goal:** Publish to GitHub Pages and pass all acceptance criteria.
**Spec ref:** PROJECT_SPEC.md § Acceptance criteria
- [ ] Verify `vite.config.ts` base path matches GitHub Pages repo path
- [ ] Push to `main`; confirm GitHub Actions deploy workflow succeeds
- [ ] Smoke-test live URL: career direction visible within first screen, two projects present, links work
- [ ] Update README with live site URL
- [ ] Full sweep against PROJECT_SPEC.md acceptance criteria checklist
- [ ] Mark Sprint-06 complete; archive any remaining NEXT items

**Done when:** Live URL is accessible, README contains it, all acceptance criteria pass.

---

## Sprint Template

Copy this block when opening a new sprint:

```markdown
### Sprint-XX · <Title>
**Goal:** One sentence describing the outcome.
**Spec ref:** PROJECT_SPEC.md § <relevant section>
- [ ] Task one
- [ ] Task two

**Done when:** Specific, observable condition that closes this sprint.
```
