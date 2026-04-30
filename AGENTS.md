<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Client Components
Don't make the whole page or any component unnecessarily a client component. Create separate components if needed and use client components as little as possible. Isolate state and interactiveness to small leaf components.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:frontend-guidelines -->
# Frontend Styling & UX Rules
For any frontend work (components, pages, styling), you MUST read and follow the guidelines defined in `FRONTEND_RULES.md` in the root of this repository. This file contains critical rules for colors, typography, spacing, transitions, and the project's overall design system.
<!-- END:frontend-guidelines -->
