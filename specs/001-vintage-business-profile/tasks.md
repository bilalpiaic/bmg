# Tasks: Vintage Business Profile

**Input**: Design documents from `specs/001-vintage-business-profile/`
**Prerequisites**: plan.md, spec.md, data-model.md

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Initialize a new Next.js (TypeScript) project in the `frontend/` directory.
- [X] T002 [P] Install necessary dependencies: `tailwindcss`, `framer-motion`, `react-spring`, `jest`, `@testing-library/react`.
- [X] T003 [P] Configure Tailwind CSS with the vintage theme colors and fonts.
- [X] T004 [P] Configure Jest and React Testing Library for the project.
- [X] T005 Create the basic project structure: `src/components`, `src/pages`, `src/services`, `src/styles`, `content`.

---

## Phase 2: Foundational (Blocking Prerequisites)

- [X] T006 Create a service in `frontend/src/services/content.ts` to read and parse Markdown files from the `frontend/content` directory.
- [X] T007 [P] [US1] Create placeholder Markdown files in `frontend/content` for the business profile and its sections.

---

## Phase 3: User Story 1 - View the Business Profile (Priority: P1) 🎯 MVP

**Goal**: Create the main page with the vintage theme and display the business profile content.

**Independent Test**: The main page at `/` should render the business profile content with the vintage theme.

### Implementation for User Story 1

- [X] T008 [US1] Implement the main page component in `frontend/src/pages/index.tsx` to fetch and display the business profile content.
- [X] T009 [P] [US1] Create a `BusinessProfile` component in `frontend/src/components/BusinessProfile.tsx` to display the main profile information.
- [X] T010 [P] [US1] Create a `Section` component in `frontend/src/components/Section.tsx` to display the content of a section.
- [X] T011 [US1] Apply the vintage theme styling using Tailwind CSS to all components.
- [X] T012 [P] [US1] Add basic animations (e.g., fade-in on scroll) to the components using Framer Motion or React Spring.

---

## Phase 4: User Story 2 - Navigate Between Sections (Priority: P2)

**Goal**: Implement navigation between the different sections of the website.

**Independent Test**: The navigation menu should allow users to navigate between sections, and the URL should update accordingly.

### Implementation for User Story 2

- [X] T013 [US2] Create a `Navigation` component in `frontend/src/components/Navigation.tsx`.
- [X] T014 [US2] Implement the routing logic in `frontend/src/pages/profile/[section].tsx` to display the content of a specific section.
- [X] T015 [US2] Add smooth page transitions using Framer Motion when navigating between sections.
- [X] T016 [P] [US2] Ensure the active navigation link is highlighted.

---

## Phase 5: Polish & Cross-Cutting Concerns

- [X] T017 [P] Write unit tests for all created components.
- [ ] T018 [P] Write integration tests for the user stories.
- [ ] T019 [P] Optimize the application for performance (Lighthouse score of 90+).
- [ ] T020 [P] Ensure the website is fully responsive and works on all major devices.
- [ ] T021 [P] Ensure the website adheres to WCAG 2.1 AA accessibility standards.
- [ ] T022 [P] Update the `quickstart.md` with any new instructions.

---

## Dependencies & Execution Order

- **Phase 1** must be completed before **Phase 2**.
- **Phase 2** must be completed before **Phase 3 and 4**.
- **Phase 3 and 4** can be worked on in parallel.
- **Phase 5** should be started after **Phase 3 and 4** are complete.

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: Test User Story 1 independently.
5.  Deploy/demo if ready.

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3.  Add User Story 2 → Test independently → Deploy/Demo
4.  Each story adds value without breaking previous stories.