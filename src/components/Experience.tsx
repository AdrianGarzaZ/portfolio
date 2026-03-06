'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../data/experience';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline items reveal
      const items = gsap.utils.toArray<HTMLElement>('.gsap-timeline-item');

      items.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold font-outfit text-white mb-2">Professional Experience</h2>
        <p className="text-slate-400 font-jetbrains-mono text-sm tracking-wide">
          {/* Add text if necessary to describe experience here */}
        </p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="gsap-timeline-item relative pl-8 md:pl-12 group"
          >
            {/* Timeline Dot (Pulse on hover) */}
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
              <h3 className="text-2xl font-bold font-outfit text-slate-100 group-hover:text-white transition-colors">
                {exp.role}
              </h3>
              <span className="text-sm font-jetbrains-mono text-slate-500 border border-slate-800 bg-slate-900/50 px-3 py-1 rounded w-fit mt-2 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <p className="text-blue-400 font-jetbrains-mono font-medium mb-4">{exp.company}</p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-xs font-jetbrains-mono bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800 hover:border-slate-600 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}