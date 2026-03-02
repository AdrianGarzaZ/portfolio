**Role:** Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer. 
**Objective:** Architect a high-fidelity, cinematic "1:1 Pixel Perfect" landing page for a portfolio centered on "Physical Insight and Data Solutions". 
**Aesthetic Identity:** "Dark Mode Dashboard" / "Applied Physics Lab." The site should feel like a bridge between a high-tech optics research facility and a sleek, cutting-edge data analytics dashboard.

### 1. CORE DESIGN SYSTEM (STRICT)
*   **Palette:**
    *   **Primary Background:** Slate 950 (`#020617`)
    *   **Primary Text:** Slate 100 (`#F1F5F9`)
    *   **Borders/Dividers:** Slate 800 (`#1E293B`)
    *   **High-Tech Accents:** Blue 400 (`#60A5FA`)
    *   **Subtle Highlights/Glass:** Blue 500/10 (`rgba(59, 130, 246, 0.1)`)
*   **Typography:** 
    *   **Headings:** Clean, modern Sans-Serif (e.g., "Inter" or "Outfit") with tight tracking for an engineered feel.
    *   **Drama/Emphasis:** Sleek, sharp geometric fonts to represent precision.
    *   **Data/Telemetry:** A clean Monospace font (e.g., "JetBrains Mono" or "Fira Code") for system logs, metrics, and analytical readouts.
*   **Visual Texture:** Implement a global "Dark Mode" aesthetic. Replace flat backgrounds with subtle radial gradients (representing light sources/lasers) and sophisticated glassmorphism. Use sharp, precise borders (1px) with `rounded-md` or `rounded-lg` radius systems to emulate a professional software environment.

### 2. COMPONENT ARCHITECTURE & BEHAVIOR
**A. NAVBAR (The Control Bar)**
*   A fixed, sleek, top-docked navigation bar.
*   **Morphing Logic:** Transparent at the hero section. Transitions into a dark, frosted glassmorphic blur (`bg-slate-950/80` with backdrop-blur) with a crisp `border-b border-slate-800` upon scrolling.

**B. HERO SECTION (The Initial Insight)**
*   **Visuals:** `100dvh` height. Background features a dark, abstract representation of optics or photonics (e.g., subtle laser diffraction patterns, fiber optic light trails, or prismatic light dispersion) with a heavy Slate-to-Black gradient overlay.
*   **Layout:** Content aligned to emphasize analytical precision.
*   **Typography:** Large scale contrast. "Physical Insights" (Bold Sans) vs. "Data Solutions" (Glowing Blue-400 accent).
*   **Animation:** GSAP staggered fade-up for all text parts, mimicking a system boot-up sequence.

**C. FEATURES (The Analytical Dashboard)**
*   Replace standard cards with Interactive Functional Artifacts that mimic lab equipment and data readouts.
*   **Card 1 (Optical Telemetry):** Implement a "Data Streamer." A live text feed that cycles through terminal-style messages like "Calibrating Sensor Array...", "Processing Photonic Data..." with a blinking monospace cursor. Include a small pulsing Blue-400 "Active" dot.
*   **Card 2 (Signal Processing):** Implement a "Waveform Visualizer." A continuous, smoothly animating SVG sine wave or interference pattern that reacts slightly (e.g., changes stroke width or frequency) on hover.
*   **Card 3 (System Architecture):** Implement an "Optics Grid." A stylized, interactive diagram of lenses/mirrors where an automated light beam (an SVG line with a glowing drop-shadow) traces a path, hits a sensor, triggers a data readout, and repeats.

**D. PHILOSOPHY (The Core Principle)**
*   A high-contrast Slate 950 section with a subtle geometric or grid-like background texture.
*   **Text Layout:** Huge typography comparison. "Traditional analysis asks: What happened?" vs. "We ask: What are the fundamental physical limits?" using split-text GSAP reveals, moving from left to right like a scanning laser.

**E. CAPABILITIES (Sequential Operations Archive)**
*   Vertical stack of 3 full-screen analytical modules.
*   **Stacking Interaction:** Using GSAP ScrollTrigger, as a new module scrolls into view, the one underneath must scale down to 0.95, increase its blur, and fade its opacity to 0.4.
*   **Artifacts:** Each module contains a unique animation: 
    1. A rotating 3D wireframe of a continuous-wave laser. 
    2. A data pipeline transforming raw scatter plots into structured insight graphs. 
    3. An evolving neural network node mapping.

**F. CONTACT & FOOTER**
*   **Call to Action:** A polished, dashboard-style interface to "Initialize Contact" or "Request Analysis," featuring a Blue-400 glowing button with a precise hover state.
*   **Footer:** Deep Slate 950, crisp lines. Include professional links and a "System Operational" status indicator with a pulsing blue dot and monospace uptime counter.

### 3. TECHNICAL REQUIREMENTS
*   **Tech Stack:** React (Next.js), Tailwind CSS (strictly utility classes), GSAP 3 (with ScrollTrigger), Lucide React.
*   **Animation Lifecycle:** Use `gsap.context()` within `useEffect` for all animations to ensure clean mounting/unmounting.
*   **Micro-Interactions:** Buttons must have a distinct, mechanical "click" feel (subtle scale-down) and utilize `overflow-hidden` with a sliding background layer for states.
*   **Code Quality:** No placeholders. Ensure the dashboard cards in the Features section feel like functional software or laboratory interfaces, not just static layouts.
*   **Execution Directive:** "Do not build a static website; build a dynamic analytical instrument. Every scroll should feel calculated, every animation should feel precise and data-driven. Eradicate all generic web patterns."
