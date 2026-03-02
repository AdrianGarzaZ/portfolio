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

const mapLocations = [
    { x: 18, y: 15 }, { x: 25, y: 35 }, { x: 65, y: 56 }, { x: 45, y: 65 },
    { x: 65, y: 75 }, { x: 90, y: 75 }, { x: 100, y: 65 }, { x: 110, y: 85 },
    { x: 120, y: 75 }, { x: 130, y: 88 }, { x: 125, y: 100 }, { x: 50, y: 50 }
];
const redDot = { x: 82, y: 46 }; // Monterrey area

export default function FeaturesDashboard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const terminalTextRef = useRef<HTMLSpanElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        let charIndex = 0;
        let currentLogIndex = 0;
        let typingInterval: NodeJS.Timeout;
        let displayedText = '';

        const typeWriter = () => {
            if (!terminalTextRef.current) return;
            const fullText = telemetryLogs[currentLogIndex];
            if (charIndex < fullText.length) {
                displayedText += fullText.charAt(charIndex);
                terminalTextRef.current.textContent = displayedText;
                charIndex++;
                typingInterval = setTimeout(typeWriter, Math.random() * 50 + 20); // Random typing speed
            } else {
                // Wait then move to next log
                setTimeout(() => {
                    currentLogIndex = (currentLogIndex + 1) % telemetryLogs.length;
                    displayedText = '';
                    charIndex = 0;
                    if (terminalTextRef.current) terminalTextRef.current.textContent = '';
                    typeWriter();
                }, 2000);
            }
        };

        typeWriter();

        return () => clearTimeout(typingInterval);
    }, []);


    useEffect(() => {
        if (!mounted) return;
        let running = true;

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

            // Gradually emerge interference rings
            gsap.to('.interference-ring', {
                borderColor: 'rgba(96, 165, 250, 0.4)',
                duration: 2,
                stagger: 0.3,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true
            });

        }, containerRef);

        // Data Pipelines Map Animation Logic
        let activeIndices = new Set();
        const spawnConnection = () => {
            if (!running) return;
            const available: number[] = [];
            for (let i = 0; i < mapLocations.length; i++) {
                if (!activeIndices.has(i)) available.push(i);
            }
            if (available.length === 0) return;

            const index = available[Math.floor(Math.random() * available.length)];
            activeIndices.add(index);

            const node = containerRef.current?.querySelector(`#data-node-${index}`);
            if (!node) return;

            const dot = node.querySelector('.node-dot');
            const line = node.querySelector('.node-line') as SVGPathElement;

            if (!dot || !line) return;

            const length = line.getTotalLength();
            gsap.set(line, { strokeDasharray: length, strokeDashoffset: length, opacity: 0 });
            gsap.set(dot, { scale: 0, opacity: 0 });

            const tl = gsap.timeline({
                onComplete: () => {
                    activeIndices.delete(index);
                }
            });

            // Bring dot in
            tl.to(dot, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" })
                // Draw the trajectory arc
                .to(line, { strokeDashoffset: 0, opacity: 0.8, duration: 1.5, ease: "power2.inOut" }, "-=0.2")
                // Hold for a moment to establish visual connection
                .to({}, { duration: 2.5 })
                // Fade out
                .to(line, { opacity: 0, duration: 1 })
                .to(dot, { scale: 0, opacity: 0, duration: 0.5 }, "<0.5");
        };

        const interval = setInterval(spawnConnection, 1200);

        // Initial bursts
        for (let i = 0; i < 4; i++) {
            setTimeout(spawnConnection, i * 600);
        }

        return () => {
            running = false;
            clearInterval(interval);
            ctx.revert();
        };
    }, [mounted]);

    return (
        <section ref={containerRef} className="py-24 px-4 max-w-7xl mx-auto relative z-10 w-full">

            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-white">Key Competencies</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Card 1: Optical Telemetry (Data Streamer) */}
                <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-blue-500/40">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/50 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                            <span className="text-xs font-jetbrains-mono text-slate-300 font-medium tracking-wider">SIMULATION AND ML</span>
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
                        <div className="text-blue-400 font-medium break-all mt-1">
                            {"> "} <span ref={terminalTextRef}></span><span className="inline-block w-[0.6em] h-[1em] bg-blue-400 ml-1 animate-pulse align-middle" />
                        </div>
                    </div>
                </div>

                {/* Card 2: Data Pipelines (Isometric Mexico Map) */}
                <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-emerald-500/40">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/50 px-4 py-3 z-20 relative">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            <span className="text-xs font-jetbrains-mono text-slate-300 font-medium tracking-wider">DATA PIPELINES</span>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="p-6 h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
                        {/* Grid overlay */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

                        {/* Isometric Map Animation Container */}
                        <div className="absolute inset-0 flex items-center justify-center perspective-[1000px] z-10 w-full h-full p-2 pointer-events-none">
                            <svg
                                viewBox="0 0 150 120"
                                className="w-full h-auto max-w-[280px] drop-shadow-2xl transition-transform duration-700 ease-out 
                                           [transform:rotateX(55deg)_rotateZ(-40deg)] group-hover:[transform:rotateX(45deg)_rotateZ(-25deg)_scale(1.05)]"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Abstract Mexico Polygon */}
                                <path
                                    d="M 15 15 L 22 55 L 33 25 L 48 30 L 70 45 L 90 40 L 95 70 L 125 70 L 140 85 L 135 102 L 115 95 L 105 110 L 85 95 L 60 75 L 40 55 L 25 35 Z"
                                    fill="rgba(30, 41, 59, 0.5)"
                                    stroke="rgba(71, 85, 105, 0.8)"
                                    strokeWidth="0.5"
                                    vectorEffect="non-scaling-stroke"
                                    className="group-hover:stroke-slate-400 transition-colors duration-500"
                                />

                                {/* Base connection nodes (empty placeholders so they mount initially) */}
                                {mapLocations.map((loc, i) => {
                                    const midX = (loc.x + redDot.x) / 2;
                                    const midY = (loc.y + redDot.y) / 2;
                                    const dx = loc.x - redDot.x;
                                    const dy = loc.y - redDot.y;
                                    const dist = Math.sqrt(dx * dx + dy * dy);

                                    // 3D Arc math: By pulling the control point negatively in both X and Y simultaneously, 
                                    // it creates a visually vertical curve rising off the tilted map.
                                    const zHeight = dist * 0.45;
                                    const cx = midX - zHeight;
                                    const cy = midY - zHeight;

                                    const pathD = `M ${loc.x} ${loc.y} Q ${cx} ${cy} ${redDot.x} ${redDot.y}`;

                                    return (
                                        <g key={i} id={`data-node-${i}`} className="data-node">
                                            <path
                                                className="node-line drop-shadow-[0_0_2px_#10b981]"
                                                d={pathD}
                                                fill="none"
                                                stroke="#10b981"
                                                strokeWidth="0.75"
                                                strokeLinecap="round"
                                                opacity="0"
                                            />
                                            <circle
                                                className="node-dot"
                                                cx={loc.x}
                                                cy={loc.y}
                                                r="1.2"
                                                fill="#10b981"
                                                opacity="0"
                                                style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                                            />
                                        </g>
                                    );
                                })}

                                {/* Root Hub (Monterrey area) */}
                                <circle
                                    cx={redDot.x}
                                    cy={redDot.y}
                                    r="2.5"
                                    fill="rgba(239, 68, 68, 0.4)"
                                    className="animate-ping"
                                    style={{ transformOrigin: `${redDot.x}px ${redDot.y}px` }}
                                />
                                <circle
                                    cx={redDot.x}
                                    cy={redDot.y}
                                    r="1.5"
                                    fill="#ef4444"
                                    className="drop-shadow-[0_0_4px_#ef4444]"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Card 3: System Architecture (Optics Grid) */}
                <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-indigo-500/40">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/50 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <Focus className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                            <span className="text-xs font-jetbrains-mono text-slate-300 font-medium tracking-wider">PHYSICAL OPTICS</span>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="p-6 h-64 bg-slate-950 relative flex items-center justify-center overflow-hidden">
                        {/* Abstract Lenses/Mirrors Layout */}
                        <div className="relative w-full h-full max-w-[200px]">
                            {/* Laser Source */}
                            <div className="absolute top-1/2 left-0 w-3 h-3 bg-indigo-500 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.8)] -translate-y-1/2 z-10" />

                            {/* Beam 1 */}
                            <div className="absolute top-1/2 left-3 w-[calc(50%-12px)] h-0.5 bg-indigo-500/40 grid-laser origin-left -translate-y-1/2" />

                            {/* Splitter/Lens */}
                            <div className="absolute top-1/2 left-1/2 w-1 h-14 bg-slate-400/80 rotate-45 -translate-y-1/2 -translate-x-1/2 backdrop-blur-sm shadow-[0_0_10px_rgba(148,163,184,0.5)] z-20" />

                            {/* Beam 2 (Reflected up) starts from center of splitter */}
                            <div className="absolute bottom-1/2 left-1/2 w-0.5 h-[calc(50%-10px)] bg-indigo-500/30 grid-laser origin-bottom -translate-x-1/2" />

                            {/* Beam 3 (Transmitted through) */}
                            <div className="absolute top-1/2 left-1/2 w-[calc(50%+20px)] h-0.5 bg-blue-500/40 grid-laser origin-left -translate-y-1/2" />

                            {/* Observation Plane: Ring Interference Pattern */}
                            <div className="absolute top-1/2 right-[-24px] w-12 h-12 bg-slate-900/80 border border-slate-700 rounded flex items-center justify-center -translate-y-1/2 z-10 overflow-hidden shadow-[0_0_15px_rgba(15,23,42,0.8)] group-hover:border-blue-500/40 transition-colors">
                                {mounted && [...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute rounded-full border-[1.5px] border-transparent interference-ring"
                                        style={{
                                            width: `${(i + 1) * 24}%`,
                                            height: `${(i + 1) * 24}%`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
