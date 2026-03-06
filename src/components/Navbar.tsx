'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [navState, setNavState] = useState<'full' | 'hidden' | 'collapsed'>('full');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const keySkills = document.getElementById('key-skills');

            if (scrollY < 50) {
                setNavState('full');
            } else if (keySkills && keySkills.getBoundingClientRect().top <= 100) {
                setNavState('collapsed');
            } else {
                setNavState('hidden');
            }
        };

        handleScroll();

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 0,
                end: "max",
                onUpdate: handleScroll
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center w-full transition-transform duration-500 ease-in-out ${navState === 'hidden' ? '-translate-y-24' : 'translate-y-0'}`}
        >
            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 flex justify-center">
                <div
                    className="pointer-events-auto group flex items-center h-14 rounded-full transition-all duration-500 ease-in-out overflow-hidden bg-slate-950/90 backdrop-blur-md border border-slate-800 shadow-lg shadow-slate-950/20"
                >
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center justify-center pl-2 pr-2 h-full z-10 cursor-pointer">
                        <div className="relative w-10 h-10 overflow-hidden rounded-full border border-slate-700/50">
                            <Image
                                src="/images/logo.png"
                                alt="AGZ Logo"
                                fill
                                sizes="40px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Links Area */}
                    <div
                        className={`
                            flex items-center whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out
                            ${navState !== 'full' ? 'max-w-0 opacity-0 group-hover:max-w-2xl group-hover:opacity-100 group-hover:px-4 group-hover:pr-6' : 'max-w-2xl opacity-100 px-4 pr-6'}
                        `}
                    >
                        <div className="flex items-center space-x-6 text-sm font-medium">
                            <a href="#main" className="text-slate-300 hover:text-white transition-colors">Main</a>
                            <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
                            <a href="#highlights" className="text-slate-300 hover:text-white transition-colors">Highlights</a>
                            <a
                                href="#contact"
                                className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
