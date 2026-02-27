# SOP: Static Data Pipeline
**Goal:** Translate local Markdown or JSON/TS inputs into static analytical components for the website.

## 1. Input Source
- Data resides directly in `src/data/*.ts` or inside `CV/*.pdf`.

## 2. Process Flow
1. **Extraction (Tools Layer):** (If necessary for future text mining) python scripts in `tools/` extract bullet points from CVs to `.tmp/`.
2. **Transformation:** Data must be manually or programmatically mapped to the static TypeScript files using the "Dark Mode Dashboard" aesthetic variables (e.g., categorizing physics simulations under "Data Engineering").
3. **Load (Next.js Layer):** The Next.js frontend statically generates the UI components consuming the TypeScript data at build time.

## 3. Rules & Edge Cases
- **No APIs:** The website must operate entirely without API calls during runtime.
- **Fail-safe:** If a tool script fails, do not proceed to update UI. Update this SOP with the error reasoning.
