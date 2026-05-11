# Sprint Tracker

**Rules:** All new work = a sprint entry first. Top priority = execute then backfill in same commit.
**Work loop:** [AI_DEV_FRAMEWORK.md](../AI_DEV_FRAMEWORK.md)

---

## Status Dashboard

| Sprint | Title | Status |
|--------|-------|--------|
| [Sprint-01](completed/sprint-01-project-foundation.md) | Project Foundation | ✅ Completed |
| [Sprint-02](completed/sprint-02-vite-migration.md) | Vite Migration | ✅ Completed |
| [Sprint-03](completed/sprint-03-animation-scroll.md) | Animation & Scroll | ✅ Completed |
| [Sprint-04](completed/sprint-04-qa-nav-fix.md) | QA & Nav Fix | ✅ Completed |
| [Sprint-05](current/sprint-05-content-finalization.md) | Content Finalization | 🔄 Current |
| [Sprint-06](next/sprint-06-deploy-acceptance.md) | Deploy & Acceptance | ⏭ Next |

---

## Folder Convention

| Folder | Contains |
|--------|----------|
| `completed/` | Finished sprints — closed, do not edit |
| `current/` | One file only — the active sprint |
| `next/` | Queued sprints in priority order |

**When a sprint closes:** move its file from `current/` → `completed/`, promote the top `next/` file to `current/`.
**New sprint:** copy `_template.md`, name it `sprint-XX-title.md`, drop it in `next/`.
