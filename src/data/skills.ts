export interface Skill {
  category: string;
  physicsContext: string;
  analystContext: string;
  tools: string[];
}

export const skills: Skill[] = [
  {
    category: "Optical Engineering & Simulation",
    physicsContext: "Waveguide Design & Physical Optics",
    analystContext: "System Optimization & Constraint Logic",
    tools: ["Ansys Lumerical", "Zemax (OpticStudio)", "FDTD/MODE", "Laser Physics"]
  },
  {
    category: "Computational Physics",
    physicsContext: "Signal Processing & Interferometry",
    analystContext: "Algorithm Development & Automation",
    tools: ["Python", "MATLAB", "Julia", "Genetic Algorithms"]
  },
  {
    category: "Data Science & Engineering",
    physicsContext: "Experimental Data Acquisition",
    analystContext: "ETL Pipelines, Dashboarding & SQL",
    tools: ["Pandas/NumPy", "SQL (MySQL)", "Flask", "Plotly Dash", "Git"]
  }
];