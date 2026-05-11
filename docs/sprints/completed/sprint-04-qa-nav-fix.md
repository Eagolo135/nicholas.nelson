# Sprint-04 · QA & Nav Fix

**Goal:** QA the running dev site and fix the hash-router section nav conflict.
**Spec ref:** [PROJECT_SPEC.md](../../PROJECT_SPEC.md) § Acceptance criteria
**Opened:** session 3
**Closed:** session 3

---

## Tasks

- [x] Dev server launched and all routes smoke-tested
- [x] Identified: raw `href="#section"` anchors triggered hash-router route mismatch ("No routes matched location '/projects'")
- [x] Fix: `makeSectionScroller(id)` helper added to `src/pages/Home.tsx`
- [x] All section nav links (`#direction`, `#research`, `#projects`, `#skills`) and CTA button updated to use `onClick` + `preventDefault` + `scrollIntoView`
- [x] `typecheck` + `build` passing (exit 0)
- [x] Fix committed and pushed

---

## Done When

All in-page section nav links scroll smoothly to the correct section without triggering hash-router navigation.

---

## Notes

Commit: `a851c6a` — `fix: prevent hash-router conflict on section nav links`.
Root cause: React Router's hash router intercepts `#anything` as a route path. In-page anchor scrolling must use `scrollIntoView` instead.
