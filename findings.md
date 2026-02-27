# Findings

## Context & Research
- **Working directory:** `d:\2026-website`.
- **Existing project structure:** Next.js website (App Router, Tailwind CSS, TypeScript).
- **User Profile:** Adrián Garza Zapata, MSc Photonics Candidate, Data Analyst Profile.

## Constraints
- Use TypeScript strictly.
- Pure Tailwind CSS (no custom CSS files).
- Dev server must run with `next dev -H 0.0.0.0`.
- All content is statically generated from `src/data/` or referenced from local PDFs in `CV/`.

## North Star
Build a high-performance, interactive Next.js portfolio serving as a "translation bridge" from photonics/engineering physics to Data Analyst/Computational Physicist. 

## Integrations
- GitHub to Vercel (CI/CD).
- Framer Motion, Recharts/Plotly.js, Tailwind CSS.
- Vercel Web Analytics.
- No external API required for contact (mailto link only).
