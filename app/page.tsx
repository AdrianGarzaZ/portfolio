'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Navbar from '../src/components/Navbar';
import FeaturesDashboard from '../src/components/FeaturesDashboard';
import Philosophy from '../src/components/Philosophy';
import Experience from '../src/components/Experience';
import ProjectCard from '../src/components/ProjectCard';
import { projects } from '../src/data/projects';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-up for hero elements
      gsap.fromTo(
        '.gsap-hero-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 font-sans">
      <Navbar />

      {/* Hero Section (The Initial Insight) */}
      <section
        ref={heroRef}
        id="main"
        className="relative min-h-[100dvh] flex flex-col justify-center items-center px-4 pt-20 pb-16 overflow-hidden"
      >
        {/* Optical Background Texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-slate-700/10 rounded-full blur-[100px]" />
          {/* Subtle noise overlay (pseudo-glass) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="max-w-4xl mx-auto w-full text-center relative z-10">

          {/* Portrait Container */}
          <div className="gsap-hero-item flex justify-center mb-8 relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent blur-xl opacity-50" />
            <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-500/10">
              <Image
                src="/images/portrait.jpeg"
                alt="Adrián Garza Zapata"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="gsap-hero-item text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white font-outfit">
            Adrián Garza Zapata
          </h1>

          <div className="gsap-hero-item inline-flex items-center gap-4 mb-8 px-6 py-3 border border-slate-800 rounded-full bg-slate-900/50 backdrop-blur-sm shadow-sm md:px-8 md:py-3.5">
            <span className="flex items-center gap-2.5 text-blue-400 text-sm md:text-base font-jetbrains-mono tracking-wide">
              <Image src="/images/itesm-aesthetic.svg" alt="Tec de Monterrey" width={20} height={20} className="opacity-90 grayscale-[0.2]" />
              BSc Engineering Physics
              <span className="text-slate-600 mx-1.5 md:mx-3">|</span>
              <Image src="/images/eu.svg" alt="European Union" width={24} height={16} className="opacity-90 rounded-[2px]" />
              MSc Physics and Machine Learning
            </span>
          </div>

          {/* Headline */}
          <h2 className="gsap-hero-item text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight font-outfit">
            <span className="text-slate-300">Physical Insights</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Data Solutions.
            </span>
          </h2>

          <div className="gsap-hero-item w-24 h-px mx-auto mb-10 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Action Buttons */}
          <div className="gsap-hero-item flex flex-col sm:flex-row justify-center items-center gap-5 mb-12 font-jetbrains-mono text-sm uppercase tracking-wider">
            <a
              href="#highlights"
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all duration-200 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] flex justify-center items-center font-medium"
            >
              Case Studies
            </a>
            <a
              href="/CV/CV_AdrianGarza_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm border border-slate-700 hover:border-slate-500 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-200 flex justify-center items-center gap-3 font-medium"
            >
              <FileText className="w-4 h-4" />
              CV
            </a>
          </div>

          {/* Social Links Telemetry */}
          <div className="gsap-hero-item flex justify-center gap-6">
            <a href="https://linkedin.com/in/adrian-garza-zapata-5320a324a/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/10 rounded-md">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/AdrianGarzaZ" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-200 transition-colors p-2 hover:bg-slate-800 rounded-md">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:adriangarza.int@gmail.com" className="text-slate-500 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/10 rounded-md">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* Analytical Dashboard */}
      <FeaturesDashboard />

      {/* The Manifesto */}

      {/* Experience Timeline */}
      <div id="experience" className="py-12 bg-slate-950 border-t border-slate-900">
        <Experience />
      </div>

      {/* Projects Section */}
      <div id="highlights" className="py-24 bg-[linear-gradient(to_bottom,theme(colors.slate.950),theme(colors.slate.900))] border-t border-slate-800/50">
        <section className="max-w-5xl mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit text-white">Sequential Operations Archive</h2>
            <p className="text-blue-400 max-w-2xl mx-auto font-jetbrains-mono text-sm uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-sm w-fit">
              [LOG]: Documenting physical theory translated into SQL pipelines and Python dashboards.
            </p>
          </div>

          <div className="space-y-32 md:space-y-40 pb-32">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-20 pb-10 px-4 relative overflow-hidden">
        {/* Abstract curve top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-outfit font-bold text-white mb-6"></h2>
            <a href="mailto:adriangarza.int@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white rounded-lg font-medium transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              <Mail className="w-5 h-5" />
              Get in contact
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800/60 pt-8 mt-8">

            <p className="text-slate-500 text-sm font-jetbrains-mono text-center md:text-right">
              © {new Date().getFullYear()} AGZ.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}