# SOP: Component Architecture
**Goal:** Ensure all React components strictly follow the "Dark Mode Dashboard" design language and modular structure.

## 1. Structure
- Components reside in `src/components/`.
- Logic must be separated from presentation when possible.
- Use `framer-motion` for animations and `recharts` for visualization.

## 2. Styling Rules
- **ONLY Tailwind Utility Classes.**
- **Color Palette:**
  - Background: `bg-slate-950`
  - Text: `text-slate-100`, `text-slate-400`
  - Accents: `text-blue-400`, `bg-blue-500/10`
  - Borders: `border-slate-800`

## 3. Deployment Flow
- Every layout change must be verified via `docker run -it --rm -v "$(pwd):/app" -w /app -p 3000:3000 --entrypoint sh node:24-alpine -c "npm run dev -H 0.0.0.0"` before considered complete.
