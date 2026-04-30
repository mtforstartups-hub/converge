# Frontend Development Guidelines (Antigravity Rules)

When generating or modifying frontend code in this project, adhere strictly to the following styling, layout, and UX rules to maintain consistency with the existing premium dark-theme aesthetic.

## 1. Color Palette & Theming

- **Primary Backgrounds**: Rely on the defined custom properties in `globals.css`.
  - `bg-primary` (`#0a0f1c`) for main page backgrounds.
  - Deep slates and navys for cards, dropdowns, and containers (e.g., `bg-[#0c121e]`, `bg-[#0e1923]`, `bg-[#0d1b22]`).
- **Text Colors**: Use `text-font` (`#f4f1eb`) for primary text. Use opacities for visual hierarchy (e.g., `text-white/80`, `text-white/60`, `text-white/50`, `text-white/40`).
- **Accent Colors**: Use `bg-accent` (`#0d7d71`) for primary actions.
- **Borders**: Avoid solid, high-contrast borders. Use subtle, low-opacity borders (e.g., `border-white/10`, `border-accent/40`, `border-accent/60`).

## 2. Typography

- **Font Family**: The project uses `Space Grotesk` (`var(--font-space-grotesk)`). Do not introduce new font families unless explicitly requested.

- **Typography Scale & Usage**:
  - **Headings (e.g., h2)**:
    Use `text-3xl sm:text-4xl lg:text-5xl font-bold`
    → Primary section headings with strong visual weight.

  - **Sub-headings / Top Labels**:
    Use `text-sm md:text-base font-semibold`
    → Can be combined with `uppercase tracking-widest` when used as section labels.

  - **Body Text**:
    Use `text-sm` by default
    → For better readability on larger screens, use `text-sm md:text-base` when needed.

- **General Guidelines**:
  - Prefer **font weight and opacity** (`font-medium`, `font-semibold`, `text-white/70`, etc.) over large font-size jumps to create hierarchy.
  - Keep typography **clean, consistent, and restrained**—avoid unnecessary size variations.
  - Maintain good readability across breakpoints using responsive scaling (`sm:`, `md:`, `lg:`).

## 3. Spacing & Layout

- **Containers**: Use percentage-based or viewport-based max widths for responsiveness.
  - Standard wrapper pattern: `mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10`.
- **Flexbox/Grid**: Heavily utilize flexbox with the `gap` property (e.g., `flex gap-8 items-center`) and CSS Grid (`grid grid-cols-2 gap-x-6 gap-y-6`) for component alignment.
- **Padding/Margin**: Use precise fractional spacing where needed to match designs perfectly (e.g., `py-2.25`, `px-4.5`, `-mt-2`).

## 4. Interactions & Animations

- **Transitions**: Every interactive element MUST have a smooth transition.
  - Use `transition-colors`, `transition-all`, or `transition-transform`.
  - Standard duration/easing: `duration-200` or `duration-300`, often with `ease-linear`.
- **Hover Effects**:
  - Buttons: `hover:-translate-y-1 hover:shadow-lg`.
  - Cards/Interactive Items: `hover:bg-white/5`, `hover:bg-[#111e2a]`.
  - Text interactions: `group-hover/item:text-teal-400`, `group-hover/item:translate-x-1`.
- **Glow Effects**: Use customized neon-like box shadows for glowing elements on hover/active states (e.g., `shadow-[0_0_10px_rgba(45,212,191,0.6)]`).

## 5. UI/UX Patterns

- **Glassmorphism**: Use `backdrop-blur-md` combined with semi-transparent backgrounds (e.g., `bg-primary/95 border-white/20`) for floating elements, sticky headers, or modals.
- **Group Targeting**: Use Tailwind's `group` and `group-hover` extensively for complex component interactions.
  - ALWAYS name groups for nested components to avoid conflicts (e.g., `group/agent`, `group-hover/agent:bg-teal-400`).
- **Icons**: Use `lucide-react` for standard icons. Keep them appropriately sized (e.g., `size={14}`, `w-10 h-10 container`).
- **Responsiveness**: Ensure layout adapts gracefully across breakpoints. Use `hidden lg:flex` or `hidden lg:block` to switch between mobile and desktop navigation/layouts. Stack grid elements appropriately (e.g., `grid-cols-1 md:grid-cols-2`).
