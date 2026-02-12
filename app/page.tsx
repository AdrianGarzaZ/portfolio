import { projects } from '../src/data/projects';
import ProjectCard from '../src/components/ProjectCard';
import SkillBridge from '../src/components/SkillBridge'


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Engineering <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Insight</span>.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          MSc Photonics student leveraging high-level physics simulations to solve 
          complex analytical and computational problems.
        </p>
      </section>

      {/* The Bridge Component */}
      <SkillBridge />

      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Simulation Labs</h2>
          <p className="text-slate-400">Case studies in computational modeling and data extraction.</p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}