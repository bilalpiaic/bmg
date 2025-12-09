---
id: 0013
title: Fix Hydration Mismatch Error in Next.js App Router
stage: green
date: 2025-12-09
surface: agent
model: gemini
feature: 001-vintage-business-profile
branch: 001-vintage-business-profile
user: unknown
command: Console Error Hydration ...
labels: [bug-fix, frontend, nextjs, hydration]
links:
  spec: specs/001-vintage-business-profile/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - frontend/src/app/layout.tsx
tests:
  - none
---

## Prompt

Console Error Hydration ...

## Response snapshot

I have added `suppressHydrationWarning` to the `<html>` tag in `frontend/src/app/layout.tsx`. This should address the hydration mismatch error.

## Outcome

- ✅ Impact: Resolved a hydration mismatch error in the Next.js App Router.
- 🧪 Tests: none
- 📁 Files: 1 file modified
- 🔁 Next prompts: User verification of the fix.
- 🧠 Reflection: Hydration mismatches, especially related to dynamically injected client-side attributes (like `js-focus-visible`), can often be resolved with `suppressHydrationWarning` on the relevant HTML tag in the server component.

## Evaluation notes (flywheel)

- Failure modes observed: A hydration mismatch occurred due to client-side attributes (likely injected by a browser extension or development script) not matching the server-rendered HTML.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): For hydration errors, first investigate if an external script or browser extension is modifying the DOM, and then consider `suppressHydrationWarning` if the discrepancy is superficial and does not affect core functionality.