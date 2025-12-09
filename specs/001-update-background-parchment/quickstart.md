# Quickstart: Update Background to Parchment Style

This guide outlines the steps to quickly set up and verify the "Update Background to Parchment Style" feature.

## Prerequisites

-   Node.js and npm (or yarn) installed.
-   Git for cloning the repository.

## Setup & Verification

1.  **Clone the repository (if not already done):**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Ensure `parchment.jpg` is present:**
    Verify that the `parchment.jpg` image file is located in the `frontend/public/` directory. If it's missing, place it there.

3.  **Install frontend dependencies:**
    Navigate to the `frontend` directory and install the project dependencies:
    ```bash
    cd frontend
    npm install
    ```

4.  **Run the Next.js development server:**
    Start the development server:
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:3000` (or another port if 3000 is occupied).

5.  **Verify the background:**
    Open your web browser and navigate to `http://localhost:3000`. Observe the application's background. It should display the `parchment.jpg` image, covering the entire viewport, and adapting responsively if you resize your browser window.

    Check different pages of the application to ensure the background is applied consistently.

6.  **Expected Outcome:**
    The main application background should be visibly updated to reflect the vintage parchment style, as specified in `specs/001-update-background-parchment/spec.md`.
