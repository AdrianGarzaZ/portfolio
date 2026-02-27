# 🌌 Project Constitution (gemini.md)

## Data Schemas
- **Input:** Static TypeScript data files (`src/data/skills.ts`, `src/data/projects.ts`, `src/data/experience.ts`) and local academic/resume PDFs (`CV/` directory).
- **Output:** Statically generated Single Page Application (SPA) components and UI interactions. Payload deployed to Vercel.

## Behavioral Rules
- **Role:** System Pilot
- **Priority:** Reliability over speed.
- **Rule:** Never guess at business logic.
- **Structure:** 3-Layer Architecture (SOPs, Context Routing, Tools).
- **Rule (Data-First):** No tool coding until data schema is defined.
- **Self-Healing Loop:** Error -> Analyze -> Patch -> Test -> Update SOP.
- **Design Language:** "Dark Mode Dashboard" aesthetic. Slate palette (`bg-slate-950`, `text-slate-100`, `border-slate-800`) with high-tech blue accents (`text-blue-400`, `bg-blue-500/10`).
- **Technical Constraints:** Strict TypeScript (`.tsx`, `.ts`). Run dev server with `next dev -H 0.0.0.0`. Strictly use Tailwind utility classes (no standard CSS files).
- **Tone & Copywriting:** Professional, analytical, and objective. Frame physical research through the lens of data science.
- **Architecture:** Modular components. Separate logic/data from UI. Mobile-first responsive.

## Architectural Invariants
- `architecture/`: Markdown SOPs (Layer 1).
- `Navigation Layer`: Internal routing mechanism (Layer 2).
- `tools/`: Atomic, deterministic Python scripts (Layer 3).
- `.tmp/`: For intermediate files only.
- Payload is not complete until delivered to cloud environment.
