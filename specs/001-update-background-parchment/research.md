# Research: Update Background to Parchment Style

## Decision: Image Placement and Styling Method

**Decision**: The `parchment.jpg` image will be placed in the `frontend/public/` directory, and its styling will be applied using CSS within `frontend/src/app/globals.css` or directly in the top-level `frontend/src/app/layout.tsx` component.

**Rationale**:
-   **Image Placement**: `frontend/public/` is the canonical location for static assets in Next.js applications. Files placed here are served directly from the root of the application, making them easily accessible via their relative paths (e.g., `/parchment.jpg`). This simplifies access and avoids additional build configurations for asset handling.
-   **Styling Method**: Applying background styles through global CSS (e.g., `frontend/src/app/globals.css`) or directly on the main layout component (`frontend/src/app/layout.tsx`) ensures that the background is consistently applied across all pages of the application. This approach aligns with best practices for global styling and simplifies maintenance, especially when leveraging frameworks like Tailwind CSS for responsive adjustments.

**Alternatives Considered**:
-   **Placing `parchment.jpg` in `frontend/src/assets/` or similar**: This approach would necessitate importing the image into components, potentially leading to unnecessary bundling or more complex asset management for a globally used static asset. The `public/` directory is designed precisely for such use cases.
-   **Applying background styles inline within components**: While possible, inline styles are less maintainable for global effects and make it harder to manage responsive behaviors and pseudo-classes. A dedicated CSS approach offers better separation of concerns and reusability.
