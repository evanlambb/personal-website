# Portfolio UI/UX Style Instructions

## 1. Design Philosophy & Vibe
- **Style:** Earthy, sleek, flat design, high-contrast minimalism.
- **Vibe:** Technical, mature, highly readable, and functional.
- **Strict Anti-Patterns:** NEVER use drop shadows (`box-shadow`), gradients, neon colors, or any shades of purple. Do not over-engineer animations.

## 2. Color Palette (Palette A: The Technical Minimalist)
Always use the following hex codes for styling. Implement these as CSS variables or framework configuration (e.g., Tailwind config) and use them strictly according to the 60-30-10 rule.

- `--color-bg-main`: `#F4F4F0` (Alabaster / Off-White) - Use for the main body background (60%).
- `--color-text-primary`: `#2C312E` (Dark Slate) - Use for all primary text, headings, icons, and structural borders (30%).
- `--color-surface`: `#EBEBE6` (Soft Stone) - Use for project card backgrounds, input fields, or secondary containers.
- `--color-accent`: `#B85C38` (Muted Terracotta) - Use strictly for primary call-to-action buttons, active links, or key highlight tags (10%).

## 3. Typography (Pairing 1: The Modern Editorial)
Import these from Google Fonts and apply them strictly to the following elements:
- **Headings (h1, h2, h3, h4):** `Inter`, sans-serif. Use Semi-Bold (600) or Bold (700) weights.
- **Body Text (p, li, span):** `Lora`, serif. Use Regular (400) for high readability in long-form technical text.
- **Code & Tags (code, pre, .badge):** `JetBrains Mono`, monospace. Use for technical metadata, tech stack tags, or code snippets.

## 4. Layout & Spacing constraints
- **Container Width:** Constrain main content layout to a `max-width` of `1200px` with `margin: 0 auto` to center it.
- **Section Padding:** Use generous white space. Top and bottom padding for main page sections should be `96px` or `120px` (e.g., `py-24` or `py-32` in Tailwind).
- **Grid/Flex Gaps:** Spacing between project cards or UI elements should be consistently `24px` or `32px` (`gap-6` or `gap-8`).

## 5. UI Element Rules
- **Depth & Separation:** Because drop shadows are forbidden, achieve depth using 1px solid borders (`border: 1px solid var(--color-text-primary)`) or by using the `--color-surface` background color against the `--color-bg-main` background.
- **Buttons:** Keep buttons flat. Use the `--color-accent` background with the background color (`#F4F4F0`) for the text. Use a simple opacity shift or a 1px border for hover states.
- **Cards:** Project containers should be flat rectangles (slight `border-radius` of 4px-8px is acceptable, but sharp corners are also fine). Use a 1px solid border or the `--color-surface` fill to define the card area.