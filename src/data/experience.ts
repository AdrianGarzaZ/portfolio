export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
}

export const experiences: Experience[] = [
    {
        company: "Laboratoire Hubert Curien (France)",
        role: "Research Intern - Functional Materials",
        period: "June 2025 - Sept 2025",
        description: "Collaborated with TOPPAN Security on laser processing. Developed Python clustering frameworks to optimize color reproduction.",
        tags: ["Research", "Clustering", "Dashboards"]
    },
    {
        company: "Lanax (Mexico)",
        role: "Tech Startup Intern - Data Engineering",
        period: "Aug 2023 - Sept 2024",
        description: "Led data infrastructure development. Built MySQL databases and Flask APIs to feed climate data into machine learning models.",
        tags: ["SQL", "ETL", "Flask API"]
    },
    {
        company: "Tecnológico de Monterrey (Mexico)",
        role: "Research Assistant - Photonics",
        period: "Aug 2023 - Dec 2023",
        description: "Simulated waveguide geometries for OCT applications. Automated phase-matching analysis using MATLAB scripts.",
        tags: ["Lumerical", "Simulation", "Automation"]
    }
];
