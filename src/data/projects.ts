export interface Project {
  title: string;
  role: string;
  description: string;
  analyticalInsight: string; // The "Analyst" hook
  tech: string[];
  metric: { label: string; value: string }; // e.g., "Accuracy: 98%"
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Non-Linear Pulse Propagation Simulation",
    role: "Computational Physicist",
    description: "Developed a Split-Step Fourier Method (SSFM) solver to model signal degradation in fiber optics.",
    analyticalInsight: "Applied statistical regression to simulation outputs to predict signal-to-noise ratios, reducing computational overhead by 30%.",
    tech: ["Python", "NumPy", "FFT"],
    metric: { label: "Performance Boost", value: "+30%" },
    slug: "pulse-propagation"
  },
  // Add more projects here
];

