# Frontend Development Guidelines (Antigravity Rules)

When generating or modifying frontend code in this project, adhere strictly to the following styling, layout, and UX rules to maintain consistency with the existing premium dark-theme aesthetic.

## 1. Color Palette & Theming

Rely exclusively on the six defined custom properties in `globals.css` according to their brand roles. Do not use arbitrary colors or old variables (like `primary`, `accent`, `font`).

- **Midnight (`#0A0F1C`)**: `bg-midnight` / `text-midnight`
  - **Role**: Primary brand persona.
  - **Uses**: Hero backgrounds, full-bleed panels, navigation bars, footers.

- **Deep Slate (`#162032`)**: `bg-deep-slate` / `text-deep-slate`
  - **Role**: Secondary brand surface.
  - **Uses**: Cards & modules, side panels, tables & charts, section breaks.

- **Parchment (`#F4F1EB`)**: `bg-parchment` / `text-parchment`
  - **Role**: Primary editorial surface.
  - **Uses**: Long-form content, page backgrounds, print stock, reports & docs.

- **Steel (`#8A9BAE`)**: `bg-steel` / `text-steel` / `border-steel`
  - **Role**: Supporting neutral.
  - **Uses**: Icons & strokes, dividers, disabled states, subdued text.

- **Verified (`#0B6B60`)**: `bg-verified` / `text-verified` / `border-verified`
  - **Role**: Single accent (one per view).
  - **Uses**: CTAs & buttons, key highlights, links & indicators, active states.

- **Charcoal (`#2D3D4F`)**: `bg-charcoal` / `text-charcoal` / `border-charcoal`
  - **Role**: Structural neutral.
  - **Uses**: Headings on light backgrounds, body text (secondary), icons & UI chrome, borders & grids.

- **Usage Notes**: 
  - Use opacities for visual hierarchy (e.g., `text-parchment/80`, `bg-midnight/90`).
  - Avoid solid, high-contrast borders. Use subtle, low-opacity borders (e.g., `border-white/10`, `border-verified/40`).

## 2. Typography

The project strictly uses four distinct typefaces, each with a defined role and zero overlap.

- **Display / Brand Statements**: `Neue Haas Grotesk Display Pro` (`font-display` / `var(--font-neue-haas)`)
  - **Sizes**: 36–56px (screen)
  - **Weights**: Regular (55 Roman) and Bold (75 Bold) only.
  - **Use for**: Brand statements, section headlines, investor decks, cover elements, homepage heroes.

- **Editorial / Long-form**: `Tiempos Text` (`font-serif` / `var(--font-tiempos)`)
  - **Sizes**: 16–21px (screen)
  - **Weights**: Regular and Semibold only.
  - **Use for**: Case studies, long-form articles, investor reports, documentation.

- **UI / Interface Copy**: `DM Sans` (`font-sans` / `var(--font-dm-sans)`)
  - **Sizes**: 14–18px (screen)
  - **Weights**: Regular and Medium only.
  - **Use for**: Product UI, navigation, labels, body text in product contexts, email, case study captions, sales collateral.

- **Data / Technical References**: `IBM Plex Mono` (`font-mono` / `var(--font-ibm-plex)`)
  - **Sizes**: 13–16px (screen)
  - **Weights**: Regular only.
  - **Use for**: Loan IDs, HEX codes, API references, audit trails, entity references.

- **General Typography Guidelines**:
  - **Zero Overlap**: Stick strictly to the defined sizes, weights, and roles. Do not use UI fonts for Brand Statements, etc.
  - Maintain good readability across breakpoints using responsive scaling (`text-sm md:text-base`, etc.) but stay within the defined pixel ranges for each font.
  - *Note: Print-specific sizes from the brand guidelines (e.g., 10-12pt) are ignored for frontend development; adhere only to the screen px sizes.*

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
  - Cards/Interactive Items: `hover:bg-white/5`, `hover:bg-deep-slate/50`.
  - Text interactions: `group-hover/item:text-verified`, `group-hover/item:translate-x-1`.
- **Glow Effects**: Use customized neon-like box shadows for glowing elements on hover/active states (e.g., `shadow-[0_0_10px_rgba(11,107,96,0.6)]` using Verified color).

## 5. UI/UX Patterns

- **Glassmorphism**: Use `backdrop-blur-md` combined with semi-transparent backgrounds (e.g., `bg-midnight/95 border-white/20`) for floating elements, sticky headers, or modals.
- **Group Targeting**: Use Tailwind's `group` and `group-hover` extensively for complex component interactions.
  - ALWAYS name groups for nested components to avoid conflicts (e.g., `group/agent`, `group-hover/agent:bg-verified`).
- **Icons**: Use `lucide-react` for standard icons. Keep them appropriately sized (e.g., `size={14}`, `w-10 h-10 container`).
- **Responsiveness**: Ensure layout adapts gracefully across breakpoints. Use `hidden lg:flex` or `hidden lg:block` to switch between mobile and desktop navigation/layouts. Stack grid elements appropriately (e.g., `grid-cols-1 md:grid-cols-2`).
