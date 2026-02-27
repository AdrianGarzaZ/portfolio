import { projects } from '../src/data/projects';
import SkillBridge from '../src/components/SkillBridge';
import ProjectCard from '../src/components/ProjectCard';
import Experience from '../src/components/Experience';
import AnalyticsChart from '../src/components/AnalyticsChart';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center max-w-5xl mx-auto">
        <div className="inline-block mb-4 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-mono">
          MSc Photonics Candidate • Data Analyst Profile
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Translating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Physics</span> into <span className="text-slate-100">Data</span>.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          I bridge the gap between complex optical simulations and production-grade data engineering.
          Currently optimizing laser processes at Laboratoire Hubert Curien.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            View Analytics Work
          </a>
          <a href="mailto:adriangarza.int@gmail.com" className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg font-medium transition-colors">
            Contact Me
          </a>
        </div>
      </section>

      {/* Skills Component */}
      <SkillBridge />

      {/* Analytics Chart */}
      <AnalyticsChart />

      {/* Experience Timeline */}
      <Experience />

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-24 border-t border-slate-900">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-slate-400 max-w-2xl">
            Selected work demonstrating end-to-end capabilities: from physical theory to SQL pipelines and Python dashboards.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© 2026 Adrián Garza Zapata. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}