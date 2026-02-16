'use client';
import { motion } from 'framer-motion';

const experiences = [
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

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-slate-100">Professional History</h2>
      
      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <span className="text-sm font-mono text-slate-500">{exp.period}</span>
            </div>
            
            <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
            <p className="text-slate-400 mb-4 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}