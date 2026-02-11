export interface Skill {
  category: string;
  physicsContext: string;
  analystContext: string;
  tools: string[];
}

export const skills: Skill[] = [
  {
    category: "Modeling & Simulation",
    physicsContext: "Stochastic & Deterministic Physical Systems",
    analystContext: "Predictive Analytics & Risk Modeling",
    tools: ["Python", "MATLAB", "C++"]
  },
  {
    category: "Data Transformation",
    physicsContext: "Signal Processing & Noise Filtering",
    analystContext: "ETL Pipelines & Data Cleaning",
    tools: ["Pandas", "NumPy", "SciPy"]
  },
  {
    category: "Optimization",
    physicsContext: "Optical Path & Waveguide Optimization",
    analystContext: "Operational Efficiency & Logic Tuning",
    tools: ["Genetic Algorithms", "PyTorch"]
  }
];