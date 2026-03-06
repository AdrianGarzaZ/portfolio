export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
}

export const experiences: Experience[] = [
    
    {
        company: "ILL: Grenoble, France",
        role: "Computational Imaging & Scientific Software Intern",
        period: "March 2026 - August 2026",
        description: "Building Python based scientific data pipelines and computational imaging tools for neutron scattering experiments on the D4 diffractometer, enabling automated processing and visualization of large experimental datasets.",
        tags: ["Data processing", "Python", "Computational Imaging"]
    },


    {
        company: "Laboratoire Hubert Curien: Saint-Étienne, France",
        role: "Machine Learning for Optics Research Intern",
        period: "June 2025 - September 2025",
        description: "Collaborated with TOPPAN Security on laser processing techniques for security documents. Developed Python clustering frameworks to optimize color reproduction and visualize results.",
        tags: ["Research", "Machine Learning", "Dashboards"]
    },
    {
        company: "Lanax: Monterrey, México",
        role: "Data Engineering Intern",
        period: "August 2023 - September 2024",
        description: "Led data infrastructure development. Built MySQL databases and Flask APIs to feed climate data into machine learning models.",
        tags: ["SQL", "ETL", "Flask API"]
    },
    {
        company: "ITESM: Monterrey, México",
        role: "Simulation and Research Assistant",
        period: "August 2023 - December 2023",
        description: "Simulated waveguide geometries for optical coherence tomography applications. Automated phase-matching analysis using MATLAB scripts and analyzed improvements in resolution.",
        tags: ["Ansys Lumerical", "Simulation", "Automation"]
    }
];
