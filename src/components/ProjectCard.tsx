import { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
              {project.role}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="bg-slate-950 border-l-2 border-blue-500 p-4 mb-6">
            <p className="text-sm text-slate-300 italic">
              <strong className="text-blue-400 not-italic">Analytical Insight:</strong> {project.analyticalInsight}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-32 flex flex-col items-center justify-center border border-slate-800 rounded-xl p-4 bg-slate-950/50">
          <span className="text-3xl font-bold text-blue-400">{project.metric.value}</span>
          <span className="text-[10px] text-slate-500 uppercase text-center mt-1">{project.metric.label}</span>
        </div>
      </div>
    </div>
  );
}