'use client';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function SkillBridge() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          The Physics-to-Analytics Bridge
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-white border-b border-slate-700 pb-2">
                {skill.category}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Physics Foundation</p>
                  <p className="text-slate-300">{skill.physicsContext}</p>
                </div>

                <div className="py-2 flex justify-center">
                  <span className="text-blue-500/50">↓</span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Analytical Value</p>
                  <p className="text-slate-100 font-medium">{skill.analystContext}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skill.tools.map(tool => (
                  <span key={tool} className="text-[10px] bg-slate-900 px-2 py-1 rounded border border-slate-700 text-slate-400">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}