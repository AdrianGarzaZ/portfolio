'use client';

import { projects } from '../src/data/projects';
import SkillBridge from '../src/components/SkillBridge';
import ProjectCard from '../src/components/ProjectCard';
import Experience from '../src/components/Experience';
import AnalyticsChart from '../src/components/AnalyticsChart';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">

      {/* Hero Section */}
      <section className="relative pt-28 pb-24 px-4 text-center max-w-4xl mx-auto overflow-hidden">

        {/* Ambient glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Portrait */}
        <motion.div
          className="flex justify-center mb-7"
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
        >
          <div className="relative">
            {/* Soft glow ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500/30 via-emerald-500/15 to-transparent blur-md" />
            <div className="w-40 h-40 md:w-52 md:h-52 relative rounded-full overflow-hidden border border-slate-700/60 shadow-2xl shadow-blue-500/20 z-10">
              <Image
                src="/images/portrait.jpeg"
                alt="Adrián Garza Zapata"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight"
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
        >
          Adrián Garza Zapata
        </motion.h1>

        {/* Degree badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 border border-blue-500/25 rounded-full bg-blue-500/8 text-blue-400 text-sm font-mono tracking-wide"
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
        >
          BSc Engineering Physics&nbsp;&nbsp;·&nbsp;&nbsp;MSc Physics
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex justify-center gap-4 mb-9"
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adrian-garza-zapata-5320a324a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900 hover:border-blue-500/60 hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.973 1.973 0 1 1 0-3.946 1.973 1.973 0 0 1 0 3.946zm1.706 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AdrianGarzaZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900 hover:border-slate-400/60 hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:adriangarza.int@gmail.com"
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900 hover:border-emerald-500/50 hover:bg-emerald-500/8 text-slate-400 hover:text-emerald-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight"
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Physical Insights</span>
          {' '}and{' '}
          <span className="text-slate-100">Data Solutions</span>.
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-16 h-px mx-auto mb-5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
          custom={4.5} initial="hidden" animate="visible" variants={fadeUp}
        />

        {/* Bio */}
        <motion.p
          className="text-[1.05rem] text-slate-400 max-w-xl mx-auto leading-relaxed"
          custom={5} initial="hidden" animate="visible" variants={fadeUp}
        >
          Hi! I'm a senior M.Sc. student in Photonics with a specialization in Machine Learning, graduated from Tecnológico de Monterrey with a B.Sc. in Engineering Physics. I have a strong programming and analytical background,focused on bridging complex physical problems with data driven computational solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-4 flex-wrap"
          custom={6} initial="hidden" animate="visible" variants={fadeUp}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-lg font-medium transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5"
          >
            View Analytics Work
          </a>
          <a
            href="/CV/CV_AdrianGarza_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-slate-100 px-7 py-3 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-60">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            CV
          </a>
        </motion.div>
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
        <p>© 2026 Adrián Garza Zapata. Built with Next.js &amp; Tailwind.</p>
      </footer>
    </main>
  );
}