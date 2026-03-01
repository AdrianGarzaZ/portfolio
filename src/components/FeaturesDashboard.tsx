'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Terminal, Activity, Focus } from 'lucide-react';

const telemetryLogs = [
    "INITIALIZING OPTICAL ARRAY...",
    "CALIBRATING SENSOR ALIGNMENT... [OK]",
    "LASER FREQUENCY LOCKED AT 193.4 THZ",
    "CAPTURING PHOTONIC SCATTER DATA...",
    "ANALYZING INTERFERENCE PATTERN...",
    "EXTRACTING FEATURE VECTORS...",
    "APPLYING NON-LINEAR TRANSFORM...",
    "DATA PIPELINE SYNC ACHIEVED",
    "AWAITING NEXT INPUT BURST..."
];

export default function FeaturesDashboard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    // Terminal state
    const [currentLogIndex, setCurrentLogIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setMounted(true);
        let charIndex = 0;
        let typingInterval: NodeJS.Timeout;

        const typeWriter = () => {
            const fullText = telemetryLogs[currentLogIndex];
            if (charIndex < fullText.length) {
                setDisplayedText(prev => prev + fullText.charAt(charIndex));
                charIndex++;
                typingInterval = setTimeout(typeWriter, Math.random() * 50 + 20); // Random typing speed
            } else {
                // Wait then move to next log
                setTimeout(() => {
                    setCurrentLogIndex(prev => (prev + 1) % telemetryLogs.length);
                    setDisplayedText('');
                }, 2000);
            }
        };

        typeWriter();

        return () => clearTimeout(typingInterval);
    }, [currentLogIndex]);


    useEffect(() => {
        if (!mounted) return;
        const ctx = gsap.context(() => {
            // Container fade in
            gsap.fromTo(containerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Continuous slow pulse on the grid lines for Card 3
            gsap.to('.grid-laser', {
                opacity: 0.8,
                duration: 1.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, [mounted]);

    return (
        <section ref={containerRef} className="py-24 px-4 max-w-7xl mx-auto relative z-10 w-full">

            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-white">The Analytical Dashboard</h2>
                <p className="text-slate-400 max-w-2xl font-sans text-lg">
                    Transforming physical theory into structured, automated data solutions.
                    Interact with the modules telemetry below.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Card 1: Optical Telemetry (Data Streamer) */}
                <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-blue-500/40">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/50 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                            <span className="text-xs font-jetbrains-mono text-slate-300 font-medium tracking-wider">OPTICAL_TELEMETRY.exe</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                            <span className="text-[10px] text-blue-400 font-jetbrains-mono uppercase">Live Link</span>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="p-6 h-64 bg-slate-950 flex flex-col justify-end font-jetbrains-mono text-xs sm:text-sm">
                        <div className="text-slate-600 mb-2 truncate">{">"} SYSTEM BOOT SEQUENCE INITIATED...</div>
                        <div className="text-slate-600 mb-2 truncate">{">"} ESTABLISHING SECURE CONNECTION...</div>
                        <div className="text-blue-400 font-medium break-all">
                            {"> "} {displayedText}<span className="inline-block w-[0.6em] h-[1em] bg-blue-400 ml-1 animate-pulse align-middle" />
                        </div>
                    </div>
                </div>

                {/* Card 2: Signal Processing (Waveform Visualizer) */}
                <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-emerald-500/40">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/50 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            <span className="text-xs font-jetbrains-mono text-slate-300 font-medium tracking-wider">SIGNAL_PROCESSING</span>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="p-6 h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
                        {/* Grid overlay */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zz4PHBhdGggZD0iTTAgMjBoMjBWMEgwem0xOS0xSDFWMWgxOHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />

                        {/* Abstract CSS Waveform */}
                        <div className="w-full h-full flex items-center justify-center gap-1 group-hover:gap-[6px] transition-all duration-500">
                            {mounted && [...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1.5 bg-gradient-to-t from-emerald-600 to-emerald-300 rounded-full transition-all duration-100 ease-in-out"
                                    style={{
                                        height: `${Math.max(10, Math.sin((i / 20) * Math.PI) * 100 * Math.random() + 20)}%`,
                                        opacity: Math.random() * 0.5 + 0.3
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card 3: System Architecture (Optics Grid) */}
                <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-indigo-500/40">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/50 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <Focus className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                            <span className="text-xs font-jetbrains-mono text-slate-300 font-medium tracking-wider">SYSTEM_ARCHITECTURE</span>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="p-6 h-64 bg-slate-950 relative flex items-center justify-center overflow-hidden">
                        {/* Abstract Lenses/Mirrors Layout */}
                        <div className="relative w-full h-full max-w-[200px]">
                            {/* Laser Source */}
                            <div className="absolute top-1/2 left-0 w-3 h-3 bg-indigo-500 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.8)] -translate-y-1/2 z-10" />

                            {/* Beam 1 */}
                            <div className="absolute top-1/2 left-3 w-1/2 h-0.5 bg-indigo-500/40 grid-laser origin-left -translate-y-1/2" />

                            {/* Splitter/Lens */}
                            <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-slate-600 rotate-45 -translate-y-1/2 -translate-x-1/2 backdrop-blur-sm border border-slate-500/30" />

                            {/* Beam 2 (Reflected up) */}
                            <div className="absolute top-1/4 left-1/2 w-1/2 h-0.5 bg-indigo-500/30 grid-laser origin-left -translate-y-1/2 -rotate-90" />

                            {/* Beam 3 (Transmitted through) */}
                            <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-emerald-500/40 grid-laser origin-left -translate-y-1/2" />

                            {/* Sensor Grid */}
                            <div className="absolute top-1/2 right-0 w-4 h-12 bg-slate-800 border border-slate-700 grid grid-cols-2 gap-0.5 p-0.5 -translate-y-1/2 z-10 group-hover:border-emerald-500/50 transition-colors">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className={`bg-slate-900 w-full h-full rounded-[1px] ${i === 4 ? 'group-hover:bg-emerald-400 transition-colors duration-200 delay-100' : ''}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
