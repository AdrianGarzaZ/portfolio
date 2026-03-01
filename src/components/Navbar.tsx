'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Morphing logic: transparent at top, frosted glass on scroll
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: {
                    targets: navRef.current,
                    className: 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-slate-950/20'
                },
                onToggle: (self) => {
                    if (!self.isActive) {
                        // Revert to transparent when back at the top
                        gsap.to(navRef.current, { backgroundColor: 'transparent', borderBottomColor: 'transparent', duration: 0.3 });
                    } else {
                        // Transition to glassmorphic
                        gsap.to(navRef.current, { backgroundColor: 'rgba(2, 6, 23, 0.8)', borderBottomColor: 'rgba(30, 41, 59, 1)', duration: 0.3 });
                    }
                }
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-bold text-xl tracking-tight text-slate-100 flex items-center gap-2">
                            <span className="text-blue-400">{'//'}</span> AGZ
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <a href="#insight" className="text-slate-300 hover:text-white transition-colors">Insight</a>
                        <a href="#capabilities" className="text-slate-300 hover:text-white transition-colors">Capabilities</a>
                        <a href="#archive" className="text-slate-300 hover:text-white transition-colors">Archive</a>
                        <a
                            href="#contact"
                            className="px-4 py-2 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all"
                        >
                            Initialize Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
