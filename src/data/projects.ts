export interface Project {
  title: string;
  role: string;
  description: string;
  analyticalInsight: string; 
  tech: string[];
  metric: { label: string; value: string };
  slug: string;
  repoUrl?: string; // Placeholder for future links
}

export const projects: Project[] = [
  {
    title: "Metasurface Color Reproduction Framework",
    role: "Research Intern (Lab Hubert Curien)",
    description: "Developed a clustering framework to optimize laser printing parameters for TOPPAN Security, translating complex physical color interactions into reproducible data points.",
    analyticalInsight: "Implemented Hierarchical Clustering with a custom distance metric, utilizing vectorization to reduce computational cost.",
    tech: ["Python", "Scikit-Learn", "Plotly Dash", "Parallel Computing"],
    metric: { label: "Hull Vol. Increase", value: "+20%" },
    slug: "metasurface-clustering"
  },
  {
    title: "Climate Data Infrastructure & ETL",
    role: "Data Engineer Intern (Lanax)",
    description: "Built the data backbone for a climate analytics startup. Scraped, cleaned, and stored historical climate data for ML model consumption.",
    analyticalInsight: "Designed end-to-end ETL pipelines and a Flask API to serve clean data to AI models, handling thousands of records via MySQL.",
    tech: ["MySQL", "Flask", "Web Scraping", "ETL Pipelines"],
    metric: { label: "Science Fair", value: "3rd Place" }, // "Mapping the future of smart farming"
    slug: "climate-etl"
  },
  {
    title: "Photon Pair Source Optimization",
    role: "Research Assistant (Tec de Monterrey)",
    description: "Designed photon-pair sources for Optical Coherence Tomography (OCT) based on Spontaneous Four-Wave Mixing (SFWM).",
    analyticalInsight: "Automated dispersion and phase-matching analysis to maximize bandwidth, treating optical mode solving as a multi-variable optimization problem.",
    tech: ["Lumerical FDTD", "MATLAB", "Nonlinear Optics"],
    metric: { label: "Outcome", value: "High Res" },
    slug: "photon-pair-source"
  }
];