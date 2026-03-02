'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stacking interaction: scale down and fade slightly as it scrolls up
      gsap.to(cardRef.current, {
        scale: 0.95,
        opacity: 0.4,
        filter: "blur(4px)",
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 w-full group bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 shadow-xl"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-jetbrains-mono tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-sm">
              [{project.role}]
            </span>
          </div>

          <h3 className="text-3xl font-outfit font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-400 mb-6 leading-relaxed font-sans text-base">
            {project.description}
          </p>

          <div className="bg-slate-950/80 border-l-2 border-blue-500/70 p-5 mb-8 font-jetbrains-mono">
            <p className="text-sm text-slate-300 italic">
              <strong className="text-blue-400 not-italic font-medium">{'// Analytical Insight:'}</strong> <br />
              {project.analyticalInsight}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-[11px] font-jetbrains-mono font-medium text-slate-500 uppercase tracking-widest bg-slate-950 px-2 py-1 rounded border border-slate-800">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-40 flex flex-col items-center justify-center border border-slate-800 rounded-xl p-6 bg-slate-950/40 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-4xl font-bold font-outfit text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] z-10">{project.metric.value}</span>
          <span className="text-[10px] text-slate-500 font-jetbrains-mono uppercase text-center mt-2 z-10">{project.metric.label}</span>
        </div>
      </div>
    </div>
  );
}