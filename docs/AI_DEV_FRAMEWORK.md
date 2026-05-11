# AI Development Framework

AI is used as a planning, research, drafting, and revision tool.

## Rules
- Review AI output before using it.
- Use AI to improve clarity, not to invent facts.
- Keep the portfolio aligned to the approved career direction.
- Update the spec when the plan changes.

---

## Work Loop Cycle

Every implementation session follows this loop in order:

1. **Orient** — Read `PROJECT_SPEC.md` and the Current sprint entry in `SPRINTS.md`.
2. **Plan** — Confirm the sprint goal and task list are written before touching code. If a task has no sprint entry, add one first (except top-priority — see Sprint Rules).
3. **Implement** — Work through sprint tasks one at a time. Keep changes scoped to the active sprint.
4. **QA** — Run `npm run typecheck` → `npm run build` → browser smoke test. Fix any failures before proceeding.
5. **Record** — Check off completed tasks in `SPRINTS.md`. If the implementation changed the spec, update `PROJECT_SPEC.md` and `DECISION_LOG.md` in the same commit.
6. **Ship** — `git add` → `git commit` (descriptive message referencing sprint) → `git push`.
7. **Advance** — If all tasks in the Current sprint are done, move it to Completed and promote the top Next sprint to Current.

---

## Sprint Rules

- **One sprint at a time.** Only one sprint lives in the Current section.
- **Spec-driven.** Every sprint references the relevant section of `PROJECT_SPEC.md`.
- **New work = new sprint.** Any feature, fix, or change gets a sprint entry before work begins — no untracked changes.
- **Top-priority bypass.** If the user explicitly marks something top priority, execute immediately and backfill the sprint record in the same commit.
- **Sequential numbering.** Sprints are numbered Sprint-01, Sprint-02, … in order. Numbers are never reused.
- **Done criteria required.** Every sprint must have a "Done when" statement before it is considered Current.
- **No scope creep.** If new work emerges mid-sprint, log it as a future sprint entry in Next — do not expand the Current sprint.
